import OurCoffeeHeader from '../../ourCoffeHeader/OurCoffeeHeader';
import About from '../../about/About';
import CardsList from '../../cardsList/CardsList';
import Footer from '../../footer/Footer';

import background from '../../../img/bg/ForYourPleasure.png'
import coffeeImg from '../../../img/coffeeDrink.png'
import './forYourPleasure.scss';

const ForYourPleasure = () => {
    return (
        <div className='pleasure'>
            <OurCoffeeHeader title={'For your pleasure'} background={background}/>
            <About img={coffeeImg}/>
            <div className="pleasure__cards">
                <CardsList/>
            </div>
            <Footer/>
        </div>
    )
}

export default ForYourPleasure;