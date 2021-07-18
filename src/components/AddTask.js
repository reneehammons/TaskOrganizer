import { useState } from 'react'

const AddTask = ({onAdd}) => {
    const [id, setId] = useState(Math.floor(Math.random() * 10000) + 1)
    const [text, setText] = useState('')
    const [date, setDate] = useState('')
    const [militaryTime, setMilitaryTime] = useState('')
    const [regularTime, setRegularTime] = useState('')
    const [meridiem, setMeridiem] = useState('')
    const [highlight, setHighlight] = useState(false)


    const convertToRegularTime = (militaryTime) => {
        const arrayOfHoursAndMinutesString = militaryTime.split(":")
        const hoursInt = parseInt(arrayOfHoursAndMinutesString[0])
        if (hoursInt >= 12){
            var adjustedToRegularTime
            adjustedToRegularTime = hoursInt - 12
            adjustedToRegularTime = adjustedToRegularTime.toString()
            adjustedToRegularTime += ':' + arrayOfHoursAndMinutesString[1]
            setRegularTime(adjustedToRegularTime)
            setMeridiem('PM')
        } else {
            adjustedToRegularTime = hoursInt.toString()
            adjustedToRegularTime += ':' + arrayOfHoursAndMinutesString[1]
            setRegularTime(adjustedToRegularTime)
            setMeridiem('AM')
        }
    }

    const onSubmit = (e) => {
        e.preventDefault()

        onAdd({ id, text, date, militaryTime, regularTime, meridiem, highlight})

        setId('')
        setText('')
        setDate('')
        setMilitaryTime('')
        setHighlight('')
    }

    const settingTimeStateAndConvertingTime = (e) => {
        //sets initial input to militaryTime state
        setMilitaryTime(e.target.value)
        //converts military time to regular time and updates state
        convertToRegularTime(e.target.value)
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
                    required
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
                    required
                />
            </div>  
            <div className="form-group">
                <label>Time of Task: </label>
                <input 
                    type="time"
                    className="form-control" 
                    placeholder='11:59pm'
                    value={militaryTime} 
                    onChange={settingTimeStateAndConvertingTime}
                    required
                />
            </div>

            <button type='submit' className= "btn btn-outline-dark btn-block">Save Task</button>
        </form>
    )
}

export default AddTask