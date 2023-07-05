import mongoose from "mongoose";
import UserModel from "../models/user";

// connect BD
async function connectDB() {
  if (!process.env.MONGODB_URL) {
    throw new Error("Falta la variable de entorno MONGODB_URL");
  }
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Conexion exitosa con MongoDB");
    // test- creacion de usuario
    // const newUser = new UserModel({
    //   firstname: "Martin",
    //   lastname: "Galvan",
    //   email: "anashemartin@gmail.com",
    //   login_code: "545291",
    //   roles: {
    //     admin: true,
    //     seller: true,
    //   },
    // });
    // console.log({ newUser });
    // await newUser.save();
  } catch (error) {
    console.log("Hubo un error al conectarnos a la BD", error);
  }
}
export default connectDB;
