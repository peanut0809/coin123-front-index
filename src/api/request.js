import axios from "axios";
import qs from "qs";
import { Message } from "element-ui";

// 添加请求拦截器
axios.interceptors.request.use(
  config => {
    // API V1 认证统一使用 Token 认证
    // 需要授权的 API ，必须在请求头中使用 `Authorization` 字段提供 `token` 令牌
    let loginInfo = JSON.parse(window.localStorage.getItem("loginInfo")),
      token = loginInfo && loginInfo.token;
    config.headers.Authorization = token;
    return config;
  },
  err => {
    Message.error("请求超时!");
    return Promise.resolve(err);
  }
);
// 添加响应拦截器
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response && error.response.data && error.response.data.message) {
      var jsonObj = JSON.parse(error.response.data.message);
      Message.error(jsonObj.message);
    } else {
      Message.error(error.message);
    }
    return Promise.reject(error);
  }
);

axios.defaults.baseURL = process.env.VUE_APP_BASE_API;
axios.defaults.withCredentials = true;

// postJson
export function postJson(url, parameter, subToken) {
  return axios({
    url: url,
    method: "post",
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      subToken: subToken
    },
    data: parameter
  });
}

export function postJsonStr(url, subToken) {
  return axios({
    url: url,
    method: "post",
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      subToken: subToken
    }
  });
}

// postJson
export function putJson(url, parameter) {
  return axios({
    url: url,
    method: "put",
    headers: {
      "Content-Type": "application/json;charset=UTF-8"
    },
    data: parameter
  });
}

// postDelete
export function delAction(url, parameter) {
  return axios({
    url: url,
    method: "delete",
    params: parameter
  });
}

// postForm
export function postForm(url, parameter) {
  return axios({
    url: url,
    method: "post",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    data: qs.stringify(parameter)
  });
}

// get
export function getAction(url, parameter) {
  return axios({
    url: url,
    method: "get",
    params: parameter
  });
}

// 下载文件 用于excel导出
export function downFile(url, parameter) {
  return axios({
    url: url,
    params: parameter,
    method: "get",
    responseType: "blob"
  });
}
export function restGetAction(url, resourceId, parameter) {
  let config = {
    params: parameter
  };
  return axios.get(url + `/${resourceId}`, config);
}