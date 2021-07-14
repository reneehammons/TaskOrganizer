import Task from './Task'

const Tasks = ({ tasks, onDelete, onHighlight }) => {
    const sortedTasks = tasks.sort((a,b) => {
        const aDateAndTime = a.date + ' ' + a.time
        const bDateAndTime = b.date + ' ' + b.time

        return bDateAndTime - aDateAndTime
    })
    

    return (
        <div className="tasks">
            {sortedTasks.map((task, index) => (
                <Task 
                    key={index} 
                    task={task} 
                    onDelete={onDelete} 
                    onHighlight={onHighlight}
                />
            ))}
        </div>
    )
}

export default Tasks