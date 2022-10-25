import {Link} from "react-router-dom";
import Card from '../components/card/Card';

const useRenderCards = (loadingStatus, coffeeArray) => {
    switch(loadingStatus) {
        case 'loading': 
            return <div>Загрузка</div>
        case 'error': 
            return <div>Ошибка загрузки</div>
    }
    if (coffeeArray.length === 0) {
        return <h5 >Коффе пока нет</h5>
    }
    return coffeeArray.map(({id, ...props}) => {
        return <li className="cards__item">
            <Link to={`/ourcoffee/:${id}`}>
                <Card flag={true} key={id} {...props}/>
            </Link>
        </li>
    })
}

export default useRenderCards;