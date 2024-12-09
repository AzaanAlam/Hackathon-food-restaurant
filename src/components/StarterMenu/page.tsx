
import { Coffee } from 'lucide-react';
import Image from 'next/image';
import Image3 from "../../../public/Images/Image3.jpg"


interface MenuItem {
    name: string
    description: string
    calories: number
    price: number
    highlight?: boolean
}
  
  export const menuItems: MenuItem[] = [
    {
      name: "Alder Grilled Chinook Salmon",
      description: "Toasted French bread topped with romano, cheddar",
      calories: 560,
      price: 32
    },
    {
      name: "Berries and creme tart",
      description: "Gorgonzola, ricotta, mozzarella, taleggio",
      calories: 700,
      price: 43,
      highlight: true
    },
    {
      name: "Tormentoso Bush Pizza Pintoage",
      description: "Ground cumin, avocados, peeled and cubed",
      calories: 1000,
      price: 14
    },
    {
      name: "Spicy Vegan Potato Curry",
      description: "Spreadable cream cheese, crumbled blue cheese",
      calories: 560,
      price: 35
    }
  ]


export default function StarterMenu() {
  return (
    <section className="w-full mx-auto mt-[40px] px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto py-16 flex flex-col lg:flex-row gap-12">
        {/* Image Section */}
        <div className="w-full lg:w-[448px] mb-8 lg:mb-0">
          <Image
            src={Image3} 
            alt="Starter dish" 
            width={448}
            height={616.7}
            className="w-full h-auto max-w-full rounded-lg shadow-lg"
          />
        </div>
        {/* Menu Content */}
        <div className="w-full lg:w-1/2 lg:pl-8">
          <div className="flex flex-col mb-8">
            <Coffee className="ml-2 text-[#FF9F0D]" size={24} />
            <h1 className='text-[48px] leading-[56px] text-[#333333] font-bold mb-[24px]'>Starter Menu</h1>
          </div>
          <div className="flex flex-col gap-3">
            {menuItems.map((item, index) => (
              <div key={index} className="border-b border-dashed border-gray-300 pb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className={`text-xl sm:text-2xl font-bold ${item.highlight ? 'text-[#FF9F0D]' : 'text-gray-800'}`}>
                    {item.name}
                  </h3>
                  <span className="text-xl sm:text-2xl font-bold text-[#FF9F0D]">{item.price}$</span>
                </div>
                <p className="text-gray-600 mb-2">{item.description}</p>
                <p className="text-sm sm:text-[16px] text-gray-500">{item.calories} CAL</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


// import React from 'react'
// import Image from 'next/image'
// import Image3 from "../../../public/Images/Image3.jpg"

// const StarterMenu = () => {
//   return (
//     <div className="container mx-auto p-4 flex flex-col md:flex-row items-start md:items-center">
//         <div className="w-full md:w-1/2 p-4">
//             <img alt="A bowl of salad with various vegetables and a fork on the side" className="w-full h-auto rounded-lg shadow-lg" src="https://storage.googleapis.com/a1aa/image/PLWEoxKrEnrANVuuWdXFg6bipY4HNQEAt6KPOKtKWpfuCc8JA.jpg"/>
//         </div>
//         <div className="w-full md:w-1/2 p-4">
//             <div className="flex items-center mb-4">
//                 <i className="fas fa-utensils text-orange-500 text-xl mr-2"></i>
//                 <h1 className="text-black text-4xl font-bold">Starter Menu</h1>
//             </div>
//             <div className="mb-6">
//                 <h2 className="text-black text-sm font-bold">Alder Grilled Chinook Salmon
//                     <span className="text-orange-500 float-right">32$</span>
//                 </h2>
//                 <p className="text-gray-600">Toasted French bread topped with romano, cheddar</p>   
//                 <p className="text-gray-400">560 CAL</p>
//             </div>
//             <div className="mb-6">
//                 <h2 className="text-sm font-bold text-orange-500">Berries and creme tart
//                     <span className="text-orange-500 float-right">43$</span>
//                 </h2>
//                 <p className="text-gray-600">Gorgonzola, ricotta, mozzarella, taleggio</p>
//                 <p className="text-gray-400">700 CAL</p>
//             </div>
//             <div className="mb-6">
//                 <h2 className="text-sm font-bold">Tormentoso Bush Pizza Pintoage
//                     <span className="text-orange-500 float-right">14$</span>
//                 </h2>
//                 <p className="text-gray-600">Ground cumin, avocados, peeled and cubed</p>
//                 <p className="text-gray-400">1000 CAL</p>
//             </div>
//             <div className="mb-6">
//                 <h2 className="text-sm font-bold">Spicy Vegan Potato Curry
//                     <span className="text-orange-500 float-right">35$</span>
//                 </h2>
//                 <p className="text-gray-600">Spreadable cream cheese, crumbled blue cheese</p>
//                 <p className="text-gray-400">560 CAL</p>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default StarterMenu;