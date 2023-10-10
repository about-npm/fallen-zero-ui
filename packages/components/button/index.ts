/*
 * @Author       : fallen_zero
 * @Date         : 2023-10-10 10:07:30
 * @LastEditors  : fallen_zero
 * @LastEditTime : 2023-10-10 10:11:32
 * @FilePath     : /fallen-zero-ui/packages/components/button/index.ts
 * @FileName     :
 */
export * from './src/button';
import type { App } from 'vue';
import Button from './src/button.vue';

Button.install = (app: App) => {
  app.component(Button.name, Button);
};

export { Button };

export default Button;
