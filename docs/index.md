---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "XINGJI"
  text: "XINGJI个人知识库"
  tagline: 迄今所有人生都大写着失败，但不妨碍我继续向前✨
  image:
    src: https://wmimg.com/i/1236/2024/10/670117f551433.jpg # text 和 tagline 区域旁的图片 https://cdn-us.imgs.moe/2025/02/27/Grok-1_vEnhu3YcGH.png
    alt: XINGJI # 图片的alt文字
  actions:
    - theme: brand
      text:  🏠Home
      link: https://home.xingji.fun/
    - theme: brand
      text:  🪄 Blog
      link: https://love.xingji.fun/
    - theme: alt
      text: GitHub
      link: https://github.com/XingJi-love
    - theme: alt
      text: 我的导航
      link: /nav

features:
  - icon: 📝
    title: 理论扎实
    details: 万丈高楼平地起，夯实基础
  - icon: 📚
    title: 体系全面
    details: 拒绝碎片化学习，拒绝一知半解
  - icon: 📜
    title: 综合运用
    details: 整合各个组件，灵活运用，创造价值
---

<!-- index.md -->
<HomeUnderline />

<!-- index.md -->
<DataPanel />

<!-- index.md -->
<confetti />

<p align="center">
<img src="https://readme-typing-svg.demolab.com?font=Orbitron&size=25&pause=1000&center=true&vCenter=true&random=false&width=600&lines=Welcome+to+my+VitePress+Blog+page!;I+am+XINGJI+obsessed+with+programming!" />
</p>

<script setup>
import MFriends from './home/MFriends.vue'
</script>

<ClientOnly>
  <MFriends/>
</ClientOnly>

<!-- index.md -->
<!-- <FriendsLinks /> -->

::: details 申请友链

### 申请前请先添加本站

> 申请前请先添加本站！！！

### 友链要求

- 网站应保持清洁，避免过多广告内容
- 网站需要有良好的稳定性和可靠性

### 申请方式

- 在本站留言或者访问 [GitHub 友链申请页面](https://github.com/XingJi-love/Blog-VitePress/issues/2) 提交您的申请
- 申请格式同本站信息（二选一即可）

### 本站信息

- 网站名称: **XINGJI**
- 网站描述: **迄今所有人生都大写着失败，但不妨碍我继续向前✨**
- 网站地址：**<https://vite.xingji.fun>**
- 网站图标：**<https://i.p-i.vip/47/20240920-66ed7b168c38c.jpg>**

```json
{
  "title": "XINGJI",
  "desc": "迄今所有人生都大写着失败，但不妨碍我继续向前✨",
  "link": "https://vite.xingji.fun",
  "icon": "https://i.p-i.vip/47/20240920-66ed7b168c38c.jpg"
}
```

:::

<!-- <LoveTimer /> -->

<!--
<Carousel :slides="[
  { image: 'https://i.p-i.vip/47/20241108-672d9051e725c.png', alt: '蛇姐' },
  { image: 'https://i.p-i.vip/47/20240920-66ed7ac062c15.jpg', alt: '蛇姐' },
  { image: 'https://i.p-i.vip/47/20240920-66ed7afce263f.jpg', alt: '蛇姐' },
  { image: 'https://i.p-i.vip/47/20240920-66ed9b2fa01f5.jpg', alt: '蛇姐' },
  { image: 'https://i.p-i.vip/47/20240920-66ed9b363be69.jpg', alt: '蛇姐' },
  { image: 'https://i.p-i.vip/47/20241023-6718a82cbb5e2.png', alt: '蛇姐' },
  { image: 'https://i.p-i.vip/47/20241023-6718a8585926b.png', alt: '蛇姐' }
]" 
:interval="3000"
:autoplay="true" 
/>
-->