import Button from './Button';

const Header = ({dropdown, onClick}) => {
    return (
        <header className="header">
            <h1>Organize Your Tasks</h1>
            <Button 
                onClick={onClick} 
                text={dropdown ? 'Close' : 'Add A Task'}
                dropdown={dropdown}
            />
        </header>
    ) 
}

export default Header
