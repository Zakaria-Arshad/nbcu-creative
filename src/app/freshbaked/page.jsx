import { React } from "react";
import Header from "../components/Header";
import FreshBakedComponent from "../components/FreshBakedComponent";
import FeaturedComponent from "../components/FeaturedComponent";
import Footer from "../components/Footer";

export default function FreshBaked() {
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
  return (
    <>
      <Header />
      <FreshBakedComponent />
      <FeaturedComponent images={images} titles={titles} />
      <Footer />
    </>
  );
}
