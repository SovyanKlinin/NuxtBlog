<template>
    <aside class="sidebar">
        <h2>NuxtBlog</h2>
        <div class="sidebar__nav">
            <el-button @click="backToMain">Главная</el-button>
            <div class="sidebar__auth">
                <el-input v-model="adminLogin" style="width: 100%" placeholder="Admin login" />
                <el-input v-model="adminPassword" style="width: 100%" type="password" placeholder="Admin password"
                    show-password />
                <el-button @click="goToAdminPanel(adminLogin, adminPassword)">Войти</el-button>
            </div>
        </div>
    </aside>
</template>

<script setup>

import { ref } from 'vue'
import { getCurrentInstance } from 'vue'
import { ElNotification } from 'element-plus'

const adminLogin = ref('');
const adminPassword = ref('')
const { appContext } = getCurrentInstance();

const backToMain = () => {
    navigateTo('/')
}

const goToAdminPanel = (login, password) => {
    if (!login || !password) {
        ElNotification({
            type: 'error',
            title: 'Поля не заполнены'
        }, appContext)
    } else {
        if (login === "admin" && password === "admin") {
            navigateTo('/admin?admin=true');
        } else {

            ElNotification({
                type: 'error',
                title: 'Неверный логин или пароль'
            }, appContext)

            navigateTo('/');
        }
    }
}

</script>

<style lang="sass" scoped>
@use './../assets/css/mixins.sass'
@use './../assets/css/variables.sass'

.sidebar
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

        .sidebar__auth
            display: flex
            flex-direction: column
            gap: 10px

</style>