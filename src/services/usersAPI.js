import axios from "axios";

const API_URL = "https://ogqjjuflbqwkthslujjt.supabase.co/rest/v1/users";

const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ncWpqdWZsYnF3a3Roc2x1amp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE2MzYyOTUsImV4cCI6MjA5NzIxMjI5NX0.SEUoxVFCDhVP5P5gdR1MojcXa0MQMWAlCwmWN6jDHt4";

const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
  "Content-Type": "application/json",
};

export const usersAPI = {
  async login(username, password) {
    const response = await axios.get(
      `${API_URL}?username=eq.${username}&password=eq.${password}`,
      { headers },
    );

    return response.data;
  },
  async fetchUsers() {
    const response = await axios.get(API_URL, {
      headers,
    });

    return response.data;
  },

  async createUser(data) {
    const response = await axios.post(API_URL, data, { headers });

    return response.data;
  },

  async deleteUser(id) {
    await axios.delete(`${API_URL}?id=eq.${id}`, { headers });
  },
};
