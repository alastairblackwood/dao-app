import mongoose from 'mongoose';

const connectDB = async (): Promise<void> => {
  try {
    const connect = await mongoose.connect(`${process.env.MONGO_URI}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log(
      `Successfully connected to MongoDB: ${connect.connection.host} `
    );
  } catch (err) {
    console.error(`Database connection error: ${err.message}`);
    process.exit();
  }
};

export default connectDB;
