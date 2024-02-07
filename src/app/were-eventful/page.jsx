import { React } from "react";
import Header from "../components/Header";
import EventfulComponent from "../components/EventfulComponent";
import FeaturedComponent from "../components/FeaturedComponent";
import Footer from "../components/Footer";

import { convertFooterHTMLToReact } from "../utils/footerapi";
import { parseEventfulData } from "../utils/eventfulapi"
import { parseImageGridData } from "../utils/imagegridapi";

async function getData() {
  try {
    const res = await fetch(process.env.BASE_API_URL, { cache: "force-cache" });
    const data = await res.json();

    const listingPageRes = await fetch(`${process.env.BASE_API_URL_2}=listing_page`, { cache: "force-cache" });
    const listingPageData = await listingPageRes.json();

    const blockRes = await fetch (`${process.env.BASE_API_URL_2}=were-eventful`, { cache: "force-cache" });
    const blockData = await blockRes.json();
    const featuredArray = parseImageGridData(blockData.data.contents);

    const eventfulData = listingPageData.data[0];
    const updatedEventfulData = parseEventfulData(eventfulData);

    const FooterData = convertFooterHTMLToReact(data[1].data.footer);
    return [updatedEventfulData, featuredArray, FooterData];
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

export const metadata = {
  // set screen tab title
  title: "NBCUCreative Eventful",
  description: "",
};

export default async function Eventful() {
  const data = await getData();
  const EventfulComponentData = data[0];
  const featuredArray = data[1];
  const FooterData = data[2];
  return (
    <>
      <Header />
      <EventfulComponent props={EventfulComponentData} enable={false} />
      <FeaturedComponent props={featuredArray} />
      <Footer props={FooterData}/>
    </>
  );
}
