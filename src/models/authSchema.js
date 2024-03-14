import mongoose from "mongoose";
import { Schema } from "mongoose";
const authSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        minLength: 6,
        required: true,
    },
});

const Auth = mongoose.models.Auth || mongoose.model("Auth", authSchema);
export default Auth;