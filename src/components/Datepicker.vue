<script>
import ComponentHeader from '@/components/shared/ComponentHeader.vue'

export default {
  components: {
    ComponentHeader,
  },
  data() {
    return {
      dates: [],
    };
  },
};
</script>

<template>
	<section>
		<ComponentHeader title="Datepicker" />
		
		<o-field label="Select a date">
			<o-datepicker
				placeholder="Click to select..."
				icon="calendar"
				v-model="dates"
				range
			>
			</o-datepicker>
		</o-field>
	</section>
</template>