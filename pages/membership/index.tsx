import Footer from "../../components/CommonComponents/footer/Footer";
import HeroBanner from "../../components/CommonComponents/banners/herobanner/HeroBanner";
import CenterAlignedContent from "../../components/CommonComponents/CenterAlignedContent/CenterAlignedContent";
import RedirectButton from "../../components/CommonComponents/callToActions/rediredtButton/RedirectButton";
import ImageSlider from "../../components/CommonComponents/sliders/imageSlider/ImageSlider";
import LeftHeaderContent from "../../components/CommonComponents/leftHeaderContent/LeftHeaderContent";
import jsondataClubMembership from "../../components/CommonComponents/textImageSection/jsondataClubMembership.json";
import TextImageSection from "../../components/CommonComponents/textImageSection/TextImageSection";
import MetaTags from "../../components/CommonComponents/meta/MetaTags";
import Header from "../../components/CommonComponents/header/header";
import jsondataAboutUsImageSlider from "../../components/CommonComponents/sliders/imageSlider/jsondataAboutUsImageSlider.json";
import styles from "./MembershipMainPage.module.scss";
import BreadCrumb from "../../components/CommonComponents/breadcrumb/BreadCrumb";
import SmallWhiteCard from "../../components/InnerPageComponents/SmallWhiteCard/SmallWhiteCard";

export default function MainMembershipPage() {
  const breadCrumbDataArray = [{'name':"Home",'link':"/"},{'name':"membership",'link':"null"}];
  return (
    <div className="overflow-hidden bg-primary">
      <MetaTags
        metaTitle="Join the Club - become a member today!"
        metaDescription="Join a community of Jaguar enthusiasts and rev up your passion with exclusive benefits and perks as a member of Jaguar - car club of Victoria."
        image=""
        metaKeyword="Jaguar Car Club Of Victoria"
      />

      <Header />

      <HeroBanner
        heroImage="/images/Membership/IntroImage.webp"
        darkHeadingOne="club "
        darkHeading=""
        lightHeading="membership"
        heroImageMobile="/images/Membership/introImageMobile.webp"
      />
      <div className='flex justify-center relative top-[-10px]'>
        <BreadCrumb links={breadCrumbDataArray}/>
      </div>  


      <CenterAlignedContent
        lightTitleOne="Become a member of "
        darkTitleOne="Australia’s oldest"
        lightTitleTwo="jaguar car club"
        darkTitleTwo=""
        mainPara="Your annual subscription is your gateway to joining a community of over 800 Jaguar enthusiasts to take your passion for the marque to a whole new level by receiving many member-exclusive experiences, technical knowledge, and social and many other upsides."
      />

      {/* Joining Fee */}
      <div className="pb-[1rem] max-sm:pt-10 pt-3">
        <div className="container mx-auto max-sm:px-3 py-11">
            <div className="flex justify-center">
            {/* <div className="grid grid-cols-2 gap-3 lg:px-28 max-sm:grid-cols-1 max-sm:px-5"> This row for 4 cards*/}
                
                <div className="mx-3">
                    <SmallWhiteCard>
                        <div className="pt-3"><span className="font-bold">New Member</span><span className="font-semibold "> (Country)</span></div>
                        <div className="pb-6 font-semibold">Joining Fee</div>

                        <div className="text-[#9E1B32] font-bold pt-6">$171.00</div>
                    </SmallWhiteCard>  
                </div>

                <div className="mx-3">
                    <SmallWhiteCard>
                        <div className="pt-3"><span className="font-bold">New Member</span><span className="font-semibold"> (Country)</span></div>
                        <div className="pb-6 font-semibold">Joining Fee</div>

                        <div className="text-[#9E1B32] font-bold pt-6">$237.50</div>
                    </SmallWhiteCard> 
                </div>
                

                {/* <SmallWhiteCard>
                  <div className="pt-3"><span className="font-bold">New Member</span><span className="font-semibold"> (Metropolitan)</span></div>
                  <div className="pb-6 font-semibold">Joining Fee</div>

                  <div className="text-[#9E1B32] font-bold pt-6">$100.00</div>
                </SmallWhiteCard>  

                <SmallWhiteCard>
                  <div className="pt-3"><span className="font-bold">New Member</span><span className="font-semibold"> (Metropolitan)</span></div>
                  <div className="pb-6 font-semibold">Joining Fee</div>

                  <div className="text-[#9E1B32] font-bold pt-6">$137.00</div>
                </SmallWhiteCard> */}
            </div>
        </div>
      </div>

      <div className="justify-center flex lg:pt-[0rem] md:pt-[2rem] md:pb-[0rem] 2xl:pb-[0rem] 2xl:px-[20rem]">
        <div className="md:flex sm:grid justify-between">
          <div className="pt-[1rem]">
            <RedirectButton
            redirectButton = "apply now"
            directedlink= "https://memberdesq.sportstg.com/index.cfm?fuseaction=registration_1&RegistrationMode=2&SubscriptionTypeID=278&OrgID=2037" 
            target = "_blank"
            TextType = ""
            />
          </div>
        </div>
      </div>

      <div>
        <CenterAlignedContent
          lightTitleOne="Already a "
          darkTitleOne="Member ?"
          lightTitleTwo=""
          darkTitleTwo=""
          mainPara="Get your membership renewed today to stay connected with the global community of nobility of Jaguar car owners around the world."
        />
      </div>

      <div className="justify-center flex lg:pt-[3rem] md:pt-[2rem] md:pb-[2rem] 2xl:pb-[3rem] 2xl:px-[20rem]">
        <div className="md:flex sm:grid justify-between ">
                    
          <div className="pt-[1rem] flex justify-center">
            <RedirectButton
            redirectButton = "renew"
            directedlink= "https://memberdesq.sportstg.com/index.cfm?fuseaction=login&OrgID=2037" 
            target = "_blank"
            TextType = ""
            />
          </div>
        </div>
      </div>

      <div className="py-[3rem]">
        <ImageSlider jsonImagesName={jsondataAboutUsImageSlider} />
      </div>

      <div className=" 2xl:pt-[3rem]">
        <div>
          <LeftHeaderContent
            lightTitleOne=""
            darkTitle="Cat-a-Log"
            lightTitleTwo="that you don't want to miss"
            para="With our monthly magazine, Cat-a-LOG, You will receive interesting articles,  news about the club's activities, technical advice, displays, information, and sporting & social events along with information on various registered activities, upcoming events, and displays."
          />
        </div>

        <div className="flex 2xl:ml-[14.5rem] xl:ml-[6rem] lg:ml-[3rem] md:ml-[3rem] md:justify-start justify-center pt-[2rem]">
          <RedirectButton
            redirectButton=" view magazines "
            directedlink="/news/catalog"
            target=""
            TextType = ""
          />
        </div>
      </div>
    
      <div className=" relative max-sm:pt-[3rem] ">
       
          <TextImageSection
            jsondataName={jsondataClubMembership}
            className="p-0"
          />
      
        <div
          className={`${styles.MembershipRedirectButton} md:absolute flex  md:justify-start justify-center `}
        >
          <RedirectButton
            redirectButton=" apply now"
            directedlink="https://memberdesq.sportstg.com/index.cfm?fuseaction=registration_1&RegistrationMode=2&SubscriptionTypeID=278&OrgID=2037"
            target="_blank"
            TextType = ""
          />
        </div>
      </div>

      <div className="2xl:pt-[3rem] 2xl:pb-[5rem] ">
        <div>
          <LeftHeaderContent
            lightTitleOne="the"
            darkTitle="Constitution"
            lightTitleTwo="of Jaguar car club Of Victoria"
            para="Our constitution is an essential set of guidelines that instruct each member on how to keep the community coordinated and ensure its longevity. It explains to both members and non-members what the Jaguar Car Club of Victoria is all about, and it describes our purpose, management procedures, club registers, and all the other aspects that serve as the foundation for our mission to fuel the passion."
          />
        </div>

        <div className="flex 2xl:ml-[14.5rem] xl:ml-[6rem] lg:ml-[3rem] md:ml-[3rem] md:justify-start justify-center pt-[2rem] pb-[2rem]">
          <RedirectButton
            redirectButton=" read more "
            directedlink="https://memberdesq.sportstg.com/index.cfm?fuseaction=login&OrgID=2037"
            target="_target"
            TextType = ""
          />
        </div>
      </div>

        {/* Advertisements */}
        {/* <Advertisments code="page#1" /> */}

        <Footer />
      </div>
  );
}
