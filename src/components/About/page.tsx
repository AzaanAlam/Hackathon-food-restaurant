import Image from 'next/image'
import { CheckIcon } from 'lucide-react'
import foodpics1 from "../../../public/Images/foodpic1.jpeg"
import foodpics2 from "../../../public/Images/foodpic2.jpeg"
import foodpics3 from "../../../public/Images/foodpic3.jpeg"

export default function About() {
  return (
    <main className="min-h-screen bg-black text-white p-4 md:p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-center">
      <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          <span className="text-[#FF9F0D]">About us</span>
        </h2>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          <span className="text-[#FF9F0D]">We</span> Create the best<br />foody product
        </h1>
        <p className="mb-6 text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
        </p>
        <ul className="mb-8 space-y-2">
          <li>Lacus nisi, et ac dapibus sit eu velit in consequat.</li>
          <li>Quisque diam pellentesque bibendum non dui volutpat fringilla</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        </ul>
        <button className="bg-[#FF9F0D] text-white w-[100px] h-[30px] md:w-[160px] md:h-[50px] lg:w-[190px] lg:h-[60px] rounded-[40px] hover:bg-yellow-800 duration-100">
            Read More
        </button>
      </div>
      <div className="lg:w-1/2 relative">
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <Image
              src={foodpics1}
              alt="Egg and avocado dish"
              width={600}
              height={300}
              className="rounded-lg object-cover w-full h-[300px]"
            />
          </div>
          <div className="relative">
            <Image
              src={foodpics2}
              alt="Grilled dish"
              width={300}
              height={200}
              className="rounded-lg object-cover w-full h-[200px]"
            />
          </div>
          <div className="relative">
            <Image
              src={foodpics3}
              alt="Sandwich"
              width={300}
              height={200}
              className="rounded-lg object-cover w-full h-[200px]"
            />

          </div>
        </div>
      </div>
    </main>
  )
}



