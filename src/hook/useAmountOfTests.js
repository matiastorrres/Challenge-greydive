import { useEffect, useState } from "react";
import { getData } from "../services/data.service";

export function useAmountOfTests() {
  const [amountOfTests, setAmountOfTests] = useState([]);

  useEffect(() => {
    const getTest = async () => {
      const res = await getData();
      const tests = [];
      for (let i = 1; i <= res.length; i++) {
        tests.push(i);
      }
      setAmountOfTests(tests);
    };
    getTest();
  }, []);
  return { amountOfTests };
}
