import './App.css';
import { TaskCreator } from './components/TaskCreator';
import { useState, useEffect } from 'react';
import { TaskTable } from './components/TaskTable';
import { VisibilityControl } from './components/VisibilityControl';
import { Container } from './components/Container';

function App() {
  const [tasksItems, setTaskItems] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  // This function is being passed to TaskCreator function
  function createTask(taskName) {
    if (!tasksItems.find((task) => task.name === taskName)) {
      setTaskItems([...tasksItems, { name: taskName, done: false }]); //Create a new task
    } else {
      alert('The task already exist'); //Task already exists
    }
  }

  // updates the state of a task list by toggling the completion status of a specific task, without modifying any other properties of the tasks or affecting other tasks in the list.
  const toggleTask = (task) => {
    setTaskItems(tasksItems.map((t) => (t.name === task.name ? { ...t, done: !t.done } : t)));
  };

  useEffect(() => {
    let data = localStorage.getItem('tasks');
    if (data) {
      setTaskItems(JSON.parse(data));
    }
  }, []);

  const cleanTasks = () => {
    setTaskItems(tasksItems.filter((task) => !task.done));
    setShowCompleted(false);
  };

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasksItems));
  }, [tasksItems]);

  return (
    <main className="bg-gray vh-100 text-black">
      <h1 className="h1 d-flex justify-content-center p-4">ToDoList Made by Sam Nazarian</h1>
      <Container>
        <TaskCreator createTask={createTask} />
        <TaskTable tasks={tasksItems} toggleTask={toggleTask} />
        <VisibilityControl setShowCompleted={(checked) => setShowCompleted(checked)} cleanTasks={cleanTasks} isChecked={showCompleted} />

        {/* Only show this if showCompeleted is turned on */}
        {showCompleted === true && <TaskTable tasks={tasksItems} toggleTask={toggleTask} showCompleted={showCompleted} />}
      </Container>
    </main>
  );
}

export default App;
