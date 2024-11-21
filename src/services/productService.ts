import axios from 'axios';

const BASE_URL = 'https://dummyjson.com/products';

export const fetchProducts = async (limit: number, skip: number) => {
  const response = await axios.get(`${BASE_URL}?limit=${limit}&skip=${skip}`);
  return response.data.products; // Trả về danh sách sản phẩm
};

export const searchProducts = async (query: string) => {
  const response = await axios.get(`${BASE_URL}/search?q=${query}`);
  return response.data.products; // Trả về kết quả tìm kiếm
};
