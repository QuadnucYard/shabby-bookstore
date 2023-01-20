<template>
  <div>
    <SearchBox />
    <div class="book-intro" v-if="book">
      <el-row :gutter="20">
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
              <el-input-number v-model="buyCount" :min="1" controls-position="right" />
              <el-button type="primary" :icon="ShoppingCart" color="#E53935">加入购物车</el-button>
              <el-button type="primary" :icon="StarFilled" color="#D81B60">加入收藏</el-button>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="comment">
      <div class="mt"><h3>商品评价</h3></div>
      <div class="comments-list">
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
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { UserFilled, ShoppingCart, StarFilled } from "@element-plus/icons-vue";
import { BookInfo, Comment, getBook, getComments } from "@/api/book";

const $route = useRoute();
const $router = useRouter();

const book = ref<BookInfo | null>(null);

const buyCount = ref(1);

const comments = ref<Comment[]>([]);

const print = console.log;

const report = () => {
  print("report");
};

onMounted(async () => {
  const bid = Number.parseInt($route.params.bid);
  book.value = await getBook(bid);
  comments.value = await getComments(bid);
});
</script>

<style lang="scss">
.book-intro {
  margin-top: 10px;
  margin-bottom: 10px;
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

.comment {
  padding: 50px;
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
}
</style>
