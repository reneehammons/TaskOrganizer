import { useState } from 'react';

const AddTask = ({onAdd}) => {
    const [id, setId] = useState(Math.floor(Math.random() * 10000) + 1)
    const [text, setText] = useState('')
    const [date, setDate] = useState('')
    const [desiredDateDisplay, setDesiredDateDisplay,] = useState('')
    const [militaryTime, setMilitaryTime] = useState('')
    const [regularTime, setRegularTime] = useState('')
    const [meridiem, setMeridiem] = useState('')
    const [highlight, setHighlight] = useState(false)


    const settingTimeStateAndConvertingTime = (e) => {
        //sets initial input to militaryTime state
        setMilitaryTime(e.target.value)
        //converts military time to regular time and updates state
        convertToRegularTime(e.target.value)
    }

    const settingDateStateAndConvertingDate = (e) => {
        setDate(e.target.value)
        convertDateToDesiredFormat(e.target.value)
    }
    
    const convertToRegularTime = (militaryTime) => {
        const arrayOfHoursAndMinutesString = militaryTime.split(":")
        const hoursInt = parseInt(arrayOfHoursAndMinutesString[0])
        if (hoursInt > 12){
            var adjustedToRegularTime
            adjustedToRegularTime = hoursInt - 12
            adjustedToRegularTime = adjustedToRegularTime.toString()
            adjustedToRegularTime += ':' + arrayOfHoursAndMinutesString[1]
            setRegularTime(adjustedToRegularTime)
            setMeridiem('PM')
        } else if (hoursInt === 12){
            setRegularTime(militaryTime)
            setMeridiem('PM')
        } else if (hoursInt === 0){
            adjustedToRegularTime = hoursInt + 12
            adjustedToRegularTime = adjustedToRegularTime.toString()
            adjustedToRegularTime += ':' + arrayOfHoursAndMinutesString[1]
            setRegularTime(adjustedToRegularTime)
            setMeridiem('AM')
        } else {
            adjustedToRegularTime = hoursInt.toString()
            adjustedToRegularTime += ':' + arrayOfHoursAndMinutesString[1]
            setRegularTime(adjustedToRegularTime)
            setMeridiem('AM')
        }
    }

    const convertDateToDesiredFormat = (date) => {
        var dateArrayString = date.split('-')
        var desiredDateDisplayTemp = dateArrayString[1] + '/' + dateArrayString[2] + '/' + dateArrayString[0]
        setDesiredDateDisplay(desiredDateDisplayTemp)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        onAdd({id, text, date, desiredDateDisplay, militaryTime, regularTime, meridiem, highlight})

        setId(Math.floor(Math.random() * 10000) + 1)
        setText('')
        setDate('')
        setDesiredDateDisplay('')
        setMilitaryTime('')
        setRegularTime('')
        setMeridiem('')
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
                    onChange={settingDateStateAndConvertingDate} 
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