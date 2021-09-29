const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const careerSchema = new Schema({
    job: { type: String, required: true },
    beschrijving: { type: String, required: true },
    bedrijf: {type: String, required: true},
    startDatum: { type: String, required: true },
    endDatum: { type: String, required: true },
    id: {type: String , require: true, uniq:true},
    logoUrl: { type: String, required: true },
},{
timestamps: true,
});

const Job = mongoose.model('Job', careerSchema);

module.exports = Job;