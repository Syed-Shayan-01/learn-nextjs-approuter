import mongoose from "mongoose";

const connectDB = async () => {
        try {
            await mongoose.connect(process.env.MONGODB_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
            console.log("MongoDB Connected...");
        } catch (err) {
            console.log(err);
        }
};

export default connectDB;
