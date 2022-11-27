import TaskDesk from "../TaskDesk/TaskDesk";
import TaskPhone from "../TaskPhone/TaskPhone";
import { useTaskResponsive } from "@/hook/useTaskResponsive";

export default function Task({ testData }) {
  useTaskResponsive();

  return (
    <>
      <TaskDesk testData={testData} />
      <TaskPhone testData={testData} />
    </>
  );
}
