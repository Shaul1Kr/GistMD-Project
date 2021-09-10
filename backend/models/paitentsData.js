import mongoose from 'mongoose';

const paitentsSchema = mongoose.Schema ({
    name: String,
    gender: String,
    age: Number,
    language: String,
    surgerys: String,
});

const PaitentsData = mongoose.model('PaitentsData', paitentsSchema);

export default PaitentsData;