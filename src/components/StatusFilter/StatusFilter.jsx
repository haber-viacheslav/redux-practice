import { Button } from 'components/Button/Button';
import css from './StatusFilter.module.css';
import { statusFilters } from 'redux/constants';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';

export const StatusFilter = () => {
  const filter = useSelector(getFilter);
  return (
    <div className={css.wrapper}>
      <Button selected={filter === statusFilters.all}>All</Button>
      <Button selected={filter === statusFilters.active}>Active</Button>
      <Button selected={filter === statusFilters.completed}>Completed</Button>
    </div>
  );
};
