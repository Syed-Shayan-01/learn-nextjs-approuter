import mongoose from "mongoose";
import { Schema } from "mongoose";

const adminAdminSchema = new Schema({
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
    isAdmin: {
        type: Boolean,
        required: true
    },
}, { timestamps: true });

const AdminAuth = mongoose.models.AdminAuth || mongoose.model("AdminAuth", adminAdminSchema);

export default AdminAuth;