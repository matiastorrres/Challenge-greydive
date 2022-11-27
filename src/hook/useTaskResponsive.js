import { useEffect } from "react";

export const useTaskResponsive = () => {
  useEffect(() => {
    let breakpoint = window.matchMedia("(min-width: 800px)");
    const $TaskDesk = document.getElementById("TaskDesk");
    const $TaskPhone = document.getElementById("TaskPhone");
    let responsive;
    function responsiveMedia() {
      responsive = (breakpoint) => {
        if (breakpoint.matches) {
          $TaskDesk.style.display = "block";
          $TaskPhone.style.display = "none";
        } else {
          $TaskDesk.style.display = "none";
          $TaskPhone.style.display = "block";
        }
      };
      responsive(breakpoint);
      breakpoint.addEventListener("change", responsive);
    }
    responsiveMedia();

    return () => breakpoint.removeEventListener("change", responsive);
  }, []);
};
