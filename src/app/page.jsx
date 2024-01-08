import styles from "./page.module.css";
import Header from "./components/Header";
import FirstComponent from "./components/FirstComponent";
import EventfulComponent from "./components/EventfulComponent";
import LoveIdeasMakeThings from "./components/LoveIdeasMakeThings";
import ThinkersComponent from "./components/ThinkersComponent";
import WeHelpBusinessesGrow from "./components/WeHelpBusinessesGrow";
import ConnectedComponent from "./components/ConnectedComponent";
import OurPartners from "./components/OurPartners";
import BigFansComponent from "./components/BigFansComponent";
import NoYadaYada from "./components/NoYadaYada";
import Footer from "./components/Footer";

import { React } from "react";

// async function getData() { // get all images
//   const res = await fetch(`${process.env.BASE_API_URL}content?_format=json&alias=listing_page`)
//   const data = await res.json()
//   console.log(data);
//   return data;
// }

export const metadata = {
  // set screen tab title
  title: "NBCUCreative",
  description: "",
};

// Home page of website
export default async function Home() {
  // const data = await getData();
  // console.log(data)

  return (
    <>
      <Header />
      <FirstComponent />
      <EventfulComponent enable={true} />
      <LoveIdeasMakeThings />
      <ThinkersComponent enable={true} />
      <WeHelpBusinessesGrow />
      <ConnectedComponent enable={true} />
      <OurPartners />
      <BigFansComponent enable={true} />
      <NoYadaYada />
      <Footer />
    </>
  );
}
