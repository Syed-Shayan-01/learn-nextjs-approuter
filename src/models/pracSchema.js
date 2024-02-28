const mongoose = require('mongoose');

const pracSchema = new mongoose.Schema({
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },

});

const Auth = mongoose.model('Prac', pracSchema);

export default Auth;