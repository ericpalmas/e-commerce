import mongooose from 'mongoose'

const connectDB = async () => {
    try {
        const conn = await mongooose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        })

        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)

    } catch (error) {
        console.error(`Error: ${error.message}`.red.underline.bold)
        process.exit(1)

    }
}

export default connectDB