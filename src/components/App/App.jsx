import { useDispatch, useSelector } from 'react-redux';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import { useEffect } from 'react';
import s from './App.module.css';
import { selectIsError, selectIsLoading, selectContacts } from '../../redux/selectors';
import { fetchContacts } from '../../redux/contactsOps.js';


function App() {

   const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  const dispatch = useDispatch();  
  const contacts = useSelector(selectContacts);

   useEffect(() => {
    dispatch(fetchContacts());
   }, [dispatch]);
  
  return (
    <div className={s.container}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm />
       {contacts.length !== 0 && (
      <SearchBox />
         )}
      <ContactList />
       {isLoading && <h1>Loading...</h1>}
      {isError && <h2>Something went wrong!</h2>}
    </div>
  );
}

export default App;
