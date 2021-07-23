module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'postgres',
  database: 'cinema-db',
  define : {
    timestamps: true,
    underscored: true,
  },
}