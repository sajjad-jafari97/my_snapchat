import axios from 'axios';

const apiURL = 'http://snapi.epitech.eu:8000/';

const apiConnect = function (path, headers, method, abstractData, successCallback, errorCallback) {
    axios({
    method: method,
    url: apiURL+path,
    headers: headers,
    data: JSON.stringify(abstractData)
  }).then(successCallback).catch(errorCallback);
  }

export default apiConnect;