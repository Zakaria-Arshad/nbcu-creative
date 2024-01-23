import { React } from "react";
import Header from "../components/Header";
import ThinkersComponent from "../components/ThinkersComponent";
import FeaturedComponent from "../components/FeaturedComponent";
import Footer from "../components/Footer";
import { parseFooter } from '../utils/api';

async function getData() { // get all images
  const res = await fetch(process.env.BASE_API_URL, { cache: "force-cache" })
  const data = await res.json()
  const footerData = parseFooter(data[1].data.footer);
  return footerData;
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

  const footerData = await getData();

  return (
    <>
      <Header />
      <ThinkersComponent enable={false} />
      <FeaturedComponent images={images} titles={titles} />
      <Footer apiData={footerData}/>
    </>
  );
}
