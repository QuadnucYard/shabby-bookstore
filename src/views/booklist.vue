<template>
  <div>
    <div class="tools-box">
      <div style="float: right">
        <el-switch v-model="listMode" active-text="列表" inactive-text="大图" />
      </div>
    </div>
    <div class="goods-list">
      <template v-for="item in goodsList.items" :key="item.bid">
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
            <el-link
              :title="item.name"
              @click="$router.push({ name: 'bookdetail', params: { bid: item.bid } })"
            >
              {{ item.name }}
            </el-link>
          </p>
          <p class="search-hot-word" :title="item.desc">{{ item.desc }}</p>
          <p class="star">
            <el-rate v-model="item.rating" disabled />
            <span>{{ item.numComments }}条评论</span>
          </p>
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
    <div class="pagination">
      <el-pagination
        v-model:current-page="goodsList.page"
        v-model:page-size="goodsList.pageSize"
        :page-sizes="[20, 50, 100, 200]"
        small
        background
        layout="->, total, sizes, prev, pager, next, jumper, ->"
        :total="goodsList.total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { QueryOptions, PagedBookList, getBookList } from "@/api/book";
import _ from "lodash";
import { LocationQuery, onBeforeRouteUpdate } from "vue-router";

const $route = useRoute();
const $router = useRouter();

const queryOptions = reactive<QueryOptions>({});
const listMode = ref(false); // false = grid, true = list
const goodsList = ref<PagedBookList>({
  page: 0,
  pages: 0,
  total: 0,
  pageSize: 0,
  items: [],
});

const setupList = async (query: LocationQuery) => {
  const page = query.page ? Number.parseInt(query.page as string) : 1;
  const pageSize = Number.parseInt((query.pageSize as string) ?? "20");
  Object.assign(queryOptions, {
    keyword: query.keyword ?? "",
    name: query.name ?? "",
    author: query.author ?? "",
    publisher: query.publisher ?? "",
    desc: query.desc ?? "",
  });
  console.log(page, pageSize, queryOptions);
  goodsList.value = await getBookList(page, pageSize, queryOptions);
};

onMounted(async () => await setupList($route.query));
onBeforeRouteUpdate(async to => await setupList(to.query));

const refreshList = async (page: number, pageSize: number, options: QueryOptions) => {
  const query = _.pickBy({ page, pageSize, ...options });
  $router.push({ name: $route.name!, query });
};

const addToCart = (bid: number) => {
  console.log(bid);
};
const addToFavorites = (bid: number) => {
  console.log(bid);
};

const handleSizeChange = async (value: number) => await refreshList(1, value, queryOptions);
const handleCurrentChange = async (value: number) =>
  await refreshList(value, goodsList.value.pageSize, queryOptions);
</script>

<style lang="scss">
.tools-box {
  background-color: #ecf5ff;
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
    height: 320px;
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
      object-fit: contain;
    }
    .price {
      color: #878787;
      font-size: x-small;
      height: 20px;
      line-height: 20px;
      overflow: hidden;
      word-break: break-all;
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
    .star {
      height: 20px;
      span {
        margin-left: 1em;
      }
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

.pagination {
  margin: 1em;
}
</style>
