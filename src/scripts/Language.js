import { WORDS } from "./WORDS.js";

export class Language {

  static initLanguage(language, lanPL, lanENG) {
    function addSpan(string, el) {
      for (let x = 0; x < string.length; x++) {
        const span = document.createElement("span");
        if (string[x] === " ") {
          span.innerHTML = "&nbsp;";
        } else {
          span.innerHTML = string[x];
        }
        el.element.appendChild(span);
      }
    }

    WORDS.forEach((el, index) => {
      el.element.innerHTML = "";
      if (language === "pl") {
        if (el.type === "spans") {
          addSpan(el.pl, el);
        } else {
          el.element.innerHTML = el.pl;
        }
        lanPL.classList.add("active");
        lanENG.classList.remove("active");
      } else {
        if (el.type === "spans") {
          addSpan(el.eng, el);
        } else {
          el.element.innerHTML = el.eng;
        }
        lanPL.classList.remove("active");
        lanENG.classList.add("active");
      }
    });
  }
}
