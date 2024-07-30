import { Router, Request, Response } from "express";
import { criarFilme } from "./Controllers/ControleFilme";

const router = Router()

export default router.get("/teste", (requisicao: Request, resposta: Response) => {
    resposta.status(200).send("rota tudo certo")
}).post("/filme", criarFilme) 