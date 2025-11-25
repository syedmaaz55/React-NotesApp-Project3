import React, { useState } from 'react'
import './App.css' 

const App = () => {
  const [title, setTitle] = useState("")
  const [name, setName] = useState("")
  const [task, setTask] = useState([])

  const handle = (e) => {
    e.preventDefault()
    if (!title && !name) return; 

    const copyTask = [...task]
    copyTask.push({ title, name })
    setTask(copyTask)

    setTitle('')
    setName('')
  }

  const deleteTask = (idx) => {
    const copyTask = [...task]
    copyTask.splice(idx, 1)
    setTask(copyTask)
  }

  return (
    <div>
      {/* TOP HEADING */}
      <div className="top-heading">
        <h1>📝 Notes App React Project</h1>
        <p>Add and manage your notes quickly</p>
      </div>

      {/* MAIN CONTAINER */}
      <div className="main-container">
        {/* LEFT SIDE FORM */}
        <form onSubmit={handle} className="form-section">
          <input
            type="text"
            placeholder='Enter your Title'
            className="input-field"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder='Enter your Name'
            className="input-field"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button className="add-btn">Add Note</button>
        </form>

        {/* RIGHT SIDE LIST */}
        <div className="list-section">
          <h1 className="heading">📋 Recent Notes</h1>
          <div className="notes-container">
            {task.map((elem, idx) => (
              <div key={idx} className="note-card">
                <div className="note-content">
                  <h3>{elem.title}</h3>
                  <h4>{elem.name}</h4>
                </div>
                <button onClick={() => deleteTask(idx)} className="delete-btn">
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
