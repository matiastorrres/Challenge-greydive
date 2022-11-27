import { useEffect, useState } from "react";
import { getData } from "../services/data.service";
import { adapterData } from "../adapters/adapterData";

export function useGetTest(params) {
  const [testData, setTestData] = useState({});

  useEffect(() => {
    const getdata = async () => {
      try {
        const res = await getData();
        const adapter = adapterData(res);
        setTestData(adapter[params]);
      } catch (error) {}
    };
    getdata();
  }, [params]);
  return { testData };
}
