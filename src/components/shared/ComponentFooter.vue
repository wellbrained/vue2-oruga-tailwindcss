<template>
  <div>
    <div class="my-4 border border-t border-gray-300" />
    <h2 class="pb-2 text-base font-medium text-accent">
      To Do
    </h2>
    <p v-if="$slots.default" class="pb-4 text-sm text-primary">
      <ul class="ml-6 list-disc">
        <slot />
      </ul>
    </p>
  </div>
</template>
