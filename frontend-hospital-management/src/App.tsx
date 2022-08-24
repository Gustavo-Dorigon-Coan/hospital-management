import './styles/global.css';
import SignIn from './pages/login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './pages/register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<SignIn />} />
        <Route path='/register' element={<SignUp />} />
        <Route path='*' element={<SignIn />} />

      </Routes>
    </BrowserRouter>

  );
}

export default App;
