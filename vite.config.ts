import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginImp from 'vite-plugin-imp'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // 按需引入antd
    vitePluginImp({
      libList: [
        {
          libName: 'antd',
          style: (name) => `antd/es/${name}/style`,
        },
      ],
    }),
  ],
  css: {
    preprocessorOptions: {
      // 引入antd样式
      less: {
        javascriptEnabled: true,
        modifyVars: {
          '@primary-color': '#4377FE', //设置antd主题色
        },
      },
    },
  },
})
