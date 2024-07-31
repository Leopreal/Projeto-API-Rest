import { body } from "express-validator";
import { builtinModules } from "module";


export const ValidacaoDoFilme = () => {
    return [
        body("titulo")
            .isString()
            .withMessage("titulo obrigatorio").isLength({min: 3})
            .withMessage("o titulo precisa tem 3 caracters"),
            body("nota")
                .isNumeric()
                .withMessage("a nota precisa ser em numero")
                .custom((value: number)=> {
                    if(value < 0 || value > 10) {
                        throw new Error("nota tem q ser entre 0 e 10")
                    }
                    return true
                }),
                body("descrisao").isString().withMessage("descrisao obrigatorio"),
                body("diretor").isString().withMessage("o nome do diretor é obrigatorio"),
                body("poster").isURL().withMessage("imagem precisa de URL")
    ]
}