<template>
  <div>
    <div class="tools-box">
      <div style="float: right">
        <el-switch v-model="listMode" active-text="列表" inactive-text="大图" />
      </div>
    </div>
    <div class="goods-list">
      <template v-for="item in goodsList" :key="item.bid">
        <div class="goods-item">
          <router-link :to="{ name: 'bookdetail', params: { bid: item.bid } }">
            <img class="pic" :src="item.cover" />
          </router-link>
          <p class="price">
            <span class="price-n"> ￥{{ item.price.toFixed(2) }} </span>
            <span class="price-r">
              定价：
              <span>￥{{ item.originalPrice.toFixed(2) }}</span>
            </span>
            <span class="price-s">({{ (item.price / item.originalPrice).toFixed(2) }}折)</span>
          </p>
          <p class="name">
            <el-link @click="$router.push({ name: 'bookdetail', params: { bid: item.bid } })">
              {{ item.name }}
            </el-link>
          </p>
          <p class="search-hot-word">{{ item.desc }}</p>
          <div class="placer"></div>
          <div class="bottom">
            <div class="shop-button">
              <a @click="addToCart(item.bid)" href="javascript:void(0);">
                <el-icon><ShoppingCart /></el-icon> 加入购物车
              </a>
              <a @click="addToFavorites(item.bid)" href="javascript:void(0);">
                <el-icon><Star /></el-icon> 收藏
              </a>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BookInfo, getBookList } from "@/api/book";

const $router = useRouter();

const listMode = ref(false); // false = grid, true = list
const goodsList = ref<BookInfo[]>([]);

onMounted(() => {
  goodsList.value = getBookList(1, {});
});

const addToCart = (bid: number) => {
  console.log(bid);
};
const addToFavorites = (bid: number) => {
  console.log(bid);
};
</script>

<style lang="scss">
.tools-box {
  background-color:  #ecf5ff;
  font-size: x-small;
  height: 30px;
  padding: 10px;
}

.goods-list {
  display: flex;
  flex-wrap: wrap;
  padding-left: 10px;
  font-size: x-small;
  .goods-item {
    position: relative;
    margin: 10px 10px 0 0;
    display: flex;
    flex-direction: column;
    height: 300px;
    width: 200px;
    padding: 5px;
    border: 1px solid #ecebeb;
    &:hover {
      border: 2px solid #79bbff;
      padding: 4px;
    }
    .pic {
      width: 200px;
      height: 200px;
    }
    .price {
      color: #878787;
      font-size: x-small;
      height: 20px;
      line-height: 20px;
      .price-n {
        font-size: 15px;
        font-weight: bold;
        margin-right: 0.2em;
        color: #fa5000;
      }
      .price-r {
        span {
          text-decoration: line-through;
        }
      }
      .price-s {
        margin-left: 0.5em;
      }
    }
    .name {
      height: 20px;
      line-height: 20px;
      text-align: left;
      overflow: hidden;
      .el-link__inner {
        font-size: 12px;
      }
    }
    .search-hot-word {
      color: #337ecc;
      height: 20px;
      line-height: 20px;
      overflow: hidden;
    }
    .placer {
      height: 40px;
    }
    .bottom {
      position: relative;
    }
    .shop-button {
      position: absolute;
      bottom: -4px;
      left: -4px;
      width: 210px;
      a {
        height: 30px;
        line-height: 30px;
        display: block;
        border-style: solid;
        border-color: #ecebeb;
        text-align: center;
        float: left;
        text-decoration: none;
        &:hover {
          background: #ecf5ff;
          transition: 0.1s;
        }
        &:nth-child(1) {
          width: 131px;
          border-width: 1px 1px 0 0;
        }
        &:nth-child(2) {
          width: 75px;
          border-width: 1px 0 0 0;
        }
        .el-icon {
          font-size: 15px;
          vertical-align: middle;
        }
      }
    }
  }
}
</style>
