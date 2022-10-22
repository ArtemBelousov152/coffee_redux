import OurCoffeeHeader from '../../ourCoffeHeader/OurCoffeeHeader';
import Footer from '../../footer/Footer';
import CoffeeSingleItem from '../../coffeeSingleItem/CoffeeSingleItem';
import singleCoffeeElem from '../../../img/singleCoffeeElem.jpg'

import background from '../../../img/bg/OurCoffeeBg.jpg'
import './singleCoffee.scss';

const SingleCoffee = () => {
    return(
        <>
            <OurCoffeeHeader title={"Our Coffee"} background={background}/>
            <CoffeeSingleItem img={singleCoffeeElem}/>
            <Footer/>
        </>
    )
}

export default SingleCoffee;