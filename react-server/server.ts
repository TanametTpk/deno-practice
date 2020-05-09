import {
    Application,
    Router,
    RouterContext
} from "https://deno.land/x/oak/mod.ts"

const router = new Router()

router.get('/', ctx => {
    ctx.response.body = "Hello World"
})

const app = new Application()

app
    .use(router.routes())
    .use(router.allowedMethods())
    .use(ctx => {
        ctx.response.status = 404
        ctx.response.body = "Not Found"
    })

await app.listen(`127.0.0.1:${3000}`)

// this is too slow to build