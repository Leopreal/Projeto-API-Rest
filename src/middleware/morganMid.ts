import morgan, {StreamOptions} from "morgan";

import  config  from "config";

import Logger from "../../config/logger";

const stream: StreamOptions = {
    write: (mensagem) => Logger.http(mensagem)
}

const pular = () => {
    const env = config.get<string>("env") || "desenvolvimento"
    return env !== "desenvolvimento"
}

const morganMid = morgan(
    ":method :url :status :res[content-length] - :response-time ms",
    {stream, pular}
)

export default morganMid