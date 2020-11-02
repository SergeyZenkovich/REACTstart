import React, { useState } from 'react';
import s from '../../components/Users/Users.module.css';
import pagination from '../../pagination';

const Paginator = ({ totalUsersCount, pageSize, currentPage, onPageChanged }) => {
    let pages = Math.ceil(totalUsersCount / pageSize);
    let pagesArray = pagination(currentPage, pages);

    return (
        <div className={s.pagBlock}>
            {pagesArray.map((el, index) => {
                if (el !== '...') {
                    return <button className={currentPage === el ? s.pagSelected : s.button} onClick={() => { onPageChanged(el) }} value={el} key={index}>{el}</button>
                }
                return <button className={s.button} value={el} key={index}>{el}</button>
            })
            }
        </div>
    )
}
const PaginatorNew = ({ totalItemsCount, pageSize, currentPage, onPageChanged, portionSize }) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];

    for (let i = 0; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    const [portionNumber, setPortionNumber] = useState(1);
    let leftPortionpageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionpageNumber = portionNumber * portionSize;

    const prevPortion = () => {
        setPortionNumber(portionNumber - 1);
    }
    const nextPortion = () => {
        setPortionNumber(portionNumber + 1);
    }

    return (
        <div className={s.pagBlock}>
            {portionNumber > 1 &&
                <button onClick={prevPortion}>Prev</button>
            }
            { pages
                .filter((p) => p >= leftPortionpageNumber && p <= rightPortionpageNumber)
                .map(p => {
                    return <button className={currentPage === p ? s.pagSelected : s.button} onClick={() => { onPageChanged(p) }} value={p} key={p}>{p}</button>
                })
            }
            {portionCount > portionNumber &&
                <button onClick={nextPortion}>Next</button>
            }

        </div>
    )
}
export default Paginator;
export { PaginatorNew }