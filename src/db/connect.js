import mongoose from "mongoose";
const url = `mongodb+srv://MyPrac:1234@cluster0.olutjd9.mongodb.net/Mypractice?retryWrites=true&w=majority&appName=Cluster0`

async function connect() {
    try {
        await mongoose.connect(url);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

export default connect;