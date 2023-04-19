import './App.css'
import TaskAdd from '../components/TaskAdd'
import TaskList from '../components/TaskList'
import TaskListValidated from '../components/TaskListValidated'
import { useState } from "react"


function App() {
  const [taskList, setTaskList] = useState([
    'Tâche 1',
    'Tâche 2',
    'Tâche 3',
  ]);

  const [taskListValidated, setTaskListValidated] = useState([]);

  const onAddTask = (task) => {
    const newTask = task
    setTaskList([...taskList, newTask])
  }

  const onRestoreTask = (task, index) => {
    const newTask = task
    setTaskList([...taskList, newTask])
    setTaskListValidated([...taskListValidated.slice(0, index), ...taskListValidated.slice(index + 1)]);
  }

  const onDeleteTask = (index) => {
    setTaskList([...taskList.slice(0, index), ...taskList.slice(index + 1)]);
  }

  const onValidateTask = (index) => {
    const taskValidated = taskList[index]
    setTaskListValidated([...taskListValidated, taskValidated])
    onDeleteTask(index);
  }

  return (
    <>
    <div className='container'>
      <div>
        <h2>Tâches en cours</h2>
        <TaskAdd onAddTask={onAddTask}/>
        <TaskList taskList={taskList} onDeleteTask={onDeleteTask} onValidateTask={onValidateTask}/>
      </div>
      <div>
        <h2>Tâches validées</h2>
        <TaskListValidated taskListValidated={taskListValidated} onRestoreTask={onRestoreTask}/>
      </div>
    </div>
    </>
  )
}

export default App
