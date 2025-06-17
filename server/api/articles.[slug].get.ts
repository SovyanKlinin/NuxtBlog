import { serverQueryContent } from '#content/server'

export default defineEventHandler(async (event) => {
    const slug = event.context.params?.slug;
    const article = await serverQueryContent(event, `articles/${slug}`).findOne()
    return article
})