// if don't need postgres
// delete this file, migrate script, migrations folder
// uninstall pg and most likely knex
'use strict';
require('dotenv');

module.exports = {
  'migrationDirectory': 'migrations',
  'driver': 'pg',
  'host': process.env.MIGRATION_DB_HOST,
  'port': process.env.MIGRATION_DB_PORT,
  'database': process.env.MIGRATION_DB_NAME,
  'username': process.env.MIGRATION_DB_USER
};