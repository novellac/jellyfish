<script lang="ts" setup>
import { useStoryApi, useStoryBridge } from '@storyblok/nuxt/composables'
const storyapi = useStoryApi()
const route = useRoute()

const { data } = await storyapi.get(
  `cdn/stories/home?language=${route.params.lang}`,
  {
    resolve_relations: ['feature-articles.articles'],
    version: 'draft',
  },
)

onMounted(() => {
  useStoryBridge(state.story.id, story => (state.story = story))
})

const state = reactive({
  story: data.story,
})
</script>

<template>
  <component
    :is="state.story.content.component"
    :key="state.story.content._uid"
    :blok="state.story.content"
  />
</template>
