require('dotenv').config();

module.exports = {
  API_URI: process.env.API_URI || 'http://localhost:8080/api'
}