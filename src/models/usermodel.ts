import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema({
    _cls: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String
    },
    user_img: {
        type: String
    }
}, { collection: 'owner' });

export const User = mongoose.model('User', UsersSchema);
