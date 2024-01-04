import { React } from 'react';
import Header from '../components/Header'
import ConnectedComponent from '../components/ConnectedComponent';
import Footer from '../components/Footer'

export default function Connected() {
    return (
        <>
        <Header />
        <ConnectedComponent enable={false}/>
        <Footer />  
        </>
    )
}