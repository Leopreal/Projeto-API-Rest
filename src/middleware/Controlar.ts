import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

export const validacao = (requisicao: Request, resposta: Response, proximo: NextFunction) => {
    const erros = validationResult(requisicao)

    if(erros.isEmpty()){
        return proximo()

    }

    const extrairErro: object[] = []

    erros.array().map((erro) => extrairErro.push({[erro.param]: erro.msg}))

    return resposta.status(422).json({
        erros: extrairErro,
    })
}

