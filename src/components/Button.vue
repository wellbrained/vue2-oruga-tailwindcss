<script>
import ComponentHeader from '@/components/shared/ComponentHeader.vue'

export default {
  components: {
    ComponentHeader,
  },
}
</script>

<template>
  <section>
    <ComponentHeader title="Button">
      Different kind of buttons with the approriate styling. The type will be defined per `variant` prop.
    </ComponentHeader>

    <div class="flex flex-col space-y-4">
      <div class="flex space-x-4">
        <o-button variant="default">
          Default
        </o-button>
        <o-button variant="primary">
          Primary
        </o-button>
        <o-button variant="danger" expanded>
          Error / Danger
        </o-button>
      </div>

      <div class="flex space-x-4">
        <o-button variant="primary" icon-left="beaker">
          Icon left
        </o-button>
        <o-button variant="primary" icon-right="beaker">
          Icon right
        </o-button>
        <o-button variant="danger" icon-right="beaker" />
      </div>
    </div>
  </section>
</template>

<style lang="postcss">
.button-root {
  @apply inline-flex justify-center items-center px-4 py-2;
  @apply text-sm font-medium rounded-md shadow-sm border;
  @apply focus:outline-none focus:ring-2 focus:ring-offset-2;
}
.button-wrapper {
  @apply inline-flex;
}
.button-icon {
  @apply px-1;
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
