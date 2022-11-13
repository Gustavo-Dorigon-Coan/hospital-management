import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './components/SignIn/singin';
import './index.css';
import { Inbox } from './pages/Inbox/inbox';
import { Lista } from './pages/Lista/lista';
import { Login } from './pages/Login/login';
import { MobileHome } from './pages/MobileHome/mobileHome';
import { ResetPassword } from './pages/RedefinePassword/resetPassword';
import { Register } from './pages/Register/register';
import RedefinirSenha from './pages/ResetPassword/redefinirSenha';
import { Senha } from './pages/Senha/senha';
import { SenhaMobile } from './pages/SenhaMobile/senhaMobile';

export const firebaseApp = initializeApp({
  apiKey: "AIzaSyD9KfFF30WxJUTQYRv9cqhd27SgErkMTeg",
  authDomain: "hospital-5192d.firebaseapp.com",
  projectId: "hospital-5192d",
  storageBucket: "hospital-5192d.appspot.com",
  messagingSenderId: "23249481686",
  appId: "1:23249481686:web:10ff15ddf06c5b107b3e77",
  measurementId: "G-6WBLGQFEYZ"
});

export const db = getFirestore(firebaseApp);

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
          <Route path='/redefinirSenha' element={<RedefinirSenha />} />
          <Route path='*' element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
