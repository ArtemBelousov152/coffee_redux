import Divider from '../divider/Divider';

import './coffeeSingleItem.scss';

const CoffeeSingleItem = ({img, price, country}) => {
    return (
        <div className="wrapper">
            <div className="aboutSingleCoffee">
                <img src={img} alt="cofeeDrink" />
                <div className="aboutSingleCoffee__wrapper">
                    <h2 className='aboutSingleCoffee__title'>About our beans</h2>
                    <Divider/>
                    <div className="aboutSingleCoffee__descr">
                        <div className="aboutSinglCoffee__descr-country"><span>Country:</span> {country}</div>
                        <br />
                        <div className="aboutSingleCoffee__descr-text">
                            <span>Description:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </div>
                        <br />
                        <div className="aboutSingleCoffee__descr-price">
                            Price:<span>  {price}$</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoffeeSingleItem;