import { Route, Routes } from 'react-router-dom';
import ContactsPage from '../../pages/ContactsPage/ContactsPage';
import s from './App.module.css';
import Layout from '../Layout/Layout';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import HomePage from '../../pages/HomePage/HomePage';
import RegistrationPage from '../../pages/RegistrationPage/RegistrationPage';
import LoginPage from '../../pages/LoginPage/LoginPage';


function App() {   
  
  return  (
    <div className={s.container}>      
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='/register' element={<RegistrationPage />} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/contacts' element={<ContactsPage/>} />
          <Route path='*' element={<NotFoundPage/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
