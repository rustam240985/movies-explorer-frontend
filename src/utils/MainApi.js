class MainApi {
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


  getUser() {
    return this._request(`${this._baseUrl}/users/me`, {
      headers: this._headers
    })
  }

  updateUser({ name, email }) {
    return this._request(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name,
        email
      })
    })
  }

  addMovie({ country, director, duration, year, description,
    image, trailerLink, nameRU, nameEN, thumbnail, movieId }) {
    return this._request(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        country, director, duration, year, description,
        image, trailerLink, nameRU, nameEN, thumbnail, movieId,
      })
    })
  }

  deleteMovie(id) {
    return this._request(`${this._baseUrl}/movies/${id}`, {
      method: 'DELETE',
      headers: this._headers
    })
  }

  getMovies = async () => {
    return this._request(`${this._baseUrl}/movies`, {
      headers: this._headers
    })
  }

}

export default MainApi;