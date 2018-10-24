require('dotenv').config();

module.exports = {
  API_URI: process.env.API_URI || 'http://localhost:8080/api',
  REACT_APP_API_URL: process.env.REACT_APP_API_URL || 'http://localhost:8080/api'
}