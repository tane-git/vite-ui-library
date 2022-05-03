import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const packageJson = require('./package.json')

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  build: {
    rollupOptions: {
      input: 'src/components/index.ts',
      output: [
        {
          dir: packageJson.module,
          format: 'esm',
          sourcemap: true,
        }
      ],
      // plugins: [
      //   peerDepsExternal(),
      //   resolve(),
      //   commonjs(),
      //   typescript({ useTsconfigDeclarationDir: true }),
      //   postcss()
      // ]
    }
  }
})