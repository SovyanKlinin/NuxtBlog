<template>

<NuxtLayout name="default">
  <h1>{{ article.title }}</h1>
</NuxtLayout>

</template>

<script setup>

definePageMeta({
  layout: 'default'
})

const route = useRoute()
const slug = route.params.slug

const { data: article } = await useAsyncData(() => queryContent(`/articles/${slug}`).findOne());
console.log(article.value)

</script>

<style scoped lang="sass">
</style>