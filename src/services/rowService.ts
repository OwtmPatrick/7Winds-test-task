import axios from 'axios';
import { BASE_URL } from '../constants/baseUrl';

import { Row } from '../types';

export default {
  async getRows(eId: number) {
    return axios.get(`${BASE_URL}/v1/outlay-rows/entity/${eId}/row/list`);
  },
  async createRow(eId: number, row: Row) {
    return axios.post(`${BASE_URL}/v1/outlay-rows/entity/${eId}/row/create`, {
      ...row
    });
  },
  async updateRow(eId: number, rId: number, row: Row) {
    return axios.post(`${BASE_URL}/v1/outlay-rows/entity/${eId}/row/${rId}/update`, {
      ...row
    });
  },
  async deleteRow(eId: number, rId: number) {
    return axios.delete(`${BASE_URL}/v1/outlay-rows/entity/${eId}/row/${rId}/delete`);
  }
};
