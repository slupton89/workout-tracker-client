require('dotenv').config();

module.exports = {
  API_URI: process.env.REACT_APP_API_URL || 'http://localhost:8080/api',
}