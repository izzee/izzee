<template>
  <div ref="observerRef" :class="`${isIntersecting ? 'visible' : 'hidden'}`">
    <slot />
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted, onUnmounted, defineEmits, defineProps } from 'vue';

  const props = defineProps({
    options: {
      type: Object,
      default: () => ({
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }),
    },
  });

  const emit = defineEmits(['intersect', 'leave']);

  const isIntersecting = ref(false);

  const observerRef = ref<HTMLElement | null>(null);
  let observer: IntersectionObserver | null = null;

  onMounted(() => {
    if (!observerRef.value) return;

    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isIntersecting.value = true
          emit('intersect', entry);
        } else {
          isIntersecting.value = false
          emit('leave', entry);
        }
      });
    }, props.options);

    observer.observe(observerRef.value);
  });

  onUnmounted(() => {
    if (observer && observerRef.value) {
      observer.unobserve(observerRef.value);
    }
    observer = null;
  });
</script>

