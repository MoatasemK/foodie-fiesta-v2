import { AiOutlineYoutube, AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import FoodCard from "../components/food-card/FoodCard.component";

import { useState } from "react";

const profile = {
  name: "Ricardo Cooper",
  imageUrl:
    "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  coverImageUrl:
    "https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  about: `
    <p>Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut sit dolor consectetur urna, dui cras nec sed. Cursus risus congue arcu aenean posuere aliquam.</p>
    <p>Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea rhoncus ac mauris amet. Urna, sem pretium sit pretium urna, senectus vitae. Scelerisque fermentum, cursus felis dui suspendisse velit pharetra. Augue et duis cursus maecenas eget quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent dictum risus suspendisse.</p>
  `,
};

const team = [
  {
    name: "Leslie Alexander",
    handle: "lesliealexander",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Michael Foster",
    handle: "michaelfoster",
    role: "Co-Founder / CTO",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Dries Vincent",
    handle: "driesvincent",
    role: "Manager, Business Relations",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Lindsay Walton",
    handle: "lindsaywalton",
    role: "Front-end Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

export default function Example({ user }) {
  const [selectedTab, setSelectedTab] = useState("posts");
  return (
    <div className="relative h-screen flex overflow-hidden bg-white">
      <div className="flex flex-col min-w-0 flex-1 overflow-hidden">
        <div className="flex-1 relative z-0 flex overflow-hidden">
          <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last">
            <article>
              <div>
                <div>
                  <img
                    className="h-32 w-full object-cover lg:h-48"
                    src={profile.coverImageUrl}
                    alt=""
                  />
                </div>
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                    <div className="flex">
                      <img
                        className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                        src={user?.profilePicUrl}
                        alt=""
                      />
                    </div>
                    <div className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                      <div className="sm:hidden 2xl:block mt-6 min-w-0 flex-1">
                        <h1 className="text-2xl  font-bold text-green-500 truncate">
                          {user?.name}
                        </h1>
                      </div>
                      <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                        <button
                          type="button"
                          className="flex items-center text-red-500 justify-center rounded-full p-2 border border-red-500 shadow-sm text-sm font-medium  bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                        >
                          <AiOutlineYoutube className="text-xl" />
                        </button>
                        <button
                          type="button"
                          className="flex text-purple-500 items-center justify-center p-2 border border-purple-500 shadow-sm text-sm font-medium rounded-full  bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                        >
                          <AiOutlineInstagram className="text-xl" />
                        </button>
                        <button
                          type="button"
                          className="flex items-center text-blue-500 justify-center rounded-full p-2 border border-blue-500 shadow-sm text-sm font-medium  bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                        >
                          <FaFacebookF className="text-xl" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="hidden sm:block 2xl:hidden mt-6 min-w-0 flex-1">
                    <h1 className="text-2xl font-bold text-gray-900 truncate">
                      {profile.name}
                    </h1>
                  </div>
                </div>
              </div>

              <div className="mt-6 sm:mt-2 2xl:mt-5">
                <div className="border-b border-gray-200">
                  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="-mb-px flex space-x-8 ">
                      <button
                        className={
                          selectedTab === "posts"
                            ? "text-lg font-semibold border-b-2 border-green-500"
                            : "text-lg text-gray-500"
                        }
                        onClick={() => setSelectedTab("posts")}
                      >
                        Posts
                      </button>
                      <button
                        onClick={() => setSelectedTab("about")}
                        className={
                          selectedTab === "about"
                            ? "text-lg font-semibold border-b-2 border-green-600"
                            : "text-lg text-gray-500"
                        }
                      >
                        About
                      </button>
                    </nav>
                  </div>
                </div>
              </div>

              <div className="">
                {selectedTab === "posts" && (
                  <div className="max-w-5xl mx-auto px-4 my-6">
                    <div className="flex justify-left space-x-4 my-3">
                      <FoodCard />
                      <FoodCard />
                      <FoodCard />
                    </div>
                  </div>
                )}
                {selectedTab === "about" && (
                  <div className="max-w-5xl mx-auto px-4 my-6">
                    <div className="flex justify-left items-center space-x-4">
                      <a href="" className="text-lg text-gray-500">
                        31 followers
                      </a>
                      <a href="" className="text-lg text-gray-500">
                        25 following
                      </a>
                    </div>
                    <div className="my-5">
                      <h2 className="text-green-600 text-xl font-semibold">
                        Bio
                      </h2>
                      <p>lorem </p>
                    </div>
                  </div>
                )}
              </div>
            </article>
          </main>
        </div>
      </div>
    </div>
  );
}

export function getServerSideProps() {
  console.log("ysername");
  return { props: {} };
}
