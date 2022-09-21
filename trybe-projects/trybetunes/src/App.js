import './App.css';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import SearchPage from './pages/SearchPage';
import AlbumDetailsPage from './pages/AlbumDetailsPage';
import FavoritesPage from './pages/FavoritesPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <LoginPage /> } />
        <Route path="*" element={ <NotFoundPage /> } />
        <Route path="/search" element={ <SearchPage /> } />
        <Route path="/album/:collectionId" element={ <AlbumDetailsPage /> } />
        <Route path="/favorites" element={ <FavoritesPage /> } />
        <Route path="/profile" element={ < ProfilePage/> } />
      </Routes>
    </div>
  );
}

export default App;
