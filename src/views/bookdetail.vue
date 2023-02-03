<template>
  <div>
    <SearchBox />
    <div class="book-intro" v-loading="loadingB">
      <el-row :gutter="20" v-if="book">
        <el-col :span="8">
          <div class="preview-wrap">
            <el-image :src="book.cover" :alt="book.name" fit="contain" />
          </div>
        </el-col>
        <el-col :span="16">
          <div class="item-info-wrap">
            <div class="title">{{ book.name }}</div>
            <v-md-preview class="desc" :text="book.desc" />
            <div class="info">
              <div>
                <span class="t1">作者：{{ book.author }}</span>
                <span class="t1">出版社：{{ book.publisher }}</span>
                <span class="t1">出版日期：{{ book.publishDate }}</span>
              </div>
              <div>
                <el-rate class="t1" v-model="book.rating" disabled />
                <span class="t1">{{ book.numComments }}条评论</span>
              </div>
            </div>
            <div class="price-info-wrap">
              <div>
                <div class="dt">东 南 价</div>
                <div class="dd">
                  <span class="price">
                    <span> ￥</span>
                    <span> {{ book.price.toFixed(2) }}</span>
                    <span> ({{ (book.price / book.originalPrice).toFixed(2) }}折)</span>
                  </span>
                  <span class="price-m">
                    定价
                    <span>￥{{ book.originalPrice.toFixed(2) }}</span>
                  </span>
                </div>
              </div>
              <div>
                <div class="dt">促　　销</div>
                <div class="dd">
                  <div class="prom-item">
                    <span class="hl_red_bg">满减</span>
                    <span class="hl_red">每满99元，可减100元现金，最多可减9元</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="buy-box">
              <span data-src="quantity">剩余数量：{{ book.quantity }}</span>
              <el-input-number v-model="buyCount" :min="1" :max="book.quantity" controls-position="right" />
              <el-button
                type="primary"
                :icon="ShoppingCart"
                color="#E53935"
                @click="addToCartHandler"
                :disabled="book.quantity <= 0"
              >
                加入购物车
              </el-button>
              <el-button
                type="primary"
                :icon="StarFilled"
                color="#D81B60"
                @click="addToFavoritesHandler"
              >
                加入收藏
              </el-button>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="detail" v-if="book">
      <div class="mt"><h3>商品详情</h3></div>
      <el-descriptions>
        <el-descriptions-item v-for="[k, v] of Object.entries(book.keys)" :label="k">
          {{ v }}
        </el-descriptions-item>
      </el-descriptions>
    </div>
    <div class="comment">
      <div class="mt"><h3>商品评价</h3></div>
      <div class="comments-list" v-loading="loadingC">
        <template v-for="item in comments">
          <div class="comment-item">
            <div class="user-column">
              <div class="user-info">
                <el-avatar :size="30" :icon="UserFilled" style="vertical-align: center" />
                {{ item.uname }}
              </div>
            </div>
            <div class="comment-column">
              <el-rate v-model="item.rating" disabled />
              <v-md-preview :text="item.content" />
              <div class="comment-message">
                <div class="time">
                  {{ item.post_time }}
                </div>
                <div class="comment-op">
                  <el-link :underline="false" class="op-nice" @click="report">
                    <el-icon><Star /></el-icon>
                    {{ item.likes }}
                  </el-link>
                  <el-link :underline="false" class="op-report" @click="report">举报</el-link>
                </div>
              </div>
            </div>
          </div>
        </template>
        <div v-if="comments.length == 0" class="prompt">
          评论区空空如也，等待着您购买后的反馈呢！
        </div>
      </div>
      <div v-if="user" class="post">
        <h3 style="margin-bottom: 1em">发布评论</h3>
        <el-rate v-model="myComment.star" />
        <v-md-editor v-model="myComment.text" height="200px" />
        <el-button type="primary" color="#43A047" @click="onPostComment">发布！</el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { UserFilled, ShoppingCart, StarFilled } from "@element-plus/icons-vue";
import { BookInfo, Comment, getBook, getComments, postComment } from "@/api/book";
import { addToCart } from "@/api/order";
import { ElMessage } from "element-plus";
import { addToFavorites } from "@/api/favorites";

const $route = useRoute();
const $router = useRouter();
const $store = useStore();

const book = ref<BookInfo | null>(null);

const buyCount = ref(1);

const comments = ref<Comment[]>([]);

const user = $store.state.user;
const myComment = reactive({
  text: "",
  star: 5,
});

const loadingB = ref(true);
const loadingC = ref(true);

const print = console.log;

const report = () => {
  print("report");
};

const bid = computed(() => Number.parseInt($route.params.bid as string));

onMounted(async () => {
  book.value = await getBook(bid.value);
  loadingB.value = false;
  comments.value = await getComments(bid.value);
  loadingC.value = false;
});

const addToCartHandler = async () => {
  const result = await addToCart(bid.value, buyCount.value);
  ElMessage.success(result.message);
  $router.push({ name: "shopping_cart" });
};

const addToFavoritesHandler = async () => {
  const result = await addToFavorites(bid.value);
  ElMessage.success(result.message);
};

const onPostComment = async () => {
  const result = await postComment(bid.value, myComment.star, myComment.text);
  ElMessage.success(result.message);
  comments.value.push(result.data);
  myComment.star = 5;
  myComment.text = "";
};
</script>

<style lang="scss">
.book-intro {
  margin-top: 10px;
  margin-bottom: 10px;
  .preview-wrap {
    .el-image {
      width: 90%;
    }
  }
  .item-info-wrap {
    .title {
      font-size: larger;
      font-weight: bold;
      color: #323232;
    }
    .github-markdown-body {
      padding: 4px;
    }
    .info {
      color: #444;
      border-top: 1px solid #f5f5f5;
      font-size: small;
      .t1 {
        margin-right: 2em;
      }
    }
    .price-info-wrap {
      background-color: #f7f8fc;
      color: #999;
      font-size: small;
      vertical-align: middle;
      padding: 10px 0 10px 0;
      > div {
        margin-bottom: 10px;
      }
      .dt {
        float: left;
        padding-left: 10px;
        text-align: center;
        width: 60px;
        font-family: monospace;
      }
      .dd {
        margin-left: 75px;
        vertical-align: middle;
      }
      .price {
        color: #e4393c;
        line-height: 18px;
        vertical-align: middle;
        span:nth-child(1) {
          font-size: large;
        }
        span:nth-child(2) {
          font-size: x-large;
        }
        span:nth-child(3) {
          margin-left: 0.5em;
        }
      }
      .price-m {
        margin-left: 2em;
        span {
          text-decoration: line-through;
        }
      }
      .prom-item {
        vertical-align: middle;
        .hl_red_bg {
          color: #df3033;
          background: 0 0;
          border: 1px solid #df3033;
          padding: 2px 3px;
          margin-right: 5px;
          display: inline-block;
          line-height: 16px;
        }
        .hl_red {
          color: #666;
          line-height: 18px;
        }
      }
    }
    .buy-box {
      margin-top: 10px;
      [data-src="quantity"] {
        font-size: 12px;
        color: #666;
        margin-right: 20px;
      }
      .el-input-number {
        width: 80px;
        margin-right: 20px;
      }
      .el-button {
        width: 120px;
      }
    }
  }
}

.mt {
  padding: 10px;
  background-color: #f7f7f7;
  border: 1px solid #eee;
}

.main h3 {
  font-size: 14px;
}

.detail,
.comment {
  margin: 50px;
  margin-bottom: 0;
}

.detail {
  .el-descriptions {
    margin: 20px;
  }
}

.comment {
  margin-bottom: 100px;
  .comment-item {
    padding: 15px;
    border-bottom: 1px solid #ddd;

    .user-column {
      float: left;
      width: 140px;
      color: #666;
      font-size: smaller;
    }

    .comment-column {
      margin-left: 150px;
      .github-markdown-body {
        padding: 4px;
        font-size: smaller;
        p {
          margin-bottom: 8px;
        }
      }
      .comment-message {
        height: 20px;
        .time {
          float: left;
          font-size: 12px;
          color: #777;
        }
        .comment-op {
          float: right;
          .el-link {
            font-size: small;
          }
          > * {
            margin-left: 25px;
          }
        }
      }
    }
  }
  .prompt {
    padding: 10px;
    font-size: 12px;
    color: #444;
  }
  .post {
    padding: 10px;
    .el-button {
      width: 80px;
      margin: 10px;
    }
  }
}
</style>
