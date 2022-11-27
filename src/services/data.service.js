import axios from "axios";
export const getData = async () => {
  try {
    const { data } = await axios("db.json");
    return data;
  } catch (error) {
    console.log(error);
  }
};
