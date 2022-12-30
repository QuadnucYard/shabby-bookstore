<template>
  <div>
    <el-header class="header">
      <nav-menu></nav-menu>
    </el-header>
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import NavMenu from "@/components/navmenu.vue";
</script>

<style scoped>
div > span {
  margin: 1em;
}

.main {
  background-color: rgb(239, 239, 239);
  min-height: calc(90vh - 60px);
}
</style>