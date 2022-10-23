import './card.scss';
import cofee from '../../img/cofee.png'

const Card = ({flag, name, weight, price, country}) => {

    return (
        <div className={`coffeeCard ${flag ? 'coffeeCard-white' : ''}`}>
            <img src={cofee} alt="cofee" />
            <h4 className={'coffeeCard__title'}>{name} {weight}</h4>
            <div className="coffeeCard__country">{country}</div>
            <div className="coffeeCard__price">{price}$</div>
        </div>
    )
}

export default Card;