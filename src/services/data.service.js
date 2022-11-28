import datatabase from "../data/db.json";
export const getData = async () => {
  const data = datatabase;
  return data;
};
