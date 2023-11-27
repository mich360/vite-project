import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: './src/main.jsx', // main.jsx をエントリーポイントとして指定
      },
    },
  },
});





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
