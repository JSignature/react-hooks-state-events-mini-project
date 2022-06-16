import React from 'react'

function Task(props) {
  return (
    <div className="task">
      <div className="label">{props.category}</div>
      <div className="text">{props.name}</div>
      <button onClick={() => props.deleteTask(props.name)} className="delete">
        X
      </button>
    </div>
  )
}

export default Task
