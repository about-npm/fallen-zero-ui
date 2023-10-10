/*
 * @Author       : fallen_zero
 * @Date         : 2023-10-10 10:13:25
 * @LastEditors  : fallen_zero
 * @LastEditTime : 2023-10-10 10:15:36
 * @FilePath     : /fallen-zero-ui/play/vite.config.ts
 * @FileName     :
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import DefineOptions from 'unplugin-vue-define-options/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), DefineOptions()],
});
