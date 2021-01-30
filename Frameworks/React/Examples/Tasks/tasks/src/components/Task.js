import {FaTimes} from 'react-icons/fa'


const Task = ({task, deleteTask}) => {
    return (
        <div className="task">
            <h3>{task.text} <FaTimes style={{color: "red"}} onClick={()=>deleteTask(task.id)}/></h3>
            <p>{task.day}</p>
            {/* <input type="checkbox" checked={task.reminder} name="" id=""/> */}
        </div>
    )
}

export default Task
