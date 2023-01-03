<template>
  <el-card>
    <div class="goods-list">
      <template v-for="item in goodsList" :key="item.id">
        <div class="goods-item">
          <img :src="item.image" />
          <h1 class="title">{{ item.name }}</h1>
          <p class="info">
            <span class="price">￥{{ item.price }}</span>
          </p>
        </div>
      </template>
    </div>
  </el-card>
</template>

<script setup lang="ts">
const goodsList = reactive([
  {
    image:
      "https://img.moegirl.org.cn/common/thumb/0/0a/Boochi_the_Rock.jpg/420px-Boochi_the_Rock.jpg",
    name: "book1",
    price: 233,
  },
  {
    image:
      "https://img.moegirl.org.cn/common/thumb/0/0a/Boochi_the_Rock.jpg/420px-Boochi_the_Rock.jpg",
    name: "book1",
    price: 233,
  },
  {
    image:
      "https://img.moegirl.org.cn/common/thumb/0/0a/Boochi_the_Rock.jpg/420px-Boochi_the_Rock.jpg",
    name: "book1",
    price: 233,
  },
  {
    image:
      "https://img.moegirl.org.cn/common/thumb/0/0a/Boochi_the_Rock.jpg/420px-Boochi_the_Rock.jpg",
    name: "book1",
    price: 233,
  },
  {
    image:
      "https://img.moegirl.org.cn/common/thumb/0/0a/Boochi_the_Rock.jpg/420px-Boochi_the_Rock.jpg",
    name: "book1",
    price: 233,
  },
]);
</script>

<style lang="scss" scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  padding-left: 10px;
  .goods-item {
    // width: calc(calc(100% / 2) - 10px);
    margin: 10px 10px 0 0;
    background-color:beige;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 10px;
    padding: 10px;
    img {
      width: 100%;
      max-width: 160px;
    }
    .title {
      font-size: 14px;
      color: #333;
      margin: 10px 0;
      text-align: center;
    }
    .info {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0;
      .price {
        color: red;
        font-weight: bold;
        font-size: 16px;
      }
      .sell {
        font-size: 13px;
      }
    }
  }
}
</style>
