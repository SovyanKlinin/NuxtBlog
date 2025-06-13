export default defineNuxtRouteMiddleware((to, from) => {
    const isAdmin = to.query.admin === 'true'

    if(!isAdmin && to.path === '/admin') {
        return navigateTo('/')
    }
})