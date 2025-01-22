import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style/index.css' /* 主题色 */
import Linkcard from "./components/Linkcard.vue"
import HomeUnderline from "./components/HomeUnderline.vue"
import xgplayer from "./components/xgplayer.vue"
import confetti from "./components/confetti.vue"
import update from "./components/update.vue"
import ArticleMetadata from "./components/ArticleMetadata.vue"

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

import vitepressMusic from 'vitepress-plugin-music' // 音乐播放器插件
import 'vitepress-plugin-music/lib/css/index.css'

import 'virtual:group-icons.css' //代码组样式

import { NolebaseGitChangelogPlugin } from '@nolebase/vitepress-plugin-git-changelog/client'
import '@nolebase/vitepress-plugin-git-changelog/client/style.css' // 更新日志插件


const playlist = [
    {
    name: '白鸽乌鸦相爱的戏码-潘成（皮卡潘）',
    author: '潘成(皮卡潘)',
    file: '/mp3/白鸽乌鸦相爱的戏码-潘成（皮卡潘）.mp3',
    },
    {
    name: '春娇与志明-街道办GDC&欧阳耀莹',
    author: '街道办GDC&欧阳耀莹',
    file: '/mp3/春娇与志明-街道办GDC&欧阳耀莹.mp3',
    },
    {
    name: '最后一页',
    author: '最后一页',
    file: '/mp3/最后一页.mp3',
    },
    {
    name: '起风了-买辣椒也用券',
    author: '买辣椒也用券',
    file: '/mp3/起风了-买辣椒也用券.mp3',
    },
    {
    name: '平凡之路',
    author: '平凡之路',
    file: '/mp3/平凡之路.mp3',
    },
    {
    name: '光辉岁月-Beyond',
    author: 'Beyond',
    file: '/mp3/光辉岁月-Beyond.mp3',
    },
    {
    name: '白鸽乌鸦相爱的戏码-潘成（皮卡潘）',
    author: '潘成(皮卡潘)',
    file: 'https://dlink.host/musics/aHR0cHM6Ly9vbmVkcnYtbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvc3Rvcl9vbmVkcnZfb25taWNyb3NvZnRfY29tL0VaMVFFdmE1OEZCRXBad2F4YUltWGJFQnlwM3htQjlZZ2tQVTNMZU5Tenoya1E.mp3',
    },
    {
    name: '春娇与志明-街道办GDC&欧阳耀莹',
    author: '街道办GDC&欧阳耀莹',
    file: 'https://dlink.host/musics/aHR0cHM6Ly9vbmVkcnYtbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvc3Rvcl9vbmVkcnZfb25taWNyb3NvZnRfY29tL0VXcjhTbE8xbVdOR3NYUVZ0MWhxRzBvQkdmMllsZFpIclJhMDJ4cnJ0NndNclE.mp3',
    },
    {
    name: '最后一页',
    author: '最后一页',
    file: 'https://dlink.host/musics/aHR0cHM6Ly9vbmVkcnYtbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvc3Rvcl9vbmVkcnZfb25taWNyb3NvZnRfY29tL0VXWTlMRmJha1hkTXFYUzlnN0pmcEJzQlJpN05NME5TWVFLbkVSaGYxellZSHc.mp3',
    },
    {
    name: '起风了-买辣椒也用券',
    author: '买辣椒也用券',
    file: 'https://dlink.host/musics/aHR0cHM6Ly9vbmVkcnYtbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvc3Rvcl9vbmVkcnZfb25taWNyb3NvZnRfY29tL0VkZjZxenFyOWtSUHVpS3RPU0NzZVlNQmNvSzljSXF4ZGstSk96aUZGbVZPX1E.mp3',
    },
    {
    name: '平凡之路',
    author: '平凡之路',
    file: 'https://dlink.host/musics/aHR0cHM6Ly9vbmVkcnYtbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvc3Rvcl9vbmVkcnZfb25taWNyb3NvZnRfY29tL0VkTzVsT2VLYXpkQmctY3BLYjFhWHhnQnlCZ3Jxc1VmYUQ4WHRVWHlZQlBvdWc.mp3',
    },
    {
    name: '光辉岁月-Beyond',
    author: 'Beyond',
    file: 'https://dlink.host/musics/aHR0cHM6Ly9vbmVkcnYtbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvc3Rvcl9vbmVkcnZfb25taWNyb3NvZnRfY29tL0VkZVdzWnNsU2FoTmp2b3BIbW5TbGtBQnFFZ2ZuQ1NsMHY3Y2k3NUZibUwwR0E.mp3',
    },
]



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


    enhanceApp({app, router, ctx}) {
    // 注册全局组件
        app.component('Linkcard', Linkcard)
        app.component('HomeUnderline', HomeUnderline)
        app.component('xgplayer', xgplayer)
        app.component("DataPanel", DataPanel)
        app.component('confetti', confetti)
        app.component('update', update)
        app.component('ArticleMetadata', ArticleMetadata)
        app.component('FriendsLinks', FriendsLinks) // 注册友链组件
        app.component('MNavLinks', MNavLinks) // 注册自定义导航组件
        app.use(NolebaseGitChangelogPlugin) // 注册更新日志插件
        vitepressMusic(playlist) // 注册音乐播放器组件
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
        if (typeof window !== 'undefined') {
        // 在客户端添加样式
        const style = document.createElement('style')
        style.textContent = `
        .lantern-container {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            height: 0;
            z-index: 100;
            pointer-events: none;
        }

        .lantern {
            position: absolute;
            top: -15px;
            width: 70px;
            height: 70px;
            animation: sway 4s infinite ease-in-out;
        }

        .lantern::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 120px;
            height: 120px;
            background: radial-gradient(circle, 
            rgba(255, 140, 0, 0.4) 0%,
            rgba(255, 100, 0, 0.2) 40%,
            rgba(255, 87, 0, 0) 70%
            );
            border-radius: 50%;
            filter: blur(8px);
            animation: glow 2s infinite ease-in-out;
        }

        .lantern::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 70 70'%3E%3Ccircle cx='35' cy='35' r='30' fill='%23ff0000' stroke='%23FFD700' stroke-width='2'/%3E%3Crect x='25' y='0' width='20' height='8' fill='%23FFD700' rx='2'/%3E%3Crect x='25' y='62' width='20' height='8' fill='%23FFD700' rx='2'/%3E%3Cline x1='35' y1='10' x2='35' y2='60' stroke='%23FFD700' stroke-width='1' stroke-dasharray='2,3'/%3E%3Cline x1='15' y1='35' x2='55' y2='35' stroke='%23FFD700' stroke-width='1' stroke-dasharray='2,3'/%3E%3C/svg%3E") no-repeat center/contain;
            filter: drop-shadow(0 0 15px rgba(255, 140, 0, 0.5));
        }

        .lantern-tassel {
            position: absolute;
            bottom: -15px;
            left: 50%;
            transform: translateX(-50%);
            width: 2px;
            height: 20px;
            background: linear-gradient(to bottom, #FFD700, #FFA500);
        }

        .lantern-text {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: #FFD700;
            font-size: 2em;
            font-weight: bold;
            text-shadow: 0 0 10px rgba(255, 215, 0, 0.7);
            font-family: "STKaiti", "KaiTi", serif;
            z-index: 2;
            writing-mode: vertical-lr;
            text-orientation: upright;
        }

        .lantern:nth-child(1) { left: 2%; animation-delay: 0s; }
        .lantern:nth-child(2) { left: 8%; animation-delay: 0.5s; }
        .lantern:nth-child(3) { right: 8%; animation-delay: 0.3s; }
        .lantern:nth-child(4) { right: 2%; animation-delay: 0.8s; }

        @keyframes sway {
            0%, 100% { 
            transform: rotate(-5deg) translateY(-5px);
            }
            50% { 
            transform: rotate(5deg) translateY(0);
            }
        }

        @keyframes glow {
            0%, 100% { 
            opacity: 0.8; 
            transform: translate(-50%, -50%) scale(1);
            }
            50% { 
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.1);
            }
        }

        .dark .lantern::after {
            filter: drop-shadow(0 0 20px rgba(255, 140, 0, 0.6));
        }

        .dark .lantern::before {
            opacity: 0.9;
        }

        @media (max-width: 768px) {
            .lantern {
            width: 60px;
            height: 60px;
            }
            
            .lantern::before {
            width: 100px;
            height: 100px;
            }

            .lantern-text {
            font-size: 1.7em;
            }
            
            .lantern-tassel {
            height: 15px;
            }
        }
        
        /* Previous CSS styles remain the same until the lantern positioning... */

        .lantern:nth-child(1) { left: 1%; animation-delay: 0s; }
        .lantern:nth-child(2) { left: 5%; animation-delay: 0.5s; }
        .lantern:nth-child(3) { right: 5%; animation-delay: 0.3s; }
        .lantern:nth-child(4) { right: 1%; animation-delay: 0.8s; }

        /* Add responsive positioning for different screen sizes */
        @media (min-width: 1200px) {
        .lantern:nth-child(1) { left: 2%; }
        .lantern:nth-child(2) { left: 7%; }
        .lantern:nth-child(3) { right: 7%; }
        .lantern:nth-child(4) { right: 2%; }
        }

        @media (max-width: 768px) {
        .lantern:nth-child(1) { left: 0.5%; }
        .lantern:nth-child(2) { left: 4%; }
        .lantern:nth-child(3) { right: 4%; }
        .lantern:nth-child(4) { right: 0.5%; }
        }
        `
        document.head.appendChild(style)

        // 添加灯笼元素
        const lanternContainer = document.createElement('div')
        lanternContainer.className = 'lantern-container'
        lanternContainer.innerHTML = `
        <div class="lantern">
            <span class="lantern-text">春</span>
            <div class="lantern-tassel"></div>
        </div>
        <div class="lantern">
            <span class="lantern-text">节</span>
            <div class="lantern-tassel"></div>
        </div>
        <div class="lantern">
            <span class="lantern-text">快</span>
            <div class="lantern-tassel"></div>
        </div>
        <div class="lantern">
            <span class="lantern-text">乐</span>
            <div class="lantern-tassel"></div>
        </div>
        `
        document.body.appendChild(lanternContainer)
    }
    },
}