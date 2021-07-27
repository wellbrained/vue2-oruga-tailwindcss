<script>
import ComponentHeader from '@/components/shared/ComponentHeader.vue'
import ComponentFooter from '@/components/shared/ComponentFooter.vue'

export default {
  components: {
    ComponentFooter,
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
    <div>
      <ComponentHeader title="Datepicker" />

      <o-field label="Select a date">
        <o-datepicker
          v-model="dates"
          placeholder="Click to select..."
          icon="calendar"
          range
        />
      </o-field>

      <ComponentFooter>
        <li>Top left / Top right might not be necessary?</li>
        <li>Minimalistic version needs fix</li>
      </ComponentFooter>
    </div>
  </section>
</template>

<style lang="postcss">

.datepicker-dropdown-root {
  @apply absolute left-0 top-full block min-w-min p-2;
}

.datepicker-box {
  @apply block relative p-2 box-border;
}
.datepicker-header {
  @apply pl-3 ml-3 border-b-2;
}
.datepicker-header-buttons {
  @apply flex justify-center text-center items-center;
}

.datepicker-header-previous, .datepicker-header-next {
  @apply inline-flex justify-center text-center cursor-pointer items-center relative border p-1 rounded;
}
.datepicker-header-previous {
  @apply order-1;
}
.datepicker-header-list {
  @apply order-2;
}
.datepicker-header-next {
  @apply order-3;
}

.datepicker-table {
  @apply table mx-auto;
}
.datepicker-table-header {
  @apply table-header-group pl-1 ml-1 border-b-2;
}
.datepicker-table-body {
  @apply table-row-group;
}
</style>
