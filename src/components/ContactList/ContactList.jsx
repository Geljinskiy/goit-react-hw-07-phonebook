import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';

import css from './ContactList.module.css';
import Task from 'components/Task';

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
