import PropTypes from 'prop-types'
import { useState } from 'react'
import AddTask from './AddTask'

const Button = ({text, onClick }) => {
    const [dropdown, setDropdown] = useState(false)

    const addTaskDropdown = () => {
        setDropdown(true)
    }



    if (dropdown){
        return (
            <div>
                <button 
                    className="add-button"
                    onClick={addTaskDropdown}>
                    {text} 
                </button>
            <div> <AddTask /> </div>
             </div>
        )
    } else {
        return (
            <div>
                 <button 
                    className="add-button"
                    onClick={addTaskDropdown}>
                    {text} 
                </button>
            </div>
        )
    }
}

Button.prototypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button