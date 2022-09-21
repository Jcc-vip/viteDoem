import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import router from "./router/index";
import App from "./App.vue";
const app = createApp(App);
// 全局挂载
app.config.globalProperties.getEnv = import.meta.env;

//全局异常拦截
app.config.errorHandler = (err: any, vm, info) => {
  // 处理错误
  console.log("====== 小老弟，有报错了 ======");
  if (err instanceof Error) {
    console.log("❌ 提示:", err.message);
  }
};
app.use(router);
app.use(createPinia());
app.mount("#app");
