import Image from "next/image";
import { AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";

const FoodCard = () => {
  return (
    <div className="rounded bg-white shadow-md">
      <Image src="/food.jpg" className="rounded" height="200" width="300" />
      <div className="flex justify-between py-1 items-center">
        <p className="text-green-500 px-3 text-2xl">Name</p>
        <div className="flex justify-center items-center px-3">
          <button className="bg-[#FFDAC7] text-[#E05D5D] px-1 mx-1 rounded flex items-center">
            <AiFillHeart /> 345
          </button>
          <button className="bg-[#C6FFC1] text-green-500 px-1 mx-1 rounded flex items-center">
            <FaComment /> 45
          </button>
        </div>
      </div>
      <p className="p-3 text-gray-400"> Channel Name</p>
    </div>
  );
};

export default FoodCard;
