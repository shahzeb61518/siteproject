import React,{useState} from 'react'
import Contact from '../components/Contact/contact'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer';

const ContactPage = () => {
    const[isOpen, setIsOpen] = useState(false)

    const toggle = () => {
      setIsOpen(!isOpen)
    }
  
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Contact />
      <Footer />
    </>
  )
}

export default ContactPage
