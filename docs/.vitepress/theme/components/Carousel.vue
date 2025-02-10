<template>
  <div 
    class="carousel" 
    @mouseenter="autoplay && pauseTimer()" 
    @mouseleave="autoplay && startTimer()"
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
  >
    <div 
      class="carousel-inner" 
      :style="{ 
        transform: `translateX(${-currentIndex * 100}%)`,
        transition: sliding ? 'transform 0.5s ease-in-out' : 'none'
      }"
      @transitionend="handleTransitionEnd"
    >
      <div 
        v-for="(slide, index) in extendedSlides" 
        :key="index" 
        class="carousel-item"
      >
        <img :src="slide.image" :alt="slide.alt">
      </div>
    </div>
    <button 
      class="carousel-control prev" 
      @click="prev" 
      aria-label="Previous slide"
    >
      &lt;
    </button>
    <button 
      class="carousel-control next" 
      @click="next" 
      aria-label="Next slide"
    >
      &gt;
    </button>
    <div class="carousel-indicators">
      <button 
        v-for="(_, index) in slides" 
        :key="index" 
        :class="{ active: index === actualIndex }"
        @click="goToSlide(index + 1)"
        :aria-label="`Go to slide ${index + 1}`"
      ></button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted, onUnmounted, watch } from 'vue'

interface Slide {
  image: string
  alt: string
}

export default defineComponent({
  name: 'Carousel',
  props: {
    slides: {
      type: Array as () => Slide[],
      required: true
    },
    interval: {
      type: Number,
      default: 5000
    },
    autoplay: {
      type: Boolean,
      default: true
    }
  },
  setup(props) {
    const currentIndex = ref(1) // Start from the first actual slide
    const sliding = ref(true)
    let timer: number | null = null
    let touchStartX = 0

    const extendedSlides = computed(() => {
      const lastSlide = props.slides[props.slides.length - 1]
      const firstSlide = props.slides[0]
      return [lastSlide, ...props.slides, firstSlide]
    })

    const actualIndex = computed(() => {
      if (currentIndex.value === 0) return props.slides.length - 1
      if (currentIndex.value === extendedSlides.value.length - 1) return 0
      return currentIndex.value - 1
    })

    const next = () => {
      sliding.value = true
      currentIndex.value++
      if (currentIndex.value >= extendedSlides.value.length - 1) {
        setTimeout(() => {
          sliding.value = false
          currentIndex.value = 1
        }, 500)
      }
    }

    const prev = () => {
      sliding.value = true
      currentIndex.value--
      if (currentIndex.value <= 0) {
        setTimeout(() => {
          sliding.value = false
          currentIndex.value = props.slides.length
        }, 500)
      }
    }

    const goToSlide = (index: number) => {
      sliding.value = true
      currentIndex.value = index
    }

    const handleTransitionEnd = () => {
      sliding.value = true
    }

    const startTimer = () => {
      if (props.autoplay && !timer) {
        timer = window.setInterval(next, props.interval)
      }
    }

    const pauseTimer = () => {
      if (timer) {
        clearInterval(timer)
        timer = null
      }
    }

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX
    }

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault() // Prevent scrolling while touching the carousel
    }

    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndX = e.changedTouches[0].clientX
      const diff = touchStartX - touchEndX

      if (Math.abs(diff) > 50) { // Minimum swipe distance
        if (diff > 0) {
          next()
        } else {
          prev()
        }
      }
    }

    onMounted(() => {
      if (typeof window !== 'undefined') {
        startTimer()
      }
    })

    onUnmounted(() => {
      pauseTimer()
    })

    watch(() => props.autoplay, (newValue) => {
      if (newValue) {
        startTimer()
      } else {
        pauseTimer()
      }
    })

    return {
      currentIndex,
      actualIndex,
      extendedSlides,
      sliding,
      next,
      prev,
      goToSlide,
      pauseTimer,
      startTimer,
      handleTouchStart,
      handleTouchMove,
      handleTouchEnd,
      handleTransitionEnd
    }
  }
})
</script>

<style scoped>
.carousel {
  --carousel-control-bg: rgba(0, 0, 0, 0.5);
  --carousel-control-color: white;
  --carousel-indicator-bg: rgba(255, 255, 255, 0.5);
  --carousel-indicator-active-bg: white;

  position: relative;
  width: 100%;
  overflow: hidden;
  touch-action: pan-y;
}

.carousel-inner {
  display: flex;
  will-change: transform;
}

.carousel-item {
  flex: 0 0 100%;
}

.carousel-item img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.carousel-control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: var(--carousel-control-bg);
  color: var(--carousel-control-color);
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 2;
  transition: opacity 0.3s ease;
}

.carousel-control:hover {
  opacity: 0.8;
}

.carousel-control.prev {
  left: 10px;
}

.carousel-control.next {
  right: 10px;
}

.carousel-indicators {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 2;
}

.carousel-indicators button {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background: var(--carousel-indicator-bg);
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.carousel-indicators button.active {
  background: var(--carousel-indicator-active-bg);
}

@media (hover: none) {
  .carousel-control {
    display: none;
  }
}
</style>