import FoodCard from "../components/food-card/FoodCard.component";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="text-center py-3">
        <input
          placeholder="Search"
          className="py-3 px-6 rounded w-1/3 shadow-md"
        />
        <button className="bg-green-500 text-white text-lg py-2 rounded shadow-md focus:outline-none px-4">
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
