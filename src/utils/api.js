import axios from "axios"

const baseUrl = '';

export function postRequest(url, params) {
  console.log(params);
  return axios({
    method: "post",
    url: `${baseUrl}${url}`,
    data: params,
    timeout: 5000,
    transformRequest: [
      function(data) {
        let ret = '';
        for (let it in data) {   //for in 是遍历key
          ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
        }
        return ret;
      }
    ],
    header: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  })
}