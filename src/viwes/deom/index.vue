<template>
  <div>
    deom页面
    <p><el-button type="primary" @click="test">测试</el-button></p>
  </div>
</template>

<script setup lang="ts">
const { proxy } = getCurrentInstance() as any;
const getEnv = proxy.getEnv;
// const getEnv = proxy.getEnv;
const test = () => {
  console.log(getEnv, "getEnv--");
};
</script>

<style scoped></style>
