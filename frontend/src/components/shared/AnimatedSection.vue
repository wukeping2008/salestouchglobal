<template>
  <div ref="sectionRef" :class="['animated-section', { visible: isVisible }]">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Props {
  threshold?: number
  rootMargin?: string
}

const props = withDefaults(defineProps<Props>(), {
  threshold: 0.15,
  rootMargin: '0px 0px -50px 0px',
})

const sectionRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)

let observer: IntersectionObserver | null = null

onMounted(() => {
  if (!sectionRef.value) return

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true
          observer?.unobserve(entry.target)
        }
      })
    },
    {
      threshold: props.threshold,
      rootMargin: props.rootMargin,
    }
  )

  observer.observe(sectionRef.value)
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>

<style scoped>
.animated-section {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.animated-section.visible {
  opacity: 1;
  transform: translateY(0);
}

@media (prefers-reduced-motion: reduce) {
  .animated-section {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
</style>
