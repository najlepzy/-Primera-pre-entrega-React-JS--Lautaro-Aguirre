import './App.css';
import './Components/Navbar/Navbar.css';
import './Components/ItemListContainer/ItemListContainer.css'
import  Navbar  from './Components/Navbar/Navbar'
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";


function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting="Bienvenidos a Accent" />
    </>
  );
};

export default App;
