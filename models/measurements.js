const mongoose = require('mongoose')

const measurementSchema = new mongoose.Schema({
   date: String,
   weight: Number,
   bodyFat: Number,
   bmi: Number,
   neck: Number,
   acrossMidShoulder: Number,
   upperChest: Number,
   bicep: Number,
   forearm: Number,
   rightWrist: Number,
   leftWrist: Number,
   upperStomach: Number,
   bellyButton: Number,
   waistLine: Number,
   hipButt: Number,
   upperThigh: Number,
   midCalf: Number
})

const Measurements = mongoose.model('Measurement', measurementSchema)

module.exports = Measurements