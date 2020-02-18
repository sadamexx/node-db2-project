const express = require('express');
const carsDB = require('../db-config.js');

const router = express.Router();


//get all cars
router.get('/', (req, res) => {
    carsDB.select('*').from('cars')
    .then(cars => {
        res.status(200).json(cars);
    })
    .catch(error => {
        res.status(500).json({ message: "Failed to get cars"});
    });
});

//create a new car
router.post('/', (req, res) => {
    const info = req.body
    carsDB('cars')
    .insert(info, 'id')
    .then(car => {
        res.status(201).json({ message: "Your car was successfully created"});
    })
    .catch(error => {
        res.status(500).json({ message: "Error occurred. Car not created"});
    });


});

module.exports = router;