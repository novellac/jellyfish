<script lang="ts" setup>
const props = defineProps({
  blok: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div v-editable="blok" class="prose my-24 mx-auto">
    <header class="text-lg max-w-prose mx-auto mt-12">
      <h1 class="text-gray-700 text-5xl font-semibold leading-tight">
        {{ blok.public_title }}
      </h1>
      <p>By: {{ blok.author_name }}</p>
    </header>
  </div>
</template>
