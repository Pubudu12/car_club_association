import React from 'react'
import styles from './PageTables.module.scss'


const NoTable = () => {
    return (
        <div id="dataEntryTables" className={`flex justify-center`}>
            <div className='container '>
                <div className='container '>
                    <table className="w-full">

                        <tbody className={`${styles.tablerows}`}>
                            <td style={{ textAlign: "center" }}>No data!</td>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    );
};

export default NoTable;