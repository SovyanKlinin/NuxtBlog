import { serverQueryContent } from '#content/server'
import { createError } from 'h3'

export default defineEventHandler(async (event) => {
    const slug = event.context.params?.slug;
    const article = await serverQueryContent(event, `articles/${slug}`).findOne();
    if (!article) {
        throw createError({
            statusCode: 404,
            statusMessage: 'Статья не найдена',
            data: null
        })
    }
    return article
})