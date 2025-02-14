<template>
    <div class="love-timer">
        <div class="avatars">
            <img src="/XingJi1.jpg" alt="Avatar 1" class="avatar left-avatar" />
            <div class="heart-beat">❤️</div>
            <img src="/beibei.jpg" alt="Avatar 2" class="avatar right-avatar" />
        </div>
        <h2>我们已经在一起</h2>
        <p class="gradient-text">{{ timePassed }}</p>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from 'vue';

export default defineComponent({
    name: 'LoveTimer',
    setup() {
        const startDate = new Date('2024-10-18'); // 替换为你们在一起的日期
        const timePassed = ref('');

        let intervalId: number;

        const calculateTimePassed = () => {
            const now = new Date();
            const diff = now.getTime() - startDate.getTime();

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            timePassed.value = `${days} 天 ${hours} 小时 ${minutes} 分钟 ${seconds} 秒`;
        };

        onMounted(() => {
            calculateTimePassed(); // 初始化时立即计算一次
            intervalId = setInterval(calculateTimePassed, 1000); // 每秒更新一次
        });

        onUnmounted(() => {
            clearInterval(intervalId); // 组件销毁时清除定时器
        });

        return {
            timePassed,
        };
    },
});
</script>

<style scoped>
.love-timer {
    text-align: center;
    font-family: Arial, sans-serif;
}

.avatars {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
}

.avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid #e91e63;
}

.left-avatar {
    margin-right: 20px;
}

.right-avatar {
    margin-left: 20px;
}

.heart-beat {
    font-size: 50px;
    color: #e91e63;
    animation: heartbeat 1s infinite;
}

@keyframes heartbeat {

    0%,
    100% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.2);
    }
}

.love-timer h2 {
    color: #e91e63;
}

/* 渐变文字样式 */
.gradient-text {
    font-size: 1.5em;
    background: linear-gradient(90deg, #0190e9, #05b9ea, #069de3);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}
</style>