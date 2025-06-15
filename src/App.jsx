import { BrowserRouter, Link } from 'react-router-dom';
import AppRoutes from '../src/routes/AppRoutes';
import './styles/navGlobal.css';
import './styles/App.css'


function App() {
  return (
    <BrowserRouter>
      <nav className='navGlobal'>
        <Link to="/">Inicio</Link> | <Link to="/login">Login</Link>
      </nav>
      <div className="main-content">
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;