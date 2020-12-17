const express = require("express")
const path = require("path")
const app = express()

const configs = {
    path: "build",
    https: true, 
    port: process.env.PORT || 3000
}


if (configs.https)
    app.use((req, res, next) => {
        if ((req.headers["x-forwarded-proto"] || "").endsWith("http"))
            res.redirect(`https://${req.headers.host}${req.url}`)
        else
            next()
    })

app.use(express.static(configs.path))

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, configs.path, "index.html"))
})

app.listen(configs.port, () => {
    console.log(`Server start! On port ${configs.port}!`)
})