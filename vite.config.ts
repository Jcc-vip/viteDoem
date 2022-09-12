import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// const path = require('path');
import { visualizer } from "rollup-plugin-visualizer";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import progress from "vite-plugin-progress"; //vite打包进度插件
import { resolve } from "path"; // 主要用于alias文件路径别名
import compressPlugin from "vite-plugin-compression"; //静态资源压缩
// https://vitejs.dev/config/
export default defineConfig({
  base: "./", //根据环境区分打包后静态资源文件路径
  plugins: [
    vue(),
    visualizer(),
    //按需引入插件
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      dts: true,
      imports: ["vue", "vue-router"], //vue函数自动引入
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    progress(),
    compressPlugin({
      //gzip静态资源压缩
      verbose: true, // 默认即可
      disable: false, //开启压缩(不禁用)，默认即可
      deleteOriginFile: false, //删除源文件
      threshold: 10240, //压缩前最小文件大小
      algorithm: "gzip", //压缩算法
      ext: ".gz", //文件类型
    }),
  ],
  // resolve: {
  //   alias: {
  //     '@': path.resolve(__dirname, 'src'),
  //   },
  //   extensions: ['.js', '.vue', '.json', '.mjs'],
  // },
  build: {
    chunkSizeWarningLimit: 600, //chunk 大小警告的限制
    minify: "terser", //压缩方式
    rollupOptions: {
      output: {
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
        assetFileNames: "assets/[ext]/[name]-[hash].[ext]",
      },
    },
    terserOptions: {
      compress: {
        drop_console: true, //在打包过程去去除所有的console.log()
        drop_debugger: true,
      },
    },
  },
});
