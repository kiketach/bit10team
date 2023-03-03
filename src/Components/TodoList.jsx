import React, { useState } from "react";

export const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };
  const handleDeleteTask = index => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };


  const handleEditTask = index => {
    const newTasks = [...tasks];
    newTasks[index].editing = true;
    setTasks(newTasks);
  };

  const handleSaveTask = index => {
    const newTasks = [...tasks];
    newTasks[index].text = document.getElementById(`task-${index}`).value;
    newTasks[index].editing = false;
    setTasks(newTasks);
  };
  return (
    <div>
      <h4>Dejanos Saber cual es tu tipo de bebida con Café Favorita</h4>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.editing ? (
              <div>
                <input type="text" defaultValue={task.text} id={`task-${index}`} />
                <button onClick={() => handleSaveTask(index)}>Guardar!</button>
                <button onClick={() => handleDeleteTask(index)}>Borrar!</button>
              </div>
            ) : (
              <div>
                {task.text}
                <button onClick={() => handleEditTask(index)}>Edit</button>
              </div>
            )}
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="Add task..."
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
        />
        <button onClick={handleAddTask}>Agregar tu Bebida Favorita</button>
      </div>
    </div>
  );
}
