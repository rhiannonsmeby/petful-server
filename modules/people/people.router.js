const express = require('express')
const json = require('body-parser').json()

const People = require('./people.service')

const router = express.Router()

router.get('/', (req, res) => {
  // Return all the people currently in the queue.
  let people = People.get();
  return res.status(200).json(people || null)
})

router.post('/', json, (req, res) => {
  // Add a new person to the queue.
  People.enqueue(req.body.person);
  if (!req.body.person) {
    res.status(400).json({error: {message: 'Person name is required'}})
  }
  res.status(201).send();
})

module.exports = router
