import React from "react";
import BreadCrumb from "../../components/CommonComponents/breadcrumb/BreadCrumb";
import Footer from "../../components/CommonComponents/footer/Footer";
import Header from "../../components/CommonComponents/header/header";
import MetaTags from "../../components/CommonComponents/meta/MetaTags";
import PageLinks from "../../components/InnerPageComponents/pageLinks/PageLinks";
import SitemapArray from "../../components/InnerPageComponents/pageLinks/SitemapArray";
import WhiteContentCard from "../../components/InnerPageComponents/WhiteContentCard/WhiteContentCard";


export default function Links(){
    
    const breadCrumbDataArray = [{'name':"Home",'link':"/"},{'name':"sitemap",'link':"null"}];
    
    return(
        <div className='bg-primary'>
            <div className="">

                <MetaTags
                    metaTitle="Sitemap | Jaguar Car Club Of Victoria"
                    metaDescription="Sitemap | Jaguar Car Club Of Victoria"
                    image=""
                    metaKeyword="Jaguar Car Club Of Victoria"
                />

                <Header />

                <div className="container mx-auto pt-top text-center">
                    <h1 className="uppercase">
                        Sitemap
                    </h1>                   
                </div>

                <div className='flex justify-center'>
                    <BreadCrumb links={breadCrumbDataArray}/>
                </div>  

                <div className="">
                    {/* White card starts here */}
                    <WhiteContentCard>
                        <PageLinks jsondataName={SitemapArray}/>
                    </WhiteContentCard>
                </div>
            
                <div className="pt-[5rem] max-sm:pt-[3rem]">
                    <Footer />
                </div>
            </div>
        </div>
    )
}