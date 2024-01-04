import { React } from 'react';
import Header from '../components/Header'
import ThinkersComponent from '../components/ThinkersComponent';
import Footer from '../components/Footer'

export default function Thinkers() {
    return (
        <>
        <Header />
        <ThinkersComponent enable={false}/>
        <Footer />  
        </>
    )
}