<script setup>
import { useStoryApi, useStoryBridge } from '@storyblok/nuxt/composables'

const route = useRoute()
const storyapi = useStoryApi()
const { parse } = useMarkdown()
const { slug } = route.params

// Get article data
const { data } = await storyapi.get(`cdn/stories/articles/${slug}`, {
  version: 'draft',
})

onMounted(() => {
  useStoryBridge(state.story.id, event => {
    state.story = event
  })
})

const article = reactive(data.story)
const bodyContent = computed(() => parse(article.content.body))
</script>

<template>
  <div>
    <main class="container max-w-screen-lg mx-auto">
      <ArticlePost :blok="article.content" />
      <article
        v-editable="article.content.body"
        class="prose prose-lg prose-green mt-12 mx-auto"
        v-html="bodyContent"
      ></article>
    </main>
  </div>
</template>
