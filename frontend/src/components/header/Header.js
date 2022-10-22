import NavMenu from '../navMenu/NavMenu';
import Divider from '../divider/Divider';

import './header.scss'

const Header = () => {
    return (
        <header className='header'>
            <nav className='header__nav'>
                <NavMenu color={'white'}/>
            </nav>
            <h1 className='header__title'>Everything You Love About Coffee</h1>
            <Divider color={'white'}/>
            <div className="header__descr">
                We makes every day full of energy and taste <br/>
                <span>Want to try our beans?</span>
            </div>
            <a className='header__link' href="#">
                <div className="inner">More</div>
            </a>
        </header>
        
    )
}

export default Header