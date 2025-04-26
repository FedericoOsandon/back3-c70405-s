import { logger } from "../utils/logger.js"
import {request, response} from 'express'


export const addLogger = (req= request, res=response, next) => {
    req.logger = logger
    logger.info(`${req.method } en ${req.url} - ${Date().toLocaleString()}`)
    next()
}