import { React } from "react";
import Header from "../components/Header";
import BigFansComponent from "../components/BigFansComponent";
import FeaturedComponent from "../components/FeaturedComponent";
import Footer from "../components/Footer";

export const metadata = {
  // set screen tab title
  title: "NBCUCreative Fans",
  description: "",
};

export default function Fans() {
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
  return (
    <>
      <Header />
      <BigFansComponent enable={false} />
      <FeaturedComponent images={images} titles={titles} />
      <Footer />
    </>
  );
}
