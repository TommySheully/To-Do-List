import React, {useState} from "react";
import {futimes} from "fs";
import {FilterType} from "../App";

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: number) => void
    filtersHandler: (nameButton: FilterType) => void
}

function Todolist(props: PropsType) {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {props.tasks.map((task) => {
                        return (
                            <li key={task.id}>
                                <input type="checkbox" checked={task.isDone}/>
                                <span>{task.title}</span>
                                <button onClick={() => {props.removeTask(task.id)}} >✖</button>
                            </li>
                        )
                })}
            </ul>
            <div>
                <button onClick={() => props.filtersHandler("All")}>All</button>
                <button onClick={() => props.filtersHandler("Active")}>Active</button>
                <button onClick={() => props.filtersHandler("Completed")}>Completed</button>
            </div>
        </div>
    );
}

export default Todolist;