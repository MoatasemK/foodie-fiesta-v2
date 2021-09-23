import FoodCard from "../components/food-card/FoodCard.component";
import Router from "next/router";
import { toast, ToastContainer } from "react-toastify";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {}, []);
  return (
    <>
      <div className="bg-white">
        <ToastContainer />
        <div className="w-full mx-auto">
          <div className="bg-green-100 shadow-md overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
            <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center">
                <h2 className="text-3xl font-extrabold text-green-700 sm:text-4xl">
                  <span className="block">Ready to dive in?</span>
                  <span className="block">Start your free trial today.</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-green-600">
                  Ac euismod vel sit maecenas id pellentesque eu sed
                  consectetur. Malesuada adipiscing sagittis vel nulla nec.
                </p>
                <a
                  href="#"
                  className="mt-8 bg-green-600 border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-white hover:bg-greeb-400"
                >
                  Sign up for free
                </a>
              </div>
            </div>
            <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
              <img
                className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
                src="https://tailwindui.com/img/component-images/full-width-with-sidebar.jpg"
                alt="App screenshot"
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-green-600 text-center mt-8 mb-3 text-4xl font-semibold">
          Choose your category
        </h2>
        <section className="flex justify-center items-center pt-6">
          <button className="bg-[#C6FFC1] text-lg py-1 px-4 rounded text-green-600 mx-4">
            All
          </button>
          <button className="bg-[#C6FFC1] text-lg py-1 px-4 rounded text-green-600 mx-4">
            Veg
          </button>
          <button className="bg-[#C6FFC1] text-lg py-1 px-4 rounded text-green-600 mx-4">
            Healthy
          </button>
          <button className="bg-[#C6FFC1] text-lg py-1 px-4 rounded text-green-600 mx-4">
            Non Veg
          </button>
          <button className="bg-[#C6FFC1] text-lg py-1 px-4 rounded text-green-600 mx-4">
            Sweet
          </button>
          <button className="bg-[#C6FFC1] text-lg py-1 px-4 rounded text-green-600 mx-4">
            Indian
          </button>
          <button className="bg-[#C6FFC1] text-lg py-1 px-4 rounded text-green-600 mx-4">
            Italian
          </button>
          <button className="bg-[#C6FFC1] text-lg py-1 px-4 rounded text-green-600 mx-4">
            Chinese
          </button>
          <button className="bg-[#C6FFC1] text-lg py-1 px-4 rounded text-green-600 mx-4">
            Junk
          </button>
        </section>

        <div className="flex justify-center space-x-2 mb-10 wrap items-center mt-10">
          <FoodCard />
          <FoodCard />
          <FoodCard />
        </div>
      </div>
    </>
  );
}

{
  /* <div className="bg-gray-50 min-h-screen">
  <ToastContainer />
  <div className="text-center py-3">
    <input
      placeholder="Search"
      className="py-3 px-6 rounded-tl rounded-bl w-1/3 shadow-md focus:outline-none"
    />
    <button className="bg-green-500 text-white rounded-tr rounded-br text-md h-100 py-3 shadow-md  px-6">
      Search
    </button>
  </div>
  <section className="flex justify-center items-center pt-6">
    <button className="bg-[#C6FFC1] text-lg py-1 px-4 rounded text-green-600 mx-4">
      All
    </button>
    <button className="bg-[#C6FFC1] text-lg py-1 px-4 rounded text-green-600 mx-4">
      Veg
    </button>
    <button className="bg-[#C6FFC1] text-lg py-1 px-4 rounded text-green-600 mx-4">
      Healthy
    </button>
    <button className="bg-[#C6FFC1] text-lg py-1 px-4 rounded text-green-600 mx-4">
      Non Veg
    </button>
    <button className="bg-[#C6FFC1] text-lg py-1 px-4 rounded text-green-600 mx-4">
      Sweet
    </button>
    <button className="bg-[#C6FFC1] text-lg py-1 px-4 rounded text-green-600 mx-4">
      Indian
    </button>
    <button className="bg-[#C6FFC1] text-lg py-1 px-4 rounded text-green-600 mx-4">
      Italian
    </button>
    <button className="bg-[#C6FFC1] text-lg py-1 px-4 rounded text-green-600 mx-4">
      Chinese
    </button>
    <button className="bg-[#C6FFC1] text-lg py-1 px-4 rounded text-green-600 mx-4">
      Junk
    </button>
  </section>

  <div className="flex justify-center wrap items-center mt-10">
    <FoodCard />
  </div>
</div>; */
}
