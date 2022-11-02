import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './components/SignIn/singin';
import './index.css';
import { Inbox } from './pages/Inbox/inbox';
import { Lista } from './pages/Lista/lista';
import { Login } from './pages/Login/login';
import { MobileHome } from './pages/MobileHome/mobileHome';
import { ResetPassword } from './pages/RedefinePassword/resetPassword';
import { Register } from './pages/Register/register';
import { Senha } from './pages/Senha/senha';
import { SenhaMobile } from './pages/SenhaMobile/senhaMobile';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/resetPassword' element={<ResetPassword />} />
          <Route path='/inbox' element={<Inbox />} />
          <Route path='/lista' element={<Lista />} />
          <Route path='/senha' element={<Senha />} />
          <Route path='/mobileHome' element={<MobileHome />} />
          <Route path='/senhaMobile' element={<SenhaMobile />} />
          <Route path='*' element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
