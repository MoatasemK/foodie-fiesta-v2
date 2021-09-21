import FoodCard from "../components/food-card/FoodCard.component";
import Router from "next/router";
import { toast, ToastContainer } from "react-toastify";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {}, []);
  return (
    <div className="bg-gray-50 min-h-screen">
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
    </div>
  );
}
