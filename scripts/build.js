/*
 * @Author       : fallen_zero
 * @Date         : 2023-10-10 13:56:06
 * @LastEditors  : fallen_zero
 * @LastEditTime : 2023-10-10 14:34:32
 * @FilePath     : /fallen-zero-ui/scripts/build.js
 * @FileName     :
 */
const path = require('path');
const fs = require('fs');
const { build, defineConfig } = require('vite');

const vue = require('@vitejs/plugin-vue');
const dts = require('vite-plugin-dts');
const DefineOptions = require('unplugin-vue-define-options/vite');

const rootDir = path.resolve(__dirname, '../');
const outDir = resolve('packages/fallen-zero-ui/dist');

function resolve(...urlOrUrls) {
  return path.resolve(rootDir, ...urlOrUrls);
}

const baseConfig = defineConfig({
  plugins: [
    vue(),
    DefineOptions(),
    dts({
      include: ['packages/fallen-zero-ui', 'packages/components'],
      outDir: path.resolve(outDir, 'types'),
    }),
  ],
  build: {
    lib: {
      entry: resolve('packages/fallen-zero-ui/index.ts'),
      name: 'FallenZeroUI',
      fileName: (format) => `index.${format}.js`,
    },
    outDir,
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
});

async function copyFile() {
  fs.copyFileSync(
    resolve('README.md'),
    resolve('packages/fallen-zero-ui/README.md')
  );
}

async function main() {
  await build(baseConfig);

  await copyFile();
}

main();
