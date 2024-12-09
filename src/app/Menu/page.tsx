import React from 'react'
import Header from '@/components/Header/page'
import PicBar from '@/components/PicBar/page'
import StarterMenu from '@/components/StarterMenu/page'
import MainCourse from '@/components/MainCourse/page'
import Experience from '@/components/Experience/page'
import Dessert from '@/components/Dessert/page'
import Drinks from '@/components/Drinks/page'
import PartnersAndClients from '@/components/PartnersAndClients/page'
import Footer from "@/components/Footer/Footer"

const Menu = () => {
  return (
    <div className='bg-white h-full w-full'>
        <Header />
        <PicBar />
        <StarterMenu />
        <MainCourse />
        <Experience />
        <Dessert />
        <Drinks />
        <PartnersAndClients />
        <Footer />
    </div>
  )
}

export default Menu