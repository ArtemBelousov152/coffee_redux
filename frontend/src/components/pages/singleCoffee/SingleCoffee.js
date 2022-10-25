import OurCoffeeHeader from '../../ourCoffeHeader/OurCoffeeHeader';
import Footer from '../../footer/Footer';
import CoffeeSingleItem from '../../coffeeSingleItem/CoffeeSingleItem';
import singleCoffeeElem from '../../../img/singleCoffeeElem.jpg'
import { useParams } from 'react-router-dom';
import { selectById as selectCoffee} from '../../cardsList/coffeeListSlice';
import { selectById as selectBestCoffee } from '../../bestCoffee/bestCoffeeSlice';
import { useSelector } from 'react-redux';

import background from '../../../img/bg/OurCoffeeBg.jpg'
import './singleCoffee.scss';

const SingleCoffee = () => {
    let {id} = useParams();
    id = id.slice(1)
    console.log(id.slice(1));
    const coffeeItem = useSelector(state => {
        if (id.length > 25) {
            return selectCoffee(state, id)
        } else {
            return selectBestCoffee(state, id)
        }
       
    })

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