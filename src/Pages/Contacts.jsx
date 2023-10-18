import { AddContact } from '../components/AddContact/AddContact';
import { ContactList } from '../components/ContactList/ContactList';
import { Filter } from '../components/Filter/Filter';
import { DivWrap } from '../components/App.styled';

export const ContactsBook = () => {
  return (
    <DivWrap>
      <h1 className="font-bold  text-2xl mt-10">Contacts list</h1>
      <AddContact />
      <Filter />
      <ContactList />
    </DivWrap>
  );
};
