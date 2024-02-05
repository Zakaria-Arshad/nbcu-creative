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
  const images = [
    "https://d2mf4l4ba7pnlp.cloudfront.net/images/detailpages/StayHealthy-Tile.jpg",
    "https://d2mf4l4ba7pnlp.cloudfront.net/images/detailpages/MeetTheMoment-Tile.jpg",
    "https://d2mf4l4ba7pnlp.cloudfront.net/images/detailpages/GoalModels-Tile.jpg",
    "https://d2mf4l4ba7pnlp.cloudfront.net/images/detailpages/ComcastNBCUnites-Tile.jpg",
    "https://d2mf4l4ba7pnlp.cloudfront.net/images/detailpages/PhishDay-Tile.jpg",
    "https://d2mf4l4ba7pnlp.cloudfront.net/images/detailpages/TheSecretLifeOfPets-Tile.jpg",
    "https://d2mf4l4ba7pnlp.cloudfront.net/images/detailpages/Animation-Tile.jpg",
    "https://d2mf4l4ba7pnlp.cloudfront.net/images/detailpages/TODASTWD-Tile.jpg",
    "https://d2mf4l4ba7pnlp.cloudfront.net/images/detailpages/BYPTWD-Tile.jpg",
  ];
  const titles = [
    "Stay Healthy Work Safe",
    "Meet the Moment",
    "#GoalModels",
    "Comcast NBCUnites",
    "Phish Day",
    "The Secret Life of Pets",
    "Animation",
    "Take Our Daughters & Sons To Work Day",
    "Bring Your Parents To Work Day",
  ];
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
