import "./App.css";
import { useEffect, useState } from "react";
import "./Components/Navbar/Navbar.css";
import "./Components/Item/Item.css";
import "./Components/ItemList/ItemList.css";
import "./Components/ItemListContainer/ItemListContainer.css";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemListDetail from "./Components/ItemDetailContainer/ItemDetailContainer";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ItemListContainer greeting="Bienvenidos a Accent" />
      {/* <Routes>
        <Route
          path="/Category/Sillones"
          element={}
        />
      </Routes> */}
    </BrowserRouter>
  );
}

export default App;
