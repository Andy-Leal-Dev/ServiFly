import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import Login from '../pages/Login';
import Condiciones from '../pages/Condiciones';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import History from '../pages/History';
import Chat from '../pages/Chat';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path='/Condiciones' element={<Condiciones />}   />
      <Route path='/Dashboard' element={<Dashboard />}   />
      <Route path='/Profile' element={<Profile />}   />
      <Route path='/History' element={<History />}   />
      <Route path='/Chat' element={<Chat />}   />
    </Routes>
  );
}