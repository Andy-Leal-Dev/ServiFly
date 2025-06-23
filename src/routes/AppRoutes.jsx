import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import Login from '../pages/Login';
import Condiciones from '../pages/Condiciones'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path='/Condiciones' element={<Condiciones />}   />
    </Routes>
  );
}