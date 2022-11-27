import { Link } from "react-router-dom";
import style from "./Header.module.css";
export function Header() {
  return (
    <header className={style.header_container}>
      <Link to="/">
        <h1 className={style.header_title}>Greydive</h1>
      </Link>
    </header>
  );
}
