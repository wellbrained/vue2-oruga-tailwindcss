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
        <o-button variant="default" slot="trigger">
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

      <p class="p-2 text-primary">
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
/* Whole menu */
.dropdown-menu {
  @apply text-primary border border-gray-300 shadow-lg rounded-md z-10;
}
/* Item itself */
.dropdown-item {
  @apply cursor-pointer block px-4 py-2 bg-base hover:bg-base-hover text-gray-700 z-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500;
}
/* Active item */
.dropdown-item-active {
  @apply bg-base text-primary hover:bg-base-hover hover:text-primary-hover;
}
</style>
