import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve:{
    alias:{
      // 将src路径简化成@
      "@":path.resolve("./src")
    },
    css: {  
      preprocessorOptions: {  
        scss: {  
          //这里不能使用相对路径，否则报错；cli 方式则无碍  
          //设置scss全局变量
          additionalData: '@import "@/styles/variables.scss";',  
          javascriptEnabled: true  
        }  
      }  
    }  
  }
  
})
