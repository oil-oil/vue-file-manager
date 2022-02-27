const Router = require("@koa/router")
const router = new Router()
const fs = require("fs/promises")
const path = require("path")

router.get("/getFileList", async ctx => {
  const files = await fs.readdir("/")
  const fileList = files.map((p => path.parse(p)))
  console.log(fileList)
  ctx.body = fileList
})

module.exports = router.routes()