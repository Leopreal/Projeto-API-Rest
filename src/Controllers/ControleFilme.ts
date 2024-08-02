import { Request, Response } from "express";

import { FilmeModel } from "../Models/Filme";

import Logger from "../../config/logger";




// ----------------------------- CRIAÇÃO --------------------------

export async function criarFilme(requisicao: Request, resposta: Response) {
   try {
      const data = requisicao.body
      const filme = await FilmeModel.create(data)
      return resposta.status(201).json(filme)
   } catch (error: any) {
      Logger.error(`Erro no sistema: ${error.message}`)
      resposta.status(500).json({error: "tente novamente mais tarde!"})
   }
    
}

// -------------------------------- FILTRAR POR ID ------------------------------

export async function AcharFilmePorId(requisicao: Request, resposta: Response) {
   try {
      const id = requisicao.params.id
      const filme = await FilmeModel.findById(id)

      if(!filme) {
         return resposta.status(404).json("filme nao existe")
      }
      return resposta.status(200).json(filme)
   } catch (error: any) {
      Logger.error(`Erro no sistema: ${error.message}`)
      resposta.status(500).json({error: "tente novamente mais tarde!"})
   }
   
}

// ---------------------------- ACHAR TODOS OS FILMES ----------------------------------

export async function AcharTodoOsFilmes(requisicao: Request, resposta: Response) {
   try {

      const filmes = await FilmeModel.find()
      return resposta.status(200).json(filmes)
      
   } catch (error: any) {
      Logger.error(`Erro no sistema: ${error.message}`)
      resposta.status(500).json({error: "tente novamente mais tarde!"})
   }
   
}

// ----------------------------------- REMOVER FILME ------------------------------

export async function RemoverFilme(requisicao: Request, resposta: Response) {

   try {
      const id = requisicao.params.id
      const filme = await FilmeModel.findById(id)

      if(!filme) {
         return resposta.status(404).json({error: "este filme nao existe"})
      }
      await filme.deleteOne()

      return resposta.status(200).json({msg: "filme removido com sucesso"})

      
   } catch (error: any) {
      Logger.error(`Erro no sistema: ${error.message}`)
      resposta.status(500).json({error: "tente novamente mais tarde!"})
   }
   
}

// ----------------------------- ATUALIZANDO FILMES ------------------------------

export async function AtaulizarFilme(requisicao: Request, resposta: Response) {
   try {
      const id = requisicao.params.id
      const dados = requisicao.body
      const filme = await FilmeModel.findById(id)

      if(!filme) {
         return resposta.status(404).json({error: "este filme nao existe"})
      }

      await FilmeModel.updateOne({_id: id}, dados)

      return resposta.status(200).json(dados)

   } catch (error: any) {
      Logger.error(`Erro no sistema: ${error.message}`)
      resposta.status(500).json({error: "tente novamente mais tarde!"})
   }
}