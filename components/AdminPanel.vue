<template>
    <aside class="adminpanel-sidebar">
        <h2>NuxtBlog</h2>
        <div class="adminpanel-sidebar__nav">
            <el-button @click="goToMain">Выйти</el-button>
            <NuxtLink class="adminpanel-sidebar__button" to="/admin?admin=true" style="margin-left: 0;">
                <el-button style="width: 100%;">Назад</el-button>
            </NuxtLink>
            <NuxtLink class="adminpanel-sidebar__button" to="articles/editor" style="margin-left: 0;">
                <el-button style="width: 100%;">Новая статья</el-button>
            </NuxtLink>
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

        .adminpanel-sidebar__button
            width: 100%

</style>