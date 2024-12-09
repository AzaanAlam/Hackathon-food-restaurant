import Image from "next/image"; // Ensure this import is present

const PartnerImages = [
  {
    src: "/Images/restaurant.png",
    label: "Restaurant",
  },
  {
    src: "/Images/bakery1.png",
    label: "Bakery",
  },
  {
    src: "/Images/forkandspoon.png",
    label: "Fork And Spoon",
  },
  {
    src: "/Images/wolfcoffee.png",
    label: "Wolf Coffee",
  },
  {
    src: "/Images/bistro.png",
    label: "Bistro",
  },
  {
    src: "/Images/bakery2.png",
    label: "Bakery",
  },
];

export default function PartnersAndClients() {
  return (
    <div className="flex flex-col w-full items-center pt-10">
      {/* Heading Section */}
      <div className="flex flex-col text-center mb-6">
        <h1 className="text-black text-lg">Partners & Clients</h1>
        <h1 className="text-black font-bold text-[48px]">
          We work with the best people
        </h1>
      </div>

      {/* Images Section */}
      <div className="flex flex-wrap justify-center items-center gap-6 opacity-40">
        {PartnerImages.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <Image
              src={item.src}
              alt={item.label}
              width={200}
              height={200}
              className="mb-2"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
