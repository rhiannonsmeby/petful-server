const express = require('express')
const json = require('body-parser').json()

const Pets = require('./pets.service')
const People = require('../people/people.service')

const router = express.Router()

router.get('/', (req, res) => {
  // Return all pets currently up for adoption.
  const currPets = Pets.get();
  return res.status(200).json(currPets);
})

router.delete('/', json, (req, res) => {
  // Remove a pet from adoption.
  const allowed = ['dog', 'cat', 'all'];

  if (!req.body.type) {
    res.status(400).json({error: {message: 'Type is required'}})
  }
  if (!allowed.includes(req.body.type)) {
    res.status(400).json({error: {message: `Type must be 'dog', 'cat', or 'all'`}})
  }
  if (req.body.type === 'all') {
    Pets.dequeue('cat');
    Pets.dequeue('dog');
    People.dequeue();
  }
  else {
    Pets.dequeue(req.body.type);
    People.dequeue();
  }
  
  return res.status(204).send();
})

module.exports = router
