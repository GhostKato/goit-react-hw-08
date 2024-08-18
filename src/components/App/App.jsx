import { Route, Routes } from 'react-router-dom';
import ContactsPage from '../../pages/ContactsPage/ContactsPage';
import s from './App.module.css';
import Layout from '../Layout/Layout';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import HomePage from '../../pages/HomePage/HomePage';
import RegistrationPage from '../../pages/RegistrationPage/RegistrationPage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from '../../redux/auth/operations';
import { PrivateRoute } from '../../Routes/PrivateRoute';
import { PublicRoute } from '../../Routes/PublicRoute';


function App() {  
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  
  return  (
    <div className={s.container}>      
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='/register' element={
            <PublicRoute>
              <RegistrationPage />
            </PublicRoute>} />
          <Route path='/login' element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>} />
          <Route path='/contacts' element={
            <PrivateRoute>
              <ContactsPage />
            </PrivateRoute>} />
          <Route path='*' element={<NotFoundPage/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
