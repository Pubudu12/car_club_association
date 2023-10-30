import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import style from './BreadCrumb.module.scss';
import Link from 'next/link';

const BreadCrumb = (props:any) => {
  const { links } = props
  // var arrayCount = links.length;
  
  return (   
    <div className={`${style.outerBreadcrumb}`}>
      {links.map((singleBreadcrumb: any, i:null) => {
        
        return (
          <div key={i} className={`inline`}>
            { singleBreadcrumb.link === "null" ? 
            <span className={`${style.linkBreadCrumb}`}>
                {singleBreadcrumb.name} 
            </span> : 
            <Link href={singleBreadcrumb.link} className={`${style.linkBreadCrumb}`}>
                {singleBreadcrumb.name} 
            </Link> }
                  
            <FontAwesomeIcon className={`${style.iconStyle} inline mb-[3px] px-2`} icon={faAngleRight} />
          </div>
          )
        })
      }
    </div>       

    // <Breadcrumb aria-label="Default breadcrumb example" className='breadcrumbStyles'>
    //   <Breadcrumb.Item href="/"> Home </Breadcrumb.Item>
    //   <Breadcrumb.Item> About Us </Breadcrumb.Item>
    // </Breadcrumb>
  )
}

export default BreadCrumb