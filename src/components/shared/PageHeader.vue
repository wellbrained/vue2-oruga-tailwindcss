<script>
import ThemeSwapper from '@/components/shared/ThemeSwapper.vue'

export default {
  components: {
    ThemeSwapper,
  },
}
</script>

<template>
  <div as="nav" class="bg-gray-800">
    <div class="pl-4 mx-auto max-w-7xl">
      <div class="flex justify-between h-16">
        <div class="flex">
          <div class="flex items-center">
            <span class="text-base font-bold text-white">
              Demo for Vue 2, TailwindCSS 2.2 & Oruga UI
            </span>
          </div>
        </div>

        <ThemeSwapper />
      </div>
    </div>
  </div>
</template>
