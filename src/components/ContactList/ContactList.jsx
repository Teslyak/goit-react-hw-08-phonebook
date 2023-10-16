import { ContactListItem } from 'components/ContactListIthem/ContactListItem';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteContact,
  fetchContacts,
} from 'components/Redux/contacts/operations';
import {
  selectContacts,
  selectFilter,
} from 'components/Redux/contacts/selectors';
export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    const controller = new AbortController();
    dispatch(fetchContacts(controller.signal));

    return () => {
      return controller.abort();
    };
  }, [dispatch]);

  const getFilterText = () => {
    const normalizedFilter = filter.toLowerCase().trim();
    return contacts.filter(el => {
      return el.name.toLowerCase().includes(normalizedFilter);
    });
  };

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <ul>
        {getFilterText().map(el => (
          <ContactListItem
            onDeleteContact={() => handleDelete(el.id)}
            item={el}
            key={el.id}
          />
        ))}
      </ul>
    </>
  );
};
