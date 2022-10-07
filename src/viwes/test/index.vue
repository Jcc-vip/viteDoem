<template>
  <div>
    <!-- 测试页面 -->
    <test v-bind="$attrs" masg="'?????'"></test>
    <p></p>
    <jssx></jssx>
  </div>
</template>

<script setup lang="ts">
import test from "../../components/test.vue";
import jssx from "./componets/hello.jsx";
</script>

<style scoped></style>
