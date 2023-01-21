<template>
  <div class="home">
    <SearchBox />
    <el-carousel height="300px">
      <el-carousel-item v-for="item in carouselImages" :key="item">
        <el-image :src="getImageUrl(item)" fit="fill" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup lang="ts">
import _ from "lodash";

const carouselImages = _.range(1, 7).map(t => `${t}.jpg`);

function getImageUrl(name: string) {
  return new URL(`../assets/img/carousel/${name}`, import.meta.url).href;
}
</script>

<style lang="scss">
.home {
  .el-carousel {
    width: 800px;
    margin: auto;
    margin-top: 20px;
  }
}
</style>
