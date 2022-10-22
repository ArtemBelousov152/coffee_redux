import OurCoffeeHeader from '../../ourCoffeHeader/OurCoffeeHeader';
import outCoffeImg from '../../../img/ourCoffeImg.png'
import Filter from '../../filter/Filter';
import Footer from '../../footer/Footer';
import About from '../../about/About';
import CardsList from '../../cardsList/CardsList';

import background from '../../../img/bg/OurCoffeeBg.jpg';
import './ourCoffeePage.scss';



const OurCoffeePage = () => {
    return (
        <div className='ourCoffee'>
            <OurCoffeeHeader title={'Our Coffee'} background={background}/>
            <About img={outCoffeImg}/>
            <div className="ourCoffee__cards">
                <Filter/>
                <CardsList/>
            </div>
            <Footer/>
        </div>
    )
}

export default OurCoffeePage;