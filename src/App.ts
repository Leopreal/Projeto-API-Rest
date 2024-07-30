require("dotenv").config()

import express from "express"
import config from "config"

const app = express()
// criando a variaval

// conectando o banco
import db from "../config/db"


// JSON middleware - trafegar informações 
app.use(express.json())

// router
import router from "./router"

// logger 
import Logger from "../config/logger"

// middware
import morganMid from "./middleware/morganMid"

app.use(morganMid)

app.use("/api/", router) // prefixo de URL



// porta do app
const porta = config.get<number>("porta")

app.listen(porta, async () => {

    await db()

    Logger.info(`aplicação funcionando na porta ${porta}`)
})
