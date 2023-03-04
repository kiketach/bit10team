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
  const handleDeleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const handleEditTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].editing = true;
    setTasks(newTasks);
  };

  const handleSaveTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].text = document.getElementById(`task-${index}`).value;
    newTasks[index].editing = false;
    setTasks(newTasks);
  };
  return (
    <div>
      <h4>Queremos saber cual es tu tipo de bebida con café Favorita</h4>
      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
          >
            {task.editing ? (
              <div>
                <input
                  type="text"
                  defaultValue={task.text}
                  id={`task-${index}`}
                />
                <button onClick={() => handleSaveTask(index)}>Guardar!</button>
                <button onClick={() => handleDeleteTask(index)}>Borrar!</button>
              </div>
            ) : (
              <div>
                {task.text}
                <button onClick={() => handleEditTask(index)}>Corregir</button>
              </div>
            )}
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="Escribe aqui"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <br /> <br />
        <button onClick={handleAddTask}>Agregar tu Bebida Favorita</button>
      </div>
    </div>
  );
};
