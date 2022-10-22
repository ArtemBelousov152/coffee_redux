import './footer.scss'
import NavMenu from '../navMenu/NavMenu';
import Divider from '../divider/Divider';

const Footer = () => {
    return(
        <div className='footer'>
            <NavMenu/>
            <Divider/>
        </div>
    )
}

export default Footer;