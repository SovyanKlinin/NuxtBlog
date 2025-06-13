<template>
  <NuxtLayout name="default">
  <div class="main">
    <h1>Блог</h1>
    <div class="main__articles">
      <div class="main__article" v-for="article in articles" :key="article._path">
        <h3 class="main__title"><NuxtLink :to="article._path">
          {{ article.title }}
        </NuxtLink></h3>
        <p>{{ article.description }}</p>
        <p>{{ article.date }}</p>
      </div>
    </div>
  </div>
  </NuxtLayout>
</template>

<script setup>
definePageMeta({
  layout: 'default'
})

const { data: articles } = await useAsyncData(() => queryContent('/articles').find());
console.log(articles)

useHead({
  title: 'NuxtBlog'
})


</script>

<style scoped lang="sass">
@use './../assets/css/mixins.sass'
@use './../assets/css/variables.sass'

.main
  display: flex
  flex-direction: column
  align-items: flex-start
  justify-content: flex-start
  gap: 40px
  padding: 40px 30px

  &__articles
    display: flex
    flex-direction: column
    gap: 20px

    .main__article
      display: flex
      flex-direction: column
      gap: 10px
      padding: 10px
      border: 1px solid black
      border-radius: 10px

      .main__title a
        color: black
        text-decoration: none

        &:hover
          color: variables.$deep-steel-blue

</style>