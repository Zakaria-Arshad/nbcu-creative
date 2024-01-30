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
import { parseEventfulData } from "./utils/eventfulapi"
import { parseThinkersData } from "./utils/thinkersapi";
import { parseConnectedData } from "./utils/connectedapi";
import { parseBigFansData } from "./utils/bigfansapi";

async function getData() { // get all images
  const res = await fetch(process.env.BASE_API_URL, { cache: "force-cache" })
  const data = await res.json()

  const listingPageRes = await fetch(process.env.BASE_API_URL_2, { cache: "force-cache" })
  const listingPageData = await listingPageRes.json()

  const FirstComponentData = convertHeaderHTMLToReact(data[1].data.header) 

  const eventfulData = listingPageData.data[0]
  const updatedEventfulData = parseEventfulData(eventfulData);

  const thinkersData = listingPageData.data[1]
  const updatedThinkersData = parseThinkersData(thinkersData);

  const connectedData = listingPageData.data[2]
  const updatedConnectedData = parseConnectedData(connectedData);

  const bigfansData = listingPageData.data[3]
  const updatedBigFansData = parseBigFansData(bigfansData);

  const FooterData = convertFooterHTMLToReact(data[1].data.footer)
  return [FirstComponentData, updatedEventfulData, updatedThinkersData, updatedConnectedData, updatedBigFansData, FooterData];
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
  const ConnectedComponentData = data[3];
  const BigFansComponentData = data[4];
  const FooterData = data[5];

  return (
    <>
      <Header />
      <FirstComponent props={FirstComponentData}/>
      <EventfulComponent props={EventfulComponentData} enable={true} />
      <LoveIdeasMakeThings props={EventfulComponentData.homeDescription}/>
      <ThinkersComponent props={ThinkersComponentData} enable={true} />
      <WeHelpBusinessesGrow props={ThinkersComponentData.homeDescription}/>
      <ConnectedComponent props={ConnectedComponentData} enable={true} />
      <OurPartners props={ConnectedComponentData.homeDescription} />
      <BigFansComponent props={BigFansComponentData} enable={true} />
      <NoYadaYada props={BigFansComponentData.homeDescription}/>
      <Footer props={FooterData}/>
    </>
  );
}
