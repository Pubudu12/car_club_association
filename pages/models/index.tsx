import React, { useEffect, useState } from 'react';
import HeroBanner from '../../components/CommonComponents/banners/herobanner/HeroBanner';
import ImageWithDetails from '../../components/CommonComponents/cardSections/ImageWithDetailsCard/ImageWithDetails';
import Footer from '../../components/CommonComponents/footer/Footer';
import Header from '../../components/CommonComponents/header/header';
import MetaTags from '../../components/CommonComponents/meta/MetaTags';
import styles from './models.module.scss';
import CarModel from '../api/carmodel';
// import Select from 'react-select'
import BreadCrumb from '../../components/CommonComponents/breadcrumb/BreadCrumb';


function Model() {
    const breadCrumbDataArray = [{ 'name': "Home", 'link': "/" }, { 'name': "models", 'link': "null" }];
    const [rawData, setRawData] = useState<any[]>([])
    const [models, setModels] = useState<any[]>([])
    const [yearOptions, setYearOptions] = useState<any[]>([])
    const [classOptions, setClassOptions] = useState<any[]>([])

    useEffect(() => {
        get()
    }, [""])

    const get = async () => {
        const newData = await CarModel.get.all(100)

        console.log("new data ------------",newData)

        // set year and class options
        const years: any = []
        const classes: any = []

        years.push({ value: 'all', label: 'All' })
        classes.push({ value: 'all', label: 'All' })

        // newData.forEach(((data: any) => {
        //     let index;
        //     const yearOption = { value: data.attributes.year, label: data.attributes.year }
        //     index = years.findIndex((year: any) => year.value === data.attributes.year)
        //     index < 0 && years.push(yearOption)

        //     const classOption = { value: data.attributes.class.data.attributes.title, label: data.attributes.class.data.attributes.title }
        //     index = classes.findIndex((option: any) => option.value === data.attributes.class.data.attributes.title)
        //     index < 0 && classes.push(classOption)

        // }))

        setModels(newData)
        // setRawData(newData)
        // setYearOptions(years)
        // setClassOptions(classes)
    }

    // Removed the filter - according to the client request
    // const filter = {
    //     year(year: any) {
    //         const filtered = rawData.filter((data: any) => data.attributes.year === year)
    //         year === 'all' ? setModels(rawData) : setModels(filtered)
    //     },
    //     classTitle(title: any) {
    //         const filtered = rawData.filter((data: any) => data.attributes.class.data.attributes.title === title)
    //         title === 'all' ? setModels(rawData) : setModels(filtered)
    //     }
    // }

    return (
        <div className={`${styles.parallex}`}>
            <MetaTags
                metaTitle="Our Iconic Models in One Place!"
                metaDescription="Unleash the power of the iconic Jaguar models with sleek design and unparalleled performance."
                image=""
                metaKeyword="Jaguar Car Club Of Victoria"
            />

            <Header />

            <HeroBanner
                heroImage="/images/modelsPage/mainbanner.webp"
                darkHeadingOne="Models"
                darkHeading=""
                lightHeading=""
                heroImageMobile="/images/modelsPage/mainbannerMobile.webp"
            />
            <div className='flex justify-center relative top-[-10px] pb-7'>
                <BreadCrumb links={breadCrumbDataArray} />
            </div>

            <div id='models'>
                <div className={`container mx-auto max-sm:px-3`}>

                    {/* Start filters */}
                    {/* <div className='grid grid-cols-3 gap-5 pb-8 uppercase max-sm:grid-cols-2'>
                        <div>
                            <Select options={classOptions} onChange={(e: any) => filter.classTitle(e.value)} placeholder={'Select Class'}/>
                        </div>
                        <div>
                            <Select options={yearOptions} onChange={(e: any) => filter.year(e.value)} placeholder={'Select Year'}/>
                        </div>
                    </div> */}

                    {/* Start card component  */}
                    <div className={`grid max-sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5`}>
                        {models.map((model: any) => <ImageWithDetails key={model.id}
                            image={model.attributes.image.data ? model.attributes.image.data.attributes.url : false}
                            title={model.attributes.name}
                            redirectLink={`/models/model/${model.id}`}
                            dateAvailability=""
                            date={""}
                            description={model.attributes.description}
                            onHoverExtendFromMiddleLine="extendFromMiddleLine"
                            redirectBtnText={'explore'}
                            imageHeight={'fixedHeight'}
                        />)}
                    </div>
                </div>
            </div>

            <div className='pt-12'>
                <Footer />
            </div>

        </div>
    )
}

export default Model