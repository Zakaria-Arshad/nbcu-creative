'use client'

import styles from './page.module.css'
import Header from './components/Header'
import FirstComponent from './components/FirstComponent'
import EventfulComponent from './components/EventfulComponent'
import LoveIdeasMakeThings from './components/LoveIdeasMakeThings'
import ThinkersComponent from './components/ThinkersComponent'
import WeHelpBusinessesGrow from './components/WeHelpBusinessesGrow'
import ConnectedComponent from './components/ConnectedComponent'
import OurPartners from './components/OurPartners'
import BigFansComponent from './components/BigFansComponent'
import NoYadaYada from './components/NoYadaYada'
import Footer from './components/Footer'

import { React, useRef } from 'react'
export default function Home() {
  const EventfulComponentRef = useRef(null)

  function scrollToComponent() {
    EventfulComponentRef.current?.scrollIntoView({ behavior: 'smooth' }); // safe for null
  }

  return (
    <>
    <Header />
    <FirstComponent onImageClick={scrollToComponent}/>
    <EventfulComponent ref={EventfulComponentRef}/>
    <LoveIdeasMakeThings />
    <ThinkersComponent />
    <WeHelpBusinessesGrow />
    <ConnectedComponent />
    <OurPartners />
    <BigFansComponent />
    <NoYadaYada />  
    <Footer />
    </>
  )
}
