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
      Different kind of buttons with the approriate styling.<br>
      The type will be defined per `variant` prop.
    </ComponentHeader>

    <div class="flex flex-col space-y-4">
      <div class="flex space-x-4">
        <o-button variant="default">
          Default
        </o-button>
        <o-button variant="primary">
          Primary
        </o-button>
        <o-button variant="danger">
          Error / Danger
        </o-button>
      </div>

      <div class="flex space-x-4">
        <o-button variant="primary">
          <o-icon class="mr-2 -ml-1" icon="beaker" />
          Button with Icon
        </o-button>
        <o-button variant="primary">
          Button with Icon
          <o-icon class="ml-2 -mr-1" icon="beaker" />
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
.button-wrapper, .button-wrapper > span {
  @apply inline-flex;
}
.button-icon {
  /* @apply px-1; */
}
.button-minimal {
  @apply bg-transparent border-transparent shadow-none text-right justify-end p-2;
  @apply rounded-full flex items-center text-gray-600 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500;
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
