<script>
import ChevronUp from '@/components/icons/ChevronUp.vue'
import ChevronDown from '@/components/icons/ChevronDown.vue'
import ChevronLeft from '@/components/icons/ChevronLeft.vue'
import ChevronRight from '@/components/icons/ChevronRight.vue'
import Calendar from '@/components/icons/Calendar.vue'
import Beaker from '@/components/icons/Beaker.vue'
import DotsVertical from '@/components/icons/DotsVertical.vue'

export default {
  name: 'MyIconComponent',
  components: {
    ChevronUp,
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    Calendar,
    DotsVertical,
    Beaker,
  },
  props: {
    icon: {
      type: Array,
      default: () => []
    },
  },
  computed: {
    iconPack () {
      return this.icon[0]
    },
    iconName () {
      return this.icon[1]
    },
  }
}
</script>

<template>
  <!-- Way to avoid the wrapper <span> tag in the rendered page -->
  <Component :is="iconName" />

  <!--
    Easier way to manage all the icons and keeping it in a single file but has a wrapper element

  <span>
    <template v-if="iconName === 'caret-down'">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    </template>
    <template v-if="iconName === 'caret-up'">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd" />
      </svg>
    </template>
    <template v-if="iconName === 'beaker'">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    </template>
  </span>
  -->
</template>
