const express = require("express")
const app = express()
const { connection } = require("./db")
const { userRoutes } = require("./routes/routes")

const { auth } = require("./middleware/auth")
const { notesRoutes } = require("./routes/notes.routes")
const cors = require("cors")
require("dotenv").config()
app.use(cors())
app.use(express.json())
app.use("/user", userRoutes)
app.use(auth)
app.use("/notes", notesRoutes)

app.listen(process.env.port, async () => {
    try {
        await connection
        console.log("connected to mongodb")
    } catch (error) {
        console.log(error.message)
    }

    console.log("server is running")

})