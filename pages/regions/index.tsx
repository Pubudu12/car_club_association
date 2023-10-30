import HeroBanner from "../../components/CommonComponents/banners/herobanner/HeroBanner";
import BreadCrumb from "../../components/CommonComponents/breadcrumb/BreadCrumb";
import Footer from "../../components/CommonComponents/footer/Footer";
import Header from "../../components/CommonComponents/header/header";
import MetaTags from "../../components/CommonComponents/meta/MetaTags";
import StateMap from "../../components/Regions/StateMap/StateMap";


export default function MainMembershipPage() {
    const breadCrumbDataArray = [{'name':"Home",'link':"/"},{'name':"Regions",'link':"null"}];
    return (
        <div className="overflow-hidden bg-primary">
            <div className="pb-[5rem]">
                <MetaTags
                    metaTitle="Regions"
                    metaDescription=" Explore the regions where club members drive, show and share their passion for Jaguars. Join the nearest chapter and discover new adventures."
                    image=""
                    metaKeyword="Jaguar Car Club Of Victoria"
                />

                <Header />

                <HeroBanner
                    heroImage="/images/Regions/Intro-Image.webp"
                    darkHeadingOne=""
                    darkHeading=""
                    lightHeading="Regions"
                    heroImageMobile="/images/Regions/introImageMobileRegions.webp"
                />

                <div className='flex justify-center relative top-[-10px] pb-[2rem]'>
                    <BreadCrumb links={breadCrumbDataArray}/>
                </div>  

                {/* Map starts */}
                <StateMap/>
            </div>            
        
            <Footer/>

        </div>
    );
}


