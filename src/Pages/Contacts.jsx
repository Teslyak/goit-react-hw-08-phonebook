import { AddContact } from '../components/AddContact/AddContact';
import { ContactList } from '../components/ContactList/ContactList';
import { Filter } from '../components/Filter/Filter';
import { DivWrap } from '../components/App.styled';

export const ContactsBook = () => {
  return (
    <DivWrap>
      <h1>Phonebook</h1>
      <AddContact />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </DivWrap>
  );
};
