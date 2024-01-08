import { React } from "react";
import Header from "../components/Header";
import EventfulComponent from "../components/EventfulComponent";
import FeaturedComponent from "../components/FeaturedComponent";
import Footer from "../components/Footer";

export const metadata = {
  // set screen tab title
  title: "NBCUCreative Eventful",
  description: "",
};

export default function Eventful() {
  const images = [
    "https://d2mf4l4ba7pnlp.cloudfront.net/images/detailpages/ThankYou-Tile.jpg",
    "https://d2mf4l4ba7pnlp.cloudfront.net/images/detailpages/pLive-Tile.jpg",
    "https://d2mf4l4ba7pnlp.cloudfront.net/images/detailpages/corporatesizzle-Tile.gif",
    "https://d2mf4l4ba7pnlp.cloudfront.net/images/detailpages/25YC-Tile.jpg",
    "https://d2mf4l4ba7pnlp.cloudfront.net/images/detailpages/MCWomen-Tile.jpg",
    "https://d2mf4l4ba7pnlp.cloudfront.net/images/detailpages/SNL-Tile.jpg",
    "https://d2mf4l4ba7pnlp.cloudfront.net/images/detailpages/MCM-Tile.jpg",
    "https://d2mf4l4ba7pnlp.cloudfront.net/images/detailpages/SteveBurke-Tile.jpg",
    "https://d2mf4l4ba7pnlp.cloudfront.net/images/detailpages/2017NBCSportsUpfront-Tile.jpg",
    "https://d2mf4l4ba7pnlp.cloudfront.net/images/detailpages/RioPress-Tile.jpg",
    "https://d2mf4l4ba7pnlp.cloudfront.net/images/detailpages/Mezzanine-Tile.jpg",
  ];
  const titles = [
    "NBCU Town Hall: A Thank You",
    "Peacock Live!",
    "NBCUniversal Sizzles",
    "25 Year Club Celebration",
    "Management Committee Women's Breakfast",
    "Saturday Night Live 40th Anniversary",
    "Management Committee Meeting",
    "Steve Burke Executive Retreat",
    "2017 NBC Sports Upfront",
    "Rio Olympics Press Conference",
    "Mezzanine Events",
  ];
  return (
    <>
      <Header />
      <EventfulComponent enable={false} />
      <FeaturedComponent images={images} titles={titles} />
      <Footer />
    </>
  );
}
