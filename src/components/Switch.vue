<script>
import ComponentHeader from '@/components/shared/ComponentHeader.vue'

export default {
  components: {
    ComponentHeader,
  },
  data () {
    return {
      isSwitched: false,
      isSwitchedCustom: 'Peter',
    }
  },
}
</script>

<template>
  <section>
    <ComponentHeader title="Switch">
      Switch component
    </ComponentHeader>

    <div class="flex flex-col space-y-4">
      <div class="flex items-center">
        <o-switch v-model="isSwitched" />
        <span class="flex flex-col flex-grow ml-3">
          <span class="text-sm font-medium text-gray-900">{{ isSwitched }}</span>
          <span class="text-sm text-gray-500">Switch-Component with default values of true/false for on/off.</span>
        </span>
      </div>

      <div class="flex items-center">
        <o-switch v-model="isSwitchedCustom" true-value="Pan" false-value="Peter" />
        <span class="flex flex-col flex-grow ml-3">
          <span class="text-sm font-medium text-gray-900">{{ isSwitchedCustom }}</span>
          <span class="text-sm text-gray-500">Switch-Component with custom values for on/off.</span>
        </span>
      </div>
    </div>
  </section>
</template>

<style lang="postcss">
.switch-root {
  @apply cursor-pointer;
}
.switch-root input[type=checkbox] {
  @apply absolute left-0 opacity-0 outline-none;
}
.switch-wrapper {
  @apply mx-1 inline-flex items-center relative;
}
.switch-check {
  @apply bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500;
}
.switch-checkswitch {
  @apply translate-x-0 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200;
}
.switch-check-checked {
  @apply bg-indigo-600;
}
.switch-check-checked .switch-checkswitch {
  @apply translate-x-5;
}

</style>
