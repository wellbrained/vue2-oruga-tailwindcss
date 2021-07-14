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
  },
  methods: {
    setTheme (themeName) {
      const html = document.getElementsByTagName('html')[0]
      html.setAttribute('data-theme', themeName)
    }
  }
}
</script>

<template>
  <div id="app" class="container mx-auto">
    <div class="absolute flex items-center space-x-4 top-8 right-8">
      <button 
        @click="setTheme('')" 
        class="inline-flex justify-center px-4 py-2 text-sm font-medium border border-gray-300 rounded-md shadow-sm bg-base text-primary focus:outline-none focus:ring-2 focus:ring-offset-2 hover:bg-gray-50 focus:ring-blue-500"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" />
      </svg>
        default
      </button>
      <button 
        @click="setTheme('dark')" 
        class="inline-flex justify-center px-4 py-2 text-sm font-medium border border-gray-300 rounded-md shadow-sm bg-base text-primary focus:outline-none focus:ring-2 focus:ring-offset-2 hover:bg-gray-50 focus:ring-blue-500"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
        dark
      </button>
      <button 
        @click="setTheme('test')" 
        class="inline-flex justify-center px-4 py-2 text-sm font-medium border border-gray-300 rounded-md shadow-sm bg-base text-primary focus:outline-none focus:ring-2 focus:ring-offset-2 hover:bg-gray-50 focus:ring-blue-500"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.938l1-4H9.031z" clip-rule="evenodd" />
        </svg>
        test
      </button>
    </div>
    <h1 class="w-full text-4xl font-bold text-center text-primary"> Hello Oruga with Tailwind! </h1>
    <div class="grid grid-cols-2 gap-4 p-4 mt-8 space-y-8">
      <Button />
      <Datepicker />
      <Dropdown />
      <Select />
    </div>
  </div>
</template>

<style lang="postcss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

/* Styling for the general fields */
.field-message {
	@apply text-sm mt-1;
}
.field-danger {
	@apply text-red-500;
}
</style>
