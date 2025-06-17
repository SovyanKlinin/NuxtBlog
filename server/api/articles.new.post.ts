export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const { title, description } = body;
    const date = new Date().toISOString();

    console.log( 'Статья создана', title, description, date )
})
