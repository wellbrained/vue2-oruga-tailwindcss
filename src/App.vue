<script>
import PageHeader from '@/components/shared/PageHeader.vue'
import Button from '@/components/Button.vue'
import Datepicker from '@/components/Datepicker.vue'
import Dropdown from '@/components/Dropdown.vue'
import Select from '@/components/Select.vue'

export default {
  name: 'App',
  components: {
    PageHeader,
    Button,
    Dropdown,
    Select,
    Datepicker,
  },
}
</script>

<template>
  <div id="app">
    <PageHeader />

    <div class="px-8 mx-auto max-w-7xl">
      <div class="grid grid-cols-2 gap-4 p-4 mt-8 space-y-8">
        <Button />
        <Datepicker />
        <Dropdown />
        <Select />
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

/* Styling for the general fields */
.field-message {
  @apply text-sm mt-1 text-primary;
}
.field-label {
  @apply text-primary;
}
.field-danger {
  @apply text-red-500;
}
</style>
