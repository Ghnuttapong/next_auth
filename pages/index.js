import HomeComponent from '../components/home'
import Nav from '../components/navbar'
import CookieConsent from './popup'

export default function Home() {
  return (
    <>
    <Nav />
    <HomeComponent />
    <CookieConsent /> 
    </>
  )
}