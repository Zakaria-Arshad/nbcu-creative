import { React } from "react";
import Header from "../components/Header";
import BigFansComponent from "../components/BigFansComponent";
import FeaturedComponent from "../components/FeaturedComponent";
import Footer from "../components/Footer";

import { parseBigFansData } from "../utils/bigfansapi";
import { convertFooterHTMLToReact } from "../utils/footerapi";
import { parseImageGridData } from "../utils/imagegridapi";


async function getData() {
  try {
    const res = await fetch(process.env.BASE_API_URL, { cache: "force-cache" });
    const data = await res.json();

    const listingPageRes = await fetch(`${process.env.BASE_API_URL_2}=listing_page`, { cache: "force-cache" });
    const listingPageData = await listingPageRes.json();

    const blockRes = await fetch (`${process.env.BASE_API_URL_2}=were-big-fans`, { cache: "force-cache" });
    const blockData = await blockRes.json();
    const featuredArray = parseImageGridData(blockData.data.contents);

    const bigfansData = listingPageData.data[3];
    const updatedBigFansData = parseBigFansData(bigfansData);

    const FooterData = convertFooterHTMLToReact(data[1].data.footer);
    return [updatedBigFansData, featuredArray, FooterData];
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

export const metadata = {
  // set screen tab title
  title: "NBCUCreative Fans",
  description: "",
};

export default async function Fans() {
  const data = await getData();
  const bigfansData = data[0];
  const featuredArray = data[1];
  const FooterData = data[2];

  return (
    <>
      <Header />
      <BigFansComponent props={bigfansData} enable={false} />
      <FeaturedComponent props={featuredArray} />
      <Footer props={FooterData}/>
    </>
  );
}
