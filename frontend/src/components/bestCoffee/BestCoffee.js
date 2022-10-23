import { useDispatch, useSelector } from "react-redux";
import { selectAll } from './bestCoffeeSlice'; 
import { useEffect } from "react";
import {bestCoffeeFetch} from './bestCoffeeSlice';
import useRenderCards from "../../hooks/useRenderCards";

import Card from "../card/Card";

const BestCoffee = () => {
    const dispatch = useDispatch();
    const bestCoffee = useSelector(selectAll);
    const {bestCoffeeLoadingStatus} = useSelector(state => state.bestCoffee);

    useEffect(() => {
        dispatch(bestCoffeeFetch())
    },[])

    const elements = useRenderCards(bestCoffeeLoadingStatus, bestCoffee );

    return (
        <ul className="mainPage__ourBest-cardList">
            {elements}
        </ul>
    )
}

export default BestCoffee;