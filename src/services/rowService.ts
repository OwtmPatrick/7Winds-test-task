import axios from 'axios';
import { BASE_URL } from '../constants/baseUrl';

export default {
  async getRows(eId: number) {
    return axios.get(`${BASE_URL}//v1/outlay-rows/entity/${eId}/row/list`);
  }
};
