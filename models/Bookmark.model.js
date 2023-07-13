import mongoose from "mongoose";


const bookmarkSchema = mongoose.Schema({
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User"
    },
    bookmarkLessons: [{type: mongoose.SchemaTypes.ObjectId,
    ref: "name"
    }]
});


export const BookmarkModule = mongoose.model("BookmarkModule", bookmarkSchema);
