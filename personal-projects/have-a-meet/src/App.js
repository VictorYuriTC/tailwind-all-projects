import Header from "./components/Header";
import UserCard from "./components/UserCard";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/card" element={ <UserCard />} />
        </Routes>
    </div>
  );
}

export default App;
