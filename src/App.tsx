import React, {useState} from 'react';
import './App.css';
import Todolist from "./ToDoList/Todolist";

export type FilterType = "All" | "Active" | "Completed";

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


    let [filters, SetFilters] = useState<FilterType>("All");

    let TasksForToDoList = tasks;

    if (filters === "Active") {
        TasksForToDoList = tasks.filter((filterTask) => filterTask.isDone === false);
    }
    if (filters === "Completed") {
        TasksForToDoList = tasks.filter((filterTask) => filterTask.isDone === true);
    }

    let filtersHandler = (nameButton: FilterType) => {
        SetFilters(nameButton);
    }

    return (
        <div className="App">
            <Todolist
                title="What to learn"
                tasks={TasksForToDoList}
                removeTask={removeTask}
                filtersHandler={filtersHandler}
            />
        </div>
    );
}

export default App;
