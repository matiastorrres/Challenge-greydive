import { useAcordeonResposive } from "@/hook/useAcordeonResposive";
import style from "./Acordeon.module.css";

export default function Acordeon({ text, title }) {
  useAcordeonResposive();
  return (
    <section className={style.content}>
      <div className={style.acordeon} id="acordeon">
        <div className={style.acordeon__item}>
          <input type="checkbox" id="item" />
          <label className={style.acordeon__title} htmlFor="item">
            &#8595; {title} &#8595;
          </label>
          <p
            dangerouslySetInnerHTML={{ __html: text }}
            className={style.acordeon__contenido}
          />
        </div>
      </div>
    </section>
  );
}
