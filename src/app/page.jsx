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
import { convertHeaderHTMLToReact } from './utils/firstcomponentapi';
import { convertFooterHTMLToReact } from "./utils/footerapi";
import { parseData } from "./utils/eventfulapi"
import { parseThinkersData } from "./utils/thinkersapi";

async function getData() { // get all images
  const res = await fetch(process.env.BASE_API_URL, { cache: "force-cache" })
  const listingPageRes = await fetch(process.env.BASE_API_URL_2, { cache: "force-cache" })
  const data = await res.json()
  const listingPageData = await listingPageRes.json()
  const eventfulData = listingPageData.data[0]
  const updatedEventfulData = parseData(eventfulData);

  const thinkersData = listingPageData.data[1]
  const updatedThinkersData = parseThinkersData(thinkersData);
  const FirstComponentData = convertHeaderHTMLToReact(data[1].data.header) 
  const FooterData = convertFooterHTMLToReact(data[1].data.footer)

  return [FirstComponentData, updatedEventfulData, updatedThinkersData, FooterData];
}

export const metadata = {
  // set screen tab title
  title: "NBCUCreative",
  description: "",
};

// Home page of website
export default async function Home() {
  const data = await getData();
  const FirstComponentData = data[0];
  const EventfulComponentData = data[1];
  const ThinkersComponentData = data[2];
  const FooterData = data[3];

  return (
    <>
      <Header />
      <FirstComponent props={FirstComponentData}/>
      <EventfulComponent props={EventfulComponentData} enable={true} />
      <LoveIdeasMakeThings props={EventfulComponentData.homeDescription}/>
      <ThinkersComponent props={ThinkersComponentData} enable={true} />
      <WeHelpBusinessesGrow props={ThinkersComponentData.homeDescription}/>
      <ConnectedComponent enable={true} />
      <OurPartners />
      <BigFansComponent enable={true} />
      <NoYadaYada />
      <Footer props={FooterData}/>
    </>
  );
}
