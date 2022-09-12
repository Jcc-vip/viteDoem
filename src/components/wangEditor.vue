<template>
  <div style="border: 1px solid #ccc">
    <Toolbar
      ref="ToolbarRef"
      style="border-bottom: 1px solid #ccc"
      :editor="editorRef"
      :defaultConfig="toolbarConfig"
      :mode="mode"
    />
    <Editor
      style="height: 500px; overflow-y: hidden"
      v-model="valueHtml"
      :defaultConfig="editorConfig"
      :mode="mode"
      @onCreated="handleCreated"
    />
  </div>
</template>

<script setup lang="ts">
import "@wangeditor/editor/dist/css/style.css"; // 引入 css
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";
import { DomEditor } from "@wangeditor/editor";
// import { onBeforeUnmount, onMounted, ref, shallowRef, watch } from "vue";
// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef();

// 内容 HTML
let valueHtml = ref("<p>hello</p>");
const mode = ref("default");

// 模拟 ajax 异步获取内容
onMounted(() => {
  setTimeout(() => {
    valueHtml.value = "<p>模拟 接口数据响应..</p>";
  }, 1500);
});

const editorConfig = { placeholder: "请输入内容..." };
const toolbarConfig = ref();
// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value;
  if (editor == null) return;
  editor.destroy();
});

watch(valueHtml, (nValue: any, lvalue: any) => {
  console.log(nValue, "nValue");
  console.log(lvalue, "lvalue");
  deep: true;
});

const handleCreated = (editor: any) => {
  editorRef.value = editor; // 记录 editor 实例，重要！
  console.log(editor.getAllMenuKeys(), "................");
};
</script>

<style scoped></style>
