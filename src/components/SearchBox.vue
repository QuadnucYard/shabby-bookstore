<template>
  <div class="search-box">
    <el-form :inline="true" v-model="queryOptions" @submit.native.prevent>
      <el-form-item style="width: 690px">
        <el-input v-model="queryOptions.keyword" placeholder="搜索书籍" />
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          native-type="submit"
          :icon="Search"
          @click="onSubmitQuery"
          style="width: 60px"
        >
          搜索
        </el-button>
      </el-form-item>
    </el-form>
    <el-collapse>
      <el-collapse-item title="高级搜索">
        <el-form label-width="100px" style="max-width: 500px" size="small" @submit.native.prevent>
          <el-form-item label="名称">
            <el-input v-model="queryOptions.name" placeholder="" />
          </el-form-item>
          <el-form-item label="作者">
            <el-input v-model="queryOptions.author" placeholder="" />
          </el-form-item>
          <el-form-item label="出版社">
            <el-input v-model="queryOptions.publisher" placeholder="" />
          </el-form-item>
          <el-form-item label="描述">
            <el-input v-model="queryOptions.desc" placeholder="" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" native-type="submit" @click="onSubmitQueryAdvanced">
              查询
            </el-button>
          </el-form-item>
        </el-form>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script setup lang="ts">
import { Search } from "@element-plus/icons-vue";
import _ from "lodash";
import { QueryOptions } from "@/api/book";

const $route = useRoute();
const $router = useRouter();

const queryOptions = reactive<QueryOptions>({});

const refreshList = (options: QueryOptions) => {
  const query = _.pickBy({ page: 1, pageSize: 20, ...options });
  $router.push({ name: $route.name!, query });
};

const onSubmitQuery = () => {
  refreshList({ keyword: queryOptions.keyword });
};

const onSubmitQueryAdvanced = () => {
  refreshList(_.omit(queryOptions, "keyword"));
};

defineExpose(queryOptions);
</script>

<style lang="scss">
.search-box {
  padding: 20px;
  .el-form-item {
    margin-bottom: 8px;
  }
  .el-collapse-item__header {
    height: 40px;
  }
}
</style>
