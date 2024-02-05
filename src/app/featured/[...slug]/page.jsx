import React from "react";
import Header from "@/app/components/Header";
import IndividualFeaturedComponent from "@/app/components/IndividualFeaturedComponent";
import VideoAudioComponent from "@/app/components/VideoAudioComponent";
import Related from "@/app/components/Related";
import Footer from "@/app/components/Footer";

import { convertFooterHTMLToReact } from "@/app/utils/footerapi";
import { parseImageandVideoData } from "@/app/utils/imagevideoapi";
import { parseIndividualFeatured } from "@/app/utils/individualfeaturedapi";

export default async function Featured( {params} ) {
    async function getData() {
        const res = await fetch(process.env.BASE_API_URL, { cache: "force-cache" })
        const data = await res.json()
        const FooterData = convertFooterHTMLToReact(data[1].data.footer)

        const apistring = params.slug[0] + "/" + params.slug[1];
        const res_2 = await fetch(`${process.env.BASE_API_URL_2}=${apistring}`, { cache: "force-cache" })
        const data_2 = await res_2.json()
        const IndividualData = parseIndividualFeatured(data_2.data)
        const ImageVideoData = parseImageandVideoData(data_2.data.detailDescription)
        return [IndividualData, ImageVideoData, FooterData]
    }

    const data = await getData()
    const IndividualData = data[0]
    const ImageVideoData = data[1]
    const FooterData = data[2]

    return (
        <>
        <Header />
        <IndividualFeaturedComponent props={IndividualData}/>
        <VideoAudioComponent props={ImageVideoData}/>
        <Related props={IndividualData}/>
        <Footer props={FooterData}/>
        </>
    )
}