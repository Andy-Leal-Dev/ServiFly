import { BrowserRouter, Link } from 'react-router-dom';
import AppRoutes from '/src/routes/AppRoutes';
import './styles/navGlobal.css';


function App() {
  return (
    <BrowserRouter>
      <nav className='navGlobal'>
        <Link to="/">Inicio</Link> | <Link to="/login">Login</Link>
      </nav>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;