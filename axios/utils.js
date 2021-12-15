const axios = require("axios");

const BASE_URL = "https://jsonplaceholder.typicode.com";

const fetchUsers = async () => {
  try {
    return await axios.get(`${BASE_URL}/users`);
  } catch (e) {
    return [];
  }
};

module.exports = {
  BASE_URL,
  fetchUsers
}