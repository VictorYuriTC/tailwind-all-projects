import { useEffect } from "react";
import { setInitialLocalStorage } from "./localStorage/localStorage";
import MainPage from "./pages/MainPage";
import WishlistPage from "./pages/WishlistPage";
import { Routes, Route } from 'react-router-dom'

function App() {
  useEffect(() => {
    setInitialLocalStorage()
  }, [])

  return (
    <div>
     <Routes>
      <Route path="/wishlist" element={ <WishlistPage /> }/>
      <Route path="/" element={ <MainPage /> } />
     </Routes>
    </div>
  );
}

export default App;
