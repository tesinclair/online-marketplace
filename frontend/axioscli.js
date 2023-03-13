import axios from 'axios';
// Grab the api base url and append /api to it
const API_URL = import.meta.env.VITE_API_HOST + "/api";

class AxiosCLI{
  static clipost(data = {}, endpoint = '/'){
    return axios({
      method: 'post',
      url: API_URL + endpoint, // direct where to post to
      data: data
    });
  }
  
  static cliget(endpoint = '/'){
    return axios({
      method: 'get',
      url : API_URL + endpoint,
      responseType: 'stream'
    });

  }
}

export default AxiosCLI;