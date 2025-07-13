import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import Login from '../pages/Login';
import Condiciones from '../pages/Condiciones';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import History from '../pages/History';
import Chat from '../pages/Chat';
import ProfessionalProfile from '../pages/ProfessionalProfile';
import Review from '../pages/ReviewsPage'
import Favoritos from '../pages/Favoritos'
import Politics  from '../pages/Politics';
import HiringForm from '../pages/HiringForm';
import Direcciones from '../pages/Direcciones';
import AdminUsers from '../pages/AdminUsers';

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
      <Route path='/proPerfil' element={<ProfessionalProfile />} />
      <Route path='/Review' element={<Review />} />
      <Route path='/Favoritos' element={<Favoritos />}/>
      <Route path='/Politics' element={<Politics/>}/>
      <Route path='/HiringForm' element={<HiringForm />}/>
      <Route path='/Direcciones' element={<Direcciones />}/>
      <Route path='/Admin' element={<AdminUsers/>}/>
    </Routes>
  );
}