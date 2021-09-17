import React, { useState, useEffect } from "react";
import Editor from "../components/Editor.component";

const Create = () => {
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [data, setData] = useState("");

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col py-10 items-center">
      <div className="bg-green-100 w-3/4  border-2 border-green-500 py-5 rounded shadow-sm">
        <h2 className="text-green-500 text-3xl text-center font-semibold">
          Add your item
        </h2>
        <div className="text-center my-7">
          <input
            type="text"
            className="border-2 focus:outline-none rounded w-3/4 py-1 px-2 border-green-500"
            placeholder="Title"
          />

          <Editor
            name="description"
            onChange={(data) => {
              setData(data);
            }}
            editorLoaded={editorLoaded}
          />
          <button className="bg-green-500 py-2 w-3/4 text-white shadow-md rounded">
            CREATE POST
          </button>
        </div>
      </div>
    </div>
  );
};

export default Create;
