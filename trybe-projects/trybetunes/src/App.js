import './App.css';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/Login';
import NotFoundPage from './pages/NotFoundPage';
import SearchPage from './pages/SearchPage';
import AlbumDetailsCard from './components/cards/AlbumDetailsCard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <LoginPage /> } />
        <Route path="*" element={ <NotFoundPage /> } />
        <Route path="/search" element={ <SearchPage /> } />
        <Route path="/album/:collectionId" element={ <AlbumDetailsCard /> } />
      </Routes>
    </div>
  );
}

export default App;
