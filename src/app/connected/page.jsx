import { React } from "react";
import Header from "../components/Header";
import ConnectedComponent from "../components/ConnectedComponent";
import FeaturedComponent from "../components/FeaturedComponent";
import Footer from "../components/Footer";

export default function Connected() {
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
  return (
    <>
      <Header />
      <ConnectedComponent enable={false} />
      <FeaturedComponent images={images} titles={titles} />
      <Footer />
    </>
  );
}
