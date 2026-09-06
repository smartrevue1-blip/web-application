import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'

dotenv.config()

const app = express()
const port = Number(process.env.PORT ?? 3001)
let databaseError = null

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
  if (mongoose.connection.readyState !== 1) {
    response.status(503).json({ ok: false, database: 'disconnected', error: databaseError })
    return
  }

  response.json({ ok: true, database: 'connected' })
})

app.post('/api/contact', async (request, response) => {
  if (mongoose.connection.readyState !== 1) {
    response.status(503).json({ message: 'The contact service is temporarily unavailable.' })
    return
  }

  const { name, email, phone, message } = request.body

  if (![name, email, phone, message].every((value) => typeof value === 'string' && value.trim())) {
    response.status(400).json({ message: 'Name, email, phone, and message are required.' })
    return
  }

  const contact = await Contact.create({ name, email, phone, message })
  response.status(201).json({ id: contact.id })
})

app.listen(port, () => {
  console.log(`Smart Revue API listening on http://localhost:${port}`)
})

try {
  await mongoose.connect(process.env.MONGODB_URI)
  console.log('MongoDB connected')
} catch (error) {
  databaseError = error instanceof Error ? error.message : 'MongoDB connection failed'
  console.error(`MongoDB connection failed: ${databaseError}`)
}
