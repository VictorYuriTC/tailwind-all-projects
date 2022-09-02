import { Route, Routes } from 'react-router-dom';
import UserCard from "./components/UserCard";
import MainPage from './pages/MainPage';
import NotFoundPage from './pages/NotFoundPage';
import SearchedUsersList from './pages/SearchedUsersList';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <MainPage /> } />
        <Route path="/card" element={ <UserCard /> } />
        <Route path="/search/:city" element={ <SearchedUsersList /> } />
        <Route path="*" element={ <NotFoundPage /> } />
      </Routes>
    </div>
  );
}

export default App;
