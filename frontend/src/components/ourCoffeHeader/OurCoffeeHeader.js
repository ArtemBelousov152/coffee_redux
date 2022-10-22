import NavMenu from '../navMenu/NavMenu';
import './ourCoffeeHeader.scss';

const OurCoffeeHeader = ({title, background}) => {
    return (
        <header className='ourCoffeeHeader' style={{background: `url(${background}) center center / cover no-repeat`}}>
            <nav className='header__nav'>
                <NavMenu color={'white'}/>
            </nav>
            <h1 className='ourCoffeeHeader__title'>{title}</h1>
        </header>
    )
}

export default OurCoffeeHeader;