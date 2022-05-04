import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Header from './Pages/Header/Header';
import Footer from './Pages/Footer/Footer';
import ItemDetails from './Pages/ItemDetails/ItemDetails';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import Register from './Pages/Register/Register';

function App() {
  return (
    <div>
      <Header></Header>
       <Routes>
         <Route path='/' element={<Home />}></Route>
         <Route path='/home' element={<Home />}></Route>
         <Route path='/login' element={<Login />}></Route>
         <Route path='/register' element={<Register />}></Route>
         <Route path='/item/:itemId' element={
           <RequireAuth>
             <ItemDetails />
           </RequireAuth>
         }></Route>
       </Routes>
       <Footer></Footer>
    </div>
  );
}

export default App;
