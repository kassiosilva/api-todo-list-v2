import { Task } from '../models/Task.js'

export async function createTask(req, res) {
    try {
      const task = await Task.create({ ...req.body, author: req.user.id })
  
      return res.status(201).json(task)
    } catch (error) {
      console.log(error)
      return res.status(500).json({ message: 'Erro ao criar tarefa' })
    }
  }

export async function getTasks(req, res) {
  try {
     const task = await Task.find({ author: req.user.id })
  
    return res.status(200).json(task)
 } catch (error) {
   console.log(error)
   return res.status(500).json({ message: 'Erro ao buscar tarefas' })
  }
}