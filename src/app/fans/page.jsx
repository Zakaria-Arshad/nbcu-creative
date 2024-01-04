import { React } from 'react';
import Header from '../components/Header'
import BigFansComponent from '../components/BigFansComponent';
import Footer from '../components/Footer'

export default function Fans() {
    return (
        <>
        <Header />
        <BigFansComponent enable={false}/>
        <Footer />  
        </>
    )
}