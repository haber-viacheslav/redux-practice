import { Task } from 'components/Task/Task';
import css from './TaskList.module.css';
import { useSelector } from 'react-redux';
import { getVisibleTasks } from 'components/helpers/getVisibleTasks';
import { getTasks } from 'redux/selectors';

export const TaskList = () => {
  const tasks = useSelector(getTasks);

  const statusFilter = useSelector(state => state.filters.status);
  const visibleTasks = getVisibleTasks(tasks, statusFilter);
  return (
    <ul className={css.list}>
      {visibleTasks.map(task => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
