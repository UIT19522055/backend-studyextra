const mongoose = require ('mongoose')
const Schema = mongoose.Schema;

const CoursesSchema = new Schema ({
    courseId: String,
    name: String,
    description: String,
    contents: Array,
    price: Number,
    imgUrl: String,
    introVideoUrl: String,
    chapters: Array,
    categories: Array,
    rating: Array,
    studentIds: Array,
    requirements: Array,
    isHide: Boolean
},
    { timestamps: true }
);

const Course = mongoose.model('courses', CoursesSchema);
module.exports = Course;