import Image from "next/image";
import React, { useEffect, useState } from "react";
import BreadCrumb from "../../../components/CommonComponents/breadcrumb/BreadCrumb";
import Footer from "../../../components/CommonComponents/footer/Footer";
import Header from "../../../components/CommonComponents/header/header";
import RedTitle from "../../../components/InnerPageComponents/SmallWhiteCardRed/RedTitle";
import WhiteContentCard from "../../../components/InnerPageComponents/WhiteContentCard/WhiteContentCard";
import FristWordBoldTitle from "../../../components/TechTips/FristwordBoldTitle";
import Concur from "../../api/concur";
import Convert from "../../../helper/convert"
import MetaTags from "../../../components/CommonComponents/meta/MetaTags";

export default function IndividualNews() {
    const breadCrumbDataArray = [{'name':"Home",'link':"/"},{'name':"concours",'link':"/"},{'name':"rules",'link':"null"}];
    const [rules, setRules] = useState<{ attributes: any }>()


    useEffect(() => {
        get()
    }, [""])

    const get = async () => {
        const newRule = await Concur.rule.get()
        setRules(newRule)
    }

    return (
        <div className='bg-primary'>

            <MetaTags
                metaTitle="Concour Rules | Jaguar Car Club Of Victoria"
                metaDescription="Concour Rules | Jaguar Car Club Of Victoria"
                image=""
                metaKeyword="Jaguar Car Club Of Victoria"
            />

            <Header />

            <Image src='/images/ConcourImages/concour_rules.webp' height={0} width={0} layout={'responsive'} alt="Jaguar Car Club of Victoria Coucour Rules" />
            

            {rules && <div className='flex justify-center relative 2xl:top-[-8rem] lg:top-[-6rem] md:top-[-6rem]'>
                <WhiteContentCard>
             <div className='flex  relative top-[-10px]'>
                <BreadCrumb links={breadCrumbDataArray}/>
             </div> 
             <div className="xl:pb-[2rem]">
             <FristWordBoldTitle boldtext={`${rules.attributes.topic} ${rules.attributes.year}`} normalText="" />
             </div>
                   

                    {rules.attributes.content && rules.attributes.content.map((content: any) => <div key={content.id}>
                        <RedTitle fristLine={content.sub_topic} SecondLine="" />

                        {Convert.html(content.content)}
                    </div>)}

                </WhiteContentCard>
            </div>}


            <div className="pt-4">
                <Footer />
            </div>
        </div>
    )
}