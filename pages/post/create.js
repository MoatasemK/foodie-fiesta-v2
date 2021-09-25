import React, { useState, useEffect } from "react";
import Editor from "../../components/Editor.component";
import { AiFillYoutube, AiFillInstagram } from "react-icons/ai";
import ImageDropzone from "../../components/posts/new-post/ImageDropZone";
import ThumbnailsDND from "../../components/posts/new-post/ThumbnailDND";

const Create = () => {
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [images, setImages] = useState([]);

  const [data, setData] = useState("");

  const handleImageChange = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      const newImage = e.target.files[i];

      setImages((prevState) => [...prevState, newImage]);
    }
  };

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-green-100 flex flex-col py-10 items-center">
      <h2 className="text-green-600 text-4xl text-center font-semibold">
        Add your item
      </h2>
      <div className="text-center my-6">
        <input
          type="text"
          className="focus:outline-none rounded w-full py-2 px-2 border-green-500"
          placeholder="Title"
        />

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
              type="instagram"
              placeholder="Instagram link"
              className="bg-white text-gray-400 py-2 px-8 w-full rounded my-2 focus:outline-none"
            />
          </label>
        </div>

        <ImageDropzone setImages={setImages} />
        {images?.length > 0 && (
          <ThumbnailsDND images={images} setImages={setImages} />
        )}

        <div className="my-8">
          <h3 className="text-left my-1 font-semibold text-green-600 text-lg">
            Select your category
          </h3>
          <div className="grid grid-cols-5 gap-x-2 text-left">
            <div>
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
                className="form-checkbox mx-1 text-green-500"
              />
              <label for="vehicle1" className="text-green-700">
                Veg
              </label>
            </div>

            <div>
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
                className="mx-1"
              />
              <label for="vehicle1" className="text-green-700">
                Non Veg
              </label>
            </div>

            <div>
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
                className="mx-1"
              />
              <label for="vehicle1" className="text-green-700">
                Chinese
              </label>
            </div>

            <div>
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
                className="mx-1"
              />
              <label for="vehicle1" className="text-green-700">
                Indian
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
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
                id="vehicle1"
                name="vehicle1"
                value="Bike"
                className="mx-1"
              />
              <label for="vehicle1" className="text-green-700">
                Healthy
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
                className="mx-1"
              />
              <label for="vehicle1" className="text-green-700">
                Dessert
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
                className="mx-1"
              />
              <label for="vehicle1" className="text-green-700">
                Spicy
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
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
                name="vehicle1"
                value="Bike"
                className="mx-1"
              />
              <label for="vehicle1" className="text-green-700">
                Made with love
              </label>
            </div>
          </div>
        </div>

        <Editor
          name="description"
          onChange={(data) => {
            setData(data);
          }}
          editorLoaded={editorLoaded}
        />

        <button className="bg-green-600 py-2 mt-4 w-full text-white shadow-md rounded">
          CREATE POST
        </button>
      </div>
    </div>
  );
};

export default Create;
