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



export default {
    extends: DefaultTheme,

    Layout() {
        return h(MyLayout, null, {
            default: () => h(DefaultTheme.Layout, null, {
                'doc-footer-before': () => h(backtotop), // 使用doc-footer-before插槽
            })
        })
    },

    setup() { // 图片放大功能初始化
    const route = useRoute();
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