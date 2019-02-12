const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function () {
    park = new Park('Dino-land', '10.99', [])
  })

  it('should have a name', function(){
    assert.strictEqual('Dino-land', park.name);
  });

  it('should have a ticket price', function(){
    assert.strictEqual('10.99', park.ticketPrice);
  });

  it('should have a collection of dinosaurs', function(){
    assert.deepStrictEqual([],park.dinosaurs);
  });

  it('should be able to add a dinosaur to its collection', function(){
    const dino = new Dinosaur('Purple','leaves', 20);
    park.addDinosaur(dino);
    assert.strictEqual(1, park.dinosaurs.length)
  });

  it('should be able to remove a dinosaur from its collection', function(){
    const dino = new Dinosaur('Purple','leaves', 20);
    park.addDinosaur(dino);
    park.removeDinosaur(dino);
    assert.strictEqual(0, park.dinosaurs.length)
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addDinosaur(new Dinosaur('Purple','leaves', 20));
    const dino1 = new Dinosaur('Green','leaves', 50);
    park.addDinosaur(dino1);
    park.addDinosaur(new Dinosaur('Yellow','leaves', 30));
    park.addDinosaur(new Dinosaur('Red','leaves', 20));
    best_dino = park.bestDinosaur();
    assert.strictEqual(dino1, best_dino);
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    park.addDinosaur(new Dinosaur('Purple','leaves', 20));
    const dino1 = new Dinosaur('Green','leaves', 50);
    park.addDinosaur(dino1);
    park.addDinosaur(dino1);
    park.addDinosaur(new Dinosaur('Yellow','leaves', 30));
    park.addDinosaur(new Dinosaur('Red','leaves', 20));
    greenDinos = park.findSpecies('Green');
    assert.strictEqual(2, greenDinos.length);
  });

  it('should be able to remove all dinosaurs of a particular species', function(){
    park.addDinosaur(new Dinosaur('Purple','leaves', 20));
    const dino1 = new Dinosaur('Green','leaves', 50);
    park.addDinosaur(dino1);
    park.addDinosaur(dino1);
    park.addDinosaur(new Dinosaur('Yellow','leaves', 30));
    park.addDinosaur(new Dinosaur('Red','leaves', 20));
    park.removeSpecies('Green');
    greenDinos = park.findSpecies('Green');
    assert.strictEqual(0, greenDinos.length);
  });

  it('Should be able to Calculate the total number of visitors per day', function(){
    park.addDinosaur(new Dinosaur('Purple','leaves', 20));
    const dino1 = new Dinosaur('Green','leaves', 50);
    park.addDinosaur(dino1);
    park.addDinosaur(dino1);
    park.addDinosaur(new Dinosaur('Yellow','leaves', 30));
    park.addDinosaur(new Dinosaur('Red','leaves', 20));
    const dailyVisitors = park.dailyVisitors();
    assert.strictEqual(170, dailyVisitors);
  });
  it('Should be able to Calculate the total number of visitors per year', function(){
    park.addDinosaur(new Dinosaur('Purple','leaves', 20));
    const dino1 = new Dinosaur('Green','leaves', 50);
    park.addDinosaur(dino1);
    park.addDinosaur(dino1);
    park.addDinosaur(new Dinosaur('Yellow','leaves', 30));
    park.addDinosaur(new Dinosaur('Red','leaves', 20));
    const yearlyVisitors = park.yearlyVisitors();
    assert.strictEqual(62050, yearlyVisitors);
  });

  it('Should be able to Calculate the total revenue from ticket sales for one year', function(){
    park.addDinosaur(new Dinosaur('Purple','leaves', 20));
    const dino1 = new Dinosaur('Green','leaves', 50);
    park.addDinosaur(dino1);
    park.addDinosaur(dino1);
    park.addDinosaur(new Dinosaur('Yellow','leaves', 30));
    park.addDinosaur(new Dinosaur('Red','leaves', 20));
    const yearlyTicketSales = park.yearlyTicketSales();
    assert.strictEqual(681929.5, yearlyTicketSales);
  });

  it('Should be able to Provide an object containing each of the diet types and the number of dinosaurs in the park of that diet type', function(){
    park.addDinosaur(new Dinosaur('Purple','leaves', 20));
    const dino1 = new Dinosaur('Green','meat', 50);
    park.addDinosaur(dino1);
    park.addDinosaur(dino1);
    park.addDinosaur(new Dinosaur('Yellow','grass', 30));
    park.addDinosaur(new Dinosaur('Red','leaves', 20));
    const expected = {'leaves': 2, 'meat': 2, 'grass': 1}
    const actual = park.dietCounts();
    assert.deepStrictEqual(expected, actual);
  })

});
