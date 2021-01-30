import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState} from "react";

function App() {
   
        const [tasks, setTasks] = useState([
            {id: 1, text: "take the trash out", day: "today", reminder: false},
            {id: 2, text: "take the trash in", day: "today", reminder: true},
            {id: 3, text: "take the trash out again", day: "today", reminder: false}
        ])
        const deleteTask = (id)=>{
            setTasks(tasks.filter(task=>task.id!==id))
        }
    return ( 
        <div>
        <Header title="المهام اليومية"/>
       {tasks.length >0 ? <Tasks tasks={tasks} deleteTask={deleteTask}/> : <p style={{textAlign: "center"}}> No tasks</p>}
        
        </div>
    );
}

export default App;