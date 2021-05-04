import { useState } from 'react'

const AddTask = ({onAdd}) => {
    const [text, setText] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text){
            alert('Please add a task!')
            return
        }
        if (!date){
            alert('Please add a date!')
            return
        }
        if (!time){
            alert('Please add a time!')
            return
        }

        onAdd({ text, date, time})

        setText('')
        setDate('')
        setTime('')
    }


    return (
        <form className='addTaskForm' onSubmit={onSubmit}>
            <div className="form-group">
                <label>Task:</label>
                <input 
                    type='text' 
                    className="form-control" 
                    placeholder='Type your task..'
                    value={text}
                    onChange={(e) => setText(e.target.value)} 
                />
            </div>
            <div className="form-group">
                <label>Date Of Task </label>
                <input 
                    type='text' 
                    className="form-control" 
                    placeholder='MM/DD/YYYY'
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label>Time of Task </label>
                <input 
                    type='text' 
                    className="form-control" 
                    placeholder='11:59pm'
                    value={time} 
                    onChange={(e) => setTime(e.target.value)}  
                />
            </div>

            <button type='submit' className= "btn btn-outline-dark btn-block">Save Task</button>
        </form>
    )
}
 export default AddTask