import { React } from "react";
import Header from "../components/Header";
import ThinkersComponent from "../components/ThinkersComponent";
import FeaturedComponent from "../components/FeaturedComponent";
import Footer from "../components/Footer";

import { parseThinkersData } from "../utils/thinkersapi";
import { convertFooterHTMLToReact } from "../utils/footerapi";
import { parseImageGridData } from "../utils/imagegridapi";


async function getData() {
  try {
    const res = await fetch(process.env.BASE_API_URL, { cache: "force-cache" });
    const data = await res.json();

    const listingPageRes = await fetch(`${process.env.BASE_API_URL_2}=listing_page`, { cache: "force-cache" });
    const listingPageData = await listingPageRes.json();

    const blockRes = await fetch (`${process.env.BASE_API_URL_2}=were-thinkers-who-do`, { cache: "force-cache" });
    const blockData = await blockRes.json();
    const featuredArray = parseImageGridData(blockData.data.contents);

    const thinkersData = listingPageData.data[1];
    const updatedThinkersData = parseThinkersData(thinkersData);

    const FooterData = convertFooterHTMLToReact(data[1].data.footer);
    return [updatedThinkersData, featuredArray, FooterData];
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

export const metadata = {
  // set screen tab title
  title: "NBCUCreative Thinkers",
  description: "",
};

export default async function Thinkers() {
  const data = await getData()
  const ThinkersComponentData = data[0];
  const featuredArray = data[1];
  const FooterData = data[2];

  return (
    <>
      <Header />
      <ThinkersComponent props={ThinkersComponentData} enable={false} />
      <FeaturedComponent props={featuredArray} />
      <Footer props={FooterData}/>
    </>
  );
}
