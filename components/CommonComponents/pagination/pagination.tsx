import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';
import styles from './pagination.module.scss';

function Pagination(props: any) {
    const { currentPage, itemsPerPage, totalItems, paginate, indicate, firstIndex, lastIndex } = props
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    const getPaginationText = () => {
        var start = (currentPage - 1) * itemsPerPage + 1;
        var end = Math.min(start + itemsPerPage - 1, totalItems);

        return `Showing ${start} to ${end} of ${totalItems} results`;
    }


    return (
        <div>
            <div className={`${styles.pagination}`}>
                <div className="uppercase py-6">
                    {getPaginationText()}
                </div>

                <div className={`${styles.pages} flex justify-center`}>
                    <ul className='flex'>
                        <li className={`inline shadow-sm ${styles.pageLink}`}><Link href="#" onClick={() => indicate('left')}><FontAwesomeIcon icon={faAngleLeft} className="h-5" /></Link></li>
                        {pageNumbers.map(number => (
                            <li key={number} className={currentPage === number ? `inline shadow-sm ${styles.pageLink} ${styles.pageActive}` : `inline shadow-sm ${styles.pageLink}`}>
                                <a onClick={() => paginate(number)} href="#" className='page-link'>
                                    {number}
                                </a>
                            </li>
                        ))}
                        <li className={`inline shadow-sm ${styles.pageLink}`}><Link href="#" onClick={() => indicate('right')}><FontAwesomeIcon icon={faAngleRight} className="h-5" /></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Pagination