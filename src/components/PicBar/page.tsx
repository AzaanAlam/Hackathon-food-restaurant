import Image from "next/image"
import Link from "next/link"
import image2 from "../../../public/Images/Image2.jpg"


export default function PicBar() {
  return (
    <div className="relative h-[300px] w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src={image2}
        alt="Fresh vegetables background"
        fill
        className="object-cover brightness-30"
        priority
      />
      
      {/* Content Overlay */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-white">
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Our Menu
        </h1>
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-sm sm:text-base">
          <Link 
            href="/" 
            className="transition-colors hover:text-gray-300"
          >
            Home
          </Link>
          <span className="text-orange-400">›</span>
          <span className="text-orange-400">Menu</span>
        </nav>
      </div>
    </div>
  )
}