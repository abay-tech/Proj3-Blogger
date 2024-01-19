import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Create from "./pages/Create";
import { createContext,useState } from "react";
import Favorites from "./pages/Favorites";
import CreateUser from "./pages/CreateUser";
import Playground from "./pages/Playground";

export const feedContext = createContext();

function App() {
  const [category, setcategory] = useState(0);
  const [favorites,setFavorites]=useState([]);
  const [userId,setUserId]=useState(1);

  function categorySettor(category_id) {
    setcategory(category_id);
  }

  return (
    <feedContext.Provider value={{ category, categorySettor,favorites,setFavorites,userId,setUserId }}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/create" element={<Create />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/createUser" element={<CreateUser/>} />
          <Route path="/pg" element={<Playground/>} />


        </Routes>
      </BrowserRouter>{" "}
    </feedContext.Provider>
  );
}

export default App;
