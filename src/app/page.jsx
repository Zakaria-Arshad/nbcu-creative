import styles from './page.module.css'
import Header from './components/Header'
import FirstComponent from './components/FirstComponent'
import EventfulComponent from './components/EventfulComponent'
import LoveIdeasMakeThings from './components/LoveIdeasMakeThings'
import ThinkersComponent from './components/ThinkersComponent'
import WeHelpBusinessesGrow from './components/WeHelpBusinessesGrow'

export default function Home() {
  return (
    <>
    <Header />
    <FirstComponent />
    <EventfulComponent />
    <LoveIdeasMakeThings />
    <ThinkersComponent />
    <WeHelpBusinessesGrow />
    </>
  )
}
