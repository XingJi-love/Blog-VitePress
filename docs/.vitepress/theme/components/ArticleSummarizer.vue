<template>
  <ClientOnly>
    <div class="max-w-3xl mx-auto p-4">
      <div class="bg-[#1C1C1E] rounded-lg shadow-xl overflow-hidden">
        <!-- Header -->
        <div class="p-4 flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <div class="w-8 h-8 bg-[#E6A53F] rounded-lg flex items-center justify-center">
              <Bot class="w-5 h-5 text-black" />
            </div>
            <h2 class="text-white text-lg font-medium flex items-center">
              文章摘要
              <ChevronRight class="w-5 h-5 ml-1 text-gray-400" />
            </h2>
          </div>
          <div class="px-3 py-1 bg-[#E6A53F] rounded-full">
            <span class="text-black text-sm font-medium">FakeGPT</span>
          </div>
        </div>

        <!-- Content -->
        <div class="p-6">
          <div v-if="loading" class="flex flex-col items-center justify-center space-y-3 py-4">
            <Loader2 class="w-6 h-6 animate-spin text-[#E6A53F]" />
            <span class="text-gray-400 text-sm">正在生成摘要...</span>
          </div>
          
          <div v-else-if="error" class="space-y-4">
            <div class="flex items-center justify-center text-red-400 bg-red-400/10 rounded-lg p-4">
              <AlertCircle class="w-5 h-5 mr-2" />
              <span>{{ error }}</span>
            </div>
            <button
              @click="generateSummary"
              class="w-full flex items-center justify-center space-x-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <RefreshCw class="w-4 h-4" />
              <span>重试</span>
            </button>
          </div>
          
          <div v-else-if="summary" class="space-y-4">
            <div class="text-white text-base leading-relaxed">
              {{ summary }}
            </div>
            <button
              @click="generateSummary"
              :disabled="isRateLimited"
              class="w-full flex items-center justify-center space-x-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <RefreshCw class="w-4 h-4" />
              <span>重新生成</span>
            </button>
          </div>

          <div v-else class="space-y-4">
            <div class="text-gray-400 text-sm">
              点击下方按钮，AI 将自动分析当前文章内容并生成摘要
            </div>
            <button
              @click="generateSummary"
              :disabled="isRateLimited"
              class="w-full bg-[#E6A53F] text-black px-4 py-2 rounded-lg hover:bg-[#D49530] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              生成摘要
            </button>
          </div>
        </div>

        <!-- Footer -->
        <div class="px-6 py-3 border-t border-gray-800">
          <p class="text-gray-500 text-sm">
            此内容根据文章生成，并经过人工审核，仅用于文章内容的解释与总结
          </p>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Bot, ChevronRight, Loader2, AlertCircle, RefreshCw } from 'lucide-vue-next'

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

  // 获取纯文本内容
  return clonedArticle.textContent.trim()
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