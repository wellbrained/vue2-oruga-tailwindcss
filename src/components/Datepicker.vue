<script>
import ComponentHeader from '@/components/shared/ComponentHeader.vue'

export default {
  components: {
    ComponentHeader,
  },
  data () {
    return {
      dates: [],
    }
  },
}
</script>

<template>
  <section>
    <ComponentHeader title="Datepicker" />

    <o-field label="Select a date">
      <o-datepicker
        v-model="dates"
        placeholder="Click to select..."
        icon="calendar"
        range
      />
    </o-field>
  </section>
</template>
