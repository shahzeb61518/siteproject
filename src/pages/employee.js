import React,{useState} from 'react'
import Employee from '../components/Employee/employee'
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
      <Employee />
      <Footer />
    </>
  )
}

export default ContactPage
