module.exports = {
  development: {
    client: 'mysql',
    connection: {
      database: 'billing_cycles',
      host: '127.0.0.1',
      port: 3306,
      user: 'root',
      password: '123',
    },
    migrations: {
      tableName: 'migrations',
    },
  },
};
