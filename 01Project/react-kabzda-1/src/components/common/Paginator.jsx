import React from 'react';
import s from '../../components/Users/Users.module.css';
import pagination from '../../pagination';

const Paginator  = ({totalUsersCount,pageSize, currentPage, onPageChanged })=>{
    let pages = Math.ceil(totalUsersCount / pageSize);
    let pagesArray = pagination(currentPage, pages);

    return(
        <div className={s.pagBlock}>
                {pagesArray.map((el, index) => {
                    if (el !== '...') {
                        return <button className={currentPage === el ? s.pagSelected : s.button} onClick={() => {onPageChanged(el) }} value={el} key={index}>{el}</button>
                    }
                    return <button className={s.button} value={el} key={index}>{el}</button>
                })
                }
        </div>
    )
}
export default Paginator;