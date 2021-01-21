// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql2',
    connection: {
      database: "knex",
      user: "ramon",
      password: "123456"
    },
    migrations:{
      tableName: "knex_migrations",
      directory: `${__dirname}/src/database/migrations`
    },
    seeds:{
      directory: `${__dirname}/src/database/seeds`
    }
  }
};
