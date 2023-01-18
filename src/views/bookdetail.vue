<template>
  <div>
    <div class="book-intro">
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="preview-wrap">
            <el-image :src="intro.cover" :alt="intro.title" fit="contain" />
          </div>
        </el-col>
        <el-col :span="16">
          <div class="item-info-wrap">
            <div class="title">{{ intro.title }}</div>
            <v-md-preview class="desc" :text="intro.desc" />
            <div class="info">
              <div>
                <span class="t1">作者：{{ intro.author }}</span>
                <span class="t1">出版社：{{ intro.publisher }}</span>
                <span class="t1">出版日期：{{ intro.publishDate }}</span>
              </div>
              <div>
                <el-rate class="t1" v-model="intro.rating" disabled />
                <span class="t1">{{ intro.numComments }}条评论</span>
              </div>
            </div>
            <div class="price-info-wrap">
              <div>
                <div class="dt">东 南 价</div>
                <div class="dd">
                  <span class="price">
                    <span> ￥</span>
                    <span> {{ intro.price }}</span>
                  </span>
                </div>
              </div>
              <div>
                <div class="dt">促　　销</div>
                <div class="dd">
                  <div class="prom-item">
                    <span class="hl_red_bg">满减</span>
                    <span class="hl_red">每满39元，可减10元现金，最多可减1000元</span>
                  </div>
                </div>
              </div>
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
                {{ item.user }}
              </div>
            </div>
            <div class="comment-column">
              <el-rate v-model="item.rating" disabled />
              <v-md-preview :text="item.text" />
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
import { UserFilled } from "@element-plus/icons-vue";

const intro = reactive({
  title: "东野圭吾新作：魔力的胎动",
  desc: "喜欢《解忧杂货店》，就一定要读这本书。珍藏印签。有了想要守护的东西，生命就会变得有力量。悲凉的人生、千疮百孔的命运、一桩桩悲剧的发生与救赎，读来令人喟叹不已。",
  author: "东野圭吾",
  publisher: "北京联合出版有限公司",
  publishDate: "2019年12月",
  rating: 4.8,
  numComments: 19909,
  price: 32.4,
  cover: "https://img3m4.ddimg.cn/68/35/28484744-5_u_15.jpg",
});

const comments = reactive([
  {
    user: "someone",
    rating: 4,
    time: new Date(),
    text: "这是**一条**一条~~评论~~\n24556\n\n765645343",
    likes: 13,
  },
  {
    user: "someone",
    rating: 4,
    time: new Date(),
    text: `很好！$66666$`,
    likes: 13,
  },
]);

const print = console.log;

const report = () => {
  print("report");
};
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
      vertical-align: center;
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
      }
      .price {
        color: #e4393c;
        line-height: 18px;
        span:nth-child(1) {
          font-size: large;
        }
        span:nth-child(2) {
          font-size: x-large;
        }
      }
      .prom-item {
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
