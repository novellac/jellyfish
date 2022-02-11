<script setup>
import { useStoryApi, useStoryBridge } from '@storyblok/nuxt/composables'

const route = useRoute()
const storyapi = useStoryApi()
const { parse } = useMarkdown()
const { slug } = route.params

// Get article data
const { data } = await storyapi.get(
  `cdn/stories/articles/${slug}?language=de`,
  {
    version: 'draft',
  },
)
console.log('DEFAULT ln13: ', data)

onMounted(() => {
  useStoryBridge(state.story.id, story => (state.story = story))
})

const state = reactive({
  story: data.story,
})
const bodyContent = computed(() => parse(state.story.content.body))
</script>

<template>
  <div>
    <main class="container max-w-screen-lg mx-auto">
      <ArticlePost :blok="state.story.content" />
      <article
        v-if="state.story.content.body"
        v-editable="state.story.content.body"
        class="prose prose-lg prose-green mt-12 mx-auto"
        v-html="bodyContent"
      ></article>
    </main>
  </div>
</template>
