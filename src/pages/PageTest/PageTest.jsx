import Acordeon from "./components/Acorderon/Acordeon";
import Task from "./components/Task/Task";
import { useGetTest } from "@/hook/useGetTest";
import { useParams } from "react-router-dom";
import style from "./PageTest.module.css";
import { NotFound } from "@/components/NotFound/NotFound";

export default function PageTest() {
  const { test } = useParams();
  const { testData } = useGetTest(test - 1);

  if (!testData) return <NotFound />;

  return (
    <section className={style.content_test}>
      <h3 className={style.content_title}> Cliente: {testData.client}</h3>
      <video
        controls
        src={testData.videoLink}
        className={style.content_video}
      />
      <article className={style.content_taskAndAcordeon}>
        <Task testData={testData} />
        <Acordeon text={testData.transcription} title={"Transcripción"} />
      </article>
    </section>
  );
}
