import mongoose from 'mongoose'

let isConnected = false

export const connectToDB = async () => {
  mongoose.set('strictQuery', true)
  console.log('connectToDB')
  if (isConnected) {
    console.log('MongoDB is connected')
    return
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: 'share_prompt',
      useNewUrlParse: true,
      useUnifiedTopology: true,
    })
    isConnected = true
    console.log('MongoDB connected')
  } catch (error) {
    console.log(error)
  }
}
