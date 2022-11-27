import { useState } from "react";
import style from "./TaskPhone.module.css";

export default function TaskPhone({ testData }) {
  const [taskNumber, setTaskNumber] = useState(0);

  const handleNextTask = () => {
    if (taskNumber + 1 <= testData.tasks.length - 1)
      setTaskNumber((prev) => prev + 1);
  };
  const handlePrevTask = () => {
    if (taskNumber + 1 > 1) setTaskNumber((prev) => prev - 1);
  };

  return (
    <section className={style.content_tasks} id="TaskPhone">
      <h3>Escenario</h3>
      <p>{testData.scenery}</p>
      <h4>{`Tarea ${taskNumber + 1}`}</h4>
      <p>
        {testData.tasks &&
          `Duración de la tarea: ${testData.tasks[taskNumber].taskDuration}`}
      </p>
      <p
        className={style.content_task}
        dangerouslySetInnerHTML={
          testData.tasks && {
            __html: testData.tasks[taskNumber].task.replace(/\\n/g, "<br>"),
          }
        }
      ></p>
      <button onClick={handlePrevTask}>Tarea anterior </button>
      <button onClick={handleNextTask}>Tarea siguiente</button>
    </section>
  );
}
