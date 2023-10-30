import React from 'react'
import styles from './PageTables.module.scss'


const PageTables = (props: any) => {
    const { headers = [], rows = [] } = props
    return (
        <div id="dataEntryTables" className={`flex justify-center`}>
            <div className='container'>
                <div className='container'>
                    <table className="w-full">
                        <thead className={`${styles.tableheader}`}>
                            <tr className='text-left'>
                                {headers.map((row: any, index: number) => <th key={index} className={`${styles['thead']}`}>{row}</th>)}
                            </tr>
                        </thead>
                        <tbody className={`${styles.tablerows}`}>
                            {rows.length > 0 && rows.map((row: any, index: null) => <tr key={index} className={`${styles.row}`}>
                                {headers.map((header: any) => {
                                    return header === "model" ? <td>{row.model}</td> : <td>{row[header]}</td>
                                })}
                            </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    );
};

export default PageTables;