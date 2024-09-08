import express from 'express'
import cors from 'cors'

import { authenticate } from './middlewares/auth.js'

import { login } from './controllers/login.js'
import { register } from './controllers/register.js'

export const routes = express.Router()

routes.use(cors())

// Autenticação
routes.post('/register', register)
routes.post('/login', login)

// Verifica se usuário está autenticado
routes.use(authenticate)
