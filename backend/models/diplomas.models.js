const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const diplomasSchema = new Schema({
    title: { type: String, required: true },
    beschrijving: { type: String, required: true },
    school: {type: String, required: true},
    startDatum: { type: String, required: true },
    endDatum: { type: String, required: true },
    id: {type: String , require: true, uniq:true},
    logoschoolUrl: { type: String, required: true },
},{
timestamps: true,
});

const Diplomas = mongoose.model('Diplomas', diplomasSchema);

module.exports = Diplomas;