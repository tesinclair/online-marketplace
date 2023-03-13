import axios from 'axios';

// Grab the api base url and append /api to it
const API_URL = process.env.VITE_API_HOST + "/api";


function clipost(data = {}, endpoint = '/'){
  return axios({
    method: 'post',
    url: API_URL + endpoint, // direct where to post to
    data: data
  });
}

function cliget(endpoint = '/'){
  return axios({
    method: 'get',
    url : API_URL + endpoint,
    responseType: 'stream'
  })
}