import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// other imports from example:
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";

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
      plugins: [
        peerDepsExternal(),
        resolve(),
        commonjs(),
        typescript({ useTsconfigDeclarationDir: true }),
        postcss()
      ]
    }
  }
})