<template>
  <div class="checkout-page">
    <div v-if="order" class="content">
      <div>
        <h3>收货人信息</h3>
        <div class="receiver-info border">
          <span data-info="name">{{ user.name }}</span>
          <span data-info="address">{{ address }}</span>
          <span data-info="phone">{{ user.phone }}</span>
        </div>
      </div>
      <div>
        <h3>确认商品信息</h3>
        <el-table :data="order.items">
          <el-table-column width="80" align="center">
            <template #default="scope">
              <el-image
                :src="scope.row.book.cover"
                style="width: 80px; height: 80px"
                fit="contain"
              />
            </template>
          </el-table-column>
          <el-table-column width="480" label="商品信息">
            <template #default="scope">
              <el-link>{{ scope.row.book.name }}</el-link>
            </template>
          </el-table-column>
          <el-table-column width="120" label="单价（元）" align="center">
            <template #default="scope"> ￥{{ scope.row.book.price.toFixed(2) }} </template>
          </el-table-column>
          <el-table-column width="120" label="数量" align="center">
            <template #default="scope"> {{ scope.row.count }} </template>
          </el-table-column>
          <el-table-column width="120" label="小计（元）" align="center">
            <template #default="scope">
              <span class="red"> {{ scope.row.price }} </span>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="border right">
        <div>
          <div>
            <span class="red">{{ order.items.length }}</span>
            件商品，总商品金额：￥{{ order.payment }}
          </div>
        </div>
      </div>
      <div class="border" style="background: #f7f7f7">
        <div style="text-align: right">
          <span>应付款：</span>
          <span class="payment red">￥{{ order.payment }}</span>
        </div>
        <div style="text-align: right">
          <span>寄送至：{{ address }}</span>
          <span>收件人：{{ user.name }}</span>
        </div>
      </div>
      <div style="text-align: right">
        <el-button color="#d00" style="width: 80px" @click="onSubmitOrder">提交订单</el-button>
      </div>
    </div>
    <div v-else>您没有未支付的订单！</div>
  </div>
</template>

<script setup lang="ts">
import { Order, getOrder, submitOrder } from "@/api/order";
import { ElMessage } from "element-plus";

const $router = useRouter();
const $store = useStore();

const user = computed(() => $store.state.user);
const address = ref(user.value.address);

const order = ref<Order>();

onMounted(async () => {
  order.value = await getOrder();
  console.log(order.value);
});

const onSubmitOrder = async () => {
  const result = await submitOrder();
  ElMessage.success(result.message);
  setTimeout(() => $router.push({ name: "home" }), 2000);
};
</script>

<style lang="scss">
.checkout-page {
  padding: 20px;
  font-size: small;
  .content {
    > * {
      margin-bottom: 1em;
    }
    span + span {
      margin-left: 2em;
    }
  }
  h3 {
    font-weight: normal;
    margin: 0.5em 0;
  }
  .border {
    border: #999 1px solid;
    padding: 10px;
    border-collapse: collapse;
  }
  .right {
    display: flex;
    > * {
      margin-left: auto;
    }
  }
  .receiver-info {
  }
  .payment {
    font-size: 18px;
  }
  .red {
    color: #d00;
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
