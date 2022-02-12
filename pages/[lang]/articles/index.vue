<script lang="ts" setup>
import { useStoryApi, useStoryBridge } from '@storyblok/nuxt/composables'
const storyapi = useStoryApi()
const route = useRoute()

console.log(route.params.lang)
const { data } = await storyapi.get(
  `cdn/stories?starts_with=articles&language=${route.params.lang}`,
  {
    version: 'draft',
  },
)

onMounted(() => {
  useStoryBridge(state.story.id, story => (state.story = story))
})

const state = reactive({
  story: data,
})
</script>

<template>
  <section>
    <h2 class="py-10 text-center font-bold text-4xl">
      {{ route.params.lang }} Articles Overview
    </h2>
    <ul class="flex py-6 mb-6">
      <li
        v-for="article in state.story.stories"
        :key="article._uid"
        class="flex-auto px-6"
        style="min-width: 33%"
      >
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
  </section>
</template>
