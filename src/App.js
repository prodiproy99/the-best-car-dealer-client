import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Header from './Pages/Header/Header';
import Footer from './Pages/Footer/Footer';
import ItemDetails from './Pages/ItemDetails/ItemDetails';

function App() {
  return (
    <div>
      <Header></Header>
       <Routes>
         <Route path='/' element={<Home />}></Route>
         <Route path='/home' element={<Home />}></Route>
         <Route path='/item/:itemId' element={<ItemDetails />}></Route>
       </Routes>
       <Footer></Footer>
    </div>
  );
}

export default App;
