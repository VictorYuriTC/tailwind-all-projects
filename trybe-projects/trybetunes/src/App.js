import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/Login';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <LoginPage /> } />
        <Route path="*" element={ <NotFoundPage /> } />
      </Routes>
    </div>
  );
}

export default App;
