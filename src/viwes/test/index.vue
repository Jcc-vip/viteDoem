<template>
  <div>
    <!-- 测试页面 -->
    <Test v-bind="$attrs" masg="'?????'"></Test>
    <p></p>
    <Hello-jsx></Hello-jsx>
  </div>
</template>

<script setup lang="ts">
import Test from "../../components/test.vue";
import HelloJsx from "./componets/hello.jsx";
</script>

<style scoped></style>
