<template>
    <aside class="adminpanel-sidebar">
        <h2>NuxtBlog</h2>
        <div class="adminpanel-sidebar__nav">
            <el-button @click="goToMain">Выйти</el-button>
            <el-button @click="goToAdmin" style="margin-left: 0;">Назад</el-button>
            <el-button @click="addNewArticle" style="margin-left: 0;">Новая статья</el-button>
        </div>
    </aside>
</template>

<script setup>

const goToMain = (login, password) => {
    if (login === "admin" && password === "admin") {
        navigateTo('/admin?admin=false');
    } else {
        navigateTo('/');
    }
}

const goToAdmin = () => {
    navigateTo('/admin?admin=true');
}

const addNewArticle = () => {
    navigateTo('articles/editor');
}

</script>

<style lang="sass" scoped>
@use './../assets/css/mixins.sass'
@use './../assets/css/variables.sass'

.adminpanel-sidebar
    display: flex
    flex-direction: column
    gap: 40px
    height: 100vh
    padding: 20px
    background-color: variables.$deep-steel-blue
    border-right: 1px solid black
    color: white

    &__nav
        width: 200px
        display: flex
        flex-direction: column
        gap: 30px

</style>