import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { changeFilter } from 'redux/filtersSlice';

import Label from 'components/Common/styled-components/Label';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const onFilter = ev => {
    dispatch(changeFilter(ev.currentTarget.value));
  };

  return (
    <Label>
      <p>Find contatcts by name</p>
      <input onInput={onFilter} value={filter} type="text" name="filter" />
    </Label>
  );
};

export default Filter;
