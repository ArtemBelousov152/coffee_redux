import './footer.scss'
import NavMenu from '../navMenu/NavMenu';
import Divider from '../divider/Divider';

const Footer = () => {
    return(
        <footer className='footer'>
            <NavMenu/>
            <Divider/>
        </footer>
    )
}

export default Footer;