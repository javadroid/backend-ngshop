
const mongoose= require('mongoose');



const categorySchema = new mongoose.Schema({
    name:  { type: String, require: true}, 
    color: { type: String, },
    icon:   { type: String, },
    image: { type: String, }
});
 
exports.Category=mongoose.model('Category', categorySchema)

