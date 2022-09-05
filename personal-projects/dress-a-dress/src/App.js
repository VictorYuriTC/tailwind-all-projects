import { useEffect } from "react";
import { setInitialLocalStorage } from "./localStorage/localStorage";
import MainPage from "./pages/MainPage";

function App() {
  useEffect(() => {
    setInitialLocalStorage()
  }, [])

  return (
    <div>
     <MainPage />
    </div>
  );
}

export default App;
