<template>
  <div>
    <h3>测试页</h3>
    <p>$attre接受的值: {{ $attrs.masg }}</p>
    <p>Pinia的年龄:{{ age }}</p>
    <p>Pinia的名字:{{ name }}</p>
    <!-- <button @click="onClick">点击事件</button> -->
    <button @click="onTree">转换数组</button>
  </div>
</template>

<script setup lang="ts">
import { userStore } from "../store/index";
import { storeToRefs } from "pinia";
const userInfo = userStore();

const { age, name } = storeToRefs(userInfo);

const onClick = () => {
  userInfo.increment();
  userInfo.ageChang();
};
let arr = [
  { id: 1, pid: 0, name: "四川" },
  { id: 66, pid: 0, name: "河南" },
  { id: 3, pid: 66, name: "郑州" },
  { id: 99, pid: 66, name: "许昌" },
  { id: 88, pid: 99, name: "鄢陵" },
  { id: 2, pid: 1, name: "成都" },
  { id: 3, pid: 1, name: "宜宾" },
  { id: 4, pid: 1, name: "绵阳" },
  { id: 5, pid: 1, name: "德阳" },
  { id: 6, pid: 2, name: "高新区" },
  { id: 7, pid: 2, name: "武侯区" },
  { id: 8, pid: 3, name: "翠屏区" },
] as any;

const toTree = (data: Array<string | Number>, key: any) => {
  if (!Array.isArray(data)) {
    return data;
  }
  let arr = JSON.parse(JSON.stringify(data));
  let res: any = [];

  arr.forEach((item: any) => {
    if (item.pid == key) {
      item.children = toTree(data, item.id);
      if (item.children.length == 0) {
        delete item.children;
      }
      res.push(item);
    }
  });
  return res;
};

function totest(data: any, key: any) {
  if (!Array.isArray(data)) {
    return data;
  }
  let arr = JSON.parse(JSON.stringify(data));
  let res: any = [];
  arr.forEach((item: any) => {
    if (item.pid == key) {
      item.children = totest(data, item.id);
      if (item.children.lenght == 0) {
        delete item.children;
      }
      res.push(item);
    }
  });
  return res;
}
const onTree = () => {
  console.log(toTree(arr, 0));
};
</script>

<style scoped></style>
