const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    UserId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type: Sring,
        require: true
    },
    body: {
        type: String,
        require: true
    },
    tag: [
        String
    ],
    posterImage: {
        type: String,
    }
},
{
    timestamps: true,
}
);

const Post = mongoose.model('Post', postSchema);
module.exports = Post;