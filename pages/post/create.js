import React, { useState, useEffect } from "react";
import Editor from "../../components/Editor.component";
import { AiFillYoutube, AiFillInstagram } from "react-icons/ai";
import ImageDropzone from "../../components/posts/new-post/ImageDropZone";
import ThumbnailsDND from "../../components/posts/new-post/ThumbnailDND";

const Create = () => {
  const [editorLoaded, setEditorLoaded] = useState(false);

  const [title, setTitle] = useState("");
  const [youtube, setYoutube] = useState("");
  const [instagram, setInsagram] = useState("");
  const [category, setCategory] = useState([]);
  const [images, setImages] = useState([]);
  const [data, setData] = useState("");

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

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(images);
    console.log(title, youtube, instagram, category, data);
  };

  return (
    <div className="min-h-screen bg-green-100 flex flex-col py-10 items-center">
      <h2 className="text-green-600 text-4xl text-center font-semibold">
        Add your item
      </h2>
      <form className="text-center my-6" onSubmit={onSubmit}>
        <input
          type="text"
          className="focus:outline-none rounded w-full py-2 px-2 border-green-500"
          placeholder="Title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
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
              <label for="vehicle1" className="text-green-700">
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
              <label for="vehicle1" className="text-green-700">
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

        <Editor
          name="description"
          onChange={(data) => {
            setData(data);
          }}
          editorLoaded={editorLoaded}
        />

        <button
          type="submit"
          className="bg-green-600 py-2 mt-4 w-full text-white shadow-md rounded"
        >
          CREATE POST
        </button>
      </form>
    </div>
  );
};

export default Create;
