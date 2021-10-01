import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import cookie from "js-cookie";
import { useRouter } from "next/router";
import { useMutation } from "react-query";
import { toast, ToastContainer } from "react-toastify";
import {
  AiFillYoutube,
  AiFillInstagram,
  AiFillDelete,
  AiOutlineLoading,
} from "react-icons/ai";
import baseURL from "../../utils/baseURL";
import { BiAddToQueue } from "react-icons/bi";
import upload from "../../utils/upload.utils";

const Create = ({ user }) => {
  const router = useRouter();

  const modules = {
    toolbar: [["bold", "italic", "underline", "strike", "blockquote"]],
  };

  const formats = ["bold", "italic", "underline", "strike", "blockquote"];

  const [items, setItems] = useState([
    {
      title: "",
      image: null,
      url: "",
      description: "",
    },
  ]);

  const [youtube, setYoutube] = useState("");
  const [instagram, setInsagram] = useState("");
  const [category, setCategory] = useState([]);
  const [info, setInfo] = useState("");

  const addToCategory = (value) => {
    setCategory([...category, value]);
  };

  const removeTrackCategory = (value) => {
    setCategory(category.filter((val) => val !== value));
  };

  const onChangeCategory = (e) => {
    if (category.includes(e.currentTarget.value)) {
      removeTrackCategory(e.currentTarget.value);
    } else {
      addToCategory(e.currentTarget.value);
    }
  };

  const addItems = () => {
    const values = [...items];
    values.push({ value: null });
    setItems(values);
  };

  const removeItems = (index) => {
    const values = [...items];
    values.splice(index, 1);
    setItems(values);
  };

  const onItemChange = (i, event) => {
    const values = [...items];

    if (event.target.name === "description") {
      values[i].description = event.target.value;
    }

    if (event.target.name === "title") {
      values[i].title = event.target.value;
    }

    if (event.target.files) {
      values[i].image = event.target.files[0];
    }
    setItems(values);
  };

  const mutation = useMutation(async () => {
    console.log("items", items);
    await axios.post(
      `${baseURL}/api/posts/`,
      { items, youtube, instagram, info, category },
      {
        headers: {
          Authorization: cookie.get("token"),
        },
      }
    );
  });

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      items.map((item) => {
        upload(item.image)
          .then((data) => {
            item.url = data;
          })
          .catch((err) => console.log(err));
      });

      await mutation.mutateAsync();
      toast.success("Post uploaded successfully");
      router.push("/");
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.msg || "Please recheck your inputs");
    }
  };

  return (
    <div className="min-h-screen bg-green-100 flex flex-col py-10 items-center">
      <ToastContainer />
      <h2 className="text-green-600 text-4xl text-center font-semibold">
        Add your item
      </h2>
      <form className="text-center my-6" onSubmit={onSubmit}>
        {items.map((item, index) => (
          <div className="my-8">
            <input
              type="text"
              className="focus:outline-none rounded w-full py-2 px-2 my-3 border-green-500"
              placeholder="Title"
              name="title"
              value={item.title}
              onChange={(e) => onItemChange(index, e)}
            />

            <textarea
              name="description"
              placeholder="Description"
              value={item.description}
              onChange={(e) => onItemChange(index, e)}
              className="focus:outline-none bg-white mb-3 px-2 py-4 w-full h-full"
            />

            <div className="text-left">
              <h3 className=" text-green-600 text-lg my-1">
                Choose your image
              </h3>
              <input type="file" onChange={(e) => onItemChange(index, e)} />
            </div>
            <div className="text-left my-2">
              <button
                onClick={() => addItems()}
                className="bg-green-600  px-4 w-1/8  py-2 mr-2 rounded shadow-md text-white font-semibold text-md"
              >
                Add Step
              </button>
              <button
                onClick={() => removeItems(index)}
                className="bg-green-600 px-4 w-1/8 py-2 rounded shadow-md text-white font-semibold text-md"
              >
                Delete Step
              </button>
            </div>
          </div>
        ))}

        <div className="grid grid-cols-2 gap-x-4 my-4">
          <label
            htmlFor="name"
            className="relative text-red-400 focus-within:text-red-400 block"
          >
            <AiFillYoutube className="pointer-events-none w-6 h-6  absolute top-1/2 transform -translate-y-1/2 left-1" />
            <input
              type="text"
              name="youtube"
              placeholder="Youtube link"
              value={youtube}
              onChange={(e) => setYoutube(e.target.value)}
              className="bg-white text-gray-400 py-2 px-8 w-full rounded my-2 focus:outline-none"
            />
          </label>

          <label
            htmlFor="name"
            className="relative text-pink-400 focus-within:text-pink-400 block"
          >
            <AiFillInstagram className="pointer-events-none w-6 h-6  absolute top-1/2 transform -translate-y-1/2 left-1" />
            <input
              type="text"
              name="instagram"
              value={instagram}
              onChange={(e) => setInsagram(e.target.value)}
              placeholder="Instagram link"
              className="bg-white text-gray-400 py-2 px-8 w-full rounded my-2 focus:outline-none"
            />
          </label>
        </div>

        <div className="my-8">
          <h3 className="text-left my-1 font-semibold text-green-600 text-lg">
            Select your category
          </h3>
          <div className="grid grid-cols-5 gap-x-2 text-left">
            <div>
              <input
                type="checkbox"
                id="veg"
                name="veg"
                value="veg"
                onClick={onChangeCategory}
                className="form-checkbox mx-1 text-green-500"
              />
              <label for="vehicle1" className="text-green-700">
                Veg
              </label>
            </div>

            <div>
              <input
                type="checkbox"
                id="non-veg"
                name="nonveg"
                value="nonveg"
                onClick={onChangeCategory}
                className="mx-1"
              />
              <label htmlFor="vehicle1" className="text-green-700">
                Non Veg
              </label>
            </div>

            <div>
              <input
                type="checkbox"
                id="chinese"
                name="chinese"
                value="chinese"
                onClick={onChangeCategory}
                className="mx-1"
              />
              <label htmlFor="vehicle1" className="text-green-700">
                Chinese
              </label>
            </div>

            <div>
              <input
                type="checkbox"
                id="Indian"
                name="indian"
                value="indian"
                onClick={onChangeCategory}
                className="mx-1"
              />
              <label for="vehicle1" className="text-green-700">
                Indian
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="Italian"
                name="italian"
                value="italian"
                onClick={onChangeCategory}
                className="mx-1"
              />
              <label for="vehicle1" className="text-green-700">
                {" "}
                Italian
              </label>
            </div>

            <br />
          </div>

          <div className="grid grid-cols-5 gap-x-2 text-left">
            <div>
              <input
                type="checkbox"
                id="healthy"
                name="healthy"
                value="healthy"
                onClick={onChangeCategory}
                className="mx-1"
              />
              <label for="vehicle1" className="text-green-700">
                Healthy
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="dessert"
                name="dessert"
                value="dessert"
                onClick={onChangeCategory}
                className="mx-1"
              />
              <label for="vehicle1" className="text-green-700">
                Dessert
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="Spicy"
                name="spicy"
                value="spicy"
                onClick={onChangeCategory}
                className="mx-1"
              />
              <label for="vehicle1" className="text-green-700">
                Spicy
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="sweet"
                name="sweet"
                value="sweet"
                onClick={onChangeCategory}
                className="mx-1"
              />
              <label for="vehicle1" className="text-green-700">
                Sweet
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="vehicle1"
                name="made-with-love"
                value="made-with-love"
                onClick={onChangeCategory}
                className="mx-1"
              />
              <label for="vehicle1" className="text-green-700">
                Made with love
              </label>
            </div>
          </div>
        </div>
        <ReactQuill
          theme="snow"
          value={info}
          onChange={(info) => setInfo(info)}
          className="bg-white mb-8 w-full h-full"
          modules={modules}
          formats={formats}
        />

        <button
          type="submit"
          disabled={mutation.isLoading}
          className="bg-green-600 py-2 mt-4 w-full text-white shadow-md rounded"
        >
          {mutation.isLoading ? (
            <AiOutlineLoading className="h-5 w-5 mr-2 animate-spin" />
          ) : (
            "CREATE POST"
          )}
        </button>
      </form>
    </div>
  );
};

export default Create;
