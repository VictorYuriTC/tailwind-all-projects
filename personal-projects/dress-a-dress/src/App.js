import { useEffect } from "react";
import { setInitialLocalStorage } from "./localStorage/localStorage";
import MainPage from "./pages/MainPage";
import WishlistPage from "./pages/WishlistPage";
import { Routes, Route } from 'react-router-dom'
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";

function App() {
  useEffect(() => {
    setInitialLocalStorage()
  }, [])

  return (
    <div className="">
     <Routes>
      <Route path="/" element={ <MainPage /> } />
      <Route path="/login" element={ <LoginPage /> } />
      <Route path="/wishlist" element={ <WishlistPage /> } />
      <Route path="/cart" element={ <CartPage /> } />
     </Routes>
    </div>
  );
}

export default App;
