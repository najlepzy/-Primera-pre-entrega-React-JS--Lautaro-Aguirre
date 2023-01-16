import "./App.css";
import { useEffect, useState } from "react";
import "./Components/Navbar/Navbar.css";
import "./Components/Item/Item.css";
import "./Components/ItemList/ItemList.css";
import "./Components/ItemListContainer/ItemListContainer.css";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<ItemListContainer greeting="Bienvenidos a Accent" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
