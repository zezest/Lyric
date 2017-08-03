import axios from 'axios';

export default class ApiCall {
  constructor() {
    let apiCall = axios.create({
      headers: {
        csrf: 'token',
        Accept: 'application/json, text/plain, */*'
      }
    });
    apiCall.interceptors.response.use(this.handleSuccess, this.handleError);
    this.apiCall = apiCall;
  }

  handleSuccess(response) {
    return response;
  }

  handleError = error => {
    // switch (error.response.status) {
    //   case 401:
    //     this.redirectTo(document, '/')
    //     break;
    //   case 404:
    //     this.redirectTo(document, '/404')
    //     break;
    //   default:
    //     this.redirectTo(document, '/500')
    //     break;
    // }
    return Promise.reject(error.response.data)
  }

  // redirectTo = (document, path) => {
  //   document.location = path
  // }
  
  get(path, params, callback) {
    return this.apiCall.request({
      method: 'GET',
      url: path,
      responseType: 'json',
      params: params
    }).then(response => 
      // callback(response.data, response.status)
      Promise.resolve(response.data, response.status)
    );
  }

  post(path, payload, callback) {
    return this.apiCall.request({
      method: 'POST',
      url: path,
      responseType: 'json',
      data: payload
    }).then(response => 
      // callback(response.data, response.status)
      Promise.resolve(response.data, response.status)
    );
  }

  put(path, payload, callback) {
    return this.apiCall.request({
      method: 'PUT',
      url: path,
      responseType: 'json',
      data: payload
    }).then(response => 
      // callback(response.data, response.status)
      Promise.resolve(response.data, response.status)
    );
  }

  patch(path, payload, callback) {
    return this.apiCall.request({
      method: 'PATCH',
      url: path,
      responseType: 'json',
      data: payload
    }).then(response => 
      // callback(response.data, response.status)
      Promise.resolve(response.data, response.status)
    );
  }

  delete(path, callback) {
    return this.apiCall.delete(path).then(response => 
      // callback(response.data, response.status)
      Promise.resolve(response.data, response.status)
    );
  }
}
