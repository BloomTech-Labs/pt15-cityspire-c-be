const db = require('../../data/db-config');

const findAll = async () => {
  return await db('favorites');
};

const findByUserId = async (id) => {
  return db('favorites').where({ user_id }).select('*');
};

const create = async (profile) => {
  return db('favorites').insert(profile).returning('*');
};

const remove = async (id) => {
  return await db('favorites').where({ id }).del();
};

module.exports = {
  findAll,
  findByUserId,
  create,
  remove,
};
