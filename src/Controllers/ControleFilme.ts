import { Request, Response } from "express";

import { FilmeModel } from "../Models/Filme";

import Logger from "../../config/logger";

export async function criarFilme(requisicao: Request, resposta: Response) {
   return resposta.status(200).send("tudo certo")
    
}