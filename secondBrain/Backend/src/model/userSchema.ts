import mongoose, { model, Schema } from "mongoose";

const userSchema = new Schema({
    name: {type: String, required:true},
    email: { type: String, unique: true, required: true},
    password: {type: String, required: true}
})

export const userModel = model("User", userSchema)