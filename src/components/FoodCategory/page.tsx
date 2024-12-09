import Image from "next/image"
import Link from "next/link"

export default function FoodCategory() {
  const foodItems = [
    {
      id: 1,
      title: "Fast Food Dish",
      image: "/Images/foodcat1.jpg",
      discount: "Save 30%",
      href: "#"
    },
    {
      id: 2,
      title: "Gourmet Burger",
      image: "/Images/foodcat2.jpg",
      href: "#"
    },
    {
      id: 3,
      title: "Fresh Salad",
      image: "/Images/foodcat3.jpg",
      href: "#"
    },
    {
      id: 4,
      title: "Dessert Special",
      image: "/Images/foodcat4.jpg",
      href: "#"
    }
  ]

  return (
    <div className="bg-black min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-amber-500 text-sm font-medium mb-2">Food Category</h2>
          <h1 className="text-3xl sm:text-4xl font-bold">
            <span className="text-amber-500">Ch</span>
            <span className="text-white">oose Food Item</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {foodItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="group relative block overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105"
            >
              <div className="aspect-square relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:opacity-0" />
                {item.discount && (
                  <div className="absolute top-4 left-4 bg-amber-500 text-black px-3 py-1 rounded-full text-sm font-medium">
                    {item.discount}
                  </div>
                )}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-lg font-semibold truncate bg-black/60 px-3 py-2 rounded">
                    {item.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

