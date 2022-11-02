import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppBarMobile from './components/AppBarMobile/appBarMobile';
import DataGridDemo from './components/List/list';
import PasswordGeneral from './components/Password/password';
import RedefinePassword from './components/RedefinePassword/redefinePassword';
import SignIn from './components/SignIn/singin';
import SignUp from './components/SignUp/singup';
import './index.css';
import { Inbox } from './pages/Inbox/inbox';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<SignIn />} />
          <Route path='/register' element={<SignUp />} />
          <Route path='/resetPassword' element={<RedefinePassword />} />
          <Route path='/inbox' element={<Inbox />} />
          <Route path='/lista' element={<DataGridDemo />} />
          <Route path='/senha' element={<PasswordGeneral />} />
          <Route path='/mobileHome' element={<AppBarMobile />} />
          <Route path='*' element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
