import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import News from "../../api/news";
import ClubSingle from "../../../components/NewsAndArticles/ClubNews/ClubSingle";


export default function IndividualNews() {
    const router = useRouter()
    const { slug_url: slugUrl, category } = router.query
    const [news, setNews] = useState([])
    const [newses, setNewses] = useState([])


    useEffect(() => {
        if (slugUrl) get()
    }, [slugUrl])

    const get = async () => {
        if (category === "club-news") {
            const newNews = await News.club.get.single(slugUrl)
            const newNewses = await News.club.get.all()
            setNews(newNews)
            setNewses(newNewses)
        } else if (category === "catalog") {
            const newNews = await News.catalogs.get.single(slugUrl)
            const newNewses = await News.catalogs.get.all()
            setNews(newNews)
            setNewses(newNewses)
        } else if (category === "restoration") {
            const newNews = await News.restorastion.get.single(slugUrl)
            const newNewses = await News.restorastion.get.all()
            setNews(newNews)
            setNewses(newNewses)
        } else if (category === "tech-tips") {
            const newNews = await News.techTip.get.single(slugUrl)
            const newNewses = await News.techTip.get.all()
            setNews(newNews)
            setNewses(newNewses)
        }
    }

    if (news.length > 0) return <ClubSingle news={news[0]} newses={newses} category={category} slug={slugUrl}/>
}