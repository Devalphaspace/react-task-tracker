import PropTypes from "prop-types"
import Button from "./Button"

const Header = ({ title, onAdd, showAdd }) => {

    const onClick = () => {
        console.log('Add clicked');
        onAdd()
    }

  return (
    <header className="header">
        <h1>{title}</h1>
        <Button color={ showAdd ? '#D92525' : "#000000"} text={showAdd ? 'Close' : 'Show' } onClick={onClick} />
    </header>
  )
}

Header.defaultProps = {
    title: "Task Tracker",
}  

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header