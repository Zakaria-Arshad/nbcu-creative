import { React } from 'react';
import Header from '../components/Header'
import EventfulComponent from '../components/EventfulComponent';
import Footer from '../components/Footer'

export default function Eventful() {
    return (
        <>
        <Header />
        <EventfulComponent enable={false}/>
        <Footer />  
        </>
    )
}