<script>
import ComponentHeader from '@/components/shared/ComponentHeader.vue'

export default {
  components: {
    ComponentHeader,
  },
  data () {
    return {
      selectedOptions: [],
      selectedOptions2: [],
      selectedOptions3: [],
      selectedOptions4: [],
    }
  },
}
</script>

<template>
  <section>
    <ComponentHeader title="Dropdown">
      Dropdown does use custom styling.
    </ComponentHeader>

    <div class="flex flex-col space-y-4">
      <div class="flex items-center space-x-10">
        <span class="w-24">Bottom left:</span>
        <o-dropdown
          v-model="selectedOptions"
          position="bottom-left"
          aria-role="list"
          multiple
        >
          <!-- The selected/default item within the dropdown -->
          <o-button slot="trigger" slot-scope="{ active }" variant="default">
            <span>Selected ({{ selectedOptions.length }})</span>
            <o-icon :icon="active ? 'chevron-up' : 'chevron-down'" />
          </o-button>

          <div class="p-1 space-y-1">
            <o-dropdown-item value="option1" aria-role="listitem">
              <span>Option 1</span>
            </o-dropdown-item>

            <o-dropdown-item value="option2" aria-role="listitem">
              <span>Option 2</span>
            </o-dropdown-item>

            <o-dropdown-item value="option3" aria-role="listitem">
              <span>Option 3</span>
            </o-dropdown-item>
          </div>
        </o-dropdown>

        <p class="p-2 text-sm text-primary">
          <b>selected</b>: {{ selectedOptions }}
        </p>
      </div>

      <div class="flex items-center space-x-10">
        <span class="w-24">Bottom right:</span>
        <o-dropdown
          v-model="selectedOptions2"
          position="bottom-right"
          aria-role="list"
          multiple
        >
          <!-- The selected/default item within the dropdown -->
          <o-button slot="trigger" slot-scope="{ active }" variant="default">
            <span>Selected ({{ selectedOptions2.length }})</span>
            <o-icon :icon="active ? 'chevron-up' : 'chevron-down'" />
          </o-button>

          <div class="p-1 space-y-1">
            <o-dropdown-item value="option1" aria-role="listitem">
              <span>Option 1</span>
            </o-dropdown-item>

            <o-dropdown-item value="option2" aria-role="listitem">
              <span>Option 2</span>
            </o-dropdown-item>

            <o-dropdown-item value="option3" aria-role="listitem">
              <span>Option 3</span>
            </o-dropdown-item>
          </div>
        </o-dropdown>

        <p class="p-2 text-sm text-primary">
          <b>selected</b>: {{ selectedOptions2 }}
        </p>
      </div>

      <div class="flex items-center space-x-10">
        <span class="w-24">Top left:</span>
        <o-dropdown
          v-model="selectedOptions3"
          position="top-left"
          aria-role="list"
          multiple
        >
          <!-- The selected/default item within the dropdown -->
          <o-button slot="trigger" slot-scope="{ active }" variant="default">
            <span>Selected ({{ selectedOptions3.length }})</span>
            <o-icon :icon="active ? 'chevron-up' : 'chevron-down'" />
          </o-button>

          <div class="p-1 space-y-1">
            <o-dropdown-item value="option1" aria-role="listitem">
              <span>Option 1</span>
            </o-dropdown-item>

            <o-dropdown-item value="option2" aria-role="listitem">
              <span>Option 2</span>
            </o-dropdown-item>

            <o-dropdown-item value="option3" aria-role="listitem">
              <span>Option 3</span>
            </o-dropdown-item>
          </div>
        </o-dropdown>

        <p class="p-2 text-sm text-primary">
          <b>selected</b>: {{ selectedOptions3 }}
        </p>
      </div>

      <div class="flex items-center space-x-10">
        <span class="w-24">Top right:</span>
        <o-dropdown
          v-model="selectedOptions4"
          position="top-right"
          aria-role="list"
          multiple
        >
          <!-- The selected/default item within the dropdown -->
          <o-button slot="trigger" slot-scope="{ active }" variant="default">
            <span>Selected ({{ selectedOptions4.length }})</span>
            <o-icon :icon="active ? 'chevron-up' : 'chevron-down'" />
          </o-button>

          <div class="p-1 space-y-1">
            <o-dropdown-item value="option1" aria-role="listitem">
              <span>Option 1</span>
            </o-dropdown-item>

            <o-dropdown-item value="option2" aria-role="listitem">
              <span>Option 2</span>
            </o-dropdown-item>

            <o-dropdown-item value="option3" aria-role="listitem">
              <span>Option 3</span>
            </o-dropdown-item>
          </div>
        </o-dropdown>

        <p class="p-2 text-sm text-primary">
          <b>selected</b>: {{ selectedOptions4 }}
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="postcss">
/* Root of the whole Dropdown */
.dropdown-root {
  @apply block relative;
}
/* Whole menu */
.dropdown-menu {
  /* @apply text-primary border border-gray-300 shadow-lg rounded-md z-10 absolute top-12 left-0 min-w-full; */
  @apply absolute w-56 mt-2 bg-white divide-y divide-gray-100 rounded-md shadow-lg z-10;
  @apply ring-1 ring-black ring-opacity-5 focus:outline-none;
}
.dropdown-position-top-left {
  @apply bottom-0 right-0 mb-2;
}
.dropdown-position-top-right {
  @apply bottom-0 left-0 mb-2;
}
.dropdown-position-bottom-left {
  @apply right-0 mt-2;
}
.dropdown-position-bottom-right {
  @apply left-0;
}
/* Item itself */
.dropdown-item {
  @apply flex rounded-md items-center w-full px-2 py-2 text-sm cursor-pointer z-50;
  @apply bg-base text-primary hover:bg-primary hover:text-white;
  @apply focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500;
}
/* Active item */
.dropdown-item-active {
  /* @apply bg-base text-primary hover:bg-base hover:text-primary-hover flex rounded-md items-center w-full px-2 py-2 text-sm; */
  @apply flex rounded-md items-center w-full px-2 py-2 text-sm cursor-pointer z-50;
  @apply bg-primary text-white hover:bg-primary-hover hover:text-white;
  @apply focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500;
}
</style>
