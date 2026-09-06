import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'

dotenv.config()

const app = express()
const port = Number(process.env.PORT ?? 3001)

if (!process.env.MONGODB_URI) {
  throw new Error('MONGODB_URI is required. Copy .env.example to .env and set it locally.')
}

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, lowercase: true, trim: true },
    phone: { type: String, required: true, trim: true },
    message: { type: String, required: true, trim: true },
    status: { type: String, enum: ['new', 'contacted', 'closed'], default: 'new' },
  },
  { timestamps: true, collection: 'FormData' },
)

const Contact = mongoose.model('Contact', contactSchema)

app.use(cors())
app.use(express.json({ limit: '20kb' }))

app.get('/api/health', (_request, response) => {
  response.json({ ok: true })
})

app.post('/api/contact', async (request, response) => {
  const { name, email, phone, message } = request.body

  if (![name, email, phone, message].every((value) => typeof value === 'string' && value.trim())) {
    response.status(400).json({ message: 'Name, email, phone, and message are required.' })
    return
  }

  const contact = await Contact.create({ name, email, phone, message })
  response.status(201).json({ id: contact.id })
})

await mongoose.connect(process.env.MONGODB_URI)
app.listen(port, () => {
  console.log(`Smart Revue API listening on http://localhost:${port}`)
})
