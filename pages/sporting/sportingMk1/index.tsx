import Image from "next/image";
import React, { useEffect, useState } from 'react'
import BreadCrumb from "../../../components/CommonComponents/breadcrumb/BreadCrumb";
import Footer from '../../../components/CommonComponents/footer/Footer'
import Header from '../../../components/CommonComponents/header/header'
import MetaTags from '../../../components/CommonComponents/meta/MetaTags'
import WhiteContentCard from '../../../components/InnerPageComponents/WhiteContentCard/WhiteContentCard'
import FristWordBoldTitle from '../../../components/TechTips/FristwordBoldTitle'
import Sporting from "../../api/sporting"
import PlaceHolder from "../../../helper/placeholder";
import Convert from "../../../helper/convert"

function SportingMK1() {
    const [data, setData] = useState<{ attributes: any }>()

    const myLoader = ({ src }: { src: any }) => {
        return `${src}`
        // return `${process.env.NEXT_PUBLIC_END_POINT}${src}`
    }

    useEffect(() => {
        get()
    }, [""])

    const get = async () => {
        const newData = await Sporting.get.mk1Race()
        setData(newData)
    }

    const breadCrumbDataArray = [{'name':"Home",'link':"/"},{'name':"Sporting",'link':"/sporting"},{'name':data?.attributes.title,'link':"null"}];

    return (
        <div>
            <div className='bg-primary sportingmk1parallx'>

                <Header />

                <MetaTags
                    metaTitle="Sporting MK1 | Jaguar Car Club Of Victoria"
                    metaDescription="Sporting MK1 | Jaguar Car Club Of Victoria"
                    image = {data?.attributes.image.data && data?.attributes.image.data.attributes.url}
                    metaKeyword="Jaguar Car Club Of Victoria"
                />

                <div className='flex justify-center py-[6rem]'>
                    <WhiteContentCard>

                    {
                        data && data.attributes.image.data ? 
                        <Image loader={myLoader} src={data.attributes.image.data.attributes.url} alt={data?.attributes.title} className="w-full h-[400px] object-cover" width={0} height={0} />
                        : PlaceHolder.image.cover('JCCV', 'w-full h-[400px] object-cover')
                    }
                        {/* <Image loader={myLoader} src={data && data.attributes.image.data.attributes.url} height={0} width={0} layout={'responsive'} alt="Jaguar Car Club of Victoria Coucour Rules" /> */}

                        <div className="py-5">
                            <BreadCrumb links={breadCrumbDataArray}/>
                        </div>

                        <div className='pt-4'>
                            <FristWordBoldTitle boldtext={data && data.attributes.title} normalText="" />
                        </div>

                        {data && <p className='pt-5'>
                            {Convert.html(data.attributes.content)}
                        </p>}

                    </WhiteContentCard>
                </div>

                <div className="">
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default SportingMK1