<script lang="ts" setup>
const pageLang = computed(() => {
  return 'en'
})
</script>

<template>
  <Html :lang="pageLang">
    <div>
      <TheHeader />
      <div class="page">
        <NuxtPage />
      </div>
    </div>
  </Html>
</template>
