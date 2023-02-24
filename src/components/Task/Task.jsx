import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

import css from './Task.module.css';
import MainButtonStyle from 'components/Common/styled-components/MainButton/MainButton';

const Task = ({ task }) => {
  const { id, name, phone } = task;

  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.listWrapper}>
      <span className={css.contactItem}>
        {name}: {phone}
      </span>
      <MainButtonStyle onClick={onDelete} type="button">
        Delete
      </MainButtonStyle>
    </div>
  );
};

export default Task;
