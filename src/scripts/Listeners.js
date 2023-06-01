import { Language } from "./Language.js";
import anime from "animejs";
import { About } from "./About.js";
import { Home } from "./Home.js";
import { AboutHistory } from "./AboutHistory.js";
import { Knowledge } from "./Knowledge.js";
import { Portfolio } from "./Portfolio.js";
import { Contact } from "./Contact.js";

export class Listeners {
  constructor(window, document) {
    this.window = window;
    this.document = document;
    this.home = new Home(document, window);
    this.about = new About(document, window);
    this.aboutHistory = new AboutHistory(document, window);
    this.knowledge = new Knowledge(document, window);
    this.portfolio = new Portfolio(document, window);
    this.contact = new Contact(document, window);

    this.actualLanguage = "pl";

    this.lanPL = document.querySelector(".pl");
    this.lanENG = document.querySelector(".eng");
    this.windowSize = window.innerWidth;

    this.navbar = document.querySelector("nav");
    this.burger = document.querySelector(".burger-wrapper");
    this.elements = document.querySelectorAll(".nav-li");
    this.sections = document.querySelectorAll(".section");

    this.mobile;

    this.sectionInfo = [];

    this.initialStatements();
    this.renderListeners();
    this.initScroll(this);
  }

  setWindowSize(size) {
    this.windowSize = size;
  }

  getWindowSize() {
    return this.windowSize;
  }

  setActualLanguage(language) {
    this.actualLanguage = language;
  }

  getActualLanguage() {
    return this.actualLanguage;
  }

  setMobile() {
    if (this.getWindowSize() >= 1024) {
      this.mobile = false;
    } else {
      this.mobile = true;
    }
  }

  static getMobile() {
    return this.mobile;
  }

  setSectionInfo() {
    const array = [];
    this.sections.forEach((el) => {
      const object = {
        height: el.clientHeight,
        top: el.getBoundingClientRect().top,
        bottom: el.getBoundingClientRect().bottom,
      };

      array.push(object);
    });

    this.sectionInfo = array;
  }

  initialStatements() {
    Language.initLanguage("pl", this.lanPL, this.lanENG);
    this.setMobile();
    this.setSectionInfo();

    this.navbar = document.querySelector("nav");
    this.burger = document.querySelector(".burger-wrapper");

    this.burger.addEventListener("click", () => {
      this.navbar.classList.toggle("active");
      this.burger.classList.toggle("active");
    });

    anime({
      targets: this.elements,
      translateX: [-300, 0],
      opacity: [0, 1],
      easing: "linear",
      duration: 300,
      delay: anime.stagger(100),
    });
  }

  initScroll(that) {
    this.setSectionInfo();
    let actualIndex;
    that.sectionInfo.forEach((el, index) => {
      if (el.bottom >= 300 && el.top - 300 <= 0) {
        actualIndex = index;
      }
    });

    that.elements.forEach((el, index) => {
      if (index === actualIndex) {
        el.classList.add("active");
      } else {
        el.classList.remove("active");
      }
    });

    if (actualIndex === 0) {
      this.home.animationsSet("play");
    } else {
      this.home.animationsSet("pause");
    }

    if (actualIndex === 1) {
      this.about.setIsActive(true, "play");
    } else {
      this.about.setIsActive(false, "pause");
    }

    if (actualIndex === 2) {
      this.aboutHistory.setIsActive(true);
    } else {
      this.aboutHistory.setIsActive(false);
    }

    if (actualIndex === 3) {
      this.knowledge.setIsActive(true);
    } else {
      this.knowledge.setIsActive(false);
    }

    if (actualIndex === 4) {
      this.portfolio.setIsActive(true);
    } else {
      this.portfolio.setIsActive(false);
    }

    if (actualIndex === 5) {
      this.contact.setIsActive(true);
    } else {
      this.contact.setIsActive(false);
    }
  }

  initResize(that) {
    that.setSectionInfo();
    that.setWindowSize(that.window.innerWidth);
  }

  renderListeners() {
    this.lanPL.addEventListener("click", () => {
      if (this.actualLanguage !== "pl") {
        Language.initLanguage("pl", this.lanPL, this.lanENG);
        this.setActualLanguage("pl");
        // initElements();
      }
    });

    this.lanENG.addEventListener("click", () => {
      if (this.actualLanguage !== "eng") {
        Language.initLanguage("eng", this.lanPL, this.lanENG);
        this.setActualLanguage("eng");
        // initElements();
      }
    });

    this.window.addEventListener("scroll", () => this.initScroll(this));
    this.window.addEventListener("resize", () => this.initResize(this));

    this.initScroll(this);
    this.initResize(this);
  }
}
