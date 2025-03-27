import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:8000/api/' as string,
  headers: {
    "Content-Type": "application/json",
  },
});