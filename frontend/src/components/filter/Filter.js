import './filter.scss';

const Filter = () => {
    return(
        <div className="filters">
            <div className="filters__textArea">
                <div className="filters__descr">Looking for</div>
                <input type="textArea" placeholder='start typing here...'/>
            </div>
            <div className="filters__btns">
                <div className="filters__descr">Or filter</div>
                <button className="filters__btn">Brazil</button>
                <button className="filters__btn">Kenya</button>
                <button className="filters__btn">Columbia</button>
            </div>
        </div>
    )
}

export default Filter;