<template>

    <NuxtLayout name="admin">
        <div class="editor">
            <h1>Новая статья</h1>
            <el-input v-model="articleTitle" style="width: 240px" placeholder="Please input" />
            <el-input v-model="articleDescription" style="width: 240px" :rows="3" type="textarea"
                placeholder="Please input" />
            <el-button @click="addArticle">Добавить статью</el-button>
        </div>
    </NuxtLayout>

</template>

<script setup>
import { useState } from '#app'
import { getCurrentInstance } from 'vue'
import { ElNotification } from 'element-plus'

definePageMeta({
    layout: 'admin'
})

const { appContext } = getCurrentInstance();
const articleTitle = useState('articleTitle', () => '')
const articleDescription = useState('articleDescription', () => '')

const addArticle = async () => {
    if (!articleTitle.value.trim() || !articleDescription.value.trim()) {
        ElNotification({
            type: 'warning',
            title: 'Заполните все поля'
        });
        return;
    } else {
        try {
            await useFetch('/api/articles.new', {
                method: 'POST',
                body: {
                    title: articleTitle.value,
                    description: articleDescription.value
                }
            });

            ElNotification({
                type: 'primary',
                title: 'Статья успешно добавлена'
            }, appContext)

            articleTitle.value = '';
            articleDescription.value = '';

        } catch (error) {
            ElNotification({
                type: 'error',
                title: 'Ошибка при добавлении'
            }, appContext)
        }
    }

}

</script>

<style scoped lang="sass">

.editor
    display: flex
    flex-direction: column
    padding: 20px
    gap: 20px

</style>