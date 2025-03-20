import { Route, Routes } from 'react-router';
import { useState } from 'react';

import { UserContext } from './contexts/UserContext';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Cart from './components/Cart/Cart';
import Details from './components/Details/Details';
import Edit from './components/Edit/Edit';
import Create from './components/Create/Create';


function App() {
  const [authData, setAuthData] = useState({});

  const userLoginHandler = (resultData) => {
    setAuthData(resultData);
  }

  return (
    <>
      <UserContext.Provider value={{...authData, userLoginHandler}}>
        <Header />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/details/:productId' element={<Details />} />
            <Route path='/edit/:productId' element={<Edit />} />
            <Route path='/create' element={<Create />} />
        </Routes>
        <Footer />
      </UserContext.Provider>
    </>
  )
}

export default App
