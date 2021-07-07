const Button = ({onClick, text, dropdown }) => {
    return (
        <div>
            <button 
                className={dropdown ? 'close-button' : 'add-button'}
                onClick={onClick}
            > {text} </button>
        </div>
    )   
}

export default Button