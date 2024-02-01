import React from "react";
import Header from "@/app/components/Header";
import IndividualFeaturedComponent from "@/app/components/IndividualFeaturedComponent";
import Related from "@/app/components/Related";
import Footer from "@/app/components/Footer";

import { convertFooterHTMLToReact } from "@/app/utils/footerapi";
import { parseIndividualFeatured } from "@/app/utils/individualfeaturedapi";

export default async function Featured( {params} ) {
    async function getData() {
        const res = await fetch(process.env.BASE_API_URL, { cache: "force-cache" })
        const data = await res.json()
        const FooterData = convertFooterHTMLToReact(data[1].data.footer)

        const apistring = params.slug[0] + "/" + params.slug[1];
        const res_2 = await fetch(`${process.env.BASE_API_URL_2}=${apistring}`, { cache: "force-cache" })
        const data_2 = await res_2.json()
        console.log(data_2.data.related)
        const IndividualData = parseIndividualFeatured(data_2.data)
        console.log(IndividualData)
        return [IndividualData, FooterData]
    }

    const data = await getData()
    const IndividualData = data[0]
    const FooterData = data[1]

    return (
        <>
        <Header />
        <IndividualFeaturedComponent props={IndividualData}/>
        <Related props={IndividualData}/>
        <Footer props={FooterData}/>
        </>
    )
}