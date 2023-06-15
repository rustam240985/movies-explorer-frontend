import './App.css';
import Main from '../Main/Main';
import { Route, Routes } from 'react-router-dom';
import Movies from '../Movies/Movies';
import { initialCards, savedCards } from '../../utils/constants';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Layout from '../Layout/Layout';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';

function App() {

  return (
    <div className="page">
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/*" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="movies" element={<Movies cards={initialCards} />} />
          <Route path="saved-movies" element={<SavedMovies cards={savedCards} />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
      </Routes>

    </div>
  );
}

export default App;
