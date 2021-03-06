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
import ManageInventories from './Pages/ManageInventories/ManageInventories';
import AddItem from './Pages/AddItem/AddItem'; 
import MyItems from './Pages/MyItems/MyItems';
import { ToastContainer } from 'react-toastify';
import MyBlog from './Pages/MyBlog/MyBlog';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header> 
       <ToastContainer />
       <Routes>
         <Route path='/' element={<Home />}></Route>
         <Route path='/home' element={<Home />}></Route>
         <Route path='/login' element={<Login />}></Route>
         <Route path='/register' element={<Register />}></Route>
         <Route path='/manageInventories' element={<ManageInventories />}></Route>
         <Route path='/addItem' element={<AddItem />}></Route>
         <Route path='/myItem' element={<MyItems />}></Route>
         <Route path='/myBlog' element={<MyBlog />}></Route>
         <Route path='/item/:id' element={
           <RequireAuth>
             <ItemDetails />
           </RequireAuth>
         }></Route>
         <Route path='*' element={<NotFound />}></Route>
       </Routes>
      
       <Footer></Footer>
      
    </div>
  );
}

export default App;
