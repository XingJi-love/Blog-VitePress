<template>
    <div class="friends-links-wrapper">
        <div class="friends-links-container">
            <h2 class="friends-links-title">
                <span class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-link">
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                    </svg>
                </span>
                友情链接
            </h2>

            <div class="friends-links-grid">
                <a v-for="friend in friends" :key="friend.title" :href="friend.link" class="friend-card" target="_blank"
                    rel="noopener noreferrer">
                    <div class="friend-card-content">
                        <div class="friend-info">
                            <img :src="friend.icon" :alt="friend.title" class="friend-avatar" loading="lazy"
                                @error="handleImageError" />
                            <h3 class="friend-name">{{ friend.title }}</h3>
                        </div>
                        <p class="friend-desc">{{ friend.desc }}</p>
                    </div>
                </a>
            </div>

            <div class="apply-link">
                <button @click="showModal = true" class="apply-button">
                    <span>申请友链</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-arrow">
                        <path d="m9 18 6-6-6-6" />
                    </svg>
                </button>
            </div>
        </div>

        <!-- 申请友链模态框 -->
        <div v-if="showModal" class="modal-overlay" @click="showModal = false">
            <div class="modal-content" @click.stop>
                <h3 class="modal-title">申请友链</h3>
                <form @submit.prevent="handleSubmit" class="apply-form">
                    <div class="form-group">
                        <label for="title">网站名称</label>
                        <input type="text" id="title" v-model="formData.title" required placeholder="请输入您的网站名称">
                    </div>
                    <div class="form-group">
                        <label for="link">网站链接</label>
                        <input type="url" id="link" v-model="formData.link" required placeholder="请输入您的网站链接">
                    </div>
                    <div class="form-group">
                        <label for="icon">头像链接</label>
                        <input type="url" id="icon" v-model="formData.icon" required placeholder="请输入您的头像链接">
                    </div>
                    <div class="form-group">
                        <label for="desc">网站描述</label>
                        <textarea id="desc" v-model="formData.desc" required placeholder="请简短描述您的网站"></textarea>
                    </div>
                    <div class="form-actions">
                        <button type="button" class="cancel-btn" @click="showModal = false">取消</button>
                        <button type="submit" class="submit-btn" :disabled="isSubmitting">
                            {{ isSubmitting ? '提交中...' : '提交申请' }}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const friends = [
    {
        "title": "XingJiのBlog",
        "desc": "迄今所有人生都大写着失败，但不妨碍我继续向前✨",
        "link": "https://love.xingji.fun",
        "icon": "https://love.xingji.fun/img/XingJi.jpg"
    },
    {
        title: "XINGJI",
        desc: "迄今所有人生都大写着失败，但不妨碍我继续向前✨",
        link: "https://vitepress.xingji.fun",
        icon: "https://i.p-i.vip/47/20240920-66ed7b168c38c.jpg"
    },
    {
        "title": "LI SIR",
        "desc": "你的时间花在哪里，你的收获就在哪里",
        "link": "https://lisir.me",
        "icon": "https://lisir.me/logo.png"
    },
    {
    "title": "VitePress",
    "desc": "VitePress 快速上手中文教程，如果你也想搭建它，那跟我一起做吧",
    "link": "https://vitepress.yiov.top",
    "icon": "https://vitepress.yiov.top/logo.png"
    },
    {
        "title": "Wcowin's Web",
        "desc": "循此苦旅，以达星辰",
        "link": "https://wcowin.work",
        "icon": "https://s2.loli.net/2024/02/01/gaE47y5fKM6kosV.png"
    },
    {
        "title": "Heo",
        "desc": "爱折腾的设计师",
        "link": "https://blog.zhheo.com",
        "icon": "https://blog.zhheo.com/img/avatar.png"
    },
    {
        "title": "Akilarの糖果屋",
        "desc": "期待您的光临！",
        "link": "https://akilar.top",
        "icon": "https://npm.elemecdn.com/akilar-candyassets/image/siteicon/favicon.png"
    },
    {
        "title": "山暮云秋",
        "desc": "千里关山边草暮，一星烽火朔云秋",
        "link": "https://www.muyun.space",
        "icon": "https://cdn.jsdelivr.net/gh/ShanMuYunQiu/Image/info/user.jpg"
    },
    {
        "title": "贰猹的小窝",
        "desc": "用这生命中的每一秒，给自己一个不后悔的未来",
        "link": "https://noionion.top",
        "icon": "https://pub-noionion.oss-cn-hangzhou.aliyuncs.com/head.jpg"
    },
    {
        "title": "Ordis",
        "desc": "船到桥头自然直，柳暗花明又一村",
        "link": "https://imbhj.com",
        "icon": "https://www.imbhj.com/static/img/logo-bailuobo.jpg"
    },
    {
        "title": "小嘉的部落格",
        "desc": "一个爱折腾的Java开发工程师",
        "link": "https://blog.imzjw.cn",
        "icon": "https://npm.elemecdn.com/nanshen/avatar.jpg"
    },
    {
        "title": "茂茂物语",
        "desc": "茂茂的成长之路，包含前端常用知识、源码阅读笔记、各种奇淫技巧、日常提效工具等",
        "link": "https://notes.fe-mm.com",
        "icon": "https://notes.fe-mm.com/logo.png"
    },
    {
        title: "肯了个德的博客",
        desc: "专注于分享没用的知识，你乐意看就多看看，保证你一看一个不吱声",
        link: "https://leelaa.cn",
        icon: "https://leelaa.cn/logo.webp"
    },
    {
        title: "粥里有勺糖",
        desc: "你的指尖，拥有改变世界的力量",
        link: "https://sugarat.top",
        icon: "https://sugarat.top/logo.png"
    },
    {
        title: "骤雨重山",
        desc: "运气是计划之外的东西",
        link: "https://www.vvhan.com",
        icon: "https://q1.qlogo.cn/g?b=qq&nk=1655466387&s=640"
    },
    {
        title: "菜园前端",
        desc: "小白都能看懂的笔记，提供 24 小时技术解答",
        link: "https://note.noxussj.top?s=y6",
        icon: "https://note.noxussj.top/logo.png"
    },
    {
        title: "纸鹿摸鱼处",
        desc: "纸鹿至麓不知路，支炉制露不止漉",
        link: "https://blog.zhilu.cyou",
        icon: "https://www.zhilu.cyou/api/avatar.png"
    },
    {
        title: "Sonder",
        desc: "乘风波浪会有时，直挂云帆破沧海",
        link: "https://liuhai.work",
        icon: "https://s2.loli.net/2024/03/01/7D3UeYHI6uJncBf.webp"
    },
    {
        title: "Homulilly",
        desc: "Aroes's Blog | \\萌脇舞以/",
        link: "https://homulilly.com",
        icon: "https://homulilly.com/images/avatar.jpg"
    },
    {
        title: "Jiawei’s Blog",
        desc: "念头通达",
        link: "https://www.chujiaweicode.top",
        icon: "https://www.chujiaweicode.top/static/favicons/site-logo.png"
    },
    {
        title: "小陈博客",
        desc: "理想成为大牛的小陈同学",
        link: "https://reinness.com",
        icon: "https://qiniu.reinness.com/blog/imgs/avatar.png"
    }
]

const showModal = ref(false)
const isSubmitting = ref(false)
const formData = reactive({
    title: '',
    link: '',
    icon: '',
    desc: ''
})

const handleImageError = (e) => {
    e.target.src = '/placeholder.svg'
}

const handleSubmit = async (e) => {
    isSubmitting.value = true
    try {
        // 这里可以添加实际的提交逻辑，比如发送到后端API
        await new Promise(resolve => setTimeout(resolve, 1000)) // 模拟提交过程
        alert('申请已提交，请等待审核！')
        showModal.value = false
        // 重置表单
        Object.keys(formData).forEach(key => formData[key] = '')
    } catch (error) {
        alert('提交失败，请稍后重试！')
    } finally {
        isSubmitting.value = false
    }
}
</script>

<style scoped>
.friends-links-wrapper {
    padding: 2rem 1rem;
    background-color: var(--vp-c-bg);
}

.friends-links-container {
    max-width: 1152px;
    margin: 0 auto;
}

.friends-links-title {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    color: var(--vp-c-text-1);
}

.icon {
    display: flex;
    align-items: center;
}

.icon-link {
    width: 24px;
    height: 24px;
    fill: none;
    stroke: currentColor;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
}

.friends-links-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;
    margin-bottom: 1.5rem;
}

@media (min-width: 640px) {
    .friends-links-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 1024px) {
    .friends-links-grid {
        grid-template-columns: repeat(4, 1fr);
    }
}

.friend-card {
    text-decoration: none;
    color: inherit;
    transition: all 0.3s ease;
}

.friend-card:hover {
    transform: translateY(-2px);
}

.friend-card-content {
    background-color: var(--vp-c-bg-soft);
    border-radius: 8px;
    padding: 1rem;
    height: 100%;
    transition: background-color 0.3s ease;
}

.friend-card:hover .friend-card-content {
    background-color: var(--vp-c-bg-mute);
}

.friend-info {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 0.5rem;
}

.friend-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    background-color: var(--vp-c-bg-mute);
}

.friend-name {
    font-size: 1rem;
    font-weight: 500;
    color: var(--vp-c-text-1);
    margin: 0;
}

.friend-desc {
    font-size: 0.875rem;
    color: var(--vp-c-text-2);
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}

.apply-link {
    text-align: left;
    margin-top: 1.5rem;
}

.apply-button {
    display: inline-flex;
    align-items: center;
    color: var(--vp-c-text-2);
    text-decoration: none;
    font-size: 0.875rem;
    transition: color 0.2s;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
}

.apply-button:hover {
    color: var(--vp-c-text-1);
}

.icon-arrow {
    width: 16px;
    height: 16px;
    margin-left: 4px;
    fill: none;
    stroke: currentColor;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
}

/* 添加图片加载动画 */
.friend-avatar {
    opacity: 0;
    animation: fadeIn 0.5s ease forwards;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

/* 新增模态框样式 */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.modal-content {
    background-color: var(--vp-c-bg);
    padding: 2rem;
    border-radius: 8px;
    width: 90%;
    max-width: 500px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.modal-title {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    color: var(--vp-c-text-1);
}

.apply-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.form-group label {
    font-size: 0.875rem;
    color: var(--vp-c-text-2);
}

.form-group input,
.form-group textarea {
    padding: 0.5rem;
    border: 1px solid var(--vp-c-divider);
    border-radius: 4px;
    background-color: var(--vp-c-bg-soft);
    color: var(--vp-c-text-1);
}

.form-group textarea {
    resize: vertical;
    min-height: 100px;
}

.form-actions {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    margin-top: 1rem;
}

.cancel-btn,
.submit-btn {
    padding: 0.5rem 1rem;
    border-radius: 4px;
    font-size: 0.875rem;
    cursor: pointer;
    transition: all 0.2s;
}

.cancel-btn {
    background-color: var(--vp-c-bg-soft);
    color: var(--vp-c-text-2);
}

.submit-btn {
    background-color: var(--vp-c-brand);
    color: white;
}

.submit-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.cancel-btn:hover {
    background-color: var(--vp-c-bg-mute);
}

.submit-btn:not(:disabled):hover {
    background-color: var(--vp-c-brand-dark);
}
</style>