import style from "./TaskDesk.module.css";

export default function TaskDesk({ testData }) {
  return (
    <section className={style.content_tasks} id="TaskDesk">
      <h3>Escenario:</h3>
      <p>{testData.scenery}</p>
      {testData.tasks &&
        testData.tasks.map((el, index) => (
          <div className={style.content_task} key={el.task}>
            <p> Tarea numero: {index + 1}</p>
            <p>Duracion de tarea: {el.taskDuration}</p>
            <p
              dangerouslySetInnerHTML={{
                __html: el.task.replace(/\\n/g, "<br>"),
              }}
            />
          </div>
        ))}
    </section>
  );
}
