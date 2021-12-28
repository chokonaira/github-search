import axios from 'axios';
import dotenv from 'dotenv';

// A helper function that takes a dynamic url argument and returns an axios instance.

dotenv.config();

export default (baseURL) => (
  axios.create({
    baseURL,
  }));
