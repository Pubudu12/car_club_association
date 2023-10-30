import React, { useState } from 'react'
import styles from './Members.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import PlaceHolder from '../../../helper/placeholder'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Members = (props: any) => {
  const { members,code, page } = props
  const myLoader = (params: any) => {
    const { src } = params
    return `${src}`
    // return `${process.env.NEXT_PUBLIC_END_POINT}${src}`
  }

  // console.log(members)

  const [hoveredMemberIndex, setHoveredMemberIndex] = useState(-1);

  function handleMouseEnter(index:any) {
    setHoveredMemberIndex(index);
  }

  function handleMouseLeave() {
    setHoveredMemberIndex(-1);
  }

  return (
    <div id="memberDetails" className={`flex justify-center ${code == 'COMMITTEE' ? 'pb-[2rem]':''}`}>
      <div className={`container ${code == 'COMMITTEE' ? 'md:py-[3rem]' : 'md:py-[1rem]' }`}>

        <div className={`${styles.membersgrid} grid md:grid-cols-4 grid-cols-1 gap-x-4 md:gap-y-20 text-center lg:px-[5rem]`} >
          {members.map((member: any, index: number) => (
            <div key={index} className={`${styles.memberCard}`}>
              {
                code == 'COMMITTEE' &&
                  <div className={`${styles.memberImageMainDiv} flex justify-center`} key={index}>
                    { member.attributes.image.data ? <Image loader={myLoader} src={member.attributes.image.data.attributes.url} width={0} height={0} priority={true}  unoptimized={false} layout={'responsive'} alt={member.attributes.person_name} className={`${styles.memberCardImage} `} /> : PlaceHolder.image.cover('JCCV', 'w-full h-[100px] object-cover') }
                  </div> 
              }      

              {
                page == 'REGISTERS' ? 
                  <div className={`${styles.memberCardText} pt-[1rem]`}> {/*onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave}*/}
                    <h3>{member.attributes.person_name}</h3>
                    <p>{member.attributes.designation}</p>
                    {/* {
                      hoveredMemberIndex === index &&  */}
                        <div className='text-grey-900'>
                          {/* <div className='pt-1'><Link href={`tel:${member.attributes.phone}`} className={`${styles.CardTeleLink} text-grey-900 text-sm pt-[1rem]`}><FontAwesomeIcon className={`h-3 w-3 inline mb-1`} icon={faPhone}/> <span className='pl-1'>{member.attributes.phone}</span></Link></div> */}
                          { member.attributes.email && <div><FontAwesomeIcon className={`h-3 w-3 inline mb-1`} icon={faEnvelope}/> <span className='pl-1'>{`${member.attributes.email.split('@')[0]} 'at' ${member.attributes.email.split('@')[1]}`}</span></div> }
                        </div> 
                    {/* }     */}
                  </div>
                  :
                  <div className={`${styles.memberCardText} pt-[1rem]`}>
                    <h3>{member.attributes.person_name}</h3>
                    <p>{member.attributes.designation}</p>
                    
                    {/* <div className='text-grey-900'><Link href={`tel:${member.attributes.phone}`} className={`${styles.CardTeleLink} text-grey-900 text-sm pt-[1rem]`}><FontAwesomeIcon className={`h-3 w-3 inline mb-1`} icon={faPhone}/> <span className='pl-1'>{member.attributes.phone}</span></Link></div> */}
                    <div className='text-grey-900'>
                      { member.attributes.email && <div><FontAwesomeIcon className={`h-3 w-3 inline mb-1`} icon={faEnvelope}/> <span className='pl-1'>{`${member.attributes.email.split('@')[0]} 'at' ${member.attributes.email.split('@')[1]}`}</span></div> }
                      { member.attributes.small_description && <div className='text-gray-900 text-sm'>{member.attributes.small_description}</div> } 
                    </div>
                  </div> 
              }              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Members