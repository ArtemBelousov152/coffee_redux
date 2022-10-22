import Card from '../card/Card';

import './cardsList.scss';

const CardsList = () => {
    return(
        <div className="wrapper">
            <ul className="cards__list">
                <li className="cards__item">
                    <Card flag={true}/>
                </li>
                <li className="cards__item">
                    <Card flag={true}/>
                </li>
                <li className="cards__item">
                    <Card flag={true}/>
                </li>
                <li className="cards__item">
                    <Card flag={true}/>
                </li>
                <li className="cards__item">
                    <Card flag={true}/>
                </li>
                <li className="cards__item">
                    <Card flag={true}/>
                </li>
            </ul>
        </div>
    )
}

export default CardsList;