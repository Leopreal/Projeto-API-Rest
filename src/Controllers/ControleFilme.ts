import { Request, Response } from "express";

import { FilmeModel } from "../Models/Filme";

import Logger from "../../config/logger";

export async function criarFilme(requisicao: Request, resposta: Response) {
   try {
      const data = requisicao.body
      const filme = await FilmeModel.create(data)
      return resposta.status(201).json(filme)
   } catch (error: any) {
      Logger.error(`Erro no sistema: ${error.message}`)
   }
    
}