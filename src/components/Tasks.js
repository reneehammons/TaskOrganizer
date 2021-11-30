import Task from './Task';

const Tasks = ({ tasks, onDelete, onHighlight }) => {
    return (
        <div className="tasks">
            {tasks.sort((a,b) => {
                const aDateAndTime = new Date(a.date + ' ' + a.militaryTime)
                const bDateAndTime = new Date(b.date + ' ' + b.militaryTime)
                return aDateAndTime - bDateAndTime 
            }).map((task, index) => (
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