import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

import { deleteContact } from 'redux/contactsSlice';

import MainButtonStyle from 'components/Common/styled-components/MainButton';
import css from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const {contacts} = useSelector(getContacts);
  const filter = useSelector(getFilter);


  const getVisibleContacts = () => {
    const regNormolize = sentence => {
      return sentence.toLowerCase().trim();
    };
    return contacts.filter(contact => {
      return (
        regNormolize(contact.name).includes(regNormolize(filter)) ||
        regNormolize(contact.number).includes(regNormolize(filter))
      );
    });
  };

  const onDelete = id => {
    dispatch(deleteContact(id));
  };

  const visibleContacts = getVisibleContacts();

  return (
    <ul>
      {visibleContacts.map(({ id, name, number }) => {
        return (
          <li className={css.listItem} key={id}>
            <div className={css.listWrapper}>
              <span className={css.contactItem}>
                {name}: {number}
              </span>
              <MainButtonStyle onClick={() => onDelete(id)} type="button">
                Delete
              </MainButtonStyle>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
