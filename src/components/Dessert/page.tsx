import { Coffee } from 'lucide-react'
import Image from 'next/image'
import Image5 from "../../../public/Images/Image5.jpg"



interface DessertItem {
    name: string
    description: string
    calories: number
    price: number
    highlight?: boolean
  }
  
const dessertItems: DessertItem[] = [
    {
      name: "Fig and lemon cake",
      description: "Toasted French bread topped with romano, cheddar",
      calories: 560,
      price: 32
    },
    {
      name: "Creamy mascarpone cake",
      description: "Gorgonzola, ricotta, mozzarella, taleggio",
      calories: 700,
      price: 43,
      highlight: true
    },
    {
      name: "Pastry, blueberries, lemon juice",
      description: "Ground cumin, avocados, peeled and cubed",
      calories: 1000,
      price: 14
    },
    {
      name: "Pain au chocolat",
      description: "Spreadable cream cheese, crumbled blue cheese",
      calories: 560,
      price: 35
    }
  ]

export default function Dessert() {
  return (
    <section className="w-full mx-auto mt-[40px] sm:mt-[40px] px-4">
      <div className="container mx-auto py-10 sm:py-16 flex flex-col md:flex-row gap-8 md:gap-[112px]">
        {/* Image Section */}
        <div className="w-full md:w-[448px] mb-6 md:mb-0">
          <Image 
            src={Image5}
            alt="Dessert dish" 
            width={448}
            height={626}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Menu Items Section */}
        <div className="md:w-1/2 md:pl-8">
          <div className="flex flex-col mb-3">
            <Coffee className="text-[#FF9F0D]" size={24} />
            <h1 className='text-[48px] leading-[56px] text-[#333333] font-bold mb-[24px]'>Dessert</h1>
          </div>

          <div className="flex flex-col gap-3">
            {dessertItems.map((item, index) => (
              <div key={index} className="border-b border-dashed border-gray-300 pb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
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
  )
}