<template>
  <div class="cart-wrap">
    <div class="cart">
      <div class="shopping-list">
        <el-table :data="tableData" v-loading="loading">
          <el-table-column width="60" align="center">
            <template #header>
              <el-checkbox v-model="checkAll" label="全选" size="small" @change="onCheckAll" />
            </template>
            <template #default="scope">
              <el-checkbox v-model="scope.row.checked" />
            </template>
          </el-table-column>
          <el-table-column width="80" align="center">
            <template #default="scope">
              <el-image :src="scope.row.cover" style="width: 80px; height: 80px" fit="contain" />
            </template>
          </el-table-column>
          <el-table-column width="380" label="商品信息">
            <template #default="scope">
              <el-link>{{ scope.row.name }}</el-link>
            </template>
          </el-table-column>
          <el-table-column width="120" label="单价（元）" align="center">
            <template #default="scope"> ￥{{ scope.row.price.toFixed(2) }} </template>
          </el-table-column>
          <el-table-column width="120" label="数量" align="center">
            <template #default="scope">
              <el-input-number
                v-model="scope.row.count"
                :min="1"
                :max="scope.row.maxCount"
                size="small"
                @change="onChangeCount(scope.row.bid, scope.row.count)"
              />
            </template>
          </el-table-column>
          <el-table-column width="120" label="金额（元）" align="center">
            <template #default="scope">
              <span class="blue">
                {{ (scope.row.checked ? scope.row.count * scope.row.price : 0).toFixed(2) }}
              </span>
            </template>
          </el-table-column>
          <el-table-column width="80" label="操作" align="center">
            <template #default="scope">
              <el-link @click="onRemoveFromCart(scope.row.bid)">删除</el-link>
              <el-link @click="onMoveToFavorites(scope.row.bid)">移入收藏</el-link>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <div class="shopping-total">
      <div class="left">
        <el-checkbox v-model="checkAll" label="全选" size="small" @change="onCheckAll" />
        <el-link class="fn-batch-remove" @click="onRemoveFromCart()">批量删除</el-link>
        <el-link class="fn-batch-move" @click="onMoveToFavorites()">批量移入收藏</el-link>
      </div>
      <div class="right">
        <span>总计(不含运费)：</span>
        <span class="price">￥{{ totalPrice.toFixed(2) }}</span>
        <el-button type="primary" class="fn-checkout" color="#E65100" @click="onCreateOrder"
          >结算</el-button
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  getShoppingCart,
  removeFromCart,
  createOrder,
  moveToFavorites,
  updateCartItem,
} from "@/api/order";
import { ElMessage } from "element-plus";
import _ from "lodash";
import "@/utils/array-extensions";

const $router = useRouter();

const loading = ref(true);

const checkAll = ref(true);

interface ShoppingCartTableItem {
  bid: int;
  checked: boolean;
  name: string;
  cover: string;
  price: float;
  count: int;
  maxCount: int;
}

const tableData = ref<ShoppingCartTableItem[]>([]);

const totalPrice = computed(() =>
  _.sumBy(tableData.value, t => (t.checked ? t.price * t.count : 0))
);

onMounted(async () => {
  const data = await getShoppingCart();
  tableData.value = data.map(t => ({
    bid: t.book.bid,
    checked: true,
    name: t.book.name,
    cover: t.book.cover,
    price: t.book.price,
    count: t.count,
    maxCount: t.book.quantity,
  }));
  loading.value = false;
});

const checkedBids = computed(() => tableData.value.filter(t => t.checked).map(t => t.bid));

const onCheckAll = (value: any) => {
  tableData.value.forEach(t => (t.checked = value));
};

const smartRemove = (bid?: int) => {
  console.log(
    "smartRemove",
    bid,
    tableData.value.findIndex(t => t.bid == bid)
  );
  if (bid) {
    tableData.value.removeAt(tableData.value.findIndex(t => t.bid == bid));
  } else {
    tableData.value = tableData.value.filter(t => !t.checked);
  }
};

const onRemoveFromCart = async (bid?: int) => {
  const result = await removeFromCart(bid ?? checkedBids.value);
  ElMessage.success(result.message);
  smartRemove(bid);
};

const onMoveToFavorites = async (bid?: int) => {
  await moveToFavorites(bid ?? checkedBids.value);
  ElMessage.success("成功移入收藏夹");
  smartRemove(bid);
};

const onChangeCount = async (bid: int, count: int) => {
  const result = await updateCartItem(bid, count);
  if (result.code != 200) {
    ElMessage.warning(result.message);
    return;
  }
};

const onCreateOrder = async () => {
  const result = await createOrder(checkedBids.value);
  if (result.code != 200) {
    ElMessage.warning(result.message);
    return;
  }
  tableData.value = tableData.value.filter(t => !t.checked);
  ElMessage.success(result.message);
  setTimeout(() => $router.push({ name: "checkout" }), 1000);
};
</script>

<style lang="scss">
.cart-wrap {
  font-size: 12px;
  margin-top: 20px;
  .cart {
    .shopping-list {
      th.el-table_1_column_1 .el-checkbox {
        margin-left: -8px;
      }
      .blue {
        color: #337ecc;
      }
      .el-input-number {
        width: 80px;
      }
    }
  }
  .shopping-total {
    color: #969696;
    background-color: #ecf5ff;
    padding: 12px;
    display: flex;
    justify-content: space-between;
    > * {
      display: inline-block;
      > * {
        vertical-align: middle;
      }
    }
    .left {
      margin-left: 1em;
      .fn-batch-remove,
      .fn-batch-move {
        margin-left: 2em;
      }
    }
    .right {
      .price {
        font-size: 18px;
        color: #ff2832;
        vertical-align: sub;
      }
      .fn-checkout {
        margin-left: 2em;
        width: 80px;
      }
    }
  }
  .el-table {
    font-size: inherit;
    line-height: inherit;
    .cell {
      line-height: inherit;
    }
  }
  .el-link {
    font-size: inherit;
    line-height: inherit;
  }
}
</style>
