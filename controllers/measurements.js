const express = require('express');
const router = express.Router();
const Measurements = require('../models/measurements')
// Remember INDUCES

// Index
router.get('/', (req, res)=>{
    Measurements.find({}, (err, foundMeasurements)=>{
        res.json(foundMeasurements);
    });
});
// New - Will be handled by React application
// Delete
router.delete('/:id', (req, res)=>{
    Measurements.findByIdAndRemove(req.params.id, (err, deletedMeasurement)=>{
        res.json(deletedMeasurement);
    });
});
// Update
router.put('/:id', (req, res)=>{
    Measurements.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedMeasurement)=>{
        res.json(updatedMeasurement);
    });
});
// Create
router.post('/', (req, res)=>{
    Measurements.create(req.body, (err, createdMeasurement)=>{
        res.json(createdMeasurement); //.json() will send proper headers in response so client knows it's json coming back
    });
});
// Edit - Will be handled by React application
// Show
router.get('/:id', (req, res)=>{
    Measurements.findById(req.params.id, (err, foundMeasurement)=>{
        res.json(foundMeasurement);
    });
});


module.exports = router;