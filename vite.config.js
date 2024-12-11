import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})

// import { defineConfig } from "vite";

// export default defineConfig({
//   css: {
//     preprocessorOptions: {
//       scss: {
//         additionalData: `@import "src/styles/variables.scss";`,
//       },
//     },
//   },
// });
