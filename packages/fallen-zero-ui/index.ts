/*
 * @Author       : fallen_zero
 * @Date         : 2023-10-10 13:47:55
 * @LastEditors  : fallen_zero
 * @LastEditTime : 2023-10-10 13:50:54
 * @FilePath     : /fallen-zero-ui/packages/fallen-zero-ui/index.ts
 * @FileName     :
 */

export * from '../components';
import type { App, Plugin } from 'vue';

import { Button } from '@fallen-zero/components';

const components = [Button] as unknown as Plugin[];

const INSTALLED_KEY = Symbol('INSTALLED_KEY');

export const install = (app: App) => {
  if ((app as any)[INSTALLED_KEY]) return;

  (app as any)[INSTALLED_KEY] = true;

  components.forEach((component) => {
    app.use(component);
  });
};

export default {
  install,
};
