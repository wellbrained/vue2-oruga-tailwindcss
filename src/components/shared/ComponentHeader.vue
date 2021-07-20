<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    }
  }
}
</script>

<template>
  <div>
    <h2 class="pb-2 text-xl font-medium text-accent">
      Component: {{ title }}
    </h2>
    <p v-if="$slots.default" class="pb-4 text-sm text-primary">
      <slot />
    </p>
  </div>
</template>
