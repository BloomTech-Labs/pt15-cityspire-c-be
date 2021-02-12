const db = require('../../data/db-config');

const findAll = async () => {
  return await db('favorites');
};

const findByUserId = async (id) => {
  return db('favorites').where({ user_id }).select('*');
};

const findById = async (id) => {
  return db('favorites').where({ id }).select('*');
};

const create = async (favorite) => {
  return db('favorites').insert(favorite).returning('*');
};

const remove = async (id) => {
  return await db('favorites').where({ id }).del();
};

module.exports = {
  findAll,
  findByUserId,
  create,
  remove,
  findById,
};
