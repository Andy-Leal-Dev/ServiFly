import { BrowserRouter,  } from 'react-router-dom';
import AppRoutes from '../src/routes/AppRoutes';
import './styles/App.css'



function App() {
  return (
    <BrowserRouter>
   
        <AppRoutes />
      
    </BrowserRouter>
  );
}

export default App;