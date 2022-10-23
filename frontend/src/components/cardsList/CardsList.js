import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filteredCoffeeSelector, coffeeFetch } from './coffeeListSlice';
import useRenderCards from '../../hooks/useRenderCards'; 

import './cardsList.scss';

const CardsList = () => {
    const dispatch = useDispatch();
    const {coffeeLoadingStatus} = useSelector(state => state.coffee);
    const filteredCoffee = useSelector(filteredCoffeeSelector)

    useEffect(() => {
        dispatch(coffeeFetch());
    },[])

    
    const element = useRenderCards(coffeeLoadingStatus, filteredCoffee);
    return(
        <div className="wrapper">
            <ul className="cards__list">
                {element}
            </ul>
        </div>
    )
}

export default CardsList;