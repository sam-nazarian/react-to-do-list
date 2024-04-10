import { TaskRow } from './TaskRow';

export const TaskTable = ({ tasks, toggleTask, showCompleted = false }) => {
  const taskTableRows = (doneValue) => {
    return tasks.filter((task) => task.done === doneValue).map((task) => <TaskRow task={task} key={task.name} toggleTask={toggleTask} />);
  };
  return (
    <table className="table table-bordered border-secondary table-pattern">
      <thead>
        <tr className="table-success">
          <th>Tasks</th>
        </tr>
      </thead>

      <tbody>{taskTableRows(showCompleted)}</tbody>
    </table>
  );
};
