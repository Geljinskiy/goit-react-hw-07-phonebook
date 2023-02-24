import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';

import css from './ContactList.module.css';
import ContactItem from 'components/ContactItem';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const getVisibleContacts = () => {
    const regNormolize = sentence => {
      return sentence.toLowerCase().trim();
    };
    return contacts.filter(contact => {
      return (
        regNormolize(contact.name).includes(regNormolize(filter)) ||
        regNormolize(contact.phone).includes(regNormolize(filter))
      );
    });
  };

  const visibleContacts = getVisibleContacts();

  return (
    <ul>
      {visibleContacts.map(contact => {
        return (
          <li className={css.listItem} key={contact.id}>
            <ContactItem contact={contact} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
