import Image from "next/image";
import Link from "next/link";
import Navbar from "./header/page";

export default function Home() {
  return (
    <div className="bg-white pb-6 sm:h-screen  sm:bg-cover  md:h-full lg:h-full ">
    <Navbar />
  
    <div className="pt-16 px-5 flex flex-wrap md:col-2 justify-center gap-8 ">
      {/* Card Component */}
      {[
        { src: "/images.jpeg", title: "Hemani Squad Athlete Deodarant", desc: "Deodarant Body Spray" },
        { src: "/image 2.jpg", title: "Hemani Squad Champion Deodarant ", desc: "Deodarant Body Spray" },
        { src: "/image 3.jpg", title: "Hemani Squad Polo Deodarant", desc: "Deodarant Body Spray" },
      ].map((product, index) => (
        <div
          key={index}
          className="flex flex-col bg-white bg-cover  w-full sm:w-screen md:w-[40%] lg:w-[30%]  border-stone-500 border-2 shadow-md shadow-black rounded-lg hover:scale-110 transition-all"
        >
          {/* Product Image */}
          <div className=" hover:border-gray-600">
          <Image
            src={product.src}
            alt="Product Image"
            width={200}
            height={200}
            className="object-cover h-96 w-full border-slate-200 border-2 justify-center items-center rounded-t-lg"
          />
          </div>
          {/* Product Info */}
          <div className="items-center justify-between pt-6 px-3">
            <h1 className="text-xl font-bold font-serif text-gray-900">
              {product.title}
              <br />
              <span className="text-md font-thin">{product.desc}</span>
            </h1>
            <h2 className="text-2xl font-medium text-orange-600">Rs.500/-</h2>
          </div>
          
          {/* Action Buttons */}
          <div className="my-5 flex justify-around">
            <Link
              href="/product/[id]"
              as={`/product/${index + 1}`}
              className="text-md font-medium p-2.5 rounded-md bg-orange-400 text-red-900 hover:text-black"
            >
              Buy Now
            </Link>
            <Link
              href="/product/[id]"
              as={`/product/${index + 1}`}
              className="text-md font-medium p-2.5 rounded-md bg-orange-400 text-red-900 hover:text-black"
            >
              Add to Cart
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
  

  );
}
