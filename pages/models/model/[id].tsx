import Image from "next/image";
import React, { useEffect, useState } from "react";
import ImageWithDetails from "../../../components/CommonComponents/cardSections/ImageWithDetailsCard/ImageWithDetails";
import Footer from "../../../components/CommonComponents/footer/Footer";
import Header from "../../../components/CommonComponents/header/header";
import HeaderSwitch from "../../../components/CommonComponents/headerswitch/HeaderSwitch";
import WhiteContentCard from "../../../components/InnerPageComponents/WhiteContentCard/WhiteContentCard";
import FristWordBoldTitle from "../../../components/TechTips/FristwordBoldTitle";
import { useRouter } from 'next/router'
import Carmodels from "../../api/carmodel";
import MetaTags from "../../../components/CommonComponents/meta/MetaTags";
import BreadCrumb from "../../../components/CommonComponents/breadcrumb/BreadCrumb";
import PlaceHolder from "../../../helper/placeholder";


export default function IndividualModel() {
    const router = useRouter()
    const [model, setModel] = useState<{ attributes: any }>()
    const [relatedModels, setRelatedModels] = useState<{ attrbutes:any }>()
    const [loading, setLoading] = useState(false)
    const { id } = router.query

    useEffect(() => {
        get()
    }, [id])

    const myLoader = (params: any) => {
        const { src } = params
        return `${src}`
        // return `${process.env.NEXT_PUBLIC_END_POINT}${src}`
    }

    const get = async () => {
        if (!id) return
        setLoading(true)
        const newModel = await Carmodels.get.one(id)
        const relatedData = await Carmodels.get.relatedModels(id, 3)
        setModel(newModel)
        setRelatedModels(relatedData)
        setLoading(false)
    }

    const breadCrumbDataArray = [{'name':"Home",'link':"/"},{'name':"Models",'link':"/models"},{'name':model?.attributes.name,'link':"null"}];

    return (
        <div className='bg-primary'>
            <Header />

            <MetaTags 
                metaTitle={`${model?.attributes.name} | Jaguar Car Club Of Victoria `}
                metaDescription={(model?.attributes.description)}
                image={model?.attributes.image.data && model?.attributes.image.data.attributes.url}
                metaKeyword={`${model?.attributes.name} | Jaguar Car Club Of Victoria `}
            />

            <div className="pt-[5rem]">
                {model && <WhiteContentCard>

                    {
                        model.attributes.image.data ? 
                        <Image loader={myLoader} src={model.attributes.image.data.attributes.url} alt={model?.attributes.name} height={0} width={0} layout={`responsive`} />
                        : PlaceHolder.image.cover('JCCV', 'w-full h-[400px] object-cover')
                    }

                    <div className="py-5">
                        <BreadCrumb links={breadCrumbDataArray}/>
                    </div>

                    <FristWordBoldTitle boldtext={model.attributes.name}
                        normalText="" />
                    <HeaderSwitch text={model.attributes.year} type="secondary" />
                    <p>{model.attributes.description}</p>

                </WhiteContentCard>}

            </div>
            <div className="container mx-auto max-sm:px-3 pb-7 pt-16">
                <FristWordBoldTitle boldtext=""
                    normalText="Related models" />

            </div>
           
            <div className="container mx-auto max-sm:px-3 gap-2 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 ">
                {Array.isArray(relatedModels) && relatedModels.map((classModel: any, index: number) => <ImageWithDetails
                    key={index}
                    image={classModel.attributes.image.data ? classModel.attributes.image.data.attributes.url : false}
                    title={`${classModel.attributes.class.data.attributes.title} / ${classModel.attributes.name}`}
                    redirectLink={`/models/model/${classModel.id}`}
                    dateAvailability="visible"
                    description={classModel.attributes.description}
                    date={''}
                    onHoverExtendFromMiddleLine="extendFromMiddleLine"
                    redirectBtnText={'Read More'}
                    imageHeight = {'fixedHeight'}
                />)}

            </div>
            <div className="pt-[5rem]">
            <Footer />
            </div>
           


        </div>
    )
}