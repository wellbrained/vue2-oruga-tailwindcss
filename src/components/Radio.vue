<script>
import ComponentHeader from '@/components/shared/ComponentHeader.vue'

export default {
  components: {
    ComponentHeader,
  },
  data () {
    return {
      radio: 'Flint',
      radioCustom: 'Flint',
    }
  }
}
</script>

<template>
  <section>
    <ComponentHeader title="Radiobutton">
      Radio buttons
    </ComponentHeader>

    <div class="flex flex-col space-y-4">
      <div class="block mb-4">
        <o-radio v-model="radio" name="name" native-value="Flint">
          Flint
        </o-radio>
        <o-radio v-model="radio" name="name" native-value="Silver">
          Silver
        </o-radio>
        <o-radio v-model="radio" name="name" native-value="Jack">
          Jack
        </o-radio>
        <o-radio v-model="radio" name="name" native-value="Vane">
          Vane
        </o-radio>
        <p class="content">
          <b>Selection:</b>
          {{ radio }}
        </p>
      </div>

      <ComponentHeader title="Radiogroup">
        Radio Groups
      </ComponentHeader>

      <div class="block">
        <o-radio v-model="radioCustom" name="name" native-value="Flint" variant="box">
          <div class="flex flex-col ml-3">
            <span class="block text-sm font-medium text-gray-900">
              Flint
            </span>
            <span class="block text-sm text-gray-500">
              This is just a simple description.
            </span>
          </div>
        </o-radio>
        <o-radio v-model="radioCustom" name="name" native-value="Silver" variant="box">
          <div class="flex flex-col ml-3">
            <span class="block text-sm font-medium text-gray-900">
              Silver
            </span>
            <span class="block text-sm text-gray-500">
              This is just a simple description.
            </span>
          </div>
        </o-radio>
        <o-radio v-model="radioCustom" name="name" native-value="Jack" variant="box">
          <div class="flex flex-col ml-3">
            <span class="block text-sm font-medium text-gray-900">
              Jack
            </span>
            <span class="block text-sm text-gray-500">
              This is just a simple description.
            </span>
          </div>
        </o-radio>
        <o-radio v-model="radioCustom" name="name" native-value="Vane" variant="box">
          <div class="flex flex-col ml-3">
            <span class="block text-sm font-medium text-gray-900">
              Vane
            </span>
            <span class="block text-sm text-gray-500">
              This is just a simple description.
            </span>
          </div>
        </o-radio>
        <p class="content">
          <b>Selection:</b>
          {{ radioCustom }}
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="postcss">
.radio-box {
  @apply border-gray-200 rounded-tl-md rounded-tr-md relative border p-4 flex cursor-pointer;
}
.radio-box.radio-checked {
  @apply bg-indigo-50 border-indigo-200 z-10;
}
.radio-box .radio-check {
  @apply h-4 w-4;
}
.radio-box .radio-check-checked {
  @apply h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500 mt-1;
}
.radio-box .radio-label {
  @apply text-gray-900 ml-3 font-medium;
}
</style>
