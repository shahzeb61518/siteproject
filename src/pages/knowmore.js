import React,{useState} from 'react'
import KnowMore from '../components/KnowMore/more'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer';

const KnowMorePage = () => {
    const[isOpen, setIsOpen] = useState(false)

    const toggle = () => {
      setIsOpen(!isOpen)
    }
  
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <KnowMore />
      <Footer />
    </>
  )
}

export default KnowMorePage
