import axios from 'axios';
import { API_CONFIG } from '../config/api.config';

const fetchData = async () => {
  const response = await axios.get(`${API_CONFIG.baseUrl}/watch/episodes`)
  return response.data;
}

export default fetchData;