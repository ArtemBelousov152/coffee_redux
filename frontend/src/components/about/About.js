import Divider from '../divider/Divider';

import './about.scss';

const About = ({img}) => {
    return (
        <div className="wrapper">
            <div className="about">
                <img src={img} alt="cofeeDrink" />
                <div className="about__descr">
                    <h2 className='about__title'>About our beans</h2>
                    <Divider/>
                    <p>
                        Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. <br /> <br />

                        Afraid at highly months do things on at. Situation recommend objection do intention
                        so questions. 
                        As greatly removed calling pleased improve an. Last ask him cold feel
                        met spot shy want. Children me laughing we prospect answered followed. At it went
                        is song that held help face.
                    </p>
                </div>
                <div className="about__divider"></div>
            </div>
        </div>
    )
}

export default About;