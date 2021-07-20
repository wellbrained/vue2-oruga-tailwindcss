<script>
import ComponentHeader from '@/components/shared/ComponentHeader.vue'

export default {
  components: {
    ComponentHeader,
  },
  data () {
    return {
      selectedOptions: []
    }
  }
}
</script>

<template>
  <section class="space-y-4">
    <ComponentHeader title="Select">
      Select does use the OS / Browser behavior for the styling of the dropdown.
    </ComponentHeader>

    <div class="grid grid-cols-2">
      <o-field label="Simple">
        <o-select placeholder="Select a name">
          <option value="flint">
            Flint
          </option>
          <option value="silver">
            Silver
          </option>
          <option value="vane">
            Vane
          </option>
          <option value="billy">
            Billy
          </option>
          <option value="jack">
            Jack
          </option>
        </o-select>
      </o-field>

      <o-field label="Error" variant="danger" message="Something went wrong with this field">
        <o-select placeholder="Select a character">
          <option value="flint">
            Flint
          </option>
          <option value="silver">
            Silver
          </option>
        </o-select>
      </o-field>

      <o-field label="Disabled" message="This field is disabled">
        <o-select placeholder="Select a character" disabled>
          <option value="flint">
            Flint
          </option>
          <option value="silver">
            Silver
          </option>
        </o-select>
      </o-field>
    </div>
  </section>
</template>

<style lang="postcss">
.select-item {
  @apply mt-1 block pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md;
  /* @apply block px-4 py-2 border rounded-md border-gray-300; */
}
.select-danger {
  @apply border-red-500;
}
</style>
