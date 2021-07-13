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
      Different kind of buttons with the approriate styling.
    </ComponentHeader>
		
    <div class="grid grid-cols-2">
      <div class="flex">
        <o-button
          variant="default"
          class="inline-flex justify-center px-4 py-2 ml-3 text-sm font-medium border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
          >Default</o-button
        >
        <o-button
          variant="primary"
          class="inline-flex justify-center px-4 py-2 ml-3 text-sm font-medium border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
          >Primary</o-button
        >
        <o-button
          variant="danger"
          class="inline-flex justify-center px-4 py-2 ml-3 text-sm font-medium border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
          >Error / Danger</o-button
        >
      </div>
    </div>
  </section>
</template>

<style>
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