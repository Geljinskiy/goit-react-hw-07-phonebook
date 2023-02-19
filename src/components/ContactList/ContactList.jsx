import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

import css from './ContactList.module.css';
import Task from 'components/Task';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

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
      {visibleContacts.map(task => {
        return (
          <li className={css.listItem} key={task.id}>
            <Task task={task} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
