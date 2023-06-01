import anime from "animejs";

export class Contact {
  constructor(document, window) {
    this.document = document;
    this.window = window;
    this.isActive = false;
    this.render();
  }

  setIsActive(isActive) {
    this.isActive = isActive;
  }

  render() {
    const contact = this.document.querySelector(".contact");

    const allPolylinesSmall = this.document.querySelectorAll(
      "#processor #smaller polyline"
    );

    const allPolylinesBigger = this.document.querySelectorAll(
      "#processor #bigger polyline"
    );

    const allCircleSmall = this.document.querySelectorAll(
      "#processor #smaller circle"
    );

    const allCircleBigger = this.document.querySelectorAll(
      "#processor #bigger circle"
    );

    const rectangleSmall = this.document.querySelector(
      "#processor #smaller rect"
    );

    const rectangleBigger = this.document.querySelector(
      "#processor #bigger rect"
    );

    const h2Left = this.document.querySelector("#contact-h2-left");
    const h2Right = this.document.querySelector("#contact-h2-right");
    const divLeft = this.document.querySelector(".contact-left");
    const divRight = this.document.querySelector(".contact-right");

    const contactInfoLeft = this.document.querySelector(".contact-info-left");
    const contactInfoRight = this.document.querySelector(".contact-info-right");

    allPolylinesSmall.forEach((el) => {
      const size = el.getTotalLength();
      el.style.strokeDasharray = size;
      el.style.strokeDashoffset = size;
    });

    allPolylinesBigger.forEach((el) => {
      const size = el.getTotalLength();
      el.style.strokeDasharray = size;
      el.style.strokeDashoffset = size;
    });

    allCircleSmall.forEach((el) => {
      el.style.opacity = 0;
      el.style.strokeDasharray = 14;
      el.style.strokeDashoffset = 14;
    });

    allCircleBigger.forEach((el) => {
      el.style.opacity = 0;
      el.style.strokeDasharray = 21.5;
      el.style.strokeDashoffset = 21.5;
    });

    rectangleSmall.style.strokeDasharray = rectangleSmall.getTotalLength();
    rectangleSmall.style.strokeDashoffset = rectangleSmall.getTotalLength();

    rectangleBigger.style.strokeDasharray = rectangleBigger.getTotalLength();
    rectangleBigger.style.strokeDashoffset = rectangleBigger.getTotalLength();

    const svg = anime.timeline({
      easing: "linear",
      duration: 2000,
      loop: true,
    });

    let scrollPercentage = 0;

    svg
      .add({
        targets: rectangleSmall,
        strokeDashoffset: 0,
        duration: 1000,
      })
      .add({
        targets: allPolylinesSmall,
        delay: function (el, i) {
          return i * 50;
        },
        strokeDashoffset: 0,
        duration: 1500,
      })
      .add({
        targets: allCircleSmall,
        strokeDashoffset: 0,
        duration: 500,
        opacity: 1,
      })
      .add({
        targets: rectangleSmall,
        delay: 1000,
        strokeDashoffset: rectangleSmall.getTotalLength(),
        duration: 2000,
      })
      .add({
        targets: allPolylinesSmall,
        strokeDashoffset: function (el) {
          return -el.getTotalLength();
        },
        duration: 1500,
      })
      .add({
        targets: allCircleSmall,
        strokeDashoffset: function (el) {
          return -14;
        },
        opacity: 0,
        duration: 500,
      })

      .add(
        {
          targets: rectangleBigger,
          strokeDashoffset: 0,
          duration: 1000,
        },
        "-=1500"
      )
      .add({
        targets: allPolylinesBigger,
        strokeDashoffset: 0,
        delay: function (el, i) {
          return i * 50;
        },
        duration: 1500,
      })
      .add({
        targets: allCircleBigger,
        strokeDashoffset: 0,
        duration: 500,
        opacity: 1,
      })
      .add({
        targets: rectangleBigger,
        delay: 2000,
        strokeDashoffset: rectangleBigger.getTotalLength(),
        duration: 1000,
      })
      .add({
        targets: allPolylinesBigger,
        delay: 1000,
        strokeDashoffset: function (el) {
          return -el.getTotalLength();
        },
        duration: 1500,
      })
      .add({
        targets: allCircleBigger,
        strokeDashoffset: function (el) {
          return -21;
        },
        opacity: 0,
        duration: 500,
      });

    const info = {
      first: 0,
      second: 0,
      helper: 0,
    };

    const contactAnimations = anime.timeline({
      duration: 1500,
      delay: 1000,
      autoplay: false,
    });

    contactAnimations
      .add({
        targets: contactInfoRight,
        translateX: ["100vw", 0],
        opacity: [0, 1],
      })
      .add({
        targets: contactInfoLeft,
        translateX: ["-100vw", 0],
        opacity: [0, 1],
      })
      .add({
        targets: this.document.querySelector("#contact-line"),
        width: "50%",
      })
      .add({
        targets: this.document.querySelectorAll(".social"),
        delay: function (el, i) {
          return i * 100;
        },
        translateX: [-30, 0],
        opacity: [0, 1],
      });

    const animationScroll = anime({
      targets: info,
      keyframes: [
        {
          delay: 100,
          first: -105,
          second: 105,
        },
      ],
      elasticity: 10,
      easing: "linear",
      autoplay: false,
    });

    const initScroll = () => {
      if (this.isActive) {
        const clientHeight = this.document.documentElement.clientHeight;

        const contactTop = contact.getBoundingClientRect().top;
        const contactHeight = contact.offsetHeight;

        scrollPercentage = (contactTop * -1) / (contactHeight - clientHeight);

        animationScroll.seek(scrollPercentage * animationScroll.duration);

        if (this.window.innerWidth >= 1024) {
          h2Left.style.transform = `translate(${info.first}vw, 0)`;
          divLeft.style.transform = `translate(${info.first}vw, 0)`;

          h2Right.style.transform = `translate(${info.second}vw, 0)`;
          divRight.style.transform = `translate(${info.second}vw, 0)`;
        } else {
          h2Left.style.transform = `translate(0, ${info.first}vh)`;
          divLeft.style.transform = `translate(0, ${info.first}vh)`;

          h2Right.style.transform = `translate(0, ${info.second}vh)`;
          divRight.style.transform = `translate(0, ${info.second}vh)`;
        }

        if (scrollPercentage > 0.9) {
          svg.play();
          contactAnimations.play();
        } else {
          svg.restart();
          svg.pause();

          contactAnimations.restart();
          contactAnimations.pause();
        }
      }
    };

    this.window.addEventListener("scroll", initScroll);
  }
}
