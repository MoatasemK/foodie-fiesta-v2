import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import {
  AiOutlineUser,
  AiFillYoutube,
  AiFillInstagram,
  AiFillFacebook,
  AiOutlineLoading,
} from "react-icons/ai";
import Image from "next/image";
import { onboarding } from "../../utils/onboarding.utils";
import "react-toastify/dist/ReactToastify.min.css";

const Profile = () => {
  const router = useRouter();

  const { token } = router.query;

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [bio, setBio] = useState("");
  const [youtube, setYoutube] = useState("");
  const [instagram, setInstagram] = useState("");
  const [facebook, setFacebook] = useState("");
  const [image, setImage] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    alert(1);
    console.log("hello");
    e.preventDefault();
    alert("yes1");
    setLoading(true);
    if (bio === "") {
      toast.error("Please enter bio");
    } else {
      console.log("set1");
      const formdata = new FormData();
      formdata.append("profilePic", image);
      formdata.append("bio", bio);
      formdata.append("youtube", youtube);
      formdata.append("instagram", instagram);
      formdata.append("facebook", facebook);
      await onboarding(token, formdata, setError, setLoading, toast);
    }
  };
  return (
    <div className="bg-green-100 min-h-screen">
      <div className="flex flex-col items-center relative justify-center py-16">
        <form
          onSubmit={onSubmit}
          className="bg-white text-center bg-white w-1/3 rounded shadow-lg px-4"
        >
          <Image
            height="100"
            width="100"
            src={
              image
                ? URL.createObjectURL(image)
                : "https://www.gravatar.com/avatar/4f28f38e798f29c5d75b85c883327d09?d=mm&r=g&s=190"
            }
            className="rounded-full absolute transform -translate-y-50 -translate-x-50 -top-100 left-0"
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
              name="bio"
              onChange={(e) => setBio(e.target.value)}
              value={bio}
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
              name="youtube"
              onChange={(e) => setYoutube(e.target.value)}
              value={youtube}
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
              type="instagram"
              onChange={(e) => setInstagram(e.target.value)}
              value={instagram}
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
              name="facebook"
              onChange={(e) => setFacebook(e.target.value)}
              value={facebook}
              placeholder="Facebook"
              className="bg-gray-200 text-gray-400 py-2 px-8 w-full rounded my-2 focus:outline-none"
            />
          </label>

          <input
            type="file"
            className="my-2"
            onChange={(e) => setImage(e.target.files[0])}
            accept="image/*"
          />
          <button
            type="submit"
            onClick={() => alert(1)}
            disabled={bio === ""}
            className="bg-green-500 w-full my-5 py-2 rounded shadow-md my-3 text-white"
          >
            {loading && (
              <span className="absolute right-0 inset-y-0 flex items-center pr-3">
                <AiOutlineLoading
                  className="h-5 w-5 text-gray-100 animate-spin"
                  aria-hidden="true"
                />
              </span>
            )}
            CREATE PROFILE
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
