import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';

import css from './ContactList.module.css';
import ContactItem from 'components/ContactItem';

const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

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
