import './App.css';
import Main from '../Main/Main';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Movies from '../Movies/Movies';
import { MAIN_API_URL, MOVIE_API_URL } from '../../utils/constants';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Layout from '../Layout/Layout';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import MainApi from '../../utils/MainApi';
import { useEffect, useState } from 'react';
import MoviesApi from '../../utils/MoviesApi';
import { AppContext } from '../../contexts/AppContext';
import * as auth from '../../utils/auth';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useMovies } from '../../utils/hooks/useMovies';
import ProtectedRouteElement from '../ProtectedRoute/ProtectedRoute';

function App() {
  const [isErrorAuth, setErrorAuth] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [editProfileMessage, setEditProfileMessage] = useState({ error: '', success: '' });
  const [loggedIn, setLoggedIn] = useState(false);

  const moviesApi = new MoviesApi({
    baseUrl: MOVIE_API_URL,
    headers: {
      "Content-Type": 'application/json',
    },
  })

  const mainApi = new MainApi({
    baseUrl: MAIN_API_URL,
    headers: {
      authorization: `Bearer ${localStorage.getItem('jwt')}`,
      "Content-Type": 'application/json',
    },
  })

  const location = useLocation();


  const { handleSetSearch: handleSetSearchMovie, handleSetShortSearch: handleSetShortSearchMovie, filteredMovies, loading, handleSetLoggedIn, notFound, error } = useMovies(moviesApi.getMovies);
  const { handleSetSearch: handleSetSearchSavedMovie, handleSetShortSearch: handleSetShortSaved, initMovies: initMoviesSave, filteredMovies: filteredSavedMovies, handleSetLoggedIn: handleSetLoggedInSaved, handleAddMovie, handleDeleteMovie, loading: loadingSavedMovies, error: errorSavedMovies, notFound: notFoundSave } = useMovies(mainApi.getMovies);

  const navigate = useNavigate();

  useEffect(() => {
    handleTokenCheck();
    localStorage.removeItem('search-value-movie');
    localStorage.removeItem('short-cheked-movie')
  }, []);

  useEffect(() => {
    handleSetLoggedIn(loggedIn);
    handleSetLoggedInSaved(loggedIn);
  }, [loggedIn]);


  useEffect(() => {
    loggedIn &&
      mainApi.getUser()
        .then((dataUser) => {
          setCurrentUser(dataUser);
        })
        .catch(error => {
          console.log(`Ошибка загрузки данных профиля: ${error}`);
        })
  }, [loggedIn]);

  const handleTokenCheck = () => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      auth.checkToken(jwt)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            return navigate(location.pathname, { replace: true });
          }
        })
        .catch(err => console.log(err))
    }
  }

  function handleLogin(formValue) {
    if (!formValue.email || !formValue.password) {
      return;
    }
    auth.authorize(formValue.password, formValue.email)
      .then((data) => {
        if (data.token) {
          setLoggedIn(true);
          localStorage.setItem('jwt', data.token);
          return navigate('/movies', { replace: true });
        }
      })
      .catch(err => {
        console.log(err);
        setErrorAuth(true);
      });
  }

  function handleRegister(formValue) {
    auth.register(formValue.name, formValue.email, formValue.password)
      .then((res) => {
        if (res) {
          handleLogin(formValue);
        }
      })
      .catch(err => {
        console.log(err);
        setErrorAuth(true);
      })
      .finally(() => {
      })
  }

  function handleLogout() {
    localStorage.removeItem('jwt');
    setLoggedIn(false);
    navigate('/', { replace: true });
  }

  function handleUpdateProfile(values) {
    mainApi.updateUser(values)
      .then(data => {
        setCurrentUser(data);
        setEditProfileMessage({ ...editProfileMessage, success: 'Данные профиля успешно сохранены!' });
      })
      .catch(err => {
        setEditProfileMessage({ ...editProfileMessage, error: 'При сохранении профиля возникла ошибка!' });
        alert(`Ошибка обновления данных пользователя: ${err}`);
      })
  }

  function handleDeleteSavedMovie(movie) {
    mainApi.deleteMovie(movie._id)
      .then(newMovie => {
        handleDeleteMovie(movie);
      })
      .catch(err => {
        alert(`Ошибка удаления фильма: ${err}`);
      })

  }

  function handleSaveDeleteMovie(movie) {
    const { country, director, duration, year, description,
      image: { url: image }, trailerLink, nameRU, nameEN, id: movieId
    } = movie;

    const newImage = MOVIE_API_URL + image;

    if (!initMoviesSave.some(item => item.movieId === movie.id)) {
      mainApi.addMovie({
        country, director, duration, year, description,
        image: newImage, trailerLink, nameRU, nameEN, thumbnail: newImage, movieId
      })
        .then(newMovie => {
          handleAddMovie(newMovie)
        })
        .catch(err => {
          alert(`Ошибка добавления фильма: ${err}`);
        })
    } else {
      const delMovie = initMoviesSave.find(item => item.movieId === movie.id)
      mainApi.deleteMovie(delMovie._id)
        .then(newMovie => {
          handleDeleteMovie(delMovie);
        })
        .catch(err => {
          alert(`Ошибка добавления фильма: ${err}`);
        })
    }

  }

  return (
    <AppContext.Provider value={{ error, errorSavedMovies, isErrorAuth, setErrorAuth, editProfileMessage, setEditProfileMessage, loggedIn, handleDeleteSavedMovie, handleSaveDeleteMovie, handleLogout }}>
      <CurrentUserContext.Provider value={{ ...currentUser }}>
        <div className="page">
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/*" element={<Layout />}>
              <Route index element={<Main />} />
              <Route path="movies" element={<ProtectedRouteElement element={Movies} movies={filteredMovies} onSearch={handleSetSearchMovie} savedMovies={initMoviesSave} onSearchShort={handleSetShortSearchMovie} apiUrl={MOVIE_API_URL} loading={loading} notFound={notFound} />} />
              <Route path="saved-movies" element={<ProtectedRouteElement element={SavedMovies} movies={filteredSavedMovies} onSearch={handleSetSearchSavedMovie} onSearchShort={handleSetShortSaved} loading={loadingSavedMovies} notFound={notFoundSave} />} />
              <Route path="profile" element={<Profile onUpdateProfile={handleUpdateProfile} />} />
            </Route>
            <Route path="/signup" element={<Register onRegister={handleRegister} />} />
            <Route path="/signin" element={<Login onLogin={handleLogin} />} />

          </Routes>
        </div>
      </CurrentUserContext.Provider>
    </AppContext.Provider>
  );
}

export default App;
