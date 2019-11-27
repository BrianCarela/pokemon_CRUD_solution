// this file will communicate between the user request and any database actions
// controllers/pokemon/controller.js

// This is the relative path to the Model methods
const Pokemon = require('../../models/pokemon');

const controller = {};

controller.index = (req, res) => {
  // Pokemon.findAll() is a SQL query
  Pokemon
    .findAll()
    .then((data) => {
      res.render('pokemon/index', {pokemon: data});
    })
    .catch(err => console.log('ERROR:', err));
};

controller.show = (req, res) => {
  const id = req.params.id;
  Pokemon
    .findById(id)
    .then((data) => {
      res.render('pokemon/show', data);
    })
    .catch(err => console.log('ERROR:', err));
};

controller.new = (req, res) => {
  res.render('pokemon/new');
};

controller.update = (req, res) => {
  const id = req.params.id;
  Pokemon
    .findById(id)
    .then(data => {
      res.render('pokemon/update', data);
    })
    .catch(err => console.log('ERROR:', err));
};


module.exports = controller;
