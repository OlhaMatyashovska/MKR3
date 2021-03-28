import {Schema, model } from 'mongoose';

const photoSchema = new Schema({
    Author:String,
    Name:String,
    Description:String,
    Hashtags:[String],
    DateofPublishing:Date,
    UrlFile:String,
    NumberofLikes:Number,
    CommentsList:[String],
});

const Photo = model("Photo", photoSchema);

export default Photo;