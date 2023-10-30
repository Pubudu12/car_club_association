import React, { useEffect, useState } from "react";
import ClassifiedCard from "../../components/CommonComponents/cardSections/classifiedCard/ClassifiedCard";
import Footer from "../../components/CommonComponents/footer/Footer";
import Header from "../../components/CommonComponents/header/header";
import MetaTags from "../../components/CommonComponents/meta/MetaTags";
import Pagination from "../../components/CommonComponents/pagination/pagination";
import SelectableButon from "../../components/CommonComponents/selectableButton/selectableButton";
import Classified from "../api/classified"
import BreadCrumb from "../../components/CommonComponents/breadcrumb/BreadCrumb";
import Advertisments from "../../components/CommonComponents/sliders/advertisments/Advertisments";
import CtaBanner from "../../components/CommonComponents/banners/ctaBanner/CtaBanner";

export default function Classifieds() {
    const [rawData, setRawData] = useState([])
    const [classifieds, setClassifieds] = useState([])
    let [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemPerPage] = useState(10);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItem = classifieds.slice(indexOfFirstItem, indexOfLastItem);

    useEffect(() => {
        get()
    }, [""])

    const breadCrumbDataArray = [{ 'name': "Home", 'link': "/" }, { 'name': "Classifieds", 'link': "null" }];

    const paginate = (pageNumber: any) => setCurrentPage(pageNumber);

    const get = async () => {
        const newClassifieds = await Classified.get.all()
        setClassifieds(newClassifieds)
        setRawData(newClassifieds)
    }

    const changeCount = (number: any) => {
        setItemPerPage(number)
    }

    const indicate = (side: any) => {
        if (side === "right") {
            if (currentPage === Math.ceil(classifieds.length / itemsPerPage)) return
            const pageCount = currentPage += 1
            setCurrentPage(pageCount)
        } else {
            const pageCount = currentPage -= 1
            if (pageCount <= 1) return
            setCurrentPage(pageCount)
        }
    }

    const filter = {
        all() {

            setClassifieds(rawData)
        },
        state(state: any) {

            const filtered = rawData.filter((d: any) => d.attributes.sale_or_wanted_state === state)
            setClassifieds(filtered)
        },
        category(category: any) {

            const filtered = rawData.filter((d: any) => d.attributes.category === category)
            setClassifieds(filtered)
        }
    }

    return (

        <div className="bg-primary">
            <MetaTags
                metaTitle="Jaguar Market - Classified For Cars and Parts!"
                metaDescription="Find your dream Jaguar or list your own in the ultimate marketplace for Jaguar enthusiasts."
                image=""
                metaKeyword="Jaguar Car Club Of Victoria"
            />

            <Header />

            <div className="container mx-auto pt-top text-center">
                <h1 className="uppercase">
                    Classifieds
                </h1>
            </div>

            <div className='flex justify-center relative top-[-10px] py-[2rem] '>
                <BreadCrumb links={breadCrumbDataArray} />
            </div>

            <div className="container mx-auto">
                <div className="pb-11">
                    <SelectableButon filter={filter} changeCount={changeCount} />
                </div>
            </div>


            <div className="container mx-auto pb-[5rem]">
                <div className="grid grid-cols-3 gap-5 max-sm:grid-cols-1">
                    {classifieds.length > 0 && currentItem.map((classified: any) => <ClassifiedCard key={classified.id}
                        image={classified.attributes.image.data ? classified.attributes.image.data.attributes.url : false}
                        title={classified.attributes.title}
                        redirectLink="#"
                        dateAvailability={''}
                        price={classified.attributes.price}
                        contactPerson={classified.attributes.contact_person}
                        phone={classified.attributes.phone}
                        date=""
                        description={classified.attributes.description}
                        onHoverExtendFromMiddleLine=""
                        status={classified.attributes.sale_or_wanted_state}
                    />)}
                </div>

                <Pagination currentPage={currentPage}
                    itemsPerPage={itemsPerPage}
                    totalItems={classifieds.length}
                    paginate={paginate} indicate={indicate} firstIndex={indexOfFirstItem} lastIndex={indexOfLastItem} />

            </div>

            {/* Advertisements */}
            {/* <Advertisments code="page#1" /> */}

            <div>
                <CtaBanner
                    bannerTextDark=' Become a member of our'
                    bannerTextLight='community'
                    ctabannerlaptop="/images/sportingPage/sportingCTADesktop.webp"
                    ctabannerMobile="/images/sportingPage/sportingCTAMobile.webp"
                    imageClass="bannerOuterCarDarkGreen"
                />
            </div>

            <div>
                <Footer />
            </div>
        </div>
    );
}
