import './card.scss';
import cofee from '../../img/cofee.png'

const Card = () => {
    return (
        <div className='coffeeCard'>
            <img src={cofee} alt="cofee" />
            <h4 className='coffeeCard__title'>Solimo Coffee Beans 2 kg</h4>
            <div className="coffeeCard__price">10.73$</div>
        </div>
    )
}

export default Card;