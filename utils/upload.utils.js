import axios from "axios";

const uploadPic = async (media) => {
  try {
    const form = new FormData();
    form.append("file", media);
    form.append("upload_preset", "foodie");
    form.append("cloud_name", "dsdhcbxrf");

    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/dsdhcbxrf/image/upload",
      form
    );
    return res.data.url;
  } catch (error) {
    console.log(error);
  }
};

export default uploadPic;
