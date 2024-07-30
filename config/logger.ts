import winston, { error } from "winston"
import config from "config"


const levels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    debug: 4
}

const level = () => {
    const env = config.get<string>("env") || "desenvolvimento"

    const eDesenvolvimento = env === "desenvolvimento"
    return eDesenvolvimento ? "debug" : "warn"
}

    const cores = {
    error: "red",
    warn: "yellow",
    info: "green",
    http: "magenta",
    debug: "white"
    }

    winston.addColors(cores)

    const format = winston.format.combine(
        winston.format.timestamp({format: "YYYY-MM-DD HH:mm:ss"}),
        winston.format.colorize({all: true}),
        winston.format.printf(
            (info) => `${info.timestamp} - ${info.level} - ${info.message}`
        )
    )

    const transports = [
        new winston.transports.Console(),
        new winston.transports.File({
            filename: "logs/erro.log",
            level: "error",
        }),
        new winston.transports.File({filename: "logs/all.log"})
    ]

    const Logger = winston.createLogger({
        level: level(),
        levels,
        format,
        transports
    })

    export default Logger