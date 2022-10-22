import {Link} from 'react-router-dom';

import './navMenu.scss'

const NavMenu = ({color}) => {
    return (
            <ul className='navMenu'>
                <li className="navMenu__item">
                    <Link style={{color: color ? color : 'black'}} to='/' className="navMenu__link">
                        <span className="icon-Group navMenu__img"></span>
                        Coffee house
                    </Link>
                </li>
                <li className="navMenu__item">
                    <Link style={{color: color ? color : 'black'}} to='/ourcoffee' className="navMenu__link">Our coffee</Link>
                </li>
                <li className="navMenu__item">
                    <Link style={{color: color ? color : 'black'}} to='/yourepleasure' className="navMenu__link">For your pleasure</Link>
                </li>
            </ul>
    )
}

export default NavMenu;