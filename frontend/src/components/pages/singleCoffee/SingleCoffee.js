import OurCoffeeHeader from '../../ourCoffeHeader/OurCoffeeHeader';
import Footer from '../../footer/Footer';
import CoffeeSingleItem from '../../coffeeSingleItem/CoffeeSingleItem';
import singleCoffeeElem from '../../../img/singleCoffeeElem.jpg'
import { useParams } from 'react-router-dom';
import { selectById, selectAll } from '../../cardsList/coffeeListSlice';
import { useSelector } from 'react-redux';

import background from '../../../img/bg/OurCoffeeBg.jpg'
import './singleCoffee.scss';

const SingleCoffee = () => {
    const {id} = useParams();

    const coffeeItem = useSelector(state => selectById(state, id.replace(/[^+\d]/g, '')));

    console.log(coffeeItem);
    return(
        <>
            <OurCoffeeHeader title={"Our Coffee"} background={background}/>
            <CoffeeSingleItem img={singleCoffeeElem} {...coffeeItem}/>
            <Footer/>
        </>
    )
}

export default SingleCoffee;