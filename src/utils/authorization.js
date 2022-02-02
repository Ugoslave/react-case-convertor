import { baseUrl } from "../utils/utils";

export const handleRegistration = (username, password) => {
  return fetch(`${baseUrl}/token/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: `${username}`, 
      password: `${password}`
    }),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`ОШИБКА: ${res.status}`);
    }
  });
};

export const handleAuthorization = (username, password) => {
  return fetch(`${baseUrl}/token/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: `${username}`, 
      password: `${password}`
    }),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`ОШИБКА: ${res.status}`);
    }
  });
};

export const handleCheckToken = (token) => {
  return fetch(`${baseUrl}/token/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`ОШИБКА: ${res.status}`);
    }
  });
};

export const handleRefreshToken = (token) => {
  return fetch(`${baseUrl}/token/refresh/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`ОШИБКА: ${res.status}`);
    }
  });
};
