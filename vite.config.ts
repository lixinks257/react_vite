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
        // 允许JS去修改底层的less文件
        javascriptEnabled: true,
        // 修改antd主题色
        modifyVars: {
          '@primary-color': 'orange', 
        },
      },
    },
  },
})
