import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp/singup';
import SignIn from './components/SignIn/singin';
import { Inbox } from './pages/Inbox/inbox';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<SignIn />} />
        <Route path='/register' element={<SignUp />} />
        <Route path='/inbox' element={<Inbox />} />
        <Route path='*' element={<SignIn />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
