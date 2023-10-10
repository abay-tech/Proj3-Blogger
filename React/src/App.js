import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Create from "./pages/Create";
import { createContext,useState } from "react";
import Favorites from "./pages/Favorites";

export const feedContext = createContext();

function App() {
  const [category, setcategory] = useState(0);
  const [favorites,setFavorites]=useState([]);

  function categorySettor(category_id) {
    setcategory(category_id);
  }

  return (
    <feedContext.Provider value={{ category, categorySettor,favorites,setFavorites }}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/create" element={<Create />} />
          <Route path="/favorites" element={<Favorites />} />

        </Routes>
      </BrowserRouter>{" "}
    </feedContext.Provider>
  );
}

export default App;
