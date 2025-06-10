<template>
  <div class="main">
    <h1>Блог</h1>
    <div class="main__articles">
      <div class="main-article" v-for="article in articles" :key="article._path">
        <NuxtLink :to="article._path">
          {{ article.title }}
        </NuxtLink>
        <p>{{ article.description }}</p>
        <p>{{ article.date }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default'
})

useHead({
  title: 'NuxtBlog'
})

const { data: articles } = await useAsyncData(() => queryContent('/articles').find());
</script>