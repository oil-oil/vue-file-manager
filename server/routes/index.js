const Router = require("@koa/router") // 引入koa-router
const router = new Router()
router.use("/file", require("./getFileList"))

module.exports = router.routes()
