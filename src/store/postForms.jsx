import axios from "axios";
const postFormsData = async (formData) => {
  try {
    const response = await axios.post("http://89.111.154.70:9090/forms/", formData);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export default postFormsData;
