import './App.css';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import SearchPage from './pages/SearchPage';
import AlbumDetailsCard from './components/cards/AlbumDetailsCard';
import FavoritesPage from './pages/FavoritesPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <LoginPage /> } />
        <Route path="*" element={ <NotFoundPage /> } />
        <Route path="/search" element={ <SearchPage /> } />
        <Route path="/album/:collectionId" element={ <AlbumDetailsCard /> } />
        <Route path="/favorites" element={ <FavoritesPage /> } />
      </Routes>
    </div>
  );
}

export default App;
