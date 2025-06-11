<template>

  <NuxtLayout name="default">
    <div class="article">
      <h1 class="article__title">{{ article.title }}</h1>
      <p class="article__text">{{ article.description }}</p>
      <div class="article__date">{{ article.date }}</div>
    </div>
  </NuxtLayout>

</template>

<script setup>

definePageMeta({
  layout: 'default'
})

const route = useRoute()
const slug = route.params.slug

const { data: article } = await useAsyncData(() => queryContent(`/articles/${slug}`).findOne());

useHead({
  title: article.value.title
})

</script>

<style scoped lang="sass">

.article 
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 20px;

    .article__title 
      margin-bottom: 10px;

</style>