const Task = ({ task, onDelete, onHighlight }) => {
    return (
        <div className= {`taskBox ${task.highlight ? 'Highlight' : ''}`} onDoubleClick={() => onHighlight(task.id, task.highlight)}>
            <h4 className='taskName'>
                {task.text}  
            </h4>
            <span className='glyphicon glyphicon-trash' onClick={() => onDelete(task.id)}></span>
            <p className='taskDayTime'>{task.day} at {task.time}</p>
            
        </div>
    )
}

export default Task 