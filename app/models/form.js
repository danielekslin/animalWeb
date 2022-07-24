const mongoose = require('mongoose');
const Schema = mongoose.Schema;


formSchema = new Schema({
    userName:{
        type: String,
        required: true
    }
}, {timestamps: true });

const Form = mongoose.model('Form',formSchema);
module.exports = Form;