<script lang="ts" setup>
const props = defineProps({
  blok: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div v-editable="blok" class="py-8 mb-6 text-5xl font-bold text-center">
    <img class="h-48 w-full mb-4 object-cover" :src="blok.image.filename" />
    <h3 class="text-5xl">{{ blok.headline }}</h3>
  </div>
</template>
