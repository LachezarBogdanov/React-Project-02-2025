import { Route, Routes } from 'react-router';

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
import UserProvider from './providers/UserProvider';
import Logout from './components/Logout/Logout';
import CartProvider from './providers/CartProvider';
import Favourite from './components/Favourite/Favourite';
import FavouriteProvider from './providers/favouriteProvider';

function App() {
  
  return (
    <>
      <UserProvider>
        <CartProvider>
          <FavouriteProvider>
        <Header />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/shop/:typeOfProducts' element={<Shop />} />
            <Route path='/create' element={<Create />} />
            <Route path='/details/:productId' element={<Details />} />
            <Route path='/edit/:productId' element={<Edit />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/favourites' element={<Favourite />} />
        </Routes>
        <Footer />
          </FavouriteProvider>
        </CartProvider>
      </UserProvider>
    </>
  )
}

export default App
