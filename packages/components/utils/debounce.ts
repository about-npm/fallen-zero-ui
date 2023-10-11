/*
 * @Author       : fallen_zero
 * @Date         : 2023-10-11 08:35:57
 * @LastEditors  : fallen_zero
 * @LastEditTime : 2023-10-11 08:37:40
 * @FilePath     : /fallen-zero-ui/packages/components/utils/debounce.ts
 * @FileName     :
 */

/** 防抖函数 */
export function debounce<T extends (...args: any[]) => any>(
  fn: T,
  delay: number
) {
  let timer: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}
