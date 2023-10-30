import React, { useState } from 'react';
import styles from './selectableButton.module.scss';


function SelectableButon(props: any) {
    const { filter, changeCount } = props
    const [isChecked, setIsChecked] = useState(false);

    return (
        <div>
            <div className={`flex justify-between displayOnDekstop`}>
                <div className={`${styles.radioSelctionCatg}`}>
                    <div className='inline'>
                        {/* <input type="radio" id="category" name="category" onChange={() => filter.category('all')} />
                        <label>All Advertisements</label> */}
                        <button className='py-1 px-4 uppercase bg-white text-[14px] border border-grey-400 focus:bg-[#f5e8eb] focus:border-jaguarRed' onClick={() => filter.category('all')}>All Advertisements</button>
                    </div>
                    <div className='inline'>
                        {/* <input type="radio" id="category" name="category" onChange={() => filter.category('spare_part')} />
                        <label>Spare Parts</label> */}
                        <button className='py-1 px-4 uppercase bg-white text-[14px] border border-grey-400 focus:bg-[#f5e8eb] focus:border-jaguarRed' onClick={() => filter.category('spare_part')}>Spare Parts</button>
                    </div>
                    <div className='inline'>
                        <button className='py-1 px-4 uppercase bg-white text-[14px] border border-grey-400 focus:bg-[#f5e8eb] focus:border-jaguarRed' onClick={() => filter.category('car')}>Cars</button>
                    </div>
                    <div className='inline'>
                        <button className='py-1 px-4 uppercase bg-white text-[14px] border border-grey-400 focus:bg-[#f5e8eb] focus:border-jaguarRed' onClick={() => filter.category('other')}>Other</button>
                    </div>
                </div>
                <div className='flex'>
                    <div className={`${styles.radioSelctionSale} flex`}>
                        <div className='inline'>
                            {/* <input type="radio" id="category" name="sale_or_wanted" onChange={() => filter.state('sale')} />
                            <label>For Sale</label> */}
                            <button className='py-1 px-4 uppercase bg-white text-[14px] border border-grey-400 focus:bg-[#f5e8eb] focus:border-jaguarRed w-[100px]' onClick={() => filter.state('sale')}>For Sale</button>
                        </div>
                        <div className='inline'>
                            {/* <input type="radio" id="other" name="sale_or_wanted" onChange={() => filter.state('wanted')} />
                            <label>Wanted</label> */}
                            <button className='py-1 px-4 uppercase bg-white text-[14px] border border-grey-400 focus:bg-[#f5e8eb] focus:border-jaguarRed' onClick={() => filter.state('wanted')} >Wanted</button>
                        </div>
                    </div>
                    <select id="countries" onChange={(e: any) => changeCount(e.target.value)} className={`${styles.radioSelectionAmount} ml-6 border inline bg-gray-50 border-gray-300 text-gray-900  focus:ring-blak focus:border-blue-500 w-full`}>
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                        <option value={30}>30</option>
                        <option value={40}>40</option>
                    </select>
                </div>
            </div>

            <div className='displayOnMobile'>
                <div className='flex pb-1'>
                    <button className='py-1 w-full px-4 uppercase bg-white text-[12px] border border-grey-400 focus:bg-[#f5e8eb] focus:border-jaguarRed' onClick={() => filter.category('all')}>All Advertisements</button>
                </div>
                <div className='flex pb-1'>
                    <button className='py-1 w-full px-4 uppercase bg-white text-[12px] border border-grey-400 focus:bg-[#f5e8eb] focus:border-jaguarRed' onClick={() => filter.category('spare_part')}>Spare Parts</button>

                    <button className='py-1 w-full px-4 uppercase bg-white text-[12px] border border-grey-400 focus:bg-[#f5e8eb] focus:border-jaguarRed' onClick={() => filter.category('car')}>Cars</button>
                    
                    <button className='py-1 w-full px-4 uppercase bg-white text-[12px] border border-grey-400 focus:bg-[#f5e8eb] focus:border-jaguarRed' onClick={() => filter.category('other')}>Others</button>
                </div>
                <div className="flex pb-1">
                    <button className='py-1 px-2 uppercase bg-white text-[12px] border border-grey-400 focus:bg-[#f5e8eb] focus:border-jaguarRed w-[100px]' onClick={() => filter.state('sale')}>For Sale</button>

                    <button className='py-1 w-full uppercase bg-white text-[12px] border border-grey-400 focus:bg-[#f5e8eb] focus:border-jaguarRed' onClick={() => filter.state('wanted')} >Wanted</button>
                    
                </div>
                <div>
                    <select id="countries" onChange={(e: any) => changeCount(e.target.value)} className={`${styles.radioSelectionAmount} border inline bg-gray-50 border-gray-300 text-gray-900  focus:ring-blak focus:border-blue-500 w-full`}>
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                        <option value={30}>30</option>
                        <option value={40}>40</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default SelectableButon