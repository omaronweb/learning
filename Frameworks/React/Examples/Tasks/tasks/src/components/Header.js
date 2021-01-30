import PropTypes from 'prop-types'
import Button from "./Button";

const Header = ({title}) => {
    const onClick = () => {
        console.log('click')
    }
    return (
       <header className="header">
           <Button text="أضف مهمة" bgColor="green" onClick={onClick}/>
           <h1>{title}</h1>
       </header>

    )
}

Header.defaultProps = {
    title: 'عنوان التطبيق'
}

Header.propTypes ={
    title: PropTypes.string,
    color: PropTypes.string
}

export default Header