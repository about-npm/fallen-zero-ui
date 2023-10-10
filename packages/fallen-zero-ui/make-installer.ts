/*
 * @Author       : fallen_zero
 * @Date         : 2023-10-10 16:25:33
 * @LastEditors  : fallen_zero
 * @LastEditTime : 2023-10-10 17:44:08
 * @FilePath     : /fallen-zero-ui/packages/fallen-zero-ui/make-installer.ts
 * @FileName     :
 */

import type { App, Plugin } from 'vue';

const INSTALLED_KEY = Symbol('INSTALLED_KEY');

export const makeInstaller = (components: Plugin[] = []) => {
  const install = (app: App) => {
    console.log((app as any)[INSTALLED_KEY]);
    if ((app as any)[INSTALLED_KEY]) return;

    (app as any)[INSTALLED_KEY] = true;
    components.forEach((c) => {
      app.use(c);
    });
  };

  return {
    install,
  };
};
