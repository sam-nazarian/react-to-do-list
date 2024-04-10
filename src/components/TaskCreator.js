import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export const TaskCreator = ({ createTask }) => {
  //Text input for task
  const [newTaskName, setNewTaskName] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(newTaskName);
    localStorage.setItem('tasks', newTaskName);
    setNewTaskName('');
  };

  return (
    <form onSubmit={handleSubmit} className="my-2 row">
      <div className="col-9">
        <input type="text" value={newTaskName} placeholder="Type a new task..." onChange={(e) => setNewTaskName(e.target.value)} className="form-control" />
      </div>
      <button className="btn btn-success btn-sm col-3">
        <FontAwesomeIcon icon={faPlus} /> Create Task
      </button>
    </form>
  );
};
