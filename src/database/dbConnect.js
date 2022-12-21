import mongoose from "mongoose";

mongoose.connect("mongodb://mongoadmin:secret@db:27017");

//mongoose.connect("mongodb://mongoadmin:secret@localhost:27017");

let db = mongoose.connection;

export default db;