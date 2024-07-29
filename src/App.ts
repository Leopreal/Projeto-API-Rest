import express from "express"
import config from "config"

const app = express()
// criando a variaval

// JSON middleware - trafegar informações 
app.use(express.json())

// porta do app
const porta = config.get<number>("porta")

app.listen(porta, async () => {
    console.log(`aplicação funcionando na porta ${porta}`)
})