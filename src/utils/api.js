class Api {
  // создаем и экспортируем класс работы с API

  constructor(dataConfig) {
    this._url = dataConfig.url;
    this._headers = dataConfig.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`ОШИБКА: ${res.status}`);
    }
  }

  getUsersData() {
    // метод получения информации о пользователях с сервера
    return fetch(`${this._url}/admin/users?fields=id, login, name, email`, {
      headers: this._headers,
    }).then(this._checkResponse);
  }
}

const api = new Api({
  // записываем в переменную экземпляр класса Api;
  url: "https://demo-apptrix.myjetbrains.com/youtrack/api",
  headers: {
    "content-type": "application/json",
    authorization: "perm:cm9vdA==.NDktNQ==.U9qYToWJGGM0yfVz5wjeYYas7FDvGL",
  },
});

export default api;
