import axios from "axios";
import { API_URL } from "../config";

export const fetchProducts = async (query) => {
  if (!query) return [];
  try {
    const response = await axios.get(`${API_URL}?query=${query}`);
    return response.data.products || [];
  } catch (error) {
    console.error("API Error:", error.message);
    throw new Error("Failed to fetch products. Please try again.");
  }
};
