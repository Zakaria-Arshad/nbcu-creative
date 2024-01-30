import { React } from "react";
import Header from "../components/Header";
import ThinkersComponent from "../components/ThinkersComponent";
import FeaturedComponent from "../components/FeaturedComponent";
import Footer from "../components/Footer";

import { parseThinkersData } from "../utils/thinkersapi";
import { convertFooterHTMLToReact } from "../utils/footerapi";

async function getData() { // get all images
  const res = await fetch(process.env.BASE_API_URL, { cache: "force-cache" })
  const listingPageRes = await fetch(process.env.BASE_API_URL_2, { cache: "force-cache" })
  const data = await res.json()
  const listingPageData = await listingPageRes.json()
  const thinkersData = listingPageData.data[1]
  const updatedThinkersData = parseThinkersData(thinkersData);
  const FooterData = convertFooterHTMLToReact(data[1].data.footer)

  return [updatedThinkersData, FooterData];
}

export const metadata = {
  // set screen tab title
  title: "NBCUCreative Thinkers",
  description: "",
};

export default async function Thinkers() {
  const images = [
    "https://d2mf4l4ba7pnlp.cloudfront.net/images/detailpages/Symphony-Tile.jpg",
    "https://d2mf4l4ba7pnlp.cloudfront.net/images/detailpages/OneWorld-Tile.jpg",
    "https://d2mf4l4ba7pnlp.cloudfront.net/images/detailpages/TMYSH-Tile.png",
    "https://d2mf4l4ba7pnlp.cloudfront.net/images/detailpages/DEI-Tile.jpg",
    "https://d2mf4l4ba7pnlp.cloudfront.net/images/detailpages/MediaVillage-Tile.png",
    "https://d2mf4l4ba7pnlp.cloudfront.net/images/detailpages/TheMoreYouKnow-Tile.jpg",
    "https://d2mf4l4ba7pnlp.cloudfront.net/images/detailpages/HereYouCan-Tile.jpg",
    "https://d2mf4l4ba7pnlp.cloudfront.net/images/detailpages/TalentLab-Tile.jpg",
    "https://d2mf4l4ba7pnlp.cloudfront.net/images/detailpages/DigitalLab-Tile.jpg",
    "https://d2mf4l4ba7pnlp.cloudfront.net/images/detailpages/DigitalEnterprises-Tile.jpg",
    "https://d2mf4l4ba7pnlp.cloudfront.net/images/detailpages/TOPLINE-Tile.jpg",
    "https://d2mf4l4ba7pnlp.cloudfront.net/images/detailpages/THX-Tile.jpg",
    "https://d2mf4l4ba7pnlp.cloudfront.net/images/detailpages/theShop-Tile.jpg",
    "https://d2mf4l4ba7pnlp.cloudfront.net/images/detailpages/TheTour-Tile.jpg",
    "https://d2mf4l4ba7pnlp.cloudfront.net/images/detailpages/InnovationLounge-Tile.jpg",
    "https://d2mf4l4ba7pnlp.cloudfront.net/images/detailpages/DayOne-Tile.jpg",
    "https://d2mf4l4ba7pnlp.cloudfront.net/images/detailpages/NBCUNow-Tile.jpg",
  ];
  const titles = [
    "Symphony",
    "One World Together at Home",
    "The More You See Her",
    "Diveristy, Equity & Inclusion",
    "Media Village",
    "The More You Know",
    "Here You Can",
    "NBCUniversal Talent Lab",
    "NBCUDigital Lab",
    "NBCUniversal Digital Enterprises",
    "Topline Newsletter",
    "Thx",
    "The Shop at NBC Studios",
    "The Tour at NBC Studios",
    "Innovation Lounge",
    "Day One",
    "NBCU Now",
  ];

  const data = await getData()
  const ThinkersComponentData = data[0];
  const FooterData = data[1];

  return (
    <>
      <Header />
      <ThinkersComponent props={ThinkersComponentData} enable={false} />
      <FeaturedComponent images={images} titles={titles} />
      <Footer props={FooterData}/>
    </>
  );
}
