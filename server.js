import express from 'express'
import bodyParser from 'body-parser'

import playerRoutes from './routes/playersRout.js'

const app = express()
const PORT = 3001

app.use(bodyParser.json())

app.use('/players', playerRoutes)


app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`))










// const todos = [{
//     title: 'firstPost',
//     post: 'Some text'
// }, {
//     title: 'Second Post',
//     post: 'Some other text'
// }
// ]
// let id = 0;
// console.log(todos[id])
// app.get('/todos', (req, res) => {
//     res.send(JSON.stringify(todos))
// })
// app.get('/todos/:id', (req, res) => {
//     const id = req.params.id
//     res.send(JSON.stringify(todos[id]))
// })
// app.post('/todos', JSONparser, (req, res) => {
//     const body = req.body
//     console.log(body["title"])
//     const newTodo = { title: body["title"], post: body["post"] }
//     todos.push(newTodo)
//     res.send(JSON.stringify(newTodo))
// })
// app.put((req, res) => {
//     res.send('hello world')
// })
// app.delete((req, res) => {
//     res.send('hello world')
// })