
import { Coffee } from 'lucide-react';
import Image from 'next/image';
import drinks from "../../../public/Images/drinks.jpg"

interface DrinksItem {
    name: string
    description: string
    calories: number
    price: number
}
  
const drinksItem: DrinksItem[] = [
    {
      name: "Caffè macchiato",
      description: "Toasted French bread topped with romano, cheddar",
      calories: 560,
      price: 32
    },
    {
      name: "Aperol Spritz Capacianno",
      description: "Gorgonzola, ricotta, mozzarella, taleggio",
      calories: 700,
      price: 43,
    },
    {
      name: "Caffe Latte Campuri",
      description: "Ground cumin, avocados, peeled and cubed",
      calories: 1000,
      price: 14
    },
    {
      name: "Tormentoso BushTea Pintoage",
      description: "Spreadable cream cheese, crumbled blue cheese",
      calories: 560,
      price: 35
    }
]


export default function MainCourse() {
    return (
      <section className="w-full mx-auto mt-[40px] px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto py-16 flex flex-col lg:flex-row gap-12">
          {/* Menu Content */}
          <div className="w-full lg:w-1/2 lg:pl-8">
            <div className="flex flex-col mb-3">
              <Coffee className="ml-2 text-[#FF9F0D]" size={24} />
              <h1 className='text-[48px] leading-[56px] text-[#333333] font-bold mb-[24px]'>Drinks</h1>
            </div>
            <div className='flex flex-col gap-3'>
              {drinksItem.map((item, index) => (
                <div key={index} className="border-b border-dashed border-gray-300 pb-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className={"text-xl sm:text-2xl font-bold text-gray-800"}>
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
          {/* Image Section */}
          <div className="w-full lg:w-[448px] mb-8 lg:mb-0">
            <Image
              src={drinks} 
              alt="Starter dish" 
              width={448}
              height={626}
              className="w-full h-auto max-w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    );
  }