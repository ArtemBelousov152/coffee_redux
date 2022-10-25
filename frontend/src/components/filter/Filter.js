import {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFilters, changeActiveFilter, changeSearchValue } from './filterSlice';
import { selectAll } from './filterSlice';
import classNames from "classnames";

import './filter.scss';

const Filter = () => {
    const dispatch = useDispatch();
    const {filtersLoadingStatus, activeFilter} = useSelector(state => state.filters)
    const filters = useSelector(selectAll);

    useEffect(() => {
        dispatch(fetchFilters())
    },[]);

    const renderFilters = (filtersArray, loadingStatus) => {
        switch(loadingStatus) {
            case 'loading': 
                return <div>Загрузка</div>
            case 'error': 
                return <div>Ошибка загрузки</div>
        }
        if (filtersArray.length === 0) {
            return <h5 >Фильтров пока нет</h5>
        }
        return filtersArray.map(({id, name}) => {
            const filterClass = classNames({
                'active': name === activeFilter
            })

            return <button
                        key={id} 
                        className={`filters__btn ${filterClass}`}
                        onClick={() => {dispatch(changeActiveFilter(name))}}
                    >{name}</button>
        })
    }

    return(
        <div className="filters">
            <div className="filters__textArea">
                <div className="filters__descr">Looking for</div>
                <input 
                    type="textArea" 
                    placeholder='start typing here...'
                    onChange={(e) => dispatch(changeSearchValue(e.target.value.toLowerCase()))}/>
            </div>
            <div className="filters__btns">
                <div className="filters__descr">Or filter</div>
                <div className="filters__btns-wrapper">
                    {renderFilters(filters, filtersLoadingStatus)}
                </div>
            </div>
        </div>
    )
}

export default Filter;