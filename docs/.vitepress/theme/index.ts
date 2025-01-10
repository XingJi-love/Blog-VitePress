import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style/index.css' /* 主题色 */
import Linkcard from "./components/Linkcard.vue"
import HomeUnderline from "./components/HomeUnderline.vue"
import xgplayer from "./components/xgplayer.vue"
import confetti from "./components/confetti.vue"
import update from "./components/update.vue"
import ArticleMetadata from "./components/ArticleMetadata.vue"
import backtotop from "./components/backtotop.vue"
import MyLayout from './components/MyLayout.vue'

import { inBrowser } from "vitepress";
import busuanzi from "busuanzi.pure.js";
import DataPanel from "./components/DataPanel.vue";

import mediumZoom from 'medium-zoom';
import { onMounted, watch, nextTick } from 'vue';
import { useRoute } from 'vitepress';

import { NProgress } from 'nprogress-v2/dist/index.js' // 进度条组件
import 'nprogress-v2/dist/index.css' // 进度条样式

import FriendsLinks from './components/FriendsLinks.vue' // 友链组件

import { useData } from 'vitepress' // VitePress搭建个人导航
import MNavLinks from './components/MNavLinks.vue' // 自定义导航组件

import giscusTalk from 'vitepress-plugin-comment-with-giscus' // giscus评论插件



export default {
    extends: DefaultTheme,


    Layout() {
        const props: Record<string, any> = {}
        // 获取 frontmatter
        const { frontmatter } = useData()

        /* 添加自定义 class */
        if (frontmatter.value?.layoutClass) {
            props.class = frontmatter.value.layoutClass
        }

        return h(MyLayout, props)
    },




setup() { // 图片放大功能初始化
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
    giscusTalk({
        repo: 'XingJi-love/Blog-VitePress', //仓库
        repoId: 'R_kgDONn5frQ', //仓库ID
        category: 'Announcements', // 讨论分类
        categoryId: 'DIC_kwDONn5frc4Cl5sS', //讨论分类ID
        mapping: 'pathname',
        inputPosition: 'bottom',
        lang: 'zh-CN',
    }, 
    {
    frontmatter, route
    },
    //默认值为true，表示已启用，此参数可以忽略；
    //如果为false，则表示未启用
    //您可以使用“comment:true”序言在页面上单独启用它
    true
    );
},





    enhanceApp({app, router}) { 
    // 注册全局组件
        app.component('Linkcard', Linkcard)
        app.component('HomeUnderline', HomeUnderline)
        app.component('xgplayer', xgplayer)
        app.component("DataPanel", DataPanel)
        app.component('confetti', confetti)
        app.component('update', update)
        app.component('ArticleMetadata', ArticleMetadata)
        app.component('FriendsLinks', FriendsLinks) // 注册友链组件
        app.component('MNavLinks' , MNavLinks) // 注册自定义导航组件
        if (inBrowser) {
            NProgress.configure({ showSpinner: false })
            router.onBeforeRouteChange = () => {
              NProgress.start() // 开始进度条
            }
            router.onAfterRouteChanged = () => {
                busuanzi.fetch()
                NProgress.done() // 停止进度条
            }
        }
    },
}