import mongoose from "mongoose";
import config from "config"
import Logger from "../config/logger";

async function conectar() {
    const dbUri = config.get<string>("dbUri")

    try {

        await mongoose.connect(dbUri)
        Logger.info("conectou ao banco!")
        
    } catch (error) {
        Logger.error("erro")
        Logger.error(`${error}`)
        process.exit(1)
    }   
}

export default conectar