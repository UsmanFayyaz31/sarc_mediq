import axios from "axios";

const getTokenValue = () => "Bearer " + localStorage.getItem("t");

export const postRequest = (URL, data) =>
  new Promise((resolve, reject) => {
    axios
      .post(URL, data, {
        headers: {
          Authorization: getTokenValue(),
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((response) => {
        return resolve({
          data: response.data,
          status: response.status,
          headers: response.headers,
        });
      })
      .catch((error) => {
        return reject(error.response);
      });
  });

export const multiPartPostRequest = (URL, data) =>
  new Promise((resolve, reject) => {
    axios
      .post(URL, data, {
        headers: {
          Authorization: getTokenValue(),
          "Access-Control-Allow-Origin": "*",
          "content-type": "multipart/form-data",
        },
      })
      .then((response) => {
        return resolve({
          data: response.data,
          status: response.status,
          headers: response.headers,
        });
      })
      .catch((error) => {
        return reject(error.response);
      });
  });

export const postRequestWithoutHeader = (URL, data) =>
  new Promise((resolve, reject) => {
    axios
      .post(URL, data, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((response) => {
        return resolve({
          data: response.data,
          status: response.status,
          headers: response.headers,
        });
      })
      .catch((error) => {
        return reject(error.response);
      });
  });

export const getRequest = (URL) =>
  new Promise((resolve, reject) => {
    axios
      .get(URL, {
        headers: {
          Authorization: getTokenValue(),
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((response) => {
        return resolve({ data: response.data, status: response.status });
      })
      .catch((error) => {
        return reject(error.response);
      });
  });

export const deleteRequest = (URL) =>
  new Promise((resolve, reject) => {
    axios
      .delete(URL, {
        headers: {
          Authorization: getTokenValue(),
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((response) => {
        return resolve({ data: response.data, status: response.status });
      })
      .catch((error) => {
        return reject(error.response);
      });
  });
