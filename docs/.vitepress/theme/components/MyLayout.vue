<!-- .vitepress/theme/MyLayout.vue -->
<script setup lang="ts">
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { nextTick, provide } from 'vue'

import backtotop from "./backtotop.vue"

import Twikoo from './Twikoo.vue' // 引入 Twikoo 组件

const { isDark } = useData()

const enableTransitions = () => "startViewTransition" in document && window.matchMedia("(prefers-reduced-motion: no-preference)").matches;

provide("toggle-appearance", async ({ clientX: x, clientY: y }: MouseEvent) => {
    if (!enableTransitions()) {
        isDark.value = !isDark.value;
    return;
    }

const clipPath = [`circle(0px at ${x}px ${y}px)`, `circle(${Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))}px at ${x}px ${y}px)`];

await document.startViewTransition(async () => {
    isDark.value = !isDark.value;
    await nextTick();
}).ready;

document.documentElement.animate(
    { clipPath: isDark.value ? clipPath.reverse() : clipPath },
    {
        duration: 300,
        easing: "ease-in",
        pseudoElement: `::view-transition-${isDark.value ? "old" : "new"}(root)`,
    }
    );
});
</script>

<template>
    <DefaultTheme.Layout v-bind="$attrs">
        <!-- 这里可以插入其他插槽组件 -->
        <template #doc-footer-before>
            <backtotop />
        </template>

        <!-- 为较宽的屏幕的导航栏添加阅读增强菜单 -->
        <template #nav-bar-content-after>
            <NolebaseEnhancedReadabilitiesMenu />
        </template>

        <!-- 为较窄的屏幕（通常是小于 iPad Mini）添加阅读增强菜单 -->
        <template #nav-screen-content-after>
            <NolebaseEnhancedReadabilitiesScreenMenu />
        </template>

        <!-- 闪烁高亮当前的目标标题 -->
        <template #layout-top>
            <NolebaseHighlightTargetedHeading />
        </template>

        <!-- 引入 Twikoo 组件 -->
        <template #doc-after>
          <Twikoo></Twikoo>
        </template>
    </DefaultTheme.Layout>
</template>

<style>
::view-transition-old(root),
::view-transition-new(root) {
    animation: none;
    mix-blend-mode: normal;
}

::view-transition-old(root),
.dark::view-transition-new(root) {
    z-index: 1;
}

::view-transition-new(root),
.dark::view-transition-old(root) {
    z-index: 9999;
}

/* 修正因视图过渡导致的按钮图标偏移 */
.check .icon {
    top: -2px;
}

/* 修正 Twikoo 组件的样式 */
.twikoo .el-loading-spinner .circular {
  margin-left: auto;
  margin-right: auto;
}
</style>