const pgp = require('pg-promise')();

const db = pgp(process.env.DATABASE_URL || 'postgres://briancarela@localhost:5432/pokemon_fullstack');
// || 'postgres://<username>@localhost:5432/<database name>');

module.exports = db;
