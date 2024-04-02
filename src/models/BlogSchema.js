import mongoose from "mongoose";
import { Schema } from "mongoose";

const BlogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
  
});

const Blog = mongoose.models.Blog || mongoose.model("Blog", BlogSchema);

export default Blog;