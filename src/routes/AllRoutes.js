import { Routes,Route } from 'react-router-dom';

import { ProtectedRoutes } from './ProtectedRoutes';
import { HomePage, ProductsList, CartPage, DashboardPage, Login, Register } from '../pages';
import { ProductDetails } from '../components';

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/products/:id" element={<ProductDetails/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route element={<ProtectedRoutes/>} >
          <Route path="/cart" element={<CartPage/>} />
          <Route path="/dashboard" element={<DashboardPage/>} />
        </Route>
    </Routes>
  )
}
