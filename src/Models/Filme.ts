import { model, Model, Schema } from "mongoose";

const SchemaFilme = new Schema(
    {
        titulo: {type: String},
        nota: {type: Number},
        descrisao: {type: String},
        diretor: {type: String},
        estrelas: {type: Array},
        poster: {type: String}
    },
    {
        timestamps: true
    }
)

export const FilmeModel = model("Filme", SchemaFilme)