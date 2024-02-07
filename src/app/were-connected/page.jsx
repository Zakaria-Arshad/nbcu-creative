import { React } from "react";
import Header from "../components/Header";
import ConnectedComponent from "../components/ConnectedComponent";
import FeaturedComponent from "../components/FeaturedComponent";
import Footer from "../components/Footer";

import { parseConnectedData } from "../utils/connectedapi";
import { convertFooterHTMLToReact } from "../utils/footerapi";
import { parseImageGridData } from "../utils/imagegridapi";


async function getData() {
  try {
    const res = await fetch(process.env.BASE_API_URL, { cache: "force-cache" });
    const data = await res.json();

    const listingPageRes = await fetch(`${process.env.BASE_API_URL_2}=listing_page`, { cache: "force-cache" });
    const listingPageData = await listingPageRes.json();

    const blockRes = await fetch (`${process.env.BASE_API_URL_2}=were-connected`, { cache: "force-cache" });
    const blockData = await blockRes.json();
    const featuredArray = parseImageGridData(blockData.data.contents);

    const connectedData = listingPageData.data[2];
    const updatedConnectedData = parseConnectedData(connectedData);

    const FooterData = convertFooterHTMLToReact(data[1].data.footer);
    return [updatedConnectedData, featuredArray, FooterData];
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

export const metadata = {
  // set screen tab title
  title: "NBCUCreative Connected",
  description: "",
};

export default async function Connected() {
  const data = await getData();
  const ConnectedComponentData = data[0];
  const featuredArray = data[1];
  const FooterData = data[2];
  
  return (
    <>
      <Header />
      <ConnectedComponent props={ConnectedComponentData} enable={false} />
      <FeaturedComponent props={featuredArray} />
      <Footer props={FooterData}/>
    </>
  );
}
