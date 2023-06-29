class MoviesApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkStatus(res) {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(res.status)
  }

  _request = async (url, options) => {
    return fetch(url, options).then(this._checkStatus)
  }


  getMovies = async () => {
    return this._request(`${this._baseUrl}/beatfilm-movies`, {
      headers: this._headers
    })
  }

}

export default MoviesApi;