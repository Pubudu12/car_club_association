import Footer from "../../components/CommonComponents/footer/Footer";
import Header from "../../components/CommonComponents/header/header";
import HeaderSwitch from "../../components/CommonComponents/headerswitch/HeaderSwitch";
import WhiteContentCard from "../../components/InnerPageComponents/WhiteContentCard/WhiteContentCard";
import PageLinks from "../../components/InnerPageComponents/pageLinks/PageLinks";
import linksData from '../../components/InnerPageComponents/pageLinks/links.json'
import BreadCrumb from "../../components/CommonComponents/breadcrumb/BreadCrumb";
import MetaTags from "../../components/CommonComponents/meta/MetaTags";


export default function Links(){
    const breadCrumbDataArray = [{'name':"Home",'link':"/"},{'name':"links",'link':"null"}];
    return(
        <div className='bg-primary'>

            <MetaTags
                metaTitle="Explore more - External Links and Resources"
                metaDescription="The Jaguar - Car Club of Victoria's recommended links and resources for enthusiasts can help you learn more."
                image=""
                metaKeyword="Jaguar Car Club Of Victoria"
            />

           <Header />                    
           
            <div className="py-[3rem]">
                
                <WhiteContentCard>
                    <div className='flex  relative top-[-10px]'>
                        <BreadCrumb links={breadCrumbDataArray}/>
                    </div>    

                    <HeaderSwitch text="LINKS" type="primary"/>

                    <PageLinks jsondataName={linksData}/>

                </WhiteContentCard>
            </div>         

            <Footer />
        </div>
    )
}