import type { NavData } from "./types";

export const NAV_DATA: NavData[] = [
  {
    title: "人工智能",
    items: [
      {
        badge: "在线",
        icon: "https://grok.com/icon-512x512.png",
        title: "Grok",
        link: "https://grok.com/",
      },
      {
        badge: "在线",
        icon: "https://claude.ai/favicon.ico",
        title: "Claude",
        link: "https://claude.ai/",
      },
      {
        badge: "在线",
        icon: "https://www.gstatic.com/lamda/images/gemini_favicon_f069958c85030456e93de685481c559f160ea06b.png",
        title: "Gemini",
        link: "https://gemini.google.com/",
      },
      {
        badge: "在线",
        icon: "https://cdn.oaistatic.com/assets/favicon-180x180-od45eci6.webp",
        title: "ChatGPT",
        link: "https://chatgpt.com/",
      },
      {
        badge: "在线",
        icon: "https://www.perplexity.ai/favicon.ico",
        title: "Perplexity",
        link: "https://www.perplexity.ai/",
      },
      {
        badge: "在线",
        icon: "https://chat.deepseek.com/favicon.svg",
        title: "DeepSeek",
        link: "https://chat.deepseek.com/",
      },
      {
        badge: "在线",
        icon: "https://notebooklm.google.com/_/static/branding/v4/light_mode/favicon/favicon.svg",
        title: "NotebookLM",
        link: "https://notebooklm.google.com/",
      },
    ],
  },
  {
    title: "常用工具",
    items: [
      {
        icon: "https://caniuse.com/img/favicon-128.png",
        title: "Can I use",
        desc: "前端 API 兼容性查询",
        link: "https://caniuse.com",
      },
      {
        icon: "https://tinypng.com/images/apple-touch-icon.png",
        title: "TinyPNG",
        desc: "在线图片压缩工具",
        link: "https://tinypng.com",
      },
      {
        icon: "/icons/carbon.png",
        title: "Carbon",
        desc: "代码图片生成",
        link: "https://carbon.now.sh",
      },
      {
        icon: "https://npm.devtool.tech/logo.svg",
        title: "npm 库在线执行",
        desc: "在浏览器控制台中在线运行调试与测试 npm 中的库",
        link: "https://npm.devtool.tech",
      },
      {
        icon: "https://devtool.tech/logo.svg",
        title: "开发者武器库",
        desc: "开发者武器库，做开发者最专业最好用的专业工具箱",
        link: "https://devtool.tech",
      },
      {
        icon: "https://tool.lu/favicon.ico",
        title: "在线工具",
        desc: "开发人员的工具箱",
        link: "https://tool.lu",
      },
      {
        icon: "/icons/json-cn.ico",
        title: "Json 中文网",
        desc: "JSON 在线解析及格式化验证",
        link: "https://www.json.cn",
      },
      {
        icon: "https://transform.tools/static/favicon.png",
        title: "transform",
        desc: "一个支持多语言的在线转换器",
        link: "https://transform.tools/json-schema-to-typescript",
      },
      {
        icon: "/icons/excalidraw.ico",
        title: "Excalidraw",
        desc: "手绘风格流程图",
        link: "https://excalidraw.com",
      },
    ],
  },
  {
    title: "高质量周刊与博客",
    items: [
      {
        badge: "周一更新",
        icon: "/icons/frontender-ua.png",
        title: "Frontend Weekly",
        desc: "前端周刊",
        link: "https://frontender-ua.medium.com",
      },
      {
        badge: "周五更新",
        icon: "/icons/ruanyifeng.jpeg",
        title: "科技爱好者周刊",
        desc: "阮一峰的科技爱好者周刊",
        link: "https://www.ruanyifeng.com/blog/archives.html",
      },
      {
        badge: "周五更新",
        icon: "https://s0.ssl.qhres2.com/static/3444fd94a3c31e92.ico",
        title: "奇舞周刊",
        desc: "领略前端技术 阅读奇舞周刊（360 前端团队）",
        link: "https://weekly.75.team",
      },
      {
        badge: "周一更新",
        icon: "https://img.alicdn.com/imgextra/i3/O1CN01uKTVpD1UK8BCxFBwo_!!6000000002498-2-tps-500-500.png",
        title: "MDH Weekly",
        desc: "云谦的前端周刊",
        link: "https://mdhweekly.com/weekly",
      },
      {
        badge: "每周更新",
        icon: "/icons/geekhyt-weekly.png",
        title: "前端食堂技术周刊",
        desc: "周周尝鲜，人工筛选前端圈每周最新资讯",
        link: "https://hungryturbo.zhubai.love",
        // link: 'https://github.com/Geekhyt/weekly'
      },
      {
        icon: "https://overreacted.io/icons/icon-96x96.png?v=8c19a894ebc3f54d282a8f2418cf5398",
        title: "Overreacted",
        desc: "Dan Abramov 的个人博客",
        link: "https://overreacted.io/zh-hans",
      },
      {
        icon: "https://xiaolincoding.com/logo.webp",
        title: "小林coding",
        desc: "小林 x 图解计算机基础（计算机网络、操作系统、计算机组成、数据库）",
        link: "https://xiaolincoding.com",
      },
      {
        icon: "https://antfu.me/favicon.svg",
        title: "Blog - Anthony Fu",
        desc: "Vue, Vite, Nuxt 核心团队成员 | VueUse, Slidev, Vitest, UnoCSS 作者",
        link: "https://antfu.me/posts",
      },
      {
        icon: "https://cdn.zhangxinxu.com/zxx_ico.png",
        title: "鑫空间-鑫生活",
        desc: "张鑫旭的个人博客",
        link: "https://www.zhangxinxu.com/wordpress",
      },
      {
        icon: "/icons/ascoders.png",
        title: "前端精读周刊",
        desc: "帮你理解最前沿、实用的技术",
        link: "https://github.com/ascoders/weekly",
      },
      {
        icon: "/icons/mqyqingfeng.jpeg",
        title: "冴羽博客",
        desc: "四个系列：JavaScript深入系列、JavaScript专题系列、ES6系列、React系列",
        link: "https://github.com/mqyqingfeng/Blog",
      },
    ],
  },
  {
    title: "AI 导航",
    items: [
      {
        badge: "对话",
        icon: "/icons/chatgpt.png",
        title: "ChatGPT（最强）",
        link: "https://chat.openai.com/chat",
      },
      {
        icon: "/icons/chatgpt.png",
        title: "ChatGPT 镜像站点列表",
        link: "https://github.com/xx025/carrot",
      },
      {
        badge: "笔记",
        icon: "https://www.notion.so/images/logo-ios.png",
        title: "Notion AI",
        link: "https://www.notion.so",
      },
      {
        badge: "绘画",
        icon: "https://www.midjourney.com/apple-touch-icon.png",
        title: "Midjourney",
        link: "https://www.midjourney.com",
      },
      {
        badge: "绘画",
        icon: "https://stablediffusionweb.com/favicon.ico",
        title: "Stable Diffusion",
        link: "https://stablediffusionweb.com",
      },
    ],
  },
  {
    title: "茂茂的站点导航",
    items: [
      {
        icon: "/icons/logo.png",
        title: "前端日常笔记",
        desc: "日常笔记记录（零零散散啥都记系列）",
        link: "https://github.com/maomao1996/daily-notes",
      },
      {
        icon: "/icons/logo.png",
        title: "前端思维导图",
        desc: "用思维导图的方式总结个人所学知识",
        link: "https://mindmap.fe-mm.com",
      },
      {
        icon: "https://qwerty.fe-mm.com/apple-touch-icon.png",
        title: "Qwerty Learner",
        desc: "为键盘工作者设计的单词记忆与英语肌肉记忆锻炼软件",
        link: "https://qwerty.fe-mm.com",
      },
      {
        icon: "/icons/logo.png",
        title: "mmPlayer",
        desc: "mmPlayer 在线音乐播放器",
        link: "https://netease-music.fe-mm.com",
      },
    ],
  },
  {
    title: "React 生态",
    items: [
      {
        icon: "https://zh-hans.reactjs.org/favicon.ico",
        title: "React",
        desc: "用于构建用户界面的 JavaScript 库",
        link: "https://zh-hans.reactjs.org",
      },
      {
        icon: "https://reactrouter.com/favicon-light.png",
        title: "React Router",
        desc: "React 的声明式路由",
        link: "https://reactrouter.com",
      },
      {
        icon: "https://nextjs.org/static/favicon/safari-pinned-tab.svg",
        title: "Next.js",
        desc: "一个用于 Web 的 React 框架",
        link: "https://nextjs.org",
      },
      {
        icon: "https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg",
        title: "UmiJS",
        desc: "插件化的企业级前端应用框架",
        link: "https://umijs.org",
      },
      {
        icon: "https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png",
        title: "Ant Design",
        desc: "一套企业级 UI 设计语言和 React 组件库",
        link: "https://ant.design",
      },
      {
        icon: "https://gw.alipayobjects.com/zos/bmw-prod/69a27fcc-ce52-4f27-83f1-c44541e9b65d.svg",
        title: "Ant Design Mobile",
        desc: "构建移动 WEB 应用程序的 React 组件库",
        link: "https://mobile.ant.design",
      },
      {
        icon: "/icons/mui.svg",
        title: "Material UI",
        desc: "基于 Google Material Design 设计语言的 React 组件库",
        link: "https://mui.com",
      },
      {
        icon: "/icons/mantine.svg",
        title: "Mantine UI",
        desc: "一套功能齐全的 React 组件库",
        link: "https://mantine.dev",
      },
      {
        icon: "https://docs.pmnd.rs/apple-touch-icon.png",
        title: "Zustand",
        desc: "一个小型、快速、可扩展的 React 状态管理解决方案",
        link: "https://docs.pmnd.rs/zustand/getting-started/introduction",
      },
      {
        icon: "https://valtio.pmnd.rs/favicon.ico",
        title: "Valtio",
        desc: "makes proxy-state simple for React and Vanilla",
        link: "https://valtio.pmnd.rs",
      },
      {
        icon: "https://jotai.org/favicon.svg",
        title: "Jotai",
        desc: "primitive and flexible state management for React",
        link: "https://jotai.org",
      },
      {
        icon: "https://cn.redux.js.org/img/redux.svg",
        title: "Redux",
        desc: "JavaScript 应用的状态容器，提供可预测的状态管理",
        link: "https://cn.redux.js.org",
      },
      {
        icon: "https://zh.mobx.js.org/assets/mobx.png",
        title: "MobX",
        desc: "一个小型、快速、可扩展的 React 状态管理解决方案",
        link: "https://zh.mobx.js.org",
      },
      {
        icon: "https://ahooks.js.org/simple-logo.svg",
        title: "ahooks",
        desc: "一套高质量可靠的 React Hooks 库",
        link: "https://ahooks.js.org/zh-CN",
      },
    ],
  },
  {
    title: "Vue 生态",
    items: [
      {
        icon: "https://cn.vuejs.org/logo.svg",
        title: "Vue 3",
        desc: "渐进式 JavaScript 框架",
        link: "https://cn.vuejs.org",
      },
      {
        icon: "https://cn.vuejs.org/logo.svg",
        title: "Vue 2",
        desc: "渐进式 JavaScript 框架",
        link: "https://v2.cn.vuejs.org",
      },
      {
        icon: "https://cn.vuejs.org/logo.svg",
        title: "Vue Router",
        desc: "Vue.js 的官方路由\n为 Vue.js 提供富有表现力、可配置的、方便的路由",
        link: "https://router.vuejs.org/zh",
      },
      {
        icon: "https://pinia.vuejs.org/logo.svg",
        title: "Pinia",
        desc: "符合直觉的 Vue.js 状态管理库",
        link: "https://pinia.vuejs.org/zh",
      },
      {
        icon: "https://nuxt.com/icon.png",
        title: "Nuxt.js",
        desc: "一个基于 Vue.js 的通用应用框架",
        link: "https://nuxt.com",
      },
      {
        icon: "https://vueuse.org/favicon.svg",
        title: "VueUse",
        desc: "Vue Composition API 的常用工具集",
        link: "https://vueuse.org",
      },
      {
        icon: "https://element-plus.org/images/element-plus-logo-small.svg",
        title: "Element Plus",
        desc: "基于 Vue 3，面向设计师和开发者的组件库",
        link: "https://element-plus.org",
      },
      {
        icon: "https://www.antdv.com/assets/logo.1ef800a8.svg",
        title: "Ant Design Vue",
        desc: "Ant Design 的 Vue 实现，开发和服务于企业级后台产品",
        link: "https://antdv.com",
      },
      {
        icon: "https://fastly.jsdelivr.net/npm/@vant/assets/logo.png",
        title: "Vant",
        desc: "轻量、可定制的移动端 Vue 组件库",
        link: "https://vant-ui.github.io/vant",
      },
      {
        icon: "https://webapp.didistatic.com/static/webapp/shield/Cube-UI_logo.ico",
        title: "Cube UI",
        desc: "基于 Vue.js 实现的精致移动端组件库",
        link: "https://didi.github.io/cube-ui",
      },
      {
        icon: "https://img14.360buyimg.com/imagetools/jfs/t1/167902/2/8762/791358/603742d7E9b4275e3/e09d8f9a8bf4c0ef.png",
        title: "NutUI",
        desc: "京东风格的轻量级移动端组件库",
        link: "https://nutui.jd.com",
      },
    ],
  },
  {
    title: "JavaScript 框架类库",
    items: [
      {
        icon: "https://svelte.dev/svelte-logo-horizontal.svg",
        title: "Svelte",
        desc: "将声明性组件转换为精准高效更新 DOM 的 JavaScript 代码",
        link: "https://svelte.dev",
      },
      {
        // icon: 'https://simpleicons.org/icons/jquery.svg',
        icon: "/icons/jquery.svg",
        title: "jQuery API 中文文档",
        desc: "一个兼容多浏览器的 JavaScript 框架",
        link: "https://jquery.cuishifeng.cn",
      },
    ],
  },
  {
    title: "CSS 相关",
    items: [
      {
        icon: "https://postcss.org/assets/logo-3e39b0aa.svg",
        title: "PostCSS",
        desc: "一个用 JavaScript 转换 CSS 的工具",
        link: "https://postcss.org",
      },
      {
        icon: "/icons/sass.svg",
        title: "Sass",
        desc: "一个成熟，稳定，功能强大的专业级 CSS 扩展语言",
        link: "https://sass-lang.com",
      },
      {
        icon: "/icons/tailwindcss.png",
        title: "TailwindCSS 中文网",
        desc: "一个功能类优先的 CSS 框架",
        link: "https://www.tailwindcss.cn",
      },
      {
        icon: "https://unocss.dev/logo.svg",
        title: "UnoCSS",
        desc: "一个即时的原子化 CSS 引擎",
        link: "https://unocss.dev",
      },
      {
        icon: "/icons/you-need-to-know-css.ico",
        title: "You-need-to-know-css",
        desc: "Web开发者应该掌握的CSS tricks",
        link: "https://lhammer.cn/You-need-to-know-css/#/zh-cn/",
      },
      {
        icon: "/icons/qishaoxuan-css-tricks.png",
        title: "CSS 常用样式",
        desc: "CSS 常用样式和奇技淫巧总结",
        link: "https://qishaoxuan.github.io/css_tricks/",
      },
      {
        title: "CSS 常见布局",
        desc: "CSS 各种常见的布局实现",
        link: "https://sweet-kk.github.io/css-layout/",
      },
    ],
  },
  {
    title: "小程序相关",
    items: [
      {
        icon: "https://res.wx.qq.com/a/wx_fed/assets/res/OTE0YTAw.png",
        title: "微信小程序文档",
        desc: "微信小程序官方开发者文档",
        link: "https://developers.weixin.qq.com/miniprogram/dev/framework/",
      },
      {
        icon: "/icons/alipay.svg",
        title: "支付宝小程序文档",
        desc: "支付宝小程序官方开发者文档",
        link: "https://opendoc.alipay.com/mini/",
      },
    ],
  },
  {
    title: "跨平台",
    items: [
      {
        icon: "/icons/electron.svg",
        title: "Electron",
        desc: "使用 Web 技术构建跨平台桌面应用程序",
        link: "https://www.electronjs.org/zh/",
      },
      {
        icon: "/icons/tauri.png",
        title: "Tauri",
        desc: "使用 Web 技术构建更小、更快、更安全的桌面应用程序",
        link: "https://tauri.app/zh-cn/",
      },
      {
        icon: "/icons/taro.svg",
        title: "Taro",
        desc: "多端统一开发解决方案",
        link: "https://taro.jd.com",
      },
      {
        icon: "https://web-assets.dcloud.net.cn/unidoc/zh/icon.png",
        title: "uni-app",
        desc: "一个使用 Vue.js 开发所有前端应用的框架",
        link: "https://uniapp.dcloud.net.cn",
      },
      {
        icon: "https://mpxjs.cn/favicon.ico",
        title: "Mpx",
        desc: "增强型跨端小程序框架",
        link: "https://mpxjs.cn",
      },
    ],
  },
  {
    title: "Node 相关",
    items: [
      {
        icon: "/icons/nodejs.svg",
        title: "Node.js",
        desc: "Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境",
        link: "https://nodejs.org/zh-cn",
      },
      {
        icon: "https://expressjs.com/images/favicon.png",
        title: "Express",
        desc: "基于 Node.js 平台，快速、开放、极简的 Web 开发框架",
        link: "https://expressjs.com",
      },
      {
        icon: "/icons/koa.svg",
        title: "Koa",
        desc: "基于 Node.js 平台的下一代 web 开发框架",
        link: "https://koajs.com",
      },
      {
        icon: "https://www.eggjs.org/favicon.png",
        title: "Egg",
        desc: "为企业级框架和应用而生",
        link: "https://www.eggjs.org/zh-CN",
      },
      {
        icon: "https://d33wubrfki0l68.cloudfront.net/e937e774cbbe23635999615ad5d7732decad182a/26072/logo-small.ede75a6b.svg",
        title: "Nest.js 中文文档",
        desc: "用于构建高效且可伸缩的服务端应用程序的渐进式 Node.js 框架",
        link: "https://docs.nestjs.cn",
      },
    ],
  },
  {
    title: "可视化",
    items: [
      {
        icon: "/icons/echarts.png",
        title: "ECharts",
        desc: "一个基于 JavaScript 的开源可视化图表库",
        link: "https://echarts.apache.org/zh/index.html",
      },
      {
        icon: "/icons/antv.png",
        title: "AntV",
        desc: "蚂蚁集团全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、无限可能的数据可视化最佳实践。",
        link: "https://antv.vision/zh/",
      },
      {
        icon: "https://d3js.org/favicon.png",
        title: "D3.js",
        desc: "一个遵循 Web 标准用于可视化数据的 JavaScript 库",
        link: "https://d3js.org",
      },
      {
        icon: "https://www.chartjs.org/favicon.ico",
        title: "Chart.js",
        desc: "一个简单而灵活的 JavaScript 图表库",
        link: "https://www.chartjs.org",
      },
      {
        icon: "https://threejs.org/files/favicon.ico",
        // icon: 'https://threejs.org/files/favicon_white.ico',
        title: "Three.js",
        desc: "JavaScript 3d 库",
        link: "https://threejs.org",
      },
    ],
  },
  {
    title: "编译&构建&打包",
    items: [
      {
        icon: "https://www.webpackjs.com/icon_180x180.png",
        title: "Webpack 中文网",
        desc: "一个用于现代 JavaScript 应用程序的静态模块打包工具",
        link: "https://www.webpackjs.com",
      },
      {
        icon: "https://cn.vitejs.dev/logo.svg",
        title: "Vite 中文文档",
        desc: "下一代前端工具链",
        link: "https://cn.vitejs.dev",
      },
      {
        icon: "https://www.rollupjs.com/img/favicon.png",
        title: "Rollup",
        desc: "Rollup 是一个 JavaScript 模块打包器",
        link: "https://www.rollupjs.com",
      },
      {
        icon: "https://turbo.build/images/favicon-dark/apple-touch-icon.png",
        title: "Turbo",
        desc: "Turbo is an incremental bundler and build system optimized for JavaScript and TypeScript, written in Rust",
        link: "https://turbo.build",
      },
      {
        icon: "https://www.babeljs.cn/img/favicon.png",
        title: "Babel",
        desc: "Babel 是一个 JavaScript 编译器",
        link: "https://www.babeljs.cn",
      },
      {
        icon: "https://esbuild.github.io/favicon.svg",
        title: "esbuild",
        desc: "An extremely fast bundler for the web",
        link: "https://esbuild.github.io",
      },
      {
        icon: "https://swc.rs/favicon/apple-touch-icon.png",
        title: "SWC",
        desc: "Rust-based platform for the Web",
        link: "https://swc.rs",
      },
    ],
  },
  {
    title: "图标库",
    items: [
      {
        icon: "https://img.alicdn.com/imgextra/i4/O1CN01Z5paLz1O0zuCC7osS_!!6000000001644-55-tps-83-82.svg",
        title: "iconfont",
        desc: "国内功能很强大且图标内容很丰富的矢量图标库，提供矢量图标下载、在线存储、格式转换等功能",
        link: "https://www.iconfont.cn",
      },
      {
        icon: "https://lf1-cdn2-tos.bytegoofy.com/bydesign/iconparksite/logo.svg",
        title: "IconPark 图标库",
        desc: "IconPark图标库是一个通过技术驱动矢量图标样式的开源图标库，可以实现根据单一 SVG 源文件变换出多种主题， 具备丰富的分类、更轻量的代码和更灵活的使用场景；致力于构建高质量、统一化、可定义的图标资源，让大多数人都能够选择适合自己的风格图标",
        link: "https://iconpark.oceanengine.com/official",
      },
      {
        icon: "/icons/iconify.png",
        title: "Iconify",
        desc: "一个开源的图标集合和图标工具",
        link: "https://iconify.design",
      },
      {
        icon: "https://icones.js.org/favicon.svg",
        title: "Icônes",
        desc: "基于 Iconify 的图标浏览器",
        link: "https://icones.js.org",
      },
      {
        icon: "/icons/simpleicons.svg",
        title: "Simple Icons",
        desc: "包含 2457 种流行品牌的免费 SVG 图标库",
        link: "https://simpleicons.org",
      },
      {
        icon: "https://emoji.muan.co/appicon.png",
        title: "Emoji searcher",
        desc: "emoji 表情大全",
        link: "https://emoji.muan.co",
      },
      {
        icon: "https://www.webfx.com/wp-content/uploads/2021/10/favicon.png",
        title: "Emoji Cheat Sheet",
        desc: "可以在 GitHub 中使用的 emoji 表情",
        link: "https://www.webfx.com/tools/emoji-cheat-sheet",
      },
      {
        icon: "https://gitmoji.dev/static/apple-icon-144x144.png",
        title: "gitmoji",
        desc: "可以在 git 中使用的 emoji 表情",
        link: "https://gitmoji.dev",
      },
    ],
  },
  {
    title: "前端学习资料",
    items: [
      {
        icon: "https://developer.mozilla.org/apple-touch-icon.6803c6f0.png",
        title: "MDN | Web 开发者指南",
        desc: "Mozilla 的开发者平台，提供了大量关于 HTML、CSS 和 JavaScript 的详细文档以及广泛的 Web API 参考资",
        link: "https://developer.mozilla.org/zh-CN",
      },
      {
        icon: "https://static.runoob.com/images/favicon.ico",
        title: "菜鸟教程",
        desc: "学的不仅是技术，更是梦想！",
        link: "https://www.runoob.com",
      },
      {
        icon: "/icons/es6.svg",
        title: "ES6 入门教程",
        desc: "阮一峰的网络日志",
        link: "http://es6.ruanyifeng.com",
      },
      {
        badge: "官网",
        icon: "https://www.typescriptlang.org/icons/icon-72x72.png?v=8944a05a8b601855de116c8a56d3b3ae",
        title: "TypeScript",
        desc: "TypeScript 是具有类型语法的 JavaScript",
        link: "https://www.typescriptlang.org/zh/",
      },
    ],
  },
  {
    title: "社区",
    items: [
      {
        title: "Github",
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
        },
        desc: "一个面向开源及私有软件项目的托管平台",
        link: "https://github.com",
      },
      {
        icon: "https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon.png?v=c78bd457575a",
        title: "Stack Overflow",
        desc: "全球最大的技术问答网站",
        link: "https://stackoverflow.com",
      },
      {
        title: "稀土掘金",
        icon: "https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web//static/favicons/apple-touch-icon.png",
        desc: "面向全球中文开发者的技术内容分享与交流平台",
        link: "https://juejin.cn",
      },
      {
        title: "V2EX",
        icon: "https://www.v2ex.com/static/icon-192.png",
        desc: "一个关于分享和探索的地方",
        link: "https://www.v2ex.com",
      },
      {
        title: "SegmentFault 思否",
        icon: "https://static.segmentfault.com/main_site_next/0dc4bace/touch-icon.png",
        desc: "技术问答开发者社区",
        link: "https://segmentfault.com",
      },
      {
        title: "博客园",
        // icon: 'https://common.cnblogs.com/favicon.ico',
        icon: "/icons/cnblogs.svg",
        desc: "博客园是一个面向开发者的知识分享社区",
        link: "https://www.cnblogs.com",
      },
      {
        title: "知乎",
        icon: "https://static.zhihu.com/heifetz/assets/apple-touch-icon-60.362a8eac.png",
        desc: "中文互联网高质量的问答社区和创作者聚集的原创内容平台",
        link: "https://juejin.cn",
      },
    ],
  },
  {
    title: "指纹",
    items: [
      {
        title: "指纹检测",
        icon: "https://logo.clearbit.com/www.yalala.com",
        link: "https://www.yalala.com/",
      },
      {
        title: "像素扫描",
        icon: "https://logo.clearbit.com/pixelscan.net",
        link: "https://pixelscan.net/",
      },
    ],
  },
  {
    title: "DNS",
    items: [
      {
        title: "DNS 服务器大全",
        icon: "https://logo.clearbit.com/dns.icoa.cn",
        link: "https://dns.icoa.cn/",
      },
    ],
  },
  {
    title: "Ping",
    items: [
      {
        title: "Ping",
        icon: "https://logo.clearbit.com/ping.pe",
        link: "http://ping.pe/",
      },
      {
        title: "炸了么",
        icon: "https://logo.clearbit.com/zhale.me",
        link: "https://zhale.me/",
      },
      {
        title: "ITDOG",
        icon: "https://logo.clearbit.com/www.itdog.cn",
        link: "https://www.itdog.cn/",
      },
      {
        title: "Ping.Sx",
        icon: "https://logo.clearbit.com/ping.sx",
        link: "https://ping.sx/",
      },
    ],
  },
  {
    title: "IP查询",
    items: [
      {
        title: "IP.SB",
        icon: "https://logo.clearbit.com/ip.sb",
        link: "https://ip.sb/",
      },
      {
        title: "IP111",
        icon: "https://logo.clearbit.com/ip111.cn",
        link: "http://ip111.cn/",
      },
      {
        title: "iP138",
        icon: "https://logo.clearbit.com/ip138.com",
        link: "https://ip138.com/",
      },
      {
        title: "IP125",
        icon: "https://logo.clearbit.com/ip125.com",
        link: "https://ip125.com/",
      },
      {
        title: "IPinfo",
        icon: "https://logo.clearbit.com/ipinfo.io",
        link: "https://ipinfo.io/",
      },
      {
        title: "Sukka",
        icon: "https://logo.clearbit.com/ip.skk.moe",
        link: "https://ip.skk.moe/",
      },
      {
        title: "IP查询",
        icon: "https://logo.clearbit.com/ipw.cn",
        link: "https://ipw.cn/",
      },
      {
        title: "IP/DNS",
        icon: "https://logo.clearbit.com/ipleak.net",
        link: "https://ipleak.net/",
      },
      {
        title: "WHOER",
        icon: "https://logo.clearbit.com/whoer.net",
        link: "https://whoer.net/",
      },
      {
        title: "IPv6 测试",
        icon: "https://logo.clearbit.com/test-ipv6.com",
        link: "http://test-ipv6.com/",
      },
      {
        title: "BrowserLeaks",
        icon: "https://logo.clearbit.com/browserleaks.com",
        link: "https://browserleaks.com/ip",
      },
    ],
  },
  {
    title: "国内测速",
    items: [
      {
        title: "测速网",
        icon: "https://logo.clearbit.com/www.speedtest.cn",
        link: "https://www.speedtest.cn/",
      },
      {
        title: "东北大学网络测速网站",
        icon: "https://logo.clearbit.com/speed.neu.edu.cn",
        link: "http://speed.neu.edu.cn/",
      },
      {
        title: "中国科学技术大学测速网站",
        icon: "https://logo.clearbit.com/test.ustc.edu.cn",
        link: "https://test.ustc.edu.cn/",
      },
    ],
  },
  {
    title: "国外测速",
    items: [
      {
        title: "FAST",
        icon: "https://logo.clearbit.com/fast.com",
        link: "https://fast.com/",
      },
      {
        title: "CF测速",
        icon: "https://logo.clearbit.com/speed.cloudflare.com",
        link: "https://speed.cloudflare.com/",
      },
      {
        title: "Speedtest",
        icon: "https://logo.clearbit.com/www.speedtest.net",
        link: "https://www.speedtest.net/",
      },
    ],
  },
  {
    title: "谷歌",
    items: [
      {
        title: "Voice",
        icon: "https://logo.clearbit.com/voice.google.com",
        link: "https://voice.google.com/",
      },
      {
        title: "Gmail",
        icon: "https://logo.clearbit.com/mail.google.com",
        link: "https://mail.google.com/",
      },
      {
        title: "Google",
        icon: "https://logo.clearbit.com/google.com",
        link: "https://google.com/",
      },
      {
        title: "YouTube",
        icon: "https://logo.clearbit.com/youtube.com",
        link: "https://youtube.com/",
      },
      {
        title: "云端硬盘",
        icon: "https://logo.clearbit.com/drive.google.com",
        link: "https://drive.google.com/",
      },
      {
        title: "网上应用店",
        icon: "https://logo.clearbit.com/chromewebstore.google.com",
        link: "https://chromewebstore.google.com/",
      },
      {
        title: "Google 相册",
        icon: "https://logo.clearbit.com/photos.google.com",
        link: "https://photos.google.com/",
      },
      {
        title: "Google 翻译",
        icon: "https://logo.clearbit.com/translate.google.com",
        link: "https://translate.google.com/",
      },
      {
        title: "Google 地图",
        icon: "https://logo.clearbit.com/maps.google.com",
        link: "https://maps.google.com/",
      },
      {
        title: "Search Console",
        icon: "https://logo.clearbit.com/search.google.com",
        link: "https://search.google.com/search-console",
      },
      {
        title: "Google 信息中心",
        icon: "https://logo.clearbit.com/myaccount.google.com",
        link: "https://myaccount.google.com/dashboard",
      },
    ],
  },
  {
    title: "邮箱",
    items: [
      {
        title: "QQ邮箱",
        icon: "https://logo.clearbit.com/mail.qq.com",
        link: "https://mail.qq.com/",
      },
      {
        title: "Outlook",
        icon: "https://logo.clearbit.com/outlook.live.com",
        link: "https://outlook.live.com/",
      },
      {
        title: "网易邮箱",
        icon: "https://logo.clearbit.com/email.163.com",
        link: "https://email.163.com/",
      },
      {
        title: "Yandex",
        icon: "https://logo.clearbit.com/mail.yandex.com",
        link: "https://mail.yandex.com/",
      },
      {
        title: "邮箱测试",
        icon: "https://logo.clearbit.com/www.mail-tester.com",
        link: "https://www.mail-tester.com/",
      },
      {
        title: "Snapmail",
        icon: "https://logo.clearbit.com/www.snapmail.cc",
        link: "https://www.snapmail.cc/",
      },
      {
        title: "临时邮箱",
        icon: "https://logo.clearbit.com/www.linshiyouxiang.net",
        link: "https://www.linshiyouxiang.net/",
      },
    ],
  },
  {
    title: "x-ui面板",
    items: [
      {
        title: "甲骨文-no.06",
        icon: "https://logo.clearbit.com/no.06.ijg.cc",
        link: "http://no.06.ijg.cc:4321/LISIR/",
      },
      {
        title: "甲骨文-no.07",
        icon: "https://logo.clearbit.com/no.07.ijg.cc",
        link: "http://no.07.ijg.cc:4321/LISIR/",
      },
      {
        title: "甲骨文-no.08",
        icon: "https://logo.clearbit.com/no.08.ijg.cc",
        link: "http://no.08.ijg.cc:4321/LISIR/",
      },
      {
        title: "甲骨文-no.09",
        icon: "https://logo.clearbit.com/no.09.ijg.cc",
        link: "http://no.09.ijg.cc:4321/LISIR/",
      },
      {
        title: "甲骨文-no.10",
        icon: "https://logo.clearbit.com/no.10.ijg.cc",
        link: "http://no.10.ijg.cc:4321/LISIR/",
      },
      {
        title: "甲骨文-no.11",
        icon: "https://logo.clearbit.com/no.11.ijg.cc",
        link: "http://no.11.ijg.cc:4321/LISIR/",
      },
      {
        title: "甲骨文-no.12",
        icon: "https://logo.clearbit.com/no.12.ijg.cc",
        link: "http://no.12.ijg.cc:4321/LISIR/",
      },
      {
        title: "甲骨文-no.13",
        icon: "https://logo.clearbit.com/no.13.ijg.cc",
        link: "http://no.13.ijg.cc:4321/LISIR/",
      },
    ],
  },
  {
    title: "个人账号",
    items: [
      {
        title: "iris",
        icon: "https://logo.clearbit.com/iris.to",
        link: "https://iris.to/",
      },
      {
        title: "Shipito",
        icon: "https://logo.clearbit.com/www.shipito.com",
        link: "https://www.shipito.com/",
      },
      {
        title: "PayPal美国",
        icon: "https://logo.clearbit.com/www.paypal.com",
        link: "https://www.paypal.com/us/home",
      },
      {
        title: "Apple ID美国",
        icon: "https://logo.clearbit.com/appleid.apple.com",
        link: "https://appleid.apple.com/us/",
      },
    ],
  },
  {
    title: "个人网站",
    items: [
      {
        title: "NPM",
        icon: "https://logo.clearbit.com/npm.lisir.me",
        link: "https://npm.lisir.me/",
      },
      {
        title: "1Panel",
        icon: "https://logo.clearbit.com/1panel.lisir.me",
        link: "https://1panel.lisir.me/lisir",
      },
      {
        title: "Xboard",
        icon: "https://logo.clearbit.com/xb.lisir.me",
        link: "https://xb.lisir.me/b2f3f35e#/login",
      },
      {
        title: "网址缩短",
        icon: "https://logo.clearbit.com/ijg.cc",
        link: "https://ijg.cc/admin/",
      },
      {
        title: "监控面板",
        icon: "https://logo.clearbit.com/nz.lisir.me",
        link: "https://nz.lisir.me/",
      },
      {
        title: "兰空图床",
        icon: "https://logo.clearbit.com/lsky.lisir.me",
        link: "https://lsky.lisir.me/",
      },
      {
        title: "时光相册",
        icon: "https://logo.clearbit.com/photo.lisir.me",
        link: "https://photo.lisir.me/",
      },
      {
        title: "个人博客",
        icon: "https://logo.clearbit.com/lisir.me",
        link: "https://lisir.me/",
      },
      {
        title: "我的云盘",
        icon: "https://logo.clearbit.com/cloud.lisir.me",
        link: "https://cloud.lisir.me/",
      },
      {
        title: "Portainer",
        icon: "https://logo.clearbit.com/docker.lisir.me",
        link: "https://docker.lisir.me/",
      },
      {
        title: "Siteproxy",
        icon: "https://logo.clearbit.com/siteproxy.libk.top",
        link: "https://siteproxy.libk.top/",
      },
      {
        title: "Syncthing",
        icon: "https://logo.clearbit.com/sync.lisir.me",
        link: "https://sync.lisir.me/",
      },
      {
        title: "文件快递柜",
        icon: "https://logo.clearbit.com/temp.lisir.me",
        link: "https://temp.lisir.me/#/",
      },
      {
        title: "qBittorrent",
        icon: "https://logo.clearbit.com/qb.lisir.me",
        link: "https://qb.lisir.me/",
      },
      {
        title: "code-server",
        icon: "https://logo.clearbit.com/code.lisir.me",
        link: "https://code.lisir.me/",
      },
      {
        title: "Vaultwarden",
        icon: "https://logo.clearbit.com/passwd.lisir.me",
        link: "https://passwd.lisir.me/",
      },
      {
        title: "GitHub 文件加速",
        icon: "https://logo.clearbit.com/ghproxy.libk.top",
        link: "https://ghproxy.libk.top/",
      },
      {
        title: "SingBox 订阅转换",
        icon: "https://logo.clearbit.com/singbox.libk.top",
        link: "https://singbox.libk.top/",
      },
    ],
  },
  {
    title: "刷题",
    items: [
      {
        title: "拼题A",
        icon: "https://logo.clearbit.com/pintia.cn",
        link: "https://pintia.cn/",
      },
      {
        title: "面试鸭",
        icon: "https://logo.clearbit.com/www.mianshiya.com",
        link: "https://www.mianshiya.com/",
      },
      {
        title: "LeetCode",
        icon: "https://logo.clearbit.com/leetcode.com",
        link: "https://leetcode.com/",
      },
    ],
  },
  {
    title: "网课视频",
    items: [
      {
        title: "雨课堂",
        icon: "https://logo.clearbit.com/www.yuketang.cn",
        link: "https://www.yuketang.cn/web",
      },
      {
        title: "对分易",
        icon: "https://logo.clearbit.com/www.duifene.com",
        link: "https://www.duifene.com/",
      },
      {
        title: "腾讯课堂",
        icon: "https://logo.clearbit.com/ke.qq.com",
        link: "https://ke.qq.com/",
      },
      {
        title: "学堂在线",
        icon: "https://logo.clearbit.com/www.xuetangx.com",
        link: "https://www.xuetangx.com/",
      },
      {
        title: "我要自学网",
        icon: "https://logo.clearbit.com/www.51zxw.net",
        link: "https://www.51zxw.net/",
      },
      {
        title: "网易公开课",
        icon: "https://logo.clearbit.com/open.163.com",
        link: "https://open.163.com/",
      },
      {
        title: "网易云课堂",
        icon: "https://logo.clearbit.com/study.163.com",
        link: "https://study.163.com/",
      },
      {
        title: "中国大学MOOC",
        icon: "https://logo.clearbit.com/www.icourse163.org",
        link: "https://www.icourse163.org/",
      },
      {
        title: "头歌实践教学平台",
        icon: "https://logo.clearbit.com/www.educoder.net",
        link: "https://www.educoder.net/",
      },
    ],
  },
  {
    title: "编程学习",
    items: [
      {
        title: "廖雪峰",
        icon: "https://logo.clearbit.com/liaoxuefeng.com",
        link: "https://liaoxuefeng.com/",
      },
      {
        title: "菜鸟教程",
        icon: "https://logo.clearbit.com/www.runoob.com",
        link: "https://www.runoob.com/",
      },
      {
        title: "黑马程序员",
        icon: "https://logo.clearbit.com/www.itheima.com",
        link: "https://www.itheima.com/",
      },
      {
        title: "pythonABC",
        icon: "https://logo.clearbit.com/pythonabc.org",
        link: "http://pythonabc.org/",
      },
      {
        title: "C语言中文网",
        icon: "https://logo.clearbit.com/c.biancheng.net",
        link: "http://c.biancheng.net/",
      },
      {
        title: "w3school 在线教程",
        icon: "https://logo.clearbit.com/www.w3school.com.cn",
        link: "https://www.w3school.com.cn/",
      },
      {
        title: "API Reference Document",
        icon: "https://logo.clearbit.com/www.apiref.com",
        link: "https://www.apiref.com/",
      },
    ],
  },
  {
    title: "打字练习",
    items: [
      {
        title: "双拼练习",
        icon: "https://logo.clearbit.com/api.ihint.me",
        link: "https://api.ihint.me/shuang/",
      },
      {
        title: "TypingClub",
        icon: "https://logo.clearbit.com/www.typingclub.com",
        link: "https://www.typingclub.com/",
      },
      {
        title: "Typing Practice",
        icon: "https://logo.clearbit.com/www.keybr.com",
        link: "https://www.keybr.com/",
      },
      {
        title: "Qwerty Learner",
        icon: "https://logo.clearbit.com/qwerty.kaiyi.cool",
        link: "https://qwerty.kaiyi.cool/",
      },
      {
        title: "VIM Adventures",
        icon: "https://logo.clearbit.com/vim-adventures.com",
        link: "https://vim-adventures.com/",
      },
      {
        title: "Learn Git Branching",
        icon: "https://logo.clearbit.com/learngitbranching.js.org",
        link: "https://learngitbranching.js.org/",
      },
    ],
  },
  {
    title: "知识海洋",
    items: [
      {
        title: "Brilliant",
        icon: "https://logo.clearbit.com/brilliant.org",
        link: "https://brilliant.org/",
      },
      {
        title: "Sci-Hub",
        icon: "https://logo.clearbit.com/sci-hub.se",
        link: "https://sci-hub.se/",
      },
      {
        title: "中国知网",
        icon: "https://logo.clearbit.com/www.cnki.net",
        link: "https://www.cnki.net/",
      },
      {
        title: "万事指南",
        icon: "https://logo.clearbit.com/zh.wikihow.com",
        link: "https://zh.wikihow.com/",
      },
      {
        title: "瑞文文摘",
        icon: "https://logo.clearbit.com/www.rwtext.com",
        link: "https://www.rwtext.com/",
      },
      {
        title: "懒人Excel",
        icon: "https://logo.clearbit.com/www.lanrenexcel.com",
        link: "https://www.lanrenexcel.com/",
      },
      {
        title: "Z-Library",
        icon: "https://logo.clearbit.com/zh.singlelogin.rs",
        link: "https://zh.singlelogin.rs/",
      },
      {
        title: "公文素材库",
        icon: "https://logo.clearbit.com/www.bsmz.net",
        link: "http://www.bsmz.net/",
      },
      {
        title: "互联网档案馆",
        icon: "https://logo.clearbit.com/archive.org",
        link: "https://archive.org/",
      },
      {
        title: "CS-Books-Store",
        icon: "https://logo.clearbit.com/github.com",
        link: "https://github.com/Jackpopc/CS-Books-Store",
      },
      {
        title: "Sci-Hub文献检索",
        icon: "https://logo.clearbit.com/sci-hub.org.cn",
        link: "https://sci-hub.org.cn/",
      },
      {
        title: "Google 学术搜索",
        icon: "https://logo.clearbit.com/scholar.google.com",
        link: "https://scholar.google.com/",
      },
    ],
  },
  {
    title: "学历证书",
    items: [
      {
        title: "学信网",
        icon: "https://logo.clearbit.com/account.chsi.com.cn",
        link: "https://account.chsi.com.cn/",
      },
      {
        title: "全国征兵网",
        icon: "https://logo.clearbit.com/www.gfbzb.gov.cn",
        link: "https://www.gfbzb.gov.cn/",
      },
      {
        title: "国家开发银行",
        icon: "https://logo.clearbit.com/sls.cdb.com.cn",
        link: "https://sls.cdb.com.cn/#/",
      },
      {
        title: "中国教育考试网",
        icon: "https://logo.clearbit.com/www.neea.edu.cn",
        link: "https://www.neea.edu.cn/",
      },
      {
        title: "普通话在线报名",
        icon: "https://logo.clearbit.com/bm.cltt.org",
        link: "https://bm.cltt.org/",
      },
      {
        title: "陕西招生考试信息网",
        icon: "https://logo.clearbit.com/www.sneac.com",
        link: "https://www.sneac.com/",
      },
      {
        title: "全国大学生创业服务网",
        icon: "https://logo.clearbit.com/cy.ncss.cn",
        link: "https://cy.ncss.cn/",
      },
      {
        title: "国家体育总局职业技能鉴定",
        icon: "https://logo.clearbit.com/www.sportosta.org.cn",
        link: "https://www.sportosta.org.cn/",
      },
      {
        title: "中国计算机技术职业资格网",
        icon: "https://logo.clearbit.com/www.ruankao.org.cn",
        link: "https://www.ruankao.org.cn/",
      },
      {
        title: "陕西服装工程学院就业信息网",
        icon: "https://logo.clearbit.com/sxfu.bysjy.com.cn",
        link: "https://sxfu.bysjy.com.cn/",
      },
    ],
  },
  {
    title: "英语阅读",
    items: [
      {
        title: "Newsela",
        icon: "https://logo.clearbit.com/newsela.com",
        link: "https://newsela.com/",
      },
      {
        title: "田间小站",
        icon: "https://logo.clearbit.com/www.tjxz.cc",
        link: "https://www.tjxz.cc/",
      },
      {
        title: "magazinelib",
        icon: "https://logo.clearbit.com/magazinelib.com",
        link: "https://magazinelib.com/",
      },
      {
        title: "toPhonetics",
        icon: "https://logo.clearbit.com/tophonetics.com",
        link: "https://tophonetics.com/",
      },
    ],
  },
  {
    title: "电影",
    items: [
      {
        title: "NO视频",
        icon: "https://logo.clearbit.com/www.novipnoad.net",
        link: "https://www.novipnoad.net/",
      },
      {
        title: "低端影视",
        icon: "https://logo.clearbit.com/ddys.pro",
        link: "https://ddys.pro/",
      },
      {
        title: "在线之家",
        icon: "https://logo.clearbit.com/www.zxzj.pro",
        link: "https://www.zxzj.pro/",
      },
      {
        title: "人人影视",
        icon: "https://logo.clearbit.com/yyets.dmesg.app",
        link: "https://yyets.dmesg.app/",
      },
      {
        title: "厂长资源",
        icon: "https://logo.clearbit.com/czzy.top",
        link: "https://czzy.top/",
      },
      {
        title: "FIX字幕侠",
        icon: "https://logo.clearbit.com/zimuxia.cn",
        link: "http://zimuxia.cn/",
      },
      {
        title: "Porn Dude",
        icon: "https://logo.clearbit.com/theporndude.com",
        link: "https://theporndude.com/zh",
      },
      {
        title: "小馒头影视网",
        icon: "https://logo.clearbit.com/mov.5ixmt.com",
        link: "https://mov.5ixmt.com/",
      },
    ],
  },
  {
    title: "游戏",
    items: [
      {
        title: "Steam",
        icon: "https://logo.clearbit.com/store.steampowered.com",
        link: "https://store.steampowered.com/",
      },
      {
        title: "Ubisoft",
        icon: "https://logo.clearbit.com/www.ubisoft.com",
        link: "https://www.ubisoft.com/",
      },
      {
        title: "Epic Games",
        icon: "https://logo.clearbit.com/www.epicgames.com",
        link: "https://www.epicgames.com/",
      },
    ],
  },
  {
    title: "短链",
    items: [
      {
        title: "缩短",
        icon: "https://logo.clearbit.com/",
        link: "javascript:(function()%7Bvar%20d=document,w=window,enc=encodeURIComponent,e=w.getSelection,k=d.getSelection,x=d.selection,s=(e?e():(k)?k():(x?x.createRange().text:0)),s2=((s.toString()==%27%27)?s:enc(s)),f=%27https://ijg.cc/index.php%27,l=d.location,p=%27?url=%27+enc(l.href)+%27&title=%27+enc(d.title)+%27&text=%27+s2,u=f+p;try%7Bthrow(%27ozhismygod%27);%7Dcatch(z)%7Ba=function()%7Bif(!w.open(u))l.href=u;%7D;if(/Firefox/.test(navigator.userAgent))setTimeout(a,0);else%20a();%7Dvoid(0);%7D)()",
      },
      {
        title: "即时缩短",
        icon: "https://logo.clearbit.com/",
        link: "javascript:(function()%7Bvar%20d=document,s=d.createElement('script');window.yourls_callback=function(r)%7Bif(r.short_url)%7Bprompt(r.message,r.short_url);%7Delse%7Balert('An%20error%20occured:%20'+r.message);%7D%7D;s.src='https://ijg.cc/index.php?url=%27+encodeURIComponent(d.location.href)+%27&jsonp=yourls%27;void(d.body.appendChild(s));%7D)();",
      },
      {
        title: "自定义缩短",
        icon: "https://logo.clearbit.com/",
        link: "javascript:(function()%7Bvar%20d=document,w=window,enc=encodeURIComponent,e=w.getSelection,k=d.getSelection,x=d.selection,s=(e?e():(k)?k():(x?x.createRange().text:0)),s2=((s.toString()==%27%27)?s:enc(s)),f=%27https://ijg.cc/index.php%27,l=d.location,k=prompt(%22%E5%8F%AF%E9%80%89%E8%87%AA%E5%AE%9A%E4%B9%89%E7%9F%AD%E9%93%BE%22),k2=(k?%27&keyword=%27+k:%22%22),p=%27?url=%27+enc(l.href)+%27&title=%27+enc(d.title)+%27&text=%27+s2+k2,u=f+p;if(k!=null)%7Btry%7Bthrow(%27ozhismygod%27);%7Dcatch(z)%7Ba=function()%7Bif(!w.open(u))l.href=u;%7D;if(/Firefox/.test(navigator.userAgent))setTimeout(a,0);else%20a();%7Dvoid(0)%7D%7D)()",
      },
      {
        title: "即时自定义缩短",
        icon: "https://logo.clearbit.com/",
        link: "javascript:(function()%7Bvar%20d=document,k=prompt('%E5%8F%AF%E9%80%89%E8%87%AA%E5%AE%9A%E4%B9%89%E7%9F%AD%E9%93%BE'),s=d.createElement('script');if(k!=null){window.yourls_callback=function(r)%7Bif(r.short_url)%7Bprompt(r.message,r.short_url);%7Delse%7Balert('An%20error%20occured:%20'+r.message);%7D%7D;s.src='https://ijg.cc/index.php?url=%27+encodeURIComponent(d.location.href)+%27&keyword=%27+k+%27&jsonp=yourls%27;void(d.body.appendChild(s));%7D%7D)();",
      },
    ],
  },
  {
    title: "工具箱",
    items: [
      {
        title: "ToolB",
        icon: "https://logo.clearbit.com/toolb.cn",
        link: "https://toolb.cn/",
      },
      {
        title: "码工具",
        icon: "https://logo.clearbit.com/www.matools.com",
        link: "https://www.matools.com/",
      },
      {
        title: "IT Tools",
        icon: "https://logo.clearbit.com/it-tools.tech",
        link: "https://it-tools.tech/",
      },
      {
        title: "BEJSON",
        icon: "https://logo.clearbit.com/www.bejson.com",
        link: "https://www.bejson.com/",
      },
      {
        title: "在线工具",
        icon: "https://logo.clearbit.com/tool.lu",
        link: "https://tool.lu/",
      },
      {
        title: "即时工具",
        icon: "https://logo.clearbit.com/www.67tool.com",
        link: "https://www.67tool.com/",
      },
      {
        title: "菜鸟工具",
        icon: "https://logo.clearbit.com/c.runoob.com",
        link: "https://c.runoob.com/",
      },
      {
        title: "iLovePDF",
        icon: "https://logo.clearbit.com/www.ilovepdf.com",
        link: "https://www.ilovepdf.com/zh-cn",
      },
      {
        title: "iLoveIMG",
        icon: "https://logo.clearbit.com/www.iloveimg.com",
        link: "https://www.iloveimg.com/zh-cn",
      },
      {
        title: "在线工具大全",
        icon: "https://logo.clearbit.com/www.tooleyes.com",
        link: "https://www.tooleyes.com/",
      },
    ],
  },
  {
    title: "云短信",
    items: [
      {
        title: "云短信",
        icon: "https://logo.clearbit.com/yunduanxin.net",
        link: "https://yunduanxin.net/",
      },
      {
        title: "SMS-Activate",
        icon: "https://logo.clearbit.com/sms-activate.io",
        link: "https://sms-activate.io/",
      },
    ],
  },
  {
    title: "生成器",
    items: [
      {
        title: "美国地址生成",
        icon: "https://logo.clearbit.com/www.haoweichi.com",
        link: "http://www.haoweichi.com/",
      },
      {
        title: "信用卡生成器",
        icon: "https://logo.clearbit.com/ccardgenerator.com",
        link: "https://ccardgenerator.com/",
      },
      {
        title: "伪名称生成器",
        icon: "https://logo.clearbit.com/www.fakenamegenerator.com",
        link: "https://www.fakenamegenerator.com/",
      },
      {
        title: "美国身份证生成",
        icon: "https://logo.clearbit.com/www.ssnzk.com",
        link: "https://www.ssnzk.com/",
      },
    ],
  },
  {
    title: "图文编辑",
    items: [
      {
        title: "语雀",
        icon: "https://logo.clearbit.com/www.yuque.com",
        link: "https://www.yuque.com/login",
      },
      {
        title: "抠图",
        icon: "https://logo.clearbit.com/www.remove.bg",
        link: "https://www.remove.bg/",
      },
      {
        title: "Notion",
        icon: "https://logo.clearbit.com/www.notion.so",
        link: "https://www.notion.so/",
      },
      {
        title: "Draw.io",
        icon: "https://logo.clearbit.com/app.diagrams.net",
        link: "https://app.diagrams.net/",
      },
      {
        title: "GitBook",
        icon: "https://logo.clearbit.com/www.gitbook.com",
        link: "https://www.gitbook.com/",
      },
      {
        title: "TinyPNG",
        icon: "https://logo.clearbit.com/tinypng.com",
        link: "https://tinypng.com/",
      },
      {
        title: "金山文档",
        icon: "https://logo.clearbit.com/www.kdocs.cn",
        link: "https://www.kdocs.cn/",
      },
      {
        title: "腾讯文档",
        icon: "https://logo.clearbit.com/docs.qq.com",
        link: "https://docs.qq.com/desktop",
      },
      {
        title: "老鱼简历",
        icon: "https://logo.clearbit.com/www.laoyujianli.com",
        link: "https://www.laoyujianli.com/",
      },
      {
        title: "在线表格转换",
        icon: "https://logo.clearbit.com/tableconvert.com",
        link: "https://tableconvert.com/",
      },
      {
        title: "Coolors调色板",
        icon: "https://logo.clearbit.com/coolors.co",
        link: "https://coolors.co/",
      },
      {
        title: "MD在线编辑器",
        icon: "https://logo.clearbit.com/markdown.devtool.tech",
        link: "https://markdown.devtool.tech/app",
      },
      {
        title: "html转md工具",
        icon: "https://logo.clearbit.com/www.helloworld.net",
        link: "https://www.helloworld.net/html2md",
      },
      {
        title: "在线图片转文字",
        icon: "https://logo.clearbit.com/pearocr.com",
        link: "https://pearocr.com/#/",
      },
      {
        title: "在线代码编辑器",
        icon: "https://logo.clearbit.com/codepen.io",
        link: "https://codepen.io/",
      },
      {
        title: "草料二维码生成器",
        icon: "https://logo.clearbit.com/cli.im",
        link: "https://cli.im/",
      },
    ],
  },
  {
    title: "在线平台",
    items: [
      {
        title: "Tidio",
        icon: "https://logo.clearbit.com/www.tidio.com",
        link: "https://www.tidio.com/panel/dashboard",
      },
      {
        title: "爱合租",
        icon: "https://logo.clearbit.com/www.ihezu.com.cn",
        link: "https://www.ihezu.com.cn/",
      },
      {
        title: "SM.MS",
        icon: "https://logo.clearbit.com/smms.app",
        link: "https://smms.app/",
      },
      {
        title: "Crx搜搜",
        icon: "https://logo.clearbit.com/www.crxsoso.com",
        link: "https://www.crxsoso.com/",
      },
      {
        title: "无损生活",
        icon: "https://logo.clearbit.com/flac.life",
        link: "https://flac.life/",
      },
      {
        title: "明月浩空",
        icon: "https://logo.clearbit.com/myhkw.cn",
        link: "https://myhkw.cn/",
      },
      {
        title: "和风天气",
        icon: "https://logo.clearbit.com/console.qweather.com",
        link: "https://console.qweather.com/",
      },
      {
        title: "PicX 图床",
        icon: "https://logo.clearbit.com/picx.xpoet.cn",
        link: "https://picx.xpoet.cn/",
      },
      {
        title: "GeoGebra",
        icon: "https://logo.clearbit.com/www.geogebra.org",
        link: "https://www.geogebra.org/",
      },
      {
        title: "显示器检测",
        icon: "https://logo.clearbit.com/screen.bmcx.com",
        link: "https://screen.bmcx.com/#welcome",
      },
      {
        title: "Composerize",
        icon: "https://logo.clearbit.com/www.composerize.com",
        link: "https://www.composerize.com/",
      },
      {
        title: "Tune My Music",
        icon: "https://logo.clearbit.com/www.tunemymusic.com",
        link: "https://www.tunemymusic.com/zh-CN",
      },
      {
        title: "GitHub 代理加速",
        icon: "https://logo.clearbit.com/ghp.ci",
        link: "https://ghp.ci/",
      },
      {
        title: "Linux 命令搜索引擎",
        icon: "https://logo.clearbit.com/wangchujiang.com",
        link: "https://wangchujiang.com/linux-command/",
      },
    ],
  },
  {
    title: "人工智能",
    items: [
      {
        title: "Grok",
        icon: "https://logo.clearbit.com/x.com",
        link: "https://x.com/i/grok",
      },
      {
        title: "Cursor",
        icon: "https://logo.clearbit.com/www.cursor.com",
        link: "https://www.cursor.com/",
      },
      {
        title: "Claude",
        icon: "https://logo.clearbit.com/claude.ai",
        link: "https://claude.ai/",
      },
      {
        title: "Gemini",
        icon: "https://logo.clearbit.com/gemini.google.com",
        link: "https://gemini.google.com/",
      },
      {
        title: "ChatBox",
        icon: "https://logo.clearbit.com/web.chatboxai.app",
        link: "https://web.chatboxai.app/",
      },
      {
        title: "ChatGPT",
        icon: "https://logo.clearbit.com/chatgpt.com",
        link: "https://chatgpt.com/",
      },
      {
        title: "Perplexity",
        icon: "https://logo.clearbit.com/www.perplexity.ai",
        link: "https://www.perplexity.ai/",
      },
    ],
  },
  {
    title: "快传",
    items: [
      {
        title: "空投",
        icon: "https://logo.clearbit.com/airportal.cn",
        link: "https://airportal.cn/",
      },
      {
        title: "Gofile",
        icon: "https://logo.clearbit.com/gofile.io",
        link: "https://gofile.io/",
      },
      {
        title: "蓝奏云",
        icon: "https://logo.clearbit.com/pc.woozooo.com",
        link: "https://pc.woozooo.com/",
      },
      {
        title: "奶牛快传",
        icon: "https://logo.clearbit.com/cowtransfer.com",
        link: "https://cowtransfer.com/",
      },
    ],
  },
  {
    title: "存储",
    items: [
      {
        title: "曲奇云",
        icon: "https://logo.clearbit.com/quqi.com",
        link: "https://quqi.com/",
      },
      {
        title: "PikPak",
        icon: "https://logo.clearbit.com/mypikpak.com",
        link: "https://mypikpak.com/",
      },
      {
        title: "夸克网盘",
        icon: "https://logo.clearbit.com/pan.quark.cn",
        link: "https://pan.quark.cn/",
      },
      {
        title: "迅雷云盘",
        icon: "https://logo.clearbit.com/pan.xunlei.com",
        link: "https://pan.xunlei.com/",
      },
      {
        title: "天翼云盘",
        icon: "https://logo.clearbit.com/cloud.189.cn",
        link: "https://cloud.189.cn/",
      },
      {
        title: "阿里云盘",
        icon: "https://logo.clearbit.com/www.aliyundrive.com",
        link: "https://www.aliyundrive.com/",
      },
      {
        title: "百度网盘",
        icon: "https://logo.clearbit.com/pan.baidu.com",
        link: "https://pan.baidu.com/",
      },
      {
        title: "OneDrive",
        icon: "https://logo.clearbit.com/onedrive.live.com",
        link: "https://onedrive.live.com/",
      },
      {
        title: "Teambition",
        icon: "https://logo.clearbit.com/www.teambition.com",
        link: "https://www.teambition.com/",
      },
    ],
  },
  {
    title: "CDN",
    items: [
      {
        title: "Gcore",
        icon: "https://logo.clearbit.com/auth.gcore.com",
        link: "https://auth.gcore.com/login/signin",
      },
      {
        title: "Cloudflare",
        icon: "https://logo.clearbit.com/dash.cloudflare.com",
        link: "https://dash.cloudflare.com/",
      },
    ],
  },
  {
    title: "SSL证书",
    items: [
      {
        title: "FreeSSL",
        icon: "https://logo.clearbit.com/freessl.cn",
        link: "https://freessl.cn/",
      },
      {
        title: "LookSSL",
        icon: "https://logo.clearbit.com/www.lookssl.com",
        link: "https://www.lookssl.com/",
      },
      {
        title: "Free SSL",
        icon: "https://logo.clearbit.com/freessl.org",
        link: "https://freessl.org/",
      },
      {
        title: "SSL For Free",
        icon: "https://logo.clearbit.com/www.sslforfree.com",
        link: "https://www.sslforfree.com/",
      },
    ],
  },
  {
    title: "域名查询",
    items: [
      {
        title: "狗狗查询",
        icon: "https://logo.clearbit.com/www.ggcx.com",
        link: "https://www.ggcx.com/",
      },
    ],
  },
  {
    title: "域名注册",
    items: [
      {
        title: "US.KG",
        icon: "https://logo.clearbit.com/nic.us.kg",
        link: "https://nic.us.kg/",
      },
      {
        title: "EU.org",
        icon: "https://logo.clearbit.com/nic.eu.org",
        link: "https://nic.eu.org/arf/en/login/",
      },
      {
        title: "DNSPod",
        icon: "https://logo.clearbit.com/console.dnspod.cn",
        link: "https://console.dnspod.cn/",
      },
      {
        title: "Freenom",
        icon: "https://logo.clearbit.com/www.freenom.com",
        link: "http://www.freenom.com/",
      },
      {
        title: "GoDaddy",
        icon: "https://logo.clearbit.com/www.godaddy.com",
        link: "https://www.godaddy.com/",
      },
      {
        title: "Gandi.net",
        icon: "https://logo.clearbit.com/www.gandi.net",
        link: "https://www.gandi.net/",
      },
      {
        title: "NameSilo",
        icon: "https://logo.clearbit.com/www.namesilo.com",
        link: "https://www.namesilo.com/account/",
      },
      {
        title: "Name.com",
        icon: "https://logo.clearbit.com/www.name.com",
        link: "https://www.name.com/",
      },
      {
        title: "Subreg.CZ",
        icon: "https://logo.clearbit.com/subreg.cz",
        link: "https://subreg.cz/en/",
      },
    ],
  },
  {
    title: "软件论坛",
    items: [
      {
        title: "李跳跳",
        icon: "https://logo.clearbit.com/www.litiaotiao.com",
        link: "https://www.litiaotiao.com/",
      },
      {
        title: "Simplify",
        icon: "https://logo.clearbit.com/www.sordum.org",
        link: "https://www.sordum.org/",
      },
      {
        title: "Smianao",
        icon: "https://logo.clearbit.com/www.smianao.com",
        link: "https://www.smianao.com/",
      },
      {
        title: "APKPure",
        icon: "https://logo.clearbit.com/apkpure.com",
        link: "https://apkpure.com/",
      },
      {
        title: "果核剥壳 ",
        icon: "https://logo.clearbit.com/www.ghxi.com",
        link: "https://www.ghxi.com/",
      },
      {
        title: "小众软件",
        icon: "https://logo.clearbit.com/www.appinn.com",
        link: "https://www.appinn.com/",
      },
      {
        title: "LITEAPKS",
        icon: "https://logo.clearbit.com/liteapks.com",
        link: "https://liteapks.com/",
      },
      {
        title: "423Down",
        icon: "https://logo.clearbit.com/www.423down.com",
        link: "https://www.423down.com/",
      },
      {
        title: "Mobilism",
        icon: "https://logo.clearbit.com/forum.mobilism.org",
        link: "https://forum.mobilism.org/",
      },
      {
        title: "FOSSHUB",
        icon: "https://logo.clearbit.com/www.fosshub.com",
        link: "https://www.fosshub.com/",
      },
      {
        title: "数字人民币",
        icon: "https://logo.clearbit.com/www.itrmb.com",
        link: "https://www.itrmb.com/",
      },
      {
        title: "APKMirror",
        icon: "https://logo.clearbit.com/www.apkmirror.com",
        link: "https://www.apkmirror.com/",
      },
      {
        title: "Uptodown",
        icon: "https://logo.clearbit.com/www.uptodown.com",
        link: "https://www.uptodown.com/",
      },
      {
        title: "AlternativeTo",
        icon: "https://logo.clearbit.com/alternativeto.net",
        link: "https://alternativeto.net/",
      },
    ],
  },
  {
    title: "软件官网",
    items: [
      {
        title: "MAS",
        icon: "https://logo.clearbit.com/massgrave.dev",
        link: "https://massgrave.dev/",
      },
      {
        title: "7-Zip",
        icon: "https://logo.clearbit.com/www.7-zip.org",
        link: "https://www.7-zip.org/",
      },
      {
        title: "Fliqlo",
        icon: "https://logo.clearbit.com/fliqlo.com",
        link: "https://fliqlo.com/",
      },
      {
        title: "PicGo",
        icon: "https://logo.clearbit.com/molunerfinn.com",
        link: "https://molunerfinn.com/PicGo/",
      },
      {
        title: "PuTTY",
        icon: "https://logo.clearbit.com/www.putty.org",
        link: "https://www.putty.org/",
      },
      {
        title: "Motrix",
        icon: "https://logo.clearbit.com/motrix.app",
        link: "https://motrix.app/",
      },
      {
        title: "Ventoy",
        icon: "https://logo.clearbit.com/www.ventoy.net",
        link: "https://www.ventoy.net/cn/index.html",
      },
      {
        title: "WinRAR",
        icon: "https://logo.clearbit.com/www.rarlab.com",
        link: "https://www.rarlab.com/",
      },
      {
        title: "UniGetUI",
        icon: "https://logo.clearbit.com/www.marticliment.com",
        link: "https://www.marticliment.com/wingetui/",
      },
      {
        title: "FinalShell",
        icon: "https://logo.clearbit.com/www.hostbuf.com",
        link: "https://www.hostbuf.com/",
      },
      {
        title: "xManager",
        icon: "https://logo.clearbit.com/www.xmanagerapp.com",
        link: "https://www.xmanagerapp.com/",
      },
      {
        title: "图吧工具箱",
        icon: "https://logo.clearbit.com/www.tbtool.cn",
        link: "http://www.tbtool.cn/",
      },
      {
        title: "微PE工具箱",
        icon: "https://logo.clearbit.com/www.wepe.com.cn",
        link: "http://www.wepe.com.cn/",
      },
      {
        title: "DiskGenius",
        icon: "https://logo.clearbit.com/www.diskgenius.cn",
        link: "https://www.diskgenius.cn/",
      },
      {
        title: "angusj.com",
        icon: "https://logo.clearbit.com/www.angusj.com",
        link: "https://www.angusj.com/",
      },
      {
        title: "CR TubeGet",
        icon: "https://logo.clearbit.com/www.cr-soft.net",
        link: "http://www.cr-soft.net/crtubeget.html",
      },
      {
        title: "晨钟网络科技",
        icon: "https://logo.clearbit.com/jamcz.com",
        link: "https://jamcz.com/",
      },
      {
        title: "DNS Jumper",
        icon: "https://logo.clearbit.com/dnsjumper.net",
        link: "https://dnsjumper.net/",
      },
      {
        title: "PaintTool SAI",
        icon: "https://logo.clearbit.com/sai.piv.ink",
        link: "https://sai.piv.ink/",
      },
      {
        title: "Office Tool Plus",
        icon: "https://logo.clearbit.com/otp.landian.vip",
        link: "https://otp.landian.vip/zh-cn/",
      },
    ],
  },
  {
    title: "镜像站",
    items: [
      {
        title: "我告诉你",
        icon: "https://logo.clearbit.com/next.itellyou.cn",
        link: "https://next.itellyou.cn/",
      },
      {
        title: "中科大镜像站",
        icon: "https://logo.clearbit.com/mirrors.ustc.edu.cn",
        link: "https://mirrors.ustc.edu.cn/",
      },
      {
        title: "清华大学镜像站",
        icon: "https://logo.clearbit.com/mirrors.tuna.tsinghua.edu.cn",
        link: "https://mirrors.tuna.tsinghua.edu.cn/",
      },
      {
        title: "兰州大学镜像站",
        icon: "https://logo.clearbit.com/mirror.lzu.edu.cn",
        link: "https://mirror.lzu.edu.cn/",
      },
      {
        title: "HelloWindows",
        icon: "https://logo.clearbit.com/hellowindows.cn",
        link: "https://hellowindows.cn/",
      },
    ],
  },
  {
    title: "官方镜像",
    items: [
      {
        title: "Debian",
        icon: "https://logo.clearbit.com/www.debian.org",
        link: "https://www.debian.org/",
      },
      {
        title: "Ubuntu",
        icon: "https://logo.clearbit.com/ubuntu.com",
        link: "https://ubuntu.com/",
      },
      {
        title: "CentOS",
        icon: "https://logo.clearbit.com/www.centos.org",
        link: "https://www.centos.org/",
      },
      {
        title: "Manjaro",
        icon: "https://logo.clearbit.com/manjaro.org",
        link: "https://manjaro.org/",
      },
      {
        title: "Kali Linux",
        icon: "https://logo.clearbit.com/www.kali.org",
        link: "https://www.kali.org/",
      },
      {
        title: "Linux Kernel",
        icon: "https://logo.clearbit.com/kernel.org",
        link: "https://kernel.org/",
      },
    ],
  },
  {
    title: "电影磁链",
    items: [
      {
        title: "YTS",
        icon: "https://logo.clearbit.com/yts.mx",
        link: "https://yts.mx/",
      },
      {
        title: "SkrBT",
        icon: "https://logo.clearbit.com/skrbtgb.top",
        link: "https://skrbtgb.top/",
      },
      {
        title: "EZTV",
        icon: "https://logo.clearbit.com/eztv.re",
        link: "https://eztv.re/",
      },
      {
        title: "1337x",
        icon: "https://logo.clearbit.com/www.1337x.to",
        link: "https://www.1337x.to/",
      },
      {
        title: "海盗湾",
        icon: "https://logo.clearbit.com/thepiratebay.org",
        link: "https://thepiratebay.org/",
      },
      {
        title: "RARBG",
        icon: "https://logo.clearbit.com/rargb.to",
        link: "https://rargb.to/",
      },
      {
        title: "无极磁链",
        icon: "https://logo.clearbit.com/cili.re",
        link: "https://cili.re/",
      },
      {
        title: "SubsPlease",
        icon: "https://logo.clearbit.com/subsplease.org",
        link: "https://subsplease.org/",
      },
    ],
  },
  {
    title: "游戏磁链",
    items: [
      {
        title: "RuTracker",
        icon: "https://logo.clearbit.com/rutracker.org",
        link: "https://rutracker.org/",
      },
      {
        title: "FitGirl Repacks",
        icon: "https://logo.clearbit.com/fitgirl-repacks.site",
        link: "https://fitgirl-repacks.site/",
      },
    ],
  },
  {
    title: "托管",
    items: [
      {
        title: "npm",
        icon: "https://logo.clearbit.com/www.npmjs.com",
        link: "https://www.npmjs.com/",
      },
      {
        title: "Gitee",
        icon: "https://logo.clearbit.com/gitee.com",
        link: "https://gitee.com/",
      },
      {
        title: "Vercel",
        icon: "https://logo.clearbit.com/vercel.com",
        link: "https://vercel.com/",
      },
      {
        title: "GitLab",
        icon: "https://logo.clearbit.com/gitlab.com",
        link: "https://gitlab.com/",
      },
      {
        title: "GitHub",
        icon: "https://logo.clearbit.com/github.com",
        link: "https://github.com/",
      },
      {
        title: "LeanCloud",
        icon: "https://logo.clearbit.com/leancloud.app",
        link: "https://leancloud.app/",
      },
      {
        title: "GitHub Gist",
        icon: "https://logo.clearbit.com/gist.github.com",
        link: "https://gist.github.com/",
      },
      {
        title: "Docker Hub",
        icon: "https://logo.clearbit.com/hub.docker.com",
        link: "https://hub.docker.com/",
      },
      {
        title: "MongoDB Cloud",
        icon: "https://logo.clearbit.com/account.mongodb.com",
        link: "https://account.mongodb.com/",
      },
      {
        title: "YugabyteDB Managed",
        icon: "https://logo.clearbit.com/cloud.yugabyte.com",
        link: "https://cloud.yugabyte.com/",
      },
    ],
  },
  {
    title: "国内服务器",
    items: [
      {
        title: "腾讯云",
        icon: "https://logo.clearbit.com/console.cloud.tencent.com",
        link: "https://console.cloud.tencent.com/",
      },
      {
        title: "阿里云",
        icon: "https://logo.clearbit.com/account.aliyun.com",
        link: "https://account.aliyun.com/",
      },
      {
        title: "七牛云",
        icon: "https://logo.clearbit.com/www.qiniu.com",
        link: "https://www.qiniu.com/",
      },
    ],
  },
  {
    title: "国外服务器",
    items: [
      {
        title: "Vultr",
        icon: "https://logo.clearbit.com/my.vultr.com",
        link: "https://my.vultr.com/",
      },
      {
        title: "谷歌云",
        icon: "https://logo.clearbit.com/cloud.google.com",
        link: "https://cloud.google.com/",
      },
      {
        title: "微软云",
        icon: "https://logo.clearbit.com/azure.microsoft.com",
        link: "https://azure.microsoft.com/",
      },
      {
        title: "亚马逊云",
        icon: "https://logo.clearbit.com/aws.amazon.com",
        link: "https://aws.amazon.com/",
      },
      {
        title: "RackNerd",
        icon: "https://logo.clearbit.com/www.racknerd.com",
        link: "https://www.racknerd.com/",
      },
      {
        title: "甲骨文-美国",
        icon: "https://logo.clearbit.com/cloud.oracle.com",
        link: "https://cloud.oracle.com/?region=us-ashburn-1&tenant=lwp778057151&provider=OracleIdentityCloudService&source=email",
      },
      {
        title: "甲骨文-韩国",
        icon: "https://logo.clearbit.com/cloud.oracle.com",
        link: "https://cloud.oracle.com/?region=ap-seoul-1&tenant=lwp77805715196&provider=OracleIdentityCloudService&source=email",
      },
      {
        title: "Alibaba Cloud",
        icon: "https://logo.clearbit.com/www.alibabacloud.com",
        link: "https://www.alibabacloud.com/",
      },
    ],
  },
  {
    title: "大全",
    items: [
      {
        title: "合集网",
        icon: "https://logo.clearbit.com/233heji.com",
        link: "https://233heji.com/",
      },
      {
        title: "找字体",
        icon: "https://logo.clearbit.com/zfont.cn",
        link: "https://zfont.cn/",
      },
      {
        title: "字体大全",
        icon: "https://logo.clearbit.com/www.diyiziti.com",
        link: "http://www.diyiziti.com/List",
      },
      {
        title: "颜色表大全",
        icon: "https://logo.clearbit.com/www.5tu.cn",
        link: "https://www.5tu.cn/colors/yansebiao.html",
      },
      {
        title: "emoji表情大全",
        icon: "https://logo.clearbit.com/www.emojidaquan.com",
        link: "https://www.emojidaquan.com/",
      },
    ],
  },
  {
    title: "图像",
    items: [
      {
        title: "pixiv",
        icon: "https://logo.clearbit.com/www.pixiv.net",
        link: "https://www.pixiv.net/",
      },
      {
        title: "免费图片",
        icon: "https://logo.clearbit.com/pixabay.com",
        link: "https://pixabay.com/",
      },
      {
        title: "Pinterest",
        icon: "https://logo.clearbit.com/www.pinterest.com",
        link: "https://www.pinterest.com/",
      },
      {
        title: "ArtStation",
        icon: "https://logo.clearbit.com/www.artstation.com",
        link: "https://www.artstation.com/",
      },
      {
        title: "Wallhaven",
        icon: "https://logo.clearbit.com/wallhaven.cc",
        link: "https://wallhaven.cc/",
      },
      {
        title: "LOGO设计",
        icon: "https://logo.clearbit.com/www.logosc.cn",
        link: "https://www.logosc.cn/",
      },
      {
        title: "Free Icons",
        icon: "https://logo.clearbit.com/icon-icons.com",
        link: "https://icon-icons.com/",
      },
      {
        title: "PNG素材网",
        icon: "https://logo.clearbit.com/www.pngsucai.com",
        link: "https://www.pngsucai.com/",
      },
      {
        title: "探索3D模型",
        icon: "https://logo.clearbit.com/sketchfab.com",
        link: "https://sketchfab.com/3d-models",
      },
      {
        title: "免费图片素材",
        icon: "https://logo.clearbit.com/www.pexels.com",
        link: "https://www.pexels.com/zh-cn/",
      },
      {
        title: "矢量图标和贴纸",
        icon: "https://logo.clearbit.com/www.flaticon.com",
        link: "https://www.flaticon.com/",
      },
      {
        title: "混合搭配插图库",
        icon: "https://logo.clearbit.com/www.humaaans.com",
        link: "https://www.humaaans.com/",
      },
      {
        title: "PNGBAG素材网",
        icon: "https://logo.clearbit.com/www.pngbag.com",
        link: "https://www.pngbag.com/",
      },
      {
        title: "Vue Color Avatar",
        icon: "https://logo.clearbit.com/vue-color-avatar.vercel.app",
        link: "https://vue-color-avatar.vercel.app/",
      },
      {
        title: "阿里巴巴矢量图标库",
        icon: "https://logo.clearbit.com/www.iconfont.cn",
        link: "https://www.iconfont.cn/",
      },
      {
        title: "Icons | Font Awesome",
        icon: "https://logo.clearbit.com/fontawesome.com",
        link: "https://fontawesome.com/v5.15/icons",
      },
      {
        title: "HTML5 和 JavaScript 地图",
        icon: "https://logo.clearbit.com/simplemaps.com",
        link: "https://simplemaps.com/",
      },
    ],
  },
  {
    title: "影音",
    items: [
      {
        title: "免费音效",
        icon: "https://logo.clearbit.com/www.zapsplat.com",
        link: "https://www.zapsplat.com/",
      },
      {
        title: "音乐素材",
        icon: "https://logo.clearbit.com/cloud.smartsound.com",
        link: "https://cloud.smartsound.com/",
      },
      {
        title: "免费视频素材",
        icon: "https://logo.clearbit.com/www.videvo.net",
        link: "https://www.videvo.net/",
      },
      {
        title: "免版税音乐和音效",
        icon: "https://logo.clearbit.com/artlist.io",
        link: "https://artlist.io/",
      },
    ],
  },
  {
    title: "办公",
    items: [
      {
        title: "第一PPT",
        icon: "https://logo.clearbit.com/www.1ppt.com",
        link: "http://www.1ppt.com/",
      },
      {
        title: "办公资源网",
        icon: "https://logo.clearbit.com/www.bangongziyuan.com",
        link: "https://www.bangongziyuan.com/",
      },
      {
        title: "OfficePLUS",
        icon: "https://logo.clearbit.com/www.officeplus.cn",
        link: "https://www.officeplus.cn/",
      },
    ],
  },
  {
    title: "论坛",
    items: [
      {
        title: "V2EX",
        icon: "https://logo.clearbit.com/www.v2ex.com",
        link: "https://www.v2ex.com/",
      },
      {
        title: "Reddit",
        icon: "https://logo.clearbit.com/www.reddit.com",
        link: "https://www.reddit.com/",
      },
      {
        title: "MT论坛",
        icon: "https://logo.clearbit.com/bbs.binmt.cc",
        link: "https://bbs.binmt.cc/",
      },
      {
        title: "吾爱破解",
        icon: "https://logo.clearbit.com/www.52pojie.cn",
        link: "https://www.52pojie.cn/",
      },
      {
        title: "恩山论坛",
        icon: "https://logo.clearbit.com/www.right.com.cn",
        link: "https://www.right.com.cn/forum/",
      },
      {
        title: "科技玩家",
        icon: "https://logo.clearbit.com/www.kejiwanjia.com",
        link: "https://www.kejiwanjia.com/",
      },
      {
        title: "法海之路",
        icon: "https://logo.clearbit.com/fahai.org",
        link: "https://fahai.org/",
      },
      {
        title: "LINUX DO",
        icon: "https://logo.clearbit.com/linux.do",
        link: "https://linux.do/",
      },
      {
        title: "NodeSeek",
        icon: "https://logo.clearbit.com/www.nodeseek.com",
        link: "https://www.nodeseek.com/",
      },
      {
        title: "XiaomiROM",
        icon: "https://logo.clearbit.com/xiaomirom.com",
        link: "https://xiaomirom.com/",
      },
      {
        title: "Stack Overflow",
        icon: "https://logo.clearbit.com/stackoverflow.com",
        link: "https://stackoverflow.com/",
      },
    ],
  },
  {
    title: "文档",
    items: [
      {
        title: "Keep",
        icon: "https://logo.clearbit.com/keep-docs.xpoet.cn",
        link: "https://keep-docs.xpoet.cn/",
      },
      {
        title: "Hexo",
        icon: "https://logo.clearbit.com/hexo.io",
        link: "https://hexo.io/zh-cn/docs/",
      },
      {
        title: "PicGo",
        icon: "https://logo.clearbit.com/picgo.github.io",
        link: "https://picgo.github.io/PicGo-Doc/",
      },
      {
        title: "v2rayA",
        icon: "https://logo.clearbit.com/v2raya.org",
        link: "https://v2raya.org/",
      },
      {
        title: "Lsky Pro",
        icon: "https://logo.clearbit.com/docs.lsky.pro",
        link: "https://docs.lsky.pro/docs/free/v2/",
      },
      {
        title: "哪吒监控",
        icon: "https://logo.clearbit.com/nezha.wiki",
        link: "https://nezha.wiki/",
      },
      {
        title: "悟空百科",
        icon: "https://logo.clearbit.com/didiboy0702.gitbook.io",
        link: "https://didiboy0702.gitbook.io/wukongdaily/",
      },
      {
        title: "LX Music",
        icon: "https://logo.clearbit.com/lxmusic.toside.cn",
        link: "https://lxmusic.toside.cn/",
      },
      {
        title: "AList文档",
        icon: "https://logo.clearbit.com/alist.nn.ci",
        link: "https://alist.nn.ci/zh/",
      },
      {
        title: "IPTVindex",
        icon: "https://logo.clearbit.com/iptvindex.com",
        link: "https://iptvindex.com/",
      },
      {
        title: "CS自学指南",
        icon: "https://logo.clearbit.com/csdiy.wiki",
        link: "https://csdiy.wiki/",
      },
      {
        title: "TrackersList",
        icon: "https://logo.clearbit.com/trackerslist.com",
        link: "https://trackerslist.com/",
      },
      {
        title: "LinuxMirrors",
        icon: "https://logo.clearbit.com/linuxmirrors.cn",
        link: "https://linuxmirrors.cn/",
      },
      {
        title: "软体考古学家",
        icon: "https://logo.clearbit.com/blog.brachiosoft.com",
        link: "https://blog.brachiosoft.com/",
      },
      {
        title: "大数据知识体系",
        icon: "https://logo.clearbit.com/www.sqlboy.tech",
        link: "https://www.sqlboy.tech/",
      },
      {
        title: "程序员做饭指南",
        icon: "https://logo.clearbit.com/cook.aiursoft.cn",
        link: "https://cook.aiursoft.cn/",
      },
      {
        title: "PagerMaid-Pyro",
        icon: "https://logo.clearbit.com/xtaolabs.com",
        link: "https://xtaolabs.com/",
      },
      {
        title: "Halo Documents",
        icon: "https://logo.clearbit.com/docs.halo.run",
        link: "https://docs.halo.run/",
      },
      {
        title: "Free for Developers",
        icon: "https://logo.clearbit.com/free-for.dev",
        link: "https://free-for.dev/",
      },
      {
        title: "LearnData 开源笔记",
        icon: "https://logo.clearbit.com/newzone.top",
        link: "https://newzone.top/",
      },
      {
        title: "vuepress-theme-vdoing",
        icon: "https://logo.clearbit.com/doc.xugaoyi.com",
        link: "https://doc.xugaoyi.com/",
      },
      {
        title: "计算机教育中缺失的一课",
        icon: "https://logo.clearbit.com/missing-semester-cn.github.io",
        link: "https://missing-semester-cn.github.io/",
      },
      {
        title: "VitePress | 快速上手中文教程",
        icon: "https://logo.clearbit.com/vitepress.yiov.top",
        link: "https://vitepress.yiov.top/",
      },
    ],
  },
  {
    title: "博客",
    items: [
      {
        title: "庭说",
        icon: "https://logo.clearbit.com/tingtalk.me",
        link: "https://tingtalk.me/",
      },
      {
        title: "宝塔迷",
        icon: "https://logo.clearbit.com/www.baota.me",
        link: "https://www.baota.me/",
      },
      {
        title: "安知鱼",
        icon: "https://logo.clearbit.com/anzhiy.cn",
        link: "https://anzhiy.cn/",
      },
      {
        title: "张洪Heo",
        icon: "https://logo.clearbit.com/blog.zhheo.com",
        link: "https://blog.zhheo.com/",
      },
      {
        title: "终身学习",
        icon: "https://logo.clearbit.com/lifelonglearn.ing",
        link: "https://lifelonglearn.ing/",
      },
      {
        title: "無名小栈",
        icon: "https://logo.clearbit.com/blog.imsyy.top",
        link: "https://blog.imsyy.top/",
      },
      {
        title: "小孙同学",
        icon: "https://logo.clearbit.com/blog.sunguoqi.com",
        link: "https://blog.sunguoqi.com/",
      },
      {
        title: "CrazyWong",
        icon: "https://logo.clearbit.com/crazywong.com",
        link: "https://crazywong.com/",
      },
      {
        title: "Xhofe's Blog",
        icon: "https://logo.clearbit.com/blog.nn.ci",
        link: "https://blog.nn.ci/",
      },
      {
        title: "我不是咕咕鸽",
        icon: "https://logo.clearbit.com/blog.laoda.de",
        link: "https://blog.laoda.de/",
      },
      {
        title: "Yerongの小窝",
        icon: "https://logo.clearbit.com/www.coolhub.top",
        link: "https://www.coolhub.top/",
      },
      {
        title: "编程随想的博客",
        icon: "https://logo.clearbit.com/cirubla.github.io",
        link: "https://cirubla.github.io/",
      },
      {
        title: "CMLiussss Blog",
        icon: "https://logo.clearbit.com/blog.cmliussss.com",
        link: "https://blog.cmliussss.com/",
      },
    ],
  },
  {
    title: "其他",
    items: [
      {
        title: "微信文件传输",
        icon: "https://logo.clearbit.com/filehelper.weixin.qq.com",
        link: "https://filehelper.weixin.qq.com/",
      },
      {
        title: "SYXYJG",
        icon: "https://logo.clearbit.com/172.16.250.138",
        link: "http://172.16.250.138/",
      },
    ],
  },
];
