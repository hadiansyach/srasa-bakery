export default function Home() {
  const menuItems = [
    { name: "Home", href: "#" },
    { name: "Products", href: "#" },
    { name: "Services", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    // bg color cream
    <div className="bg-orange-50">
      {/* Grid Accent */}
      <div className="fixed inset-0 z-0 pointer-events-none h-full">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:72px_72px] h-full"></div>
      </div>

      {/* Header */}
      <header className="relative z-1 flex flex-wrap justify-between items-center bg-blue-100 px-4 py-3 md:px-8 md:py-2 shadow-xs">
        <div className="w-12 h-12 md:w-24 md:h-24 bg-gray-400 flex items-center justify-center rounded-full">
          Logo Srasa
        </div>
        <nav className="flex flex-wrap justify-center md:justify-end space-x-2 md:space-x-4 mt-2 md:mt-0">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-gray-800 text-sm md:text-base hover:text-black hover:underline transition-transform duration-600"
            >
              {item.name}
            </a>
          ))}
        </nav>
      </header>

      {/* <!-- Hero Section --> */}
      <section className="min-h-screen relative z-1 flex flex-col md:flex-row items-center justify-between p-8 md:p-16">
        <div className="relative md:w-1/2 text-center md:text-left p-5">
          {/* <!-- Overlay to hide grid behind the text area --> */}
          <div className="absolute inset-0 bg-gray-100 z-[-1] rounded-lg"></div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Discover irresistible fresh bakery selection
          </h1>
          <p className="mt-4 text-gray-600">
            Indulge in heavenly delights at Bite Bakery, where every bite is a
            taste of perfection.
          </p>
          <button className="mt-6 px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700">
            SHOP NOW
          </button>
        </div>
        <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
          <div className="relative">
            <div className="w-48 h-48 md:w-64 md:h-64 bg-black rounded-lg flex items-center justify-center" />
            <div className="absolute bottom-4 right-4 w-48 h-48 md:w-64 md:h-64 bg-orange-100 rounded-lg flex items-center justify-center">
              <span>Image 2 Placeholder</span>
            </div>
          </div>
        </div>
      </section>

      {/* list card services */}
      <section className="min-h-screen relative z-1 p-8 md:p-16 bg-orange-400">
        {/* <div className="relative md:w-1/2 text-center md:text-left p-5">
          <div className="absolute inset-0 bg-gray-100 z-[-1] rounded-lg"></div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Our Services
          </h1>
          <p className="mt-4 text-gray-600">
            We offer a wide range of services to cater to your needs.
          </p>
          <button className="mt-6 px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700">
            VIEW ALL SERVICES
          </button>
        </div> */}
        {/* <div className="mt-8 flex justify-center">
          <div className="relative">
            <div className="w-48 h-48 md:w-64 md:h-64 bg-black rounded-lg flex items-center justify-center" />
            <div className="absolute bottom-4 right-4 w-48 h-48 md:w-64 md:h-64 bg-orange-100 rounded-lg flex items-center justify-center">
              <span>Image 2 Placeholder</span>
            </div>
          </div>
        </div> */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {Array.from({ length: 6 }, (_, index) => (
            <div
              key={index}
              className="bg-transparent rounded-md border-1 border-orange-200 py-16 flex flex-col items-center"
            >
              <div className="w-24 h-24 bg-gray-300 rounded-full mb-4"></div>
              <h2 className="text-xl font-semibold text-neutral-100">
                Service Title {index + 1}
              </h2>
            </div>
          ))}
        </div>
      </section>

      {/* Product Section */}
      <section className="relative z-1 flex flex-col items-center min-h-screen p-8 md:py-16 md:px-32">
        <h2 className="text-4xl font-semibold">Our Premium Product</h2>
        <li className="flex gap-x-20 mt-4">
          <a
            className="px-2 text-lg hover:underline hover:bg-orange-900 hover:text-orange-500 active:text-orange-600"
            href="#"
          >
            See All
          </a>
          <a
            className="px-2 text-lg hover:underline hover:bg-orange-900 hover:text-orange-500 active:text-orange-600"
            href="#"
          >
            Brownies
          </a>
          <a
            className="px-2 text-lg hover:underline hover:bg-orange-900 hover:text-orange-500 active:text-orange-600"
            href="#"
          >
            Bread
          </a>
          <a
            className="px-2 text-lg hover:underline hover:bg-orange-900 hover:text-orange-500 active:text-orange-600"
            href="#"
          >
            Pastry
          </a>
          <a
            className="px-2 text-lg hover:underline hover:bg-orange-900 hover:text-orange-500 active:text-orange-600"
            href="#"
          >
            Cake
          </a>
          <a
            className="px-2 text-lg hover:underline hover:bg-orange-900 hover:text-orange-500 active:text-orange-600"
            href="#"
          >
            Cookies
          </a>
        </li>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          {Array.from({ length: 6 }, (_, index) => (
            <div className="bg-orange-50 border-1 border-grey-700 p-4 flex flex-col items-center">
              <img 
                className="w-96 h-96 rounded-sm mb-4"
                src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <div className="w-full flex justify-between px-1 font-semibold">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                <span className="text-gray-500">4.5</span>
              </div>
              <div className="w-full flex justify-between px-1 font-semibold text-lg">
                <h3 className="font-bold">Product {index + 1}</h3>
                <p className="text-gray-900">$19.99</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
