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
  const images = [
    "https://d2mf4l4ba7pnlp.cloudfront.net/images/detailpages/blacklist-Tile.jpg",
    "https://d2mf4l4ba7pnlp.cloudfront.net/images/detailpages/buble-Tile.jpg",
    "https://d2mf4l4ba7pnlp.cloudfront.net/images/detailpages/oly-Tile.jpg",
    "https://d2mf4l4ba7pnlp.cloudfront.net/images/detailpages/2018WorldCup-Tile.jpg",
    "https://d2mf4l4ba7pnlp.cloudfront.net/images/detailpages/SuperBowl-Tile.jpg",
    "https://d2mf4l4ba7pnlp.cloudfront.net/images/detailpages/Rio-Tile.jpg",
    "https://d2mf4l4ba7pnlp.cloudfront.net/images/detailpages/Sochi-Tile.jpg",
    "https://d2mf4l4ba7pnlp.cloudfront.net/images/detailpages/London-Tile.jpg",
  ];
  const titles = [
    "The Blacklist",
    "Michael Buble's Christmas in the City",
    "PyeongChang Olympics",
    "2018 World Cup",
    "Super Bowl 50",
    "Rio Olympics",
    "Sochi Olympics",
    "London Olympics",
  ];
  
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
