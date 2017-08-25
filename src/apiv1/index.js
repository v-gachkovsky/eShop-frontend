import axios from 'axios';

class API {
  constructor (uri) {
    this.APIUri = uri;
  }

  getGoods () {
    return axios.get(`${this.APIUri}/goods`);
  }

  getItem (id) {
    return axios.get(`${this.APIUri}/item/${id}`);
  }
}

export default new API('http://localhost:8080');