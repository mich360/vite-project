import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // ルートパスを設定
  build: {
    rollupOptions: {
      external: ['/src/main.js'], // ここで `/src/main.js` を外部モジュールとして指定
    },
  },
})

// vite.config.js







// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import vueImages from 'vite-plugin-vue-images'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
//     react(),
//     vueImages()
//   ],
//   build: {
//     rollupOptions: {
//       output: {
//         manualChunks: undefined,
//       },
//     },
//   },
//   esbuild: {
//     jsxFactory: 'h',
//     jsxFragment: 'Fragment',
//   },
// });
