import { useEffect } from "react";
import { setInitialLocalStorage } from "./localStorage/localStorage";
import MaingPage from "./pages/MainPage";

function App() {
  useEffect(() => {
    setInitialLocalStorage()
  }, [])

  return (
    <div>
     <MaingPage />
    </div>
  );
}

export default App;
