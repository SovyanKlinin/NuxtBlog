<template>
    <aside class="sidebar">
        <h2>NuxtBlog</h2>
        <div class="sidebar__nav">
            <NuxtLink to="/" class="sidebar__link">Главная</NuxtLink>
            <NuxtLink>Войти</NuxtLink>
        </div>
    </aside>
</template>

<script setup></script>

<style lang="sass" scoped>
@use './../assets/css/mixins.sass'
@use './../assets/css/variables.sass'

.sidebar
    display: flex
    flex-direction: column
    gap: 40px
    width: 200px
    height: 100vh
    padding: 20px
    background-color: variables.$deep-steel-blue
    border-right: 1px solid black
    color: white

    &__nav
        display: flex
        flex-direction: column
        gap: 10px

    &__link
        color: white
        text-decoration: none

        &:hover
            color: variables.$steel-blue


</style>