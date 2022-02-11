<script lang="ts" setup>
const props = defineProps({
  blok: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div v-editable="blok" class="border border-shrimp-300">
    <h2 class="text-shrimp-800 font-semibold text-size-xl text-center">
      {{ blok.grid_headline }}
    </h2>
    <ul class="flex pt-4 pb-8 mb-6 border">
      <li :key="blok._uid" v-for="blok in blok.columns" class="px-6">
        <component :blok="blok" :is="blok.component" />
      </li>
    </ul>
  </div>
</template>
