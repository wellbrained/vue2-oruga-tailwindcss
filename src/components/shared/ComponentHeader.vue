<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    }
  }
}
</script>

<template>
	<div>
		<h2 class="pb-2 text-xl font-medium text-blue-500">Component: {{ title }}</h2>
		<p v-if="$slots.default" class="pb-4 text-sm text-gray-700">
			<b>Description:</b>
			<slot></slot>
		</p>
	</div>
</template>