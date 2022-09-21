<template>
  <div>
    <p><el-button type="primary" @click="test">测试</el-button></p>
  </div>
</template>

<script setup lang="ts">
const { proxy } = getCurrentInstance() as any;
const getEnv = proxy.getEnv;
const test = () => {
  console.log(getEnv, "当前环境*****");
};
</script>

<style scoped></style>
