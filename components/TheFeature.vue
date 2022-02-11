<script lang="ts" setup>
const props = defineProps({
  blok: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div v-editable="blok" class="border py-2 text-center">
    <img
      v-if="blok.icon.filename"
      class="h-16 mx-auto"
      :src="blok.icon.filename"
      :alt="blok.icon.alt"
    />
    <div v-if="!blok.icon.filename" class="h-16 w-16 bg-gray-200 mx-auto" />
    <h1 class="text-lg">{{ blok.name }}</h1>
    <p class="text-gray-600">{{ blok.description }}</p>
  </div>
</template>
