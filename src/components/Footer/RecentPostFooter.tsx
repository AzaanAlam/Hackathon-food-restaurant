import Image from "next/image";


export default function RecentPostsSection() {
    const posts = [
      {
        title: "Is fastfood good for your body?",
        date: "February 28, 2022",
        image: "/Images/footerimg.jpg",
      },
      {
        title: "Change your food habit With organic food",
        date: "February 28, 2022",
        image: "/Images/footerimg.jpg",
      },
      {
        title: "Do you like fastfood for your life?",
        date: "February 28, 2022",
        image: "/Images/footerimg.jpg",
      },
    ];
  
    return (
      <div className="w-full max-w-md mx-auto lg:max-w-xs">
        <h3 className="text-lg md:text-xl font-bold mb-6 lg:mb-8 text-center lg:text-left">
          Recent Posts
        </h3>
        <div className="space-y-4">
          {posts.map((post, index) => (
            <div
              key={index}
              className="flex items-center bg-[#0D0D0D] p-3 md:p-4"
            >
              <Image
                src={post.image}
                alt=""
                className="w-14 h-14 md:w-16 md:h-16 object-cover mr-4"
              />
              <div>
                <h4 className="font-semibold text-sm md:text-base mb-1">
                  {post.title}
                </h4>
                <p className="text-xs md:text-sm text-gray-500">{post.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  