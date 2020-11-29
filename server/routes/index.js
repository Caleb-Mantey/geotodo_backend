const express = require('express');
 const router = express.Router();



 router.get('/all', (req, res) => {
     res.status(200);
 });

 router.get('/:id', (req, res) => {
    res.status(200);
 });

 router.post('/', (req, res) => {
    res.status(200);
 });

 router.delete('/:id', (req, res) => {
    res.status(200);
 });

 module.exports = router;