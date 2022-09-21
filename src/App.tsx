import React, {useState} from 'react';
import './App.css';
import Todolist from "./ToDoList/Todolist";

function App() {
    let [tasks, setTasks] = useState([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
        {id: 4, title: "React API", isDone: false},
        {id: 5, title: "GraphicQL", isDone: false}
    ])

    function removeTask (id:number) {
        let filterTasks = tasks.filter(task => task.id !== id)
        setTasks(filterTasks)
    }

    return (
        <div className="App">
            <Todolist title="What to learn" tasks={tasks} removeTask={removeTask}/>
        </div>
    );
}

export default App;
