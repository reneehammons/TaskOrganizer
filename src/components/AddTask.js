import { useState } from 'react'

const AddTask = ({onAdd}) => {
    const [id, setId] = useState(Math.floor(Math.random() * 10000) + 1)
    const [text, setText] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [highlight, setHighlight] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        onAdd({ id, text, date, time, highlight})

        setId('')
        setText('')
        setDate('')
        setTime('')
        setHighlight('')
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
                <label>Date Of Task: </label>
                <input 
                    type="date"
                    className="form-control"
                    placeholder='MM/DD/YYYY'
                    value={date}
                    onChange={(e) => setDate(e.target.value)} 
                />
            </div>  
            <div className="form-group">
                <label>Time of Task: </label>
                <input 
                    type="time"
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