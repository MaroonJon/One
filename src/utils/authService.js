import axios from 'axios';

const authEndpoint = process.env.REACT_APP_AUTH_API;
const apiKey = process.env.REACT_APP_AUTH_API_KEY;

const apiClient = axios.create({
  baseURL: authEndpoint,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'X-Api-Key': apiKey
  }
});

const authService = {
  login: async ({ username, password }) => {
    try {
      const response = await apiClient.post('users/authenticate', { username, password });
      if (response.status === 400) {
        throw new Error('User not found');
      } else if (response.status === 200) {
        const { jwt } = response.data;
        return jwt; // Return token if successful
      } else {
        throw new Error('Unknown error');
      }
    } catch (error) {
      throw new Error(`Login failed: ${error.message}`);
    }
  },

  signup: async ({ username, password, email, address }) => {
    try {
      const response = await apiClient.post('users', {
        username,
        email,
        password,
        info: address,
        authorities: [{ authority: 'USER' }]
      });
      if (response.status === 400) {
        throw new Error('Something is missing');
      } else if (response.status === 409) {
        throw new Error('Username already exists');
      } else if (response.status === 200) {
        return 'ok'; // Return success message if successful
      } else {
        throw new Error('Unknown error');
      }
    } catch (error) {
      throw new Error(`Signup failed: ${error.message}`);
    }
  }
};

export default authService;
