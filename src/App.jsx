import { createBrowserRouter, Route, RouterProvider, createRoutesFromElements } from 'react-router-dom';
import RootLayout from './Layout/RootLayout';
import NotFound from './components/NotFound';
import PlaceOrder from './components/PlaceOrder';
import Home from './pages/Home';
import { useState } from 'react';
import LoginPopup from './components/LoginPopup';
import Card from './components/Card';
import StoreContextProvider from './Context/StoreContext'; // Import StoreContextProvider
import Menu from './components/Menu';
import MobileUz from './components/MobileUz';
import Contakat from './components/Contakat';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  const [showLogin, setShowLogin] = useState(false);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<RootLayout setShowLogin={setShowLogin} />}>
          <Route index element={<Home />} />
          <Route path="cart" element={<Card setShowLogin={setShowLogin} />} />
          <Route path='menu' element={<Menu />} />
          <Route path='/mobile-app' element={<MobileUz />} />
          <Route path='contact-us' element={<Contakat />} />
          <Route path="order" element={<PlaceOrder setShowLogin={setShowLogin} />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return (
    <StoreContextProvider> {/* Context Provider bilan o'ralgan */}
      <>
        {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
        <RouterProvider router={router} />
      </>
      <ToastContainer />
    </StoreContextProvider>
  );
}

export default App;
