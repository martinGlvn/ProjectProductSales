import mongoose from "mongoose";

async function connectDB() {
  if (!process.env.MONGODB_URL) {
    throw new Error("Falta la variable de entorno MONGODB_URL");
  }
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Conexion exitosa con MongoDB");
  } catch (error) {
    console.log("Hubo un error al conectarnos a la BD");
  }
}
export default connectDB;
