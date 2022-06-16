import { React, useState } from 'react'
import Task from './Task'

function TaskList({ t, deleteTask }) {
  const [tasks, setTasks] = useState(t)

  function deleteTask(name) {
    const nonDeletedTasks = tasks.filter(task => name != task.text)
    console.log(nonDeletedTasks)
    setTasks(nonDeletedTasks)
  }

  return (
    <div className="tasks">
      {tasks.map(item => (
        <Task
          key={item.id}
          name={item.text}
          category={item.category}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  )
}

export default TaskList
