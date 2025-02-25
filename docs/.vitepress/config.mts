import { defineConfig } from "vitepress";
import {
  groupIconMdPlugin,
  groupIconVitePlugin,
} from "vitepress-plugin-group-icons"; // 实现自定义图标的插件

import nav from "./nav.mts"; // 导航栏配置
import sidebar from "./sidebar.mts"; // 侧边栏配置

import { RSSOptions, RssPlugin } from "vitepress-plugin-rss"; // 实现自动为 VitePress 网站添加 RSS 订阅的插件
const baseUrl = "https://vite.xingji.fun";
const RSS: RSSOptions = {
  title: "XINGJI",
  baseUrl,
  copyright: "Copyright (c) 2024-present, XINGJI ",
};

import {
  GitChangelog,
  GitChangelogMarkdownSection,
} from "@nolebase/vitepress-plugin-git-changelog/vite"; // 实现自动生成 CHANGELOG 的插件

import { AnnouncementPlugin } from "vitepress-plugin-announcement"; // 实现公告插件

import timeline from "vitepress-markdown-timeline"; // 实现时间线插件

import { tabsMarkdownPlugin } from "vitepress-plugin-tabs"; // 实现多标签页插件

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN", //语言，可选 en-US
  title: "XINGJI", //站点名
  description: "我的vitpress文档教程", //站点描述
  appearance: "dark",
  lastUpdated: true, //首次配置不会立即生效，需git提交后爬取时间戳
  head: [
    ["link", { rel: "icon", href: "/my-logo.png" }], //fav图标
  ],
  // 站点地图
  sitemap: {
    hostname: "https://vite.xingji.fun",
  },

  //多语言
  locales: {
    root: {
      label: "简体中文",
      lang: "Zh_CN",
    },
    en: {
      label: "English",
      lang: "en",
      link: "/en/",
    },
  },

  markdown: {
    image: {
      lazyLoading: true, // 开启图片懒加载
    },
    lineNumbers: true, //行号显示
    // 组件插入h1标题下
    config: (md) => {
      md.renderer.rules.heading_close = (tokens, idx, options, env, slf) => {
        let htmlResult = slf.renderToken(tokens, idx, options);
        if (tokens[idx].tag === "h1") htmlResult += `<ArticleMetadata />`;
        return htmlResult;
      };
      md.use(groupIconMdPlugin); //代码组图标
      md.use(timeline); //时间线插件
      md.use(tabsMarkdownPlugin); //多标签页插件
    },
  },
  // 实现自动为 VitePress 网站添加 RSS 订阅的插件
  vite: {
    // ↓↓↓↓↓
    plugins: [
      RssPlugin(RSS),
      groupIconVitePlugin(), //代码组图标
      AnnouncementPlugin({
        title: "公告",
        body: [
          { type: "text", content: "👇 QQ 👇 --- 👇 赞赏 👇" },
          {
            type: "image",
            src: "https://i.p-i.vip/47/20250129-6799f6e408e57.jpg",
            style: "display: inline-block;width:46%;padding-right:6px",
          },
          {
            type: "image",
            src: "https://i.p-i.vip/47/20240926-66f56532a84be.png",
            style: "display: inline-block;width:46%;padding-left:6px",
          },
        ],
        footer: [
          {
            type: "text",
            content: "欢迎大家私信交流",
          },
          {
            type: "button",
            content: "作者主页",
            link: "https://home.xingji.fun",
          },
          {
            type: "button",
            content: "作者博客",
            link: "https://love.xingji.fun",
            props: {
              type: "success",
            },
          },
        ],
      }),
      GitChangelog({
        // 填写在此处填写您的仓库链接
        repoURL: () => "https://github.com/XingJi-love/Blog-VitePress",
      }),
      GitChangelogMarkdownSection(),
    ],
    optimizeDeps: {
      exclude: [
        "@nolebase/vitepress-plugin-enhanced-readabilities/client",
        "vitepress",
        "@nolebase/ui",
      ],
    },
    ssr: {
      noExternal: [
        "@nolebase/vitepress-plugin-enhanced-readabilities",
        "@nolebase/vitepress-plugin-highlight-targeted-heading",
        "@nolebase/ui",
      ],
    },
  },

  themeConfig: {
    //左上角logo
    logo: "/my-logo.png",
    darkModeSwitchLabel: "深浅模式", //手机端深浅模式文字修改
    sidebarMenuLabel: "目录", //侧边栏文字更改(移动端)
    returnToTopLabel: "返回顶部", //返回顶部文字修改
    outline: {
      level: [2, 4], // 显示2-4级标题
      // level: 'deep', // 显示2-6级标题
      label: "页面导航", // 文字显示
    },
    //上次更新时间
    lastUpdated: {
      text: "上次更新时间",
      formatOptions: {
        dateStyle: "short", // 可选值full、long、medium、short
        timeStyle: "medium", // 可选值full、long、medium、short
      },
    },
    //自定义上下页名
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    // https://vitepress.dev/reference/default-theme-config
    //导航栏
    nav: nav, // 导航栏配置
    sidebar: sidebar, // 侧边栏配置

    //编辑本页
    editLink: {
      pattern: "https://github.com/XingJi-love/Blog-VitePress", // 改成自己的仓库
      text: "在GitHub编辑本页",
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/XingJi-love" },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><!--!Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"/></svg>',
        },
        link: "https://t.me/XINGOJI",
      },
      {
        icon: {
          svg: '<svg t="1728183147842" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2076" data-darkreader-inline-fill="" width="200" height="200"><path d="M512 0c282.784 0 512 229.216 512 512s-229.216 512-512 512S0 794.784 0 512 229.216 0 512 0z m189.952 752l11.2-108.224c-31.904 9.536-100.928 16.128-147.712 16.128-134.464 0-205.728-47.296-195.328-146.304 11.584-110.688 113.152-145.696 232.64-145.696 54.784 0 122.432 8.8 151.296 18.336L768 272.704C724.544 262.24 678.272 256 599.584 256c-203.2 0-388.704 94.88-406.4 263.488C178.336 660.96 303.584 768 535.616 768c80.672 0 138.464-6.432 166.336-16z" fill="#1296db" p-id="2077" data-darkreader-inline-fill="" style="--darkreader-inline-fill:#0e78af;"></path></svg>',
        },
        link: "https://blog.csdn.net/AcsdnHZB?spm=1011.2648.3001.5343",
      },
      {
        icon: {
          svg: '<svg t="1728183344877" class="icon" viewBox="0 0 1129 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1673" data-darkreader-inline-fill="" width="200" height="200"><path d="M234.909 9.656a80.468 80.468 0 0 1 68.398 0 167.374 167.374 0 0 1 41.843 30.578l160.937 140.82h115.07l160.936-140.82a168.983 168.983 0 0 1 41.843-30.578A80.468 80.468 0 0 1 930.96 76.445a80.468 80.468 0 0 1-17.703 53.914 449.818 449.818 0 0 1-35.406 32.187 232.553 232.553 0 0 1-22.531 18.508h100.585a170.593 170.593 0 0 1 118.289 53.109 171.397 171.397 0 0 1 53.914 118.288v462.693a325.897 325.897 0 0 1-4.024 70.007 178.64 178.64 0 0 1-80.468 112.656 173.007 173.007 0 0 1-92.539 25.75h-738.7a341.186 341.186 0 0 1-72.421-4.024A177.835 177.835 0 0 1 28.91 939.065a172.202 172.202 0 0 1-27.36-92.539V388.662a360.498 360.498 0 0 1 0-66.789A177.03 177.03 0 0 1 162.487 178.64h105.414c-16.899-12.07-31.383-26.555-46.672-39.43a80.468 80.468 0 0 1-25.75-65.984 80.468 80.468 0 0 1 39.43-63.57M216.4 321.873a80.468 80.468 0 0 0-63.57 57.937 108.632 108.632 0 0 0 0 30.578v380.615a80.468 80.468 0 0 0 55.523 80.469 106.218 106.218 0 0 0 34.601 5.632h654.208a80.468 80.468 0 0 0 76.444-47.476 112.656 112.656 0 0 0 8.047-53.109v-354.06a135.187 135.187 0 0 0 0-38.625 80.468 80.468 0 0 0-52.304-54.719 129.554 129.554 0 0 0-49.89-7.242H254.22a268.764 268.764 0 0 0-37.82 0z m0 0" fill="#20B0E3" p-id="1674" data-darkreader-inline-fill="" style="--darkreader-inline-fill:#168ab3;"></path><path d="M348.369 447.404a80.468 80.468 0 0 1 55.523 18.507 80.468 80.468 0 0 1 28.164 59.547v80.468a80.468 80.468 0 0 1-16.094 51.5 80.468 80.468 0 0 1-131.968-9.656 104.609 104.609 0 0 1-10.46-54.719v-80.468a80.468 80.468 0 0 1 70.007-67.593z m416.02 0a80.468 80.468 0 0 1 86.102 75.64v80.468a94.148 94.148 0 0 1-12.07 53.11 80.468 80.468 0 0 1-132.773 0 95.757 95.757 0 0 1-12.875-57.133V519.02a80.468 80.468 0 0 1 70.007-70.812z m0 0" fill="#20B0E3" p-id="1675" data-darkreader-inline-fill="" style="--darkreader-inline-fill:#168ab3;"></path></svg>',
        },
        link: "https://space.bilibili.com/1289480756?spm_id_from=333.1007.0.0",
      },
    ],
    footer: {
      copyright:
        'Copyright © 2024 XINGJI <a href="https://icp.gov.moe/?keyword=20250322" target="_blank">萌ICP备20250322号</a>',
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
});
