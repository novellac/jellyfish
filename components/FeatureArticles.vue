<script lang="ts" setup>
const props = defineProps({
  blok: {
    type: Object,
    required: true,
  },
})

const sortedFeatureArticles = computed(() => {
  return props.blok.articles.sort((a, b) => {
    return a.content.public_title - b.content.public_title
  })
})
</script>

<template>
  <div v-editable="blok">
    <h2 class="pt-2 pl-6 text-lg text-gray-700 italic">{{ blok.title }}</h2>
    <ul class="flex py-6 mb-6">
      <li
        v-for="article in sortedFeatureArticles"
        :key="article.uuid"
        class="flex-auto px-6"
        style="min-width: 33%"
      >
        {{ article.full_slug }}
        <ArticleTeaser
          v-if="article.content"
          :article-link="`/${article.full_slug}`"
          :article-content="article.content"
        />
        <p v-else class="px-4 py-2 text-white bg-red-700 text-center rounded">
          This content loads on save. <strong>Save the entry & reload.</strong>
        </p>
      </li>
    </ul>
  </div>
</template>
