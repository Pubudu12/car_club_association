import Image from "next/image";
import Link from 'next/link';
import React, { useState } from 'react';
import styles from '../ImageWithDetailsCard/ImageWithDetails.module.scss';
import redirectStyles from '../../callToActions/rediredtButton/RedirectButton.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import PlaceHolder from "../../../../helper/placeholder";

const ClassifiedCard = (props: any) => {
    const { image, title, redirectLink, dateAvailability, date, description, onHoverExtendFromMiddleLine, status, contactPerson, price, phone } = props

    const myLoader = ({ src }: { src: any }) => {
        return `${src}`
    }

    const [showModal, setShowModal] = useState(false);

    return (
        <div id="ImagewithDetails" className={`${styles.item} ${styles[onHoverExtendFromMiddleLine]} hover:bg-white`}>
            <div className={`${styles.image} ${styles.imageOuter}`}>
                {image ? <Image loader={myLoader} src={`${image}`} alt={title} priority={true} unoptimized={false} width={0} height={0} layout={'responsive'} className={`${styles.fixedImageSize}`} /> : PlaceHolder.image.card("JCCV", `${styles.fixedImageSize}`,'')}
                <div className={`${styles.state}`}>{status}</div>
            </div>

            <div className={`${styles.details}`}>
                <h4 className={`${styles.itemTitle}`}>{title}</h4>
                <div className={`opacity-60 py-3`}>{description}</div>
                <div className={`opacity-60 py-3 ${dateAvailability}`}>{date}</div>

                <div id="redirectButton" className={`flex justify-start`}>
                    {/* <div className={`${redirectStyles.redirectOuter} `}>
                        <div className={`${redirectStyles.redirectbutton} hover:cursor-pointer`} onClick={() => setShowModal(true)}> Explore </div>
                    </div> */}
                    <div className={`${redirectStyles.redirectLink} font-Inter-SemiBold font-normal uppercase flex text-black cursor-pointer`} onClick={() => setShowModal(true)}>
                        Explore
                        <span className={`${redirectStyles.icon} pl-2 w-[17px] flex`}>
                            <FontAwesomeIcon className={``} icon={faAngleRight} />
                        </span>
                    </div>
                </div>
                {showModal && <div>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none mx-2">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">

                            {/*content*/}
                            <div className="border-0 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="absolute top-0 right-0">
                                    <button className="p-1 ml-auto bg-transparent border-0 text-black float-right text-xl leading-none font-semibold outline-none focus:outline-none" onClick={() => setShowModal(false)} >
                                        <span className=" text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            {/* <FontAwesomeIcon icon={faClose} className="h-6"/> */}
                                            x
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="grid grid-cols-2 max-sm:grid-cols-1">
                                    <div className="relative p-6 max-sm:order-2">
                                        <div className='pb-4'>
                                            <h3 className='font-bold text-xl'>{title}</h3>
                                        </div>
                                        <div>
                                            {description}
                                        </div>
                                        <div className='flex absolute max-sm:relative bottom-0 pb-5 max-sm:pt-3'>
                                            <div className='price pr-6'>
                                                <h5 className='text-marron font-bold'>Price</h5>
                                                <div className='font-bold'>${price}</div>
                                            </div>
                                            <div className='contact'>
                                                <h5 className='text-marron font-bold'>Contact</h5>
                                                <Link href={`tel:${phone}`} className='font-bold'>{contactPerson} - {phone}</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="h-[25rem]">
                                        <Image loader={myLoader} src={image} priority={true} unoptimized={false} alt={title} width={0} height={0} layout={'responsive'} className={`w-full h-100 object-cover`} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </div>}
            </div>
        </div>
    )
}
export default ClassifiedCard;