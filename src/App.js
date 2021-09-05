import React, {useState} from 'react';
import shortid from 'shortid';
import useLocalStorage from './hooks/useLocalStorage';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import s from './App.module.css';


function App () {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

  const changeFilter = (evt) => {
    setFilter(evt.currentTarget.value);
  };

  const addContact = (name, number) => {
    const foundNames = contacts.map(contact => contact.name.toLocaleLowerCase());
    const lowerName = name.toLocaleLowerCase();
    if(foundNames.includes(lowerName)){
     return alert(`${name} is already in contacts`);
    }
      const contact = {
        id: shortid.generate(),
        name,
        number,
      };
  
      setContacts((contacts) => ([contact, ...contacts]));
  };

  const deleteContact = (contactId) => {
    setContacts(prevContacts => (
      prevContacts.filter(contact => contact.id !== contactId)
    ));
  };

  const getVisibleContacts = () => {
    const lowerCasedFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact => contact.name.toLocaleLowerCase().includes(lowerCasedFilter))
  };

  const visibleContacts = getVisibleContacts();

  return (
    <div className={s.context}>
      <h1 className="text">Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2 className="text">Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList contacts={visibleContacts} onDeleteContact={deleteContact} />
    </div>
  )
}

export default App;
