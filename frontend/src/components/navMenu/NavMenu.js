import './navMenu.scss'

const NavMenu = ({color}) => {
    return (
            <ul className='navMenu'>
                <li className="navMenu__item">
                    <a style={{color: color ? color : 'black'}} href="№" className="navMenu__link">
                        <span className="icon-Group navMenu__img"></span>
                        Coffee house
                    </a>
                </li>
                <li className="navMenu__item">
                    <a style={{color: color ? color : 'black'}} href="№" className="navMenu__link">Our coffee</a>
                </li>
                <li className="navMenu__item">
                    <a style={{color: color ? color : 'black'}} href="№" className="navMenu__link">For your pleasure</a>
                </li>
            </ul>
    )
}

export default NavMenu;