<template>
  <div class="not-found">
    <h1>404 Упс.. что-то пошло не так</h1>
    <NuxtLink to="/" class="not-found__link">Вернуться на главную</NuxtLink>
  </div>
</template>

<script setup>

definePageMeta({
  layout: false
})

useHead({
  title: 'Страница не найдена — 404',
  meta: [
    {
      name: 'description',
      content: 'Запрашиваемая страница не найдена'
    }
  ]
});

</script>

<style lang="sass" scoped>
@use './../assets/css/mixins.sass'
@use './../assets/css/variables.sass'

.not-found
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    gap: 10px
    width: 100wv
    height: 100vh

    &__link
        text-decoration: none
        color: black

        &:hover
            color: variables.$deep-steel-blue

</style>