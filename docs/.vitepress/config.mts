import { defineConfig } from 'vitepress'

import { RSSOptions, RssPlugin } from 'vitepress-plugin-rss' // 实现自动为 VitePress 网站添加 RSS 订阅的插件
const baseUrl = 'https://vite.xingji.fun'
const RSS: RSSOptions = {
  title: 'XINGJI',
  baseUrl,
  copyright: 'Copyright (c) 2024-present, XINGJI ',
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN', //语言，可选 en-US
  title: "XINGJI", //站点名
  description: "我的vitpress文档教程", //站点描述
  appearance: 'dark',
  lastUpdated: true, //首次配置不会立即生效，需git提交后爬取时间戳
  head: [
    ['link',{ rel: 'icon', href: '/my-logo.png'}], //fav图标
  ],
  // 站点地图
  sitemap: {
    hostname: 'https://你的网址.com',
  },

  markdown: {
    // 组件插入h1标题下
    config: (md) => {
      md.renderer.rules.heading_close = (tokens, idx, options, env, slf) => {
          let htmlResult = slf.renderToken(tokens, idx, options);
          if (tokens[idx].tag === 'h1') htmlResult += `<ArticleMetadata />`; 
          return htmlResult;
      }
    }
  },
  // 实现自动为 VitePress 网站添加 RSS 订阅的插件
  vite: {
    // ↓↓↓↓↓
    plugins: [RssPlugin(RSS)]
    // ↑↑↑↑↑
  },

  themeConfig: {
    //左上角logo
    logo: '/my-logo.png',
    darkModeSwitchLabel: '深浅模式',//手机端深浅模式文字修改
    sidebarMenuLabel: '目录', //侧边栏文字更改(移动端)
    returnToTopLabel: '返回顶部', //返回顶部文字修改
    outline: { 
      level: [2,4], // 显示2-4级标题
      // level: 'deep', // 显示2-6级标题
      label: '当前页大纲' // 文字显示
    },
    //上次更新时间
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short', // 可选值full、long、medium、short
        timeStyle: 'medium' // 可选值full、long、medium、short
      },
    },
    //自定义上下页名
    docFooter: { 
      prev: '上一页', 
      next: '下一页', 
    },
    // https://vitepress.dev/reference/default-theme-config
    //导航栏
    nav: [
      { text: '首页', link: '/' }, 
      { text: '快速上手', link: '/getting-started' },
      { text: 'VitePress', link: 'https://vitepress.dev/' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/XingJi-love' },
      {
				icon: {
					svg: '<svg t="1728183147842" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2076" data-darkreader-inline-fill="" width="200" height="200"><path d="M512 0c282.784 0 512 229.216 512 512s-229.216 512-512 512S0 794.784 0 512 229.216 0 512 0z m189.952 752l11.2-108.224c-31.904 9.536-100.928 16.128-147.712 16.128-134.464 0-205.728-47.296-195.328-146.304 11.584-110.688 113.152-145.696 232.64-145.696 54.784 0 122.432 8.8 151.296 18.336L768 272.704C724.544 262.24 678.272 256 599.584 256c-203.2 0-388.704 94.88-406.4 263.488C178.336 660.96 303.584 768 535.616 768c80.672 0 138.464-6.432 166.336-16z" fill="#1296db" p-id="2077" data-darkreader-inline-fill="" style="--darkreader-inline-fill:#0e78af;"></path></svg>',
				},
				link: 'https://blog.csdn.net/AcsdnHZB?spm=1011.2648.3001.5343',
      },
      {
				icon: {
					svg: '<svg t="1728183344877" class="icon" viewBox="0 0 1129 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1673" data-darkreader-inline-fill="" width="200" height="200"><path d="M234.909 9.656a80.468 80.468 0 0 1 68.398 0 167.374 167.374 0 0 1 41.843 30.578l160.937 140.82h115.07l160.936-140.82a168.983 168.983 0 0 1 41.843-30.578A80.468 80.468 0 0 1 930.96 76.445a80.468 80.468 0 0 1-17.703 53.914 449.818 449.818 0 0 1-35.406 32.187 232.553 232.553 0 0 1-22.531 18.508h100.585a170.593 170.593 0 0 1 118.289 53.109 171.397 171.397 0 0 1 53.914 118.288v462.693a325.897 325.897 0 0 1-4.024 70.007 178.64 178.64 0 0 1-80.468 112.656 173.007 173.007 0 0 1-92.539 25.75h-738.7a341.186 341.186 0 0 1-72.421-4.024A177.835 177.835 0 0 1 28.91 939.065a172.202 172.202 0 0 1-27.36-92.539V388.662a360.498 360.498 0 0 1 0-66.789A177.03 177.03 0 0 1 162.487 178.64h105.414c-16.899-12.07-31.383-26.555-46.672-39.43a80.468 80.468 0 0 1-25.75-65.984 80.468 80.468 0 0 1 39.43-63.57M216.4 321.873a80.468 80.468 0 0 0-63.57 57.937 108.632 108.632 0 0 0 0 30.578v380.615a80.468 80.468 0 0 0 55.523 80.469 106.218 106.218 0 0 0 34.601 5.632h654.208a80.468 80.468 0 0 0 76.444-47.476 112.656 112.656 0 0 0 8.047-53.109v-354.06a135.187 135.187 0 0 0 0-38.625 80.468 80.468 0 0 0-52.304-54.719 129.554 129.554 0 0 0-49.89-7.242H254.22a268.764 268.764 0 0 0-37.82 0z m0 0" fill="#20B0E3" p-id="1674" data-darkreader-inline-fill="" style="--darkreader-inline-fill:#168ab3;"></path><path d="M348.369 447.404a80.468 80.468 0 0 1 55.523 18.507 80.468 80.468 0 0 1 28.164 59.547v80.468a80.468 80.468 0 0 1-16.094 51.5 80.468 80.468 0 0 1-131.968-9.656 104.609 104.609 0 0 1-10.46-54.719v-80.468a80.468 80.468 0 0 1 70.007-67.593z m416.02 0a80.468 80.468 0 0 1 86.102 75.64v80.468a94.148 94.148 0 0 1-12.07 53.11 80.468 80.468 0 0 1-132.773 0 95.757 95.757 0 0 1-12.875-57.133V519.02a80.468 80.468 0 0 1 70.007-70.812z m0 0" fill="#20B0E3" p-id="1675" data-darkreader-inline-fill="" style="--darkreader-inline-fill:#168ab3;"></path></svg>',
				},
				link: 'https://space.bilibili.com/1289480756?spm_id_from=333.1007.0.0',
			},
    ],
    footer: {
      copyright: 'Copyright © 2024 XINGJI <a href="https://icp.gov.moe/?keyword=20250322" target="_blank">萌ICP备20250322号</a>'
    },
    // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
  },
})