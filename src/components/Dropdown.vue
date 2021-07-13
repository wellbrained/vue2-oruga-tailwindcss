<script>
import ComponentHeader from '@/components/shared/ComponentHeader.vue'

export default {
	components: {
		ComponentHeader,
	},
  data() {
    return {
      selectedOptions: [],
    };
  },
};
</script>

<template>
  <section>
		<ComponentHeader title="Dropdown">
      Dropdown does use custom styling.
    </ComponentHeader>

    <div class="flex space-x-10">
      <!-- Dropdown button -->
      <o-dropdown
        v-model="selectedOptions"
        multiple
        aria-role="list"
      >
        <!-- The selected/default item within the dropdown -->
        <o-button variant="primary" type="button" slot="trigger">
          <span>Selected ({{ selectedOptions.length }})</span>
          <o-icon icon="caret-down"></o-icon>
        </o-button>

        <o-dropdown-item value="option1" aria-role="listitem">
          <span>Option 1</span>
        </o-dropdown-item>

        <o-dropdown-item value="option2" aria-role="listitem">
          <span>Option 2</span>
        </o-dropdown-item>

        <o-dropdown-item value="option3" aria-role="listitem">
          <span>Option 3</span>
        </o-dropdown-item>
      </o-dropdown>

      <p class="p-2">
        <b>selected</b>: {{ selectedOptions }}
      </p>
    </div>
  </section>
</template>

<style lang="postcss">
/* Root of the whole Dropdown */
.dropdown-root {
  @apply block w-64;
}
/* Button to trigger */
.dropdown-trigger { 
  @apply px-4 py-2 border rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50;
}
/* Whole menu */
.dropdown-menu {
  @apply text-gray-900 border border-gray-300 shadow-lg rounded-sm z-10;
}
/* Item itself */
.dropdown-item {
  @apply cursor-pointer block px-4 py-2 bg-white hover:bg-gray-100 text-gray-700;
}
/* Active item */
.dropdown-item-active {
  @apply bg-blue-100 text-blue-900 hover:bg-gray-100 hover:text-gray-700;
}
</style>
