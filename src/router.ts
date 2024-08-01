import { Router, Request, Response } from "express";
import { AcharFilmePorId, AcharTodoOsFilmes, criarFilme, RemoverFilme } from "./Controllers/ControleFilme";

// validate
import { validacao } from "./middleware/Controlar";
import { ValidacaoDoFilme } from "./middleware/ValidacaodeFilme";


const router = Router()

export default router.get("/teste", (requisicao: Request, resposta: Response) => {
    resposta.status(200).send("rota tudo certo")
}).post("/filme",ValidacaoDoFilme(), validacao, criarFilme) // CRIAÇÃO DO FILME
.get("/filme/:id", AcharFilmePorId) // FILTRAR POR ID
.get("/filme", AcharTodoOsFilmes)  // MOSTRAR TODOS OS FILMES
.delete("/filme/:id", RemoverFilme) // REMOVER FILME