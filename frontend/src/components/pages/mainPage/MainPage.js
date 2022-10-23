import Header from "../../header/Header";
import Divider from "../../divider/Divider";
import BestCoffee from "../../bestCoffee/BestCoffee";

import './mainPage.scss'
import Footer from "../../footer/Footer";

const MainPage = () => {
    


    return (
        <div className="mainPage">
            <Header/>
            <main>
                <div className="mainPage__about">
                    <h2>About Us</h2>
                    <Divider/>
                    <div className="mainPage__about-descr">
                        <p>
                            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                            Afraid at highly months do things on at. Situation recommend objection do intention
                            so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                            met spot shy want. Children me laughing we prospect answered followed. At it went
                            is song that held help face.
                        </p>
                        <p>
                            Now residence dashwoods she excellent you. Shade being under his bed her, Much
                            read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                            horrible but confined day end marriage. Eagerness furniture set preserved far
                            recommend. Did even but nor are most gave hope. Secure active living depend son
                            repair day ladies now.
                        </p>
                    </div>
                </div>
                <div className="mainPage__ourBest">
                    <h2 className="mainPage__ourBest-title">Our best</h2>
                    <BestCoffee/>
                </div>
            </main>
            <Footer/>
        </div>

    )
}

export default MainPage; 