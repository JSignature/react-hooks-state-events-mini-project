import React from 'react'
import Task from './Task'

function TaskList({ t }) {
  return (
    <div className="tasks">
      {t.map(item => (
        <Task key={item.id} name={item.text} category={item.category} />
      ))}
    </div>
  )
}

export default TaskList
