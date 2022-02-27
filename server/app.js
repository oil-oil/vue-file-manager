const Koa = require("koa")
const app = new Koa();

// koa路由
const router = require("./routes")
app.use(router)

app.listen(3100);