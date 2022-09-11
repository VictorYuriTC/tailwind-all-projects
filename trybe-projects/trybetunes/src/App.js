import './App.css';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/Login';
import NotFoundPage from './pages/NotFoundPage';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <LoginPage /> } />
        <Route path="*" element={ <NotFoundPage /> } />
        <Route path="/search" element={ <SearchPage /> } />
      </Routes>
    </div>
  );
}

export default App;
