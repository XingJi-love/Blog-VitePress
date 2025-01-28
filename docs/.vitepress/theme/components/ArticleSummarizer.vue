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
          <div v-if="loading" class="text-gray-400 flex items-center">
            <Loader2 class="w-5 h-5 animate-spin" />
            <span class="ml-2">正在生成摘要...</span>
          </div>
          
          <div v-else-if="error" class="text-red-400">
            {{ error }}
          </div>
          
          <div v-else-if="summary" class="text-white text-base leading-relaxed">
            {{ summary }}
          </div>

          <button
            @click="generateSummary"
            :disabled="loading"
            class="mt-4 bg-[#E6A53F] text-black px-4 py-2 rounded-lg hover:bg-[#D49530] disabled:opacity-50"
          >
            生成摘要
          </button>
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
import { Bot, ChevronRight, Loader2 } from 'lucide-vue-next'

const summary = ref('')
const loading = ref(false)
const error = ref(null)
const articleContent = ref('')

onMounted(() => {
  // 获取当前页面的主要内容
  const mainContent = document.querySelector('.vp-doc')?.textContent || ''
  articleContent.value = mainContent
})

const generateSummary = async () => {
  if (!articleContent.value) return
  
  loading.value = true
  error.value = null
  
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
            content: `请对以下文章内容进行摘要总结：\n\n${articleContent.value}`
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
    error.value = '生成摘要时出错，请稍后重试'
    console.error('Error:', err)
  } finally {
    loading.value = false
  }
}
</script>