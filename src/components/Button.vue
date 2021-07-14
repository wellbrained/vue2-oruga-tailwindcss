<script>
import ComponentHeader from '@/components/shared/ComponentHeader.vue'

export default {
  components: {
    ComponentHeader,
  },
};
</script>

<template>
  <section>
    <ComponentHeader title="Button">
      Different kind of buttons with the approriate styling. The type will be defined per `variant` prop.
    </ComponentHeader>
 
    <div class="grid grid-cols-2">
      <div class="flex">
        <o-button variant="default">
          Default
        </o-button> 
        <o-button variant="primary" class="ml-3">
          Primary
        </o-button>
        <o-button variant="danger" class="ml-3">
          Error / Danger
        </o-button>
      </div>
    </div>
  </section>
</template>

<style lang="postcss">
.button-root {
  @apply inline-flex justify-center px-4 py-2 text-sm font-medium border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2;
}
.button-default {
  @apply bg-white hover:bg-gray-50 text-gray-700 border-gray-300 focus:ring-blue-500;
}
.button-primary {
  @apply bg-blue-600 hover:bg-blue-700 text-white border-transparent focus:ring-blue-500;
}
.button-danger {
  @apply bg-red-600 hover:bg-red-700 text-white border-transparent focus:ring-red-500;
}
</style>