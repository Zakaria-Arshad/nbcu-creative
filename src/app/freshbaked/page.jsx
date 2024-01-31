import { React } from "react";
import Header from "../components/Header";
import FreshBakedComponent from "../components/FreshBakedComponent";
import FeaturedComponent from "../components/FeaturedComponent";
import Footer from "../components/Footer";
import { convertFooterHTMLToReact } from "../utils/footerapi";
import { parseImageGridData } from "../utils/imagegridapi";

async function getData() { // get all images
  const res = await fetch(process.env.BASE_API_URL, { cache: "force-cache" })
  const data = await res.json()

  const blockRes = await fetch (`${process.env.BASE_API_URL_2}=fresh-baked`, { cache: "force-cache" })
  const blockData = await blockRes.json()
  const featuredArray = parseImageGridData(blockData.data.contents)

  const FooterData = convertFooterHTMLToReact(data[1].data.footer)
  return [featuredArray, FooterData];
}

export const metadata = {
  // set screen tab title
  title: "NBCUCreative FreshBaked",
  description: "",
};


export default async function FreshBaked() {
  // would get these from API
  const images = [
    "https://d2mf4l4ba7pnlp.cloudfront.net/images/detailpages/blacklist-Tile.jpg",
    "https://d2mf4l4ba7pnlp.cloudfront.net/images/detailpages/treeLighting-Tile.jpg",
    "https://d2mf4l4ba7pnlp.cloudfront.net/images/detailpages/Symphony-Tile.jpg",
    "https://d2mf4l4ba7pnlp.cloudfront.net/images/detailpages/ThankYou-Tile.jpg",
  ];
  const titles = [
    "The Blacklist",
    "Christmas in Rockefeller Center",
    "Symphony",
    "Jeff Shell Town Hall: A Thank You",
  ];

  const data = await getData();
  const featuredArray = data[0];
  const FooterData = data[1];
  
  return (
    <>
      <Header />
      <FreshBakedComponent />
      <FeaturedComponent props={featuredArray} />
      <Footer props={FooterData}/>
    </>
  );
}
