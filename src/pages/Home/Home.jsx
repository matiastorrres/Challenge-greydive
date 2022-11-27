import { Link } from "react-router-dom";
import { useAmountOfTests } from "@/hook/useAmountOfTests";
import style from "./Home.module.css";

export default function Home() {
  const { amountOfTests } = useAmountOfTests();

  return (
    <main className={style.content_main}>
      <h2>Lista de test</h2>
      <ul className={style.content_list}>
        {amountOfTests &&
          amountOfTests.map((el) => (
            <Link to={`/${el}`} key={el}>
              <li className={style.content_test}>Test {el}</li>
            </Link>
          ))}
      </ul>
    </main>
  );
}
