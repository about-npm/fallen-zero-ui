/*
 * @Author       : fallen_zero
 * @Date         : 2023-10-10 12:00:09
 * @LastEditors  : fallen_zero
 * @LastEditTime : 2023-10-10 13:34:07
 * @FilePath     : /fallen-zero-ui/packages/docs/.vitepress/config.ts
 * @FileName     :
 */
import type { UserConfig } from 'vitepress';

export const config: UserConfig = {
  title: 'Fallen Zero UI',
  description: 'a Vue 3 based component library for designers and developers',
  themeConfig: {
    logo: '/images/vite.svg',
    footer: {
      message: 'Released under the MIT License.',
      copyright:
        'Copyright © 2023-PRESENT vangleer and Fallen Zero contributors',
    },
    algolia: {
      apiKey: 'your_api_key',
      indexName: 'index_name',
    },
    nav: [
      { text: '指南', link: '/guide/design' },
      { text: '组件', link: '/component/button' },
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/vangleer' }],
    sidebar: {
      '/guide/': [],
      '/component/': [
        {
          text: 'Basic',
          items: [
            {
              text: 'Button',
              link: '/component/button',
            },
          ],
        },
      ],
    },
  },
};

export default config;
