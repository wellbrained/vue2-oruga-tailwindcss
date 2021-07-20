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

    <div class="mx-auto mt-8 mb-16 max-w-7xl">
      <div class="grid grid-cols-2 gap-4">
        <Button />
        <Datepicker />
        <Dropdown />
        <Select />
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
@import url(https://rsms.me/inter/inter.css);

#app section {
  @apply border border-gray-200 px-4 py-8 rounded shadow-sm h-full;
}
</style>
