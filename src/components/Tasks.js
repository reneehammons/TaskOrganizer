import Task from './Task'

const Tasks = ({ tasks, onDelete, onHighlight }) => {
    
    return (
        <div>
            {tasks.map((task) => (
                <Task key={task.id} task={task} onDelete=
                {onDelete} onHighlight={onHighlight}/>
            ))}
        </div>
    )
}

export default Tasks