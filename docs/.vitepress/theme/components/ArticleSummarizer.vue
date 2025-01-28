<template>
  <ClientOnly>
    <div class="max-w-3xl mx-auto p-4">
      <div class="bg-gradient-to-b from-background to-background/80 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden border border-border transition-colors duration-300">
        <!-- Header -->
        <div class="p-4 flex items-center justify-between">
          <div class="flex items-center space-x-3">
            <div class="w-9 h-9 bg-primary rounded-lg flex items-center justify-center shadow-lg">
              <Bot class="w-5 h-5 text-primary-foreground" />
            </div>
            <div class="flex items-center space-x-2">
              <h2 class="text-foreground text-lg font-medium">文章摘要</h2>
              <ChevronRight class="w-5 h-5 text-muted-foreground" />
            </div>
          </div>
          <div class="px-4 py-1.5 bg-primary rounded-full shadow-lg">
            <span class="text-primary-foreground text-sm font-medium">XINGGPT</span>
          </div>
        </div>

        <!-- Content -->
        <div v-if="summary || error || loading" class="px-6 py-4">
          <div class="bg-muted rounded-lg p-6 shadow-inner border border-border">
            <div v-if="loading" class="flex items-center justify-center space-x-3">
              <Loader2 class="w-5 h-5 animate-spin text-primary" />
              <span class="text-muted-foreground">正在生成摘要...</span>
            </div>
            
            <div v-else-if="error" class="text-destructive flex items-center justify-center space-x-2">
              <AlertCircle class="w-5 h-5" />
              <span>{{ error }}</span>
            </div>
            
            <div v-else class="text-foreground text-base leading-relaxed">
              {{ summary }}
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div class="px-6 py-3 text-right">
          <div class="flex items-center justify-between">
            <p class="text-muted-foreground text-sm">
              此内容根据文章生成，并经过人工审核，仅用于文章内容的解释与总结
            </p>
            <button
              v-if="!loading"
              @click="generateSummary"
              :disabled="isRateLimited"
              class="px-4 py-1.5 bg-muted text-muted-foreground rounded-full hover:bg-muted/80 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm border border-border"
            >
              {{ summary ? '重新生成' : '生成摘要' }}
              <span v-if="isRateLimited" class="text-xs text-muted-foreground/70 ml-1">
                ({{ Math.ceil((RATE_LIMIT_DELAY - (Date.now() - lastRequestTime)) / 1000) }}s)
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { Bot, ChevronRight, Loader2, AlertCircle } from 'lucide-vue-next'

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
  const article = document.querySelector('article') || document.querySelector('.vp-doc')
  if (!article) return ''

  const clonedArticle = article.cloneNode(true)
  const elementsToRemove = clonedArticle.querySelectorAll('pre, code, script, style, .article-summarizer')
  elementsToRemove.forEach(el => el.remove())

  return clonedArticle.textContent
    .trim()
    .replace(/\s+/g, ' ')
    .replace(/\n+/g, '\n')
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
:root {
  --background: 0 0% 100%;
  --foreground: 240 10% 3.9%;
  --muted: 240 4.8% 95.9%;
  --muted-foreground: 240 3.8% 46.1%;
  --primary: 47.9 95.8% 53.1%;
  --primary-foreground: 26 83.3% 14.1%;
  --border: 240 5.9% 90%;
  --destructive: 0 84.2% 60.2%;
}

.dark {
  --background: 20 14.3% 4.1%;
  --foreground: 0 0% 95%;
  --muted: 240 3.7% 15.9%;
  --muted-foreground: 240 5% 64.9%;
  --primary: 47.9 95.8% 53.1%;
  --primary-foreground: 26 83.3% 14.1%;
  --border: 240 3.7% 15.9%;
  --destructive: 0 62.8% 30.6%;
}

.bg-background {
  background-color: hsl(var(--background));
}

.bg-foreground {
  background-color: hsl(var(--foreground));
}

.bg-muted {
  background-color: hsl(var(--muted));
}

.bg-primary {
  background-color: hsl(var(--primary));
}

.text-foreground {
  color: hsl(var(--foreground));
}

.text-muted-foreground {
  color: hsl(var(--muted-foreground));
}

.text-primary-foreground {
  color: hsl(var(--primary-foreground));
}

.text-destructive {
  color: hsl(var(--destructive));
}

.border-border {
  border-color: hsl(var(--border));
}

.dark .vp-doc a {
  color: var(--vp-c-brand);
  text-decoration: none;
}
</style>