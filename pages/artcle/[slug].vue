<template>
    <div class="article">
        <h1 class="article__title">{{ article.title }}</h1>
        <p class="article__date">{{ article.date }}</p>
        <div class="articel__description">{{ article.description }}</div>
    </div>
</template>

<script setup>

useHead({
    title: article.title
})

const {params} = useRoute();
const article = await queryContent(`/articles/${params.slug}`).findOne();

</script>