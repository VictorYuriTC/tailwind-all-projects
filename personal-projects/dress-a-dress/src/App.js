import { useEffect } from "react";
import { setInitialLocalStorage } from "./localStorage/localStorage";
import MainPage from "./pages/MainPage";
import WishlistPage from "./pages/WishlistPage";
import { Routes, Route } from 'react-router-dom'
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import WomenPage from './pages/WomenPage';
import DividedPage from './pages/DividedPage';
import MenPage from './pages/MenPage';
import BabyPage from './pages/BabyPage';
import KidsPage from './pages/KidsPage';
import SportPage from './pages/SportPage';
import SalePage from './pages/SalePage';
import SustainabilityPage from './pages/SustainabilityPage';

function App() {
  useEffect(() => {
    setInitialLocalStorage()
  }, [])

  return (
     <Routes>
      <Route path="/" element={ <MainPage /> } />
      <Route path="/login" element={ <LoginPage /> } />
      <Route path="/wishlist" element={ <WishlistPage /> } />
      <Route path="/cart" element={ <CartPage /> } />
      <Route path="/women" element={ <WomenPage /> } />
      <Route path="/divided" element={ <DividedPage /> } />
      <Route path="/men" element={ <MenPage /> } />
      <Route path="/baby" element={ <BabyPage /> } />
      <Route path="/kids" element={ <KidsPage /> } />
      <Route path="/sport" element={ <SportPage /> } />
      <Route path="/sale" element={ <SalePage /> } />
      <Route path="/sustainability" element={ <SustainabilityPage /> } />
     </Routes>
  );
}

export default App;
