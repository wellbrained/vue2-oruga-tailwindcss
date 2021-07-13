<script>
import Button from '@/components/Button.vue'
import Datepicker from '@/components/Datepicker.vue'
import Dropdown from '@/components/Dropdown.vue'
import Select from '@/components/Select.vue'

export default {
  name: 'App',
  components: {
    Button,
    Dropdown,
    Select,
    Datepicker,
  }
}
</script>

<template>
  <div id="app" class="container mx-auto">
    <h1 class="w-full text-4xl font-bold text-center text-blue-700"> Hello Oruga with Tailwind! </h1>
    <div class="grid grid-cols-2 gap-4 p-4 mt-8 space-y-8">
      <Button />
      <Datepicker />
      <Dropdown />
      <Select />
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
