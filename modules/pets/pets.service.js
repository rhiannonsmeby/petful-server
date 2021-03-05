const Queue = require('../queue/Queue')
const store = require('../../store')

// Set up initial data.
// --------------------

const pets = {
  cats: new Queue(),
  dogs: new Queue()
}

store.cats.forEach(cat => pets.cats.enqueue(cat))
store.dogs.forEach(dog => pets.dogs.enqueue(dog))

// --------------------

module.exports = {
  get() {
    // Return the pets next in line to be adopted.
    let cat = pets.cats.show();
    let dog = pets.dogs.show();
    let available = [cat ? {cat} : null, dog ? {dog} : null]
    return available;
  },

  dequeue(type) {
    // Remove a pet from the queue.
    if (type === 'dog') {
      pets.dogs.dequeue();
    }
    pets.cats.dequeue();
  }
}
