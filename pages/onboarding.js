import {
  AiOutlineUser,
  AiFillYoutube,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";
import Image from "next/image";

const Profile = () => {
  return (
    <div className="bg-green-100 min-h-screen">
      <div className="flex flex-col items-center justify-center py-16">
        <form className="bg-white text-center relative bg-white w-1/3 rounded shadow-lg px-4">
          <Image
            height="80"
            width="80"
            src="https://www.gravatar.com/avatar/4f28f38e798f29c5d75b85c883327d09?d=mm&r=g&s=190"
            className="rounded-full transform absolute -top-100 left-0"
          />
          <h2 className="text-green-500 text-4xl font-semibold my-3">
            Create your profile
          </h2>

          <label
            htmlFor="name"
            className="relative text-gray-400 focus-within:text-gray-400 block"
          >
            <AiOutlineUser className="pointer-events-none w-6 h-6  absolute top-1/2 transform -translate-y-1/2 left-1" />
            <input
              type="text"
              placeholder="Bio"
              className="bg-gray-200 text-gray-400 py-2 px-8 w-full rounded my-2 focus:outline-none"
            />
          </label>

          <h2 className="text-green-500 text-lg">
            ______________ SOCIALS _______________
          </h2>

          <label
            htmlFor="name"
            className="relative text-red-400 focus-within:text-red-400 block"
          >
            <AiFillYoutube className="pointer-events-none w-6 h-6  absolute top-1/2 transform -translate-y-1/2 left-1" />
            <input
              type="text"
              placeholder="Youtube"
              className="bg-gray-200 text-gray-400 py-2 px-8 w-full rounded my-2 focus:outline-none"
            />
          </label>

          <label
            htmlFor="name"
            className="relative text-pink-400 focus-within:text-pink-400 block"
          >
            <AiFillInstagram className="pointer-events-none w-6 h-6  absolute top-1/2 transform -translate-y-1/2 left-1" />
            <input
              type="text"
              placeholder="Instagram"
              className="bg-gray-200 text-gray-400 py-2 px-8 w-full rounded my-2 focus:outline-none"
            />
          </label>

          <label
            htmlFor="name"
            className="relative text-blue-400 focus-within:text-blue-400 block"
          >
            <AiFillFacebook className="pointer-events-none w-6 h-6  absolute top-1/2 transform -translate-y-1/2 left-1" />
            <input
              type="text"
              placeholder="Facebook"
              className="bg-gray-200 text-gray-400 py-2 px-8 w-full rounded my-2 focus:outline-none"
            />
          </label>
          <button className="bg-green-500 w-full py-2 rounded shadow-md my-3 text-white">
            CREATE PROFILE
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
