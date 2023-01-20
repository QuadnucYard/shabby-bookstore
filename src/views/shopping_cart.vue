<template>
  <div class="cart-wrap">
    <div class="cart">
      <div class="shopping-list">
        <el-table :data="tableData">
          <el-table-column width="50" align="center">
            <template #header>
              <el-checkbox v-model="checkAll" label="全选" size="small" />
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
          <el-table-column width="320" label="商品信息">
            <template #default="scope">
              <el-link>{{ scope.row.name }}</el-link>
            </template>
          </el-table-column>
          <el-table-column width="130" label="单价（元）" align="center">
            <template #default="scope"> ￥{{ scope.row.price.toFixed(2) }} </template>
          </el-table-column>
          <el-table-column width="130" label="数量" align="center">
            <template #default="scope">
              <el-input-number v-model="scope.row.count" :min="1" size="small" />
            </template>
          </el-table-column>
          <el-table-column width="130" label="金额（元）" align="center">
            <template #default="scope">
              <span class="blue">
                {{ (scope.row.checked ? scope.row.count * scope.row.price : 0).toFixed(2) }}
              </span>
            </template>
          </el-table-column>
          <el-table-column width="70" label="操作" align="center">
            <template #default="scope">
              <el-link> 删除</el-link>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <div class="shopping-total">
      <div class="left">
        <el-checkbox v-model="checkAll" label="全选" size="small" />
        <el-link class="fn-batch-remove">批量删除</el-link>
      </div>
      <div class="right">
        <span>总计(不含运费)：</span>
        <span class="price">￥{{ totalPrice.toFixed(2) }}</span>
        <el-button type="primary" class="fn-checkout">结算</el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import _ from "lodash";
const checkAll = ref(false);

const tableData = ref([
  {
    checked: false,
    name: "东野圭吾：透明的螺旋（东野圭吾新书，《嫌疑人X的献身》系列新作！你，准备好逃出悲剧的循环了吗？）",
    cover: "http://img3x8.ddimg.cn/42/34/29389578-1_m_22.jpg",
    price: 3,
    count: 2,
  },
  {
    checked: true,
    name: "东野圭吾：透明的螺旋（东野圭吾新书，《嫌疑人X的献身》系列新作！你，准备好逃出悲剧的循环了吗？）",
    cover: "http://img3x8.ddimg.cn/42/34/29389578-1_m_22.jpg",
    price: 3,
    count: 3,
  },
]);

const totalPrice = computed(() =>
  _.sumBy(tableData.value, t => (t.checked ? t.price * t.count : 0))
);
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
      .fn-batch-remove {
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
