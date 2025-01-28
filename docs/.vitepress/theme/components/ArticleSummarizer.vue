<template>
  <ClientOnly>
    <div class="max-w-3xl mx-auto p-4">
      <div class="bg-gradient-to-b from-[#1C1C1E] to-[#2C2C2E] rounded-lg shadow-xl overflow-hidden border border-gray-800/50">
        <!-- Header -->
        <div class="p-4 flex items-center justify-between border-b border-gray-800/50">
          <div class="flex items-center space-x-2">
            <div class="w-8 h-8 bg-gradient-to-br from-[#E6A53F] to-[#D49530] rounded-lg flex items-center justify-center shadow-lg">
              <Bot class="w-5 h-5 text-black" />
            </div>
            <h2 class="text-white text-lg font-medium flex items-center">
              文章摘要
              <ChevronRight class="w-5 h-5 ml-1 text-gray-400" />
            </h2>
          </div>
          <div class="px-3 py-1 bg-gradient-to-r from-[#E6A53F] to-[#D49530] rounded-full shadow-lg">
            <span class="text-black text-sm font-medium">FakeGPT</span>
          </div>
        </div>

        <!-- Content -->
        <div class="p-6">
          <div v-if="loading" class="flex flex-col items-center justify-center space-y-3 py-8">
            <div class="relative">
              <Loader2 class="w-8 h-8 animate-spin text-[#E6A53F]" />
              <div class="absolute inset-0 animate-ping opacity-50 bg-[#E6A53F] rounded-full blur-xl"></div>
            </div>
            <span class="text-gray-400 text-sm">正在生成摘要...</span>
          </div>
          
          <div v-else-if="error" class="space-y-4">
            <div class="flex flex-col items-center justify-center space-y-3 p-6 bg-red-500/10 rounded-lg border border-red-500/20">
              <div class="relative">
                <AlertCircle class="w-8 h-8 text-red-500" />
                <div class="absolute inset-0 animate-pulse opacity-30 bg-red-500 rounded-full blur-xl"></div>
              </div>
              <span class="text-red-400 text-center">{{ error }}</span>
            </div>
            <button
              @click="generateSummary"
              class="w-full flex items-center justify-center space-x-2 bg-gray-800/50 text-white px-4 py-3 rounded-lg hover:bg-gray-700/50 transition-all duration-300 border border-gray-700/50 shadow-lg group"
            >
              <RefreshCw class="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
              <span>重试</span>
            </button>
          </div>
          
          <div v-else-if="summary" class="space-y-4">
            <div class="bg-gray-800/30 rounded-lg p-6 border border-gray-700/50">
              <div class="text-white text-base leading-relaxed">
                {{ summary }}
              </div>
            </div>
            <button
              @click="generateSummary"
              :disabled="isRateLimited"
              class="w-full flex items-center justify-center space-x-2 bg-gray-800/50 text-white px-4 py-3 rounded-lg hover:bg-gray-700/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 border border-gray-700/50 shadow-lg group"
            >
              <RefreshCw class="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
              <span>重新生成</span>
              <span v-if="isRateLimited" class="text-xs text-gray-500">
                ({{ Math.ceil((RATE_LIMIT_DELAY - (Date.now() - lastRequestTime)) / 1000) }}s)
              </span>
            </button>
          </div>

          <div v-else class="space-y-4">
            <div class="flex flex-col items-center justify-center space-y-3 py-6 text-center">
              <FileText class="w-8 h-8 text-gray-600" />
              <div class="text-gray-400 text-sm max-w-md">
                点击下方按钮，AI 将自动分析当前文章内容并生成摘要
              </div>
            </div>
            <button
              @click="generateSummary"
              :disabled="isRateLimited"
              class="w-full bg-gradient-to-r from-[#E6A53F] to-[#D49530] text-black px-4 py-3 rounded-lg hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg font-medium"
            >
              生成摘要
            </button>
          </div>
        </div>

        <!-- Footer -->
        <div class="px-6 py-3 border-t border-gray-800/50 bg-black/20">
          <p class="text-gray-500 text-sm flex items-center justify-center">
            <InfoIcon class="w-4 h-4 mr-2" />
            此内容根据文章生成，并经过人工审核，仅用于文章内容的解释与总结
          </p>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { Bot, ChevronRight, Loader2, AlertCircle, RefreshCw, FileText, InfoIcon } from 'lucide-vue-next'

const summary = ref('')
const loading = ref(false)
const error = ref(null)
const articleContent = ref('')
const lastRequestTime = ref(0)
const RATE_LIMIT_DELAY = 10000 // 10 seconds between requests

const isRateLimited = computed(() => {
  return Date.now() - lastRequestTime.value < RATE_LIMIT_DELAY
})

const extractArticleContent = () => {
  // 获取文章主要内容，优先使用 article 标签
  const article = document.querySelector('article') || document.querySelector('.vp-doc')
  if (!article) return ''

  // 移除不需要的元素内容
  const clonedArticle = article.cloneNode(true)
  const elementsToRemove = clonedArticle.querySelectorAll('pre, code, script, style, .article-summarizer')
  elementsToRemove.forEach(el => el.remove())

  // 获取纯文本内容并清理
  return clonedArticle.textContent
    .trim()
    .replace(/\s+/g, ' ') // 将多个空白字符替换为单个空格
    .replace(/\n+/g, '\n') // 将多个换行符替换为单个换行符
}

onMounted(() => {
  articleContent.value = extractArticleContent()
})

const generateSummary = async () => {
  if (!articleContent.value || loading.value || isRateLimited.value) return
  
  loading.value = true
  error.value = null
  lastRequestTime.value = Date.now()
  
  try {
    const response = await fetch('https://api.deepseek.com/v1/summarize', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${import.meta.env.VITE_DEEPSEEK_API_KEY}`
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: [
          {
            role: 'user',
            content: `请对以下文章内容进行摘要总结，要求：
1. 提炼文章的核心观点和主要内容
2. 保持语言简洁清晰
3. 总结控制在300字以内
4. 如果内容过短或不完整，请返回提示信息

文章内容：${articleContent.value}`
          }
        ]
      })
    })

    if (!response.ok) {
      throw new Error('API 请求失败')
    }

    const data = await response.json()
    summary.value = data.choices[0].message.content
  } catch (err) {
    console.error('Error:', err)
    error.value = '生成摘要时出错，请稍后重试'
  } finally {
    loading.value = false
  }
}
</script>

<style>
.dark .vp-doc a {
  color: var(--vp-c-brand);
  text-decoration: none;
}
</style>