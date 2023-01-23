<template>
  <div class="favorites-wrap">
    <div class="favorites">
      <el-table :data="tableData">
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
        <el-table-column width="600" label="商品信息">
          <template #default="scope">
            <el-link>{{ scope.row.name }}</el-link>
          </template>
        </el-table-column>
        <el-table-column width="120" label="单价（元）" align="center">
          <template #default="scope"> ￥{{ scope.row.price.toFixed(2) }} </template>
        </el-table-column>
        <el-table-column width="100" label="操作" align="center">
          <template #default="scope">
            <el-link @click="onRemoveFromFavorites(scope.row.bid)">删除</el-link>
            <el-link @click="onMoveToCart(scope.row.bid)">移入购物车</el-link>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="favorites-total">
      <div class="left">
        <el-checkbox v-model="checkAll" label="全选" size="small" @change="onCheckAll" />
        <el-link class="fn-batch-remove" @click="onRemoveFromFavorites()">批量删除</el-link>
        <el-link class="fn-batch-move" @click="onMoveToCart()">批量移入购物车</el-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getFavorites, removeFromFavorites, moveFavoriteToCart } from "@/api/favorites";
import { ElMessage } from "element-plus";
import _ from "lodash";
import "@/utils/array-extensions";

const checkAll = ref(true);

interface FavoritesTableItem {
  bid: int;
  checked: boolean;
  name: string;
  cover: string;
  price: float;
}

const tableData = ref<FavoritesTableItem[]>([]);

onMounted(async () => {
  const data = await getFavorites();
  tableData.value = data.map(t => ({
    bid: t.book.bid,
    checked: true,
    name: t.book.name,
    cover: t.book.cover,
    price: t.book.price,
  }));
});

const checkedBids = computed(() => tableData.value.filter(t => t.checked).map(t => t.bid));

const onCheckAll = (value: any) => {
  tableData.value.forEach(t => (t.checked = value));
};

const smartRemove = (bid?: int) => {
  if (bid) {
    tableData.value.removeAt(tableData.value.findIndex(t => t.bid == bid));
  } else {
    tableData.value = tableData.value.filter(t => !t.checked);
  }
};

const onRemoveFromFavorites = async (bid?: int) => {
  const result = await removeFromFavorites(bid ? [bid] : checkedBids.value);
  ElMessage.success(result.message);
  smartRemove(bid);
};

const onMoveToCart = async (bid?: int) => {
  const result = await moveFavoriteToCart(bid ? [bid] : checkedBids.value);
  ElMessage.success(result.message);
  smartRemove(bid);
};
</script>

<style lang="scss">
.favorites-wrap {
  font-size: 12px;
  margin-top: 20px;
  .favorites {
    th.el-table_1_column_1 .el-checkbox {
      margin-left: -8px;
    }
    .blue {
      color: #337ecc;
    }
  }
  .favorites-total {
    color: #969696;
    background-color: #ecf5ff;
    padding: 12px;
    > * {
      display: inline-block;
      > * {
        vertical-align: middle;
      }
    }
    .left {
      margin-left: 1em;
      > * {
        margin-right: 2em;
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
