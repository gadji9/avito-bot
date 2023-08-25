import express, { Request, Response } from 'express'
import startBot from './bot'
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({path: path.join(__dirname, '..', '.env')});

const app = express()
const port = 3000

app.get('/', (req: Request, res: Response) => {
  console.log(req)
  res.send('Hello World!')
})
app.post('/', (req: Request, res: Response) => {
  console.log(req)
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  startBot(process.env.BOT_TOKEN || '')
})

