import axios from "axios";

export default function axiosInstance() {
  return axios.create({
    baseURL: 'http://localhost:8000/api',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  });
}