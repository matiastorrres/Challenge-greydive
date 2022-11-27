import { useEffect } from "react";

export const useAcordeonResposive = () => {
  useEffect(() => {
    let breakpoint = window.matchMedia("(min-width: 800px)");
    const $item = document.getElementById("item");
    let responsive;
    function responsiveMedia() {
      responsive = (breakpoint) => {
        if (breakpoint.matches) {
          $item.checked = true;
          $item.disabled = true;
        } else {
          $item.checked = false;
          $item.disabled = false;
        }
      };
      responsive(breakpoint);
      breakpoint.addEventListener("change", responsive);
    }
    responsiveMedia();

    return () => breakpoint.removeEventListener("change", responsive);
  }, []);
};
