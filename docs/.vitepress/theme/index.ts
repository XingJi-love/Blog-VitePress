import { h } from "vue";
import DefaultTheme from "vitepress/theme";
import "./style/index.css"; /* 主题色 */
import Linkcard from "./components/Linkcard.vue";
import HomeUnderline from "./components/HomeUnderline.vue";
import xgplayer from "./components/xgplayer.vue";
import confetti from "./components/confetti.vue";
import update from "./components/update.vue";
import ArticleMetadata from "./components/ArticleMetadata.vue";

import MyLayout from "./components/MyLayout.vue";

import { inBrowser } from "vitepress";
import busuanzi from "busuanzi.pure.js";
import DataPanel from "./components/DataPanel.vue";

import mediumZoom from "medium-zoom";
import { onMounted, watch, nextTick } from "vue";
import { useRoute } from "vitepress";

import { NProgress } from "nprogress-v2/dist/index.js"; // 进度条组件
import "nprogress-v2/dist/index.css"; // 进度条样式

import { useData } from "vitepress"; // VitePress搭建个人导航
import MNavLinks from "./components/MNavLinks.vue"; // 自定义导航组件

import giscusTalk from "vitepress-plugin-comment-with-giscus"; // giscus评论插件

import vitepressMusic from "vitepress-plugin-music"; // 音乐播放器插件
import "vitepress-plugin-music/lib/css/index.css";

import "virtual:group-icons.css"; //代码组样式

import { NolebaseGitChangelogPlugin } from "@nolebase/vitepress-plugin-git-changelog/client";
import "@nolebase/vitepress-plugin-git-changelog/client/style.css"; // 更新日志插件

import {
  NolebaseEnhancedReadabilitiesMenu,
  NolebaseEnhancedReadabilitiesScreenMenu,
} from "@nolebase/vitepress-plugin-enhanced-readabilities/client";
import "@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css";
import type { Options } from "@nolebase/vitepress-plugin-enhanced-readabilities/client";
import { InjectionKey } from "@nolebase/vitepress-plugin-enhanced-readabilities/client";

import "vitepress-markdown-timeline/dist/theme/index.css"; // 时间线样式

import { enhanceAppWithTabs } from "vitepress-plugin-tabs/client"; // 代码块多标签页插件

import Carousel from "./components/Carousel.vue"; // 轮播图组件

import LoveTimer from "./components/LoveTimer.vue"; // 爱情倒计时组件

// 彩虹背景动画样式
let homePageStyle: HTMLStyleElement | undefined;

const playlist = [
  {
    name: "白鸽乌鸦相爱的戏码-潘成（皮卡潘）",
    author: "潘成(皮卡潘)",
    file: "/mp3/白鸽乌鸦相爱的戏码-潘成（皮卡潘）.mp3",
  },
  {
    name: "春娇与志明-街道办GDC&欧阳耀莹",
    author: "街道办GDC&欧阳耀莹",
    file: "/mp3/春娇与志明-街道办GDC&欧阳耀莹.mp3",
  },
  {
    name: "最后一页",
    author: "最后一页",
    file: "/mp3/最后一页.mp3",
  },
  {
    name: "起风了-买辣椒也用券",
    author: "买辣椒也用券",
    file: "/mp3/起风了-买辣椒也用券.mp3",
  },
  {
    name: "平凡之路",
    author: "平凡之路",
    file: "/mp3/平凡之路.mp3",
  },
  {
    name: "光辉岁月-Beyond",
    author: "Beyond",
    file: "/mp3/光辉岁月-Beyond.mp3",
  },
  {
    name: "全斗焕の小曲",
    author: "全斗焕",
    file: "/mp3/全斗焕の小曲.mp3",
  },
  {
    name: "Shake And Sway(DJ版)-南辰&刘媛媛",
    author: "南辰&刘媛媛",
    file: "/mp3/Shake And Sway(DJ版)-南辰&刘媛媛.mp3",
  },
  {
    name: "你若三冬 (DJ Liu 9版)-阿悠悠&Liu 9",
    author: "阿悠悠&Liu 9",
    file: "/mp3/你若三冬 (DJ Liu 9版)-阿悠悠&Liu 9.mp3",
  },
  {
    name: "牵丝戏-银临&Aki阿杰",
    author: "银临&Aki阿杰",
    file: "/mp3/牵丝戏-银临&Aki阿杰.mp3",
  },
  {
    name: "白鸽乌鸦相爱的戏码-潘成（皮卡潘）",
    author: "潘成(皮卡潘)",
    file: "https://dlink.host/musics/aHR0cHM6Ly9vbmVkcnYtbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvc3Rvcl9vbmVkcnZfb25taWNyb3NvZnRfY29tL0VaMVFFdmE1OEZCRXBad2F4YUltWGJFQnlwM3htQjlZZ2tQVTNMZU5Tenoya1E.mp3",
  },
  {
    name: "春娇与志明-街道办GDC&欧阳耀莹",
    author: "街道办GDC&欧阳耀莹",
    file: "https://dlink.host/musics/aHR0cHM6Ly9vbmVkcnYtbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvc3Rvcl9vbmVkcnZfb25taWNyb3NvZnRfY29tL0VXcjhTbE8xbVdOR3NYUVZ0MWhxRzBvQkdmMllsZFpIclJhMDJ4cnJ0NndNclE.mp3",
  },
  {
    name: "最后一页",
    author: "最后一页",
    file: "https://dlink.host/musics/aHR0cHM6Ly9vbmVkcnYtbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvc3Rvcl9vbmVkcnZfb25taWNyb3NvZnRfY29tL0VXWTlMRmJha1hkTXFYUzlnN0pmcEJzQlJpN05NME5TWVFLbkVSaGYxellZSHc.mp3",
  },
  {
    name: "起风了-买辣椒也用券",
    author: "买辣椒也用券",
    file: "https://dlink.host/musics/aHR0cHM6Ly9vbmVkcnYtbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvc3Rvcl9vbmVkcnZfb25taWNyb3NvZnRfY29tL0VkZjZxenFyOWtSUHVpS3RPU0NzZVlNQmNvSzljSXF4ZGstSk96aUZGbVZPX1E.mp3",
  },
  {
    name: "平凡之路",
    author: "平凡之路",
    file: "https://dlink.host/musics/aHR0cHM6Ly9vbmVkcnYtbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvc3Rvcl9vbmVkcnZfb25taWNyb3NvZnRfY29tL0VkTzVsT2VLYXpkQmctY3BLYjFhWHhnQnlCZ3Jxc1VmYUQ4WHRVWHlZQlBvdWc.mp3",
  },
  {
    name: "光辉岁月-Beyond",
    author: "Beyond",
    file: "https://dlink.host/musics/aHR0cHM6Ly9vbmVkcnYtbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvc3Rvcl9vbmVkcnZfb25taWNyb3NvZnRfY29tL0VkZVdzWnNsU2FoTmp2b3BIbW5TbGtBQnFFZ2ZuQ1NsMHY3Y2k3NUZibUwwR0E.mp3",
  },
];

export default {
  extends: DefaultTheme,

  Layout() {
    const props: Record<string, any> = {};
    // 获取 frontmatter
    const { frontmatter } = useData();

    /* 添加自定义 class */
    if (frontmatter.value?.layoutClass) {
      props.class = frontmatter.value.layoutClass;
    }

    return h(MyLayout, props);
  },

  setup() {
    // 图片放大功能初始化
    const route = useRoute();
    const { frontmatter } = useData();

    const initZoom = () => {
      // mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' }); // 默认
      mediumZoom(".main img", { background: "var(--vp-c-bg)" }); // 不显式添加{data-zoomable}的情况下为所有图像启用此功能
    };

    onMounted(() => {
      initZoom();
    });

    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    );

    // giscus配置
    giscusTalk(
      {
        repo: "XingJi-love/Blog-VitePress", //仓库
        repoId: "R_kgDONn5frQ", //仓库ID
        category: "Announcements", // 讨论分类
        categoryId: "DIC_kwDONn5frc4Cl5sS", //讨论分类ID
        mapping: "pathname",
        inputPosition: "bottom",
        lang: "zh-CN",
      },
      {
        frontmatter,
        route,
      },
      //默认值为true，表示已启用，此参数可以忽略；
      //如果为false，则表示未启用
      //您可以使用“comment:true”序言在页面上单独启用它
      true
    );
  },

  enhanceApp({ app, router, ctx }) {
    // 注册全局组件
    app.component("Linkcard", Linkcard); // 注册链接卡片组件
    app.component("HomeUnderline", HomeUnderline); // 注册首页下划线组件
    app.component("xgplayer", xgplayer); // 注册视频播放器组件
    app.component("DataPanel", DataPanel);
    app.component("confetti", confetti); // 注册烟花组件
    app.component("update", update); // 注册更新日志组件
    app.component("ArticleMetadata", ArticleMetadata); // 文章元数据
    app.component("MNavLinks", MNavLinks); // 注册自定义导航组件
    app.component("Carousel", Carousel); // 注册轮播图组件
    app.component("LoveTimer", LoveTimer); // 注册爱情倒计时组件
    enhanceAppWithTabs(app); // 注册多标签页插件
    app.use(NolebaseGitChangelogPlugin); // 注册更新日志插件
    app.component(
      "NolebaseEnhancedReadabilitiesMenu",
      NolebaseEnhancedReadabilitiesMenu
    ); // 注册增强阅读组件
    app.component(
      "NolebaseEnhancedReadabilitiesScreenMenu",
      NolebaseEnhancedReadabilitiesScreenMenu
    );
    app.provide(InjectionKey, {
      layoutSwitch: {
        defaultMode: 1, // 设置布局默认全部展开
      },
      spotlight: {
        defaultToggle: true, // 设置聚光灯默认开启
      },
    } as Options); // 注册增强阅读配置
    vitepressMusic(playlist); // 注册音乐播放器组件
    if (inBrowser) {
      NProgress.configure({ showSpinner: false });
      router.onBeforeRouteChange = () => {
        NProgress.start(); // 开始进度条
      };
      router.onAfterRouteChanged = () => {
        busuanzi.fetch();
        NProgress.done(); // 停止进度条
      };
    }

    // 彩虹背景动画样式
    if (typeof window !== "undefined") {
      watch(
        () => router.route.data.relativePath,
        () => updateHomePageStyle(location.pathname === "/"),
        { immediate: true }
      );
    }
    // 彩虹背景动画样式
    function updateHomePageStyle(value: boolean) {
      if (value) {
        if (homePageStyle) return;

        homePageStyle = document.createElement("style");
        homePageStyle.innerHTML = `
    :root {
      animation: rainbow 12s linear infinite;
    }`;
        document.body.appendChild(homePageStyle);
      } else {
        if (!homePageStyle) return;

        homePageStyle.remove();
        homePageStyle = undefined;
      }
    }
  },
};
