import axios from 'axios';

import { Row } from '../types';

export default {
  async getRows(eId: number) {
    return axios.get(`api/${eId}/row/list`);
  },
  async createRow(eId: number, row: Row) {
    return axios.post(`api/${eId}/row/create`, row);
  },
  async updateRow(eId: number, rId: number, row: Row) {
    return axios.post(`api/${eId}/row/${rId}/update`, row);
  },
  async deleteRow(eId: number, rId: number) {
    return axios.delete(`api/${eId}/row/${rId}/delete`);
  }
};
