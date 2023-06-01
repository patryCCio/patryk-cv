export class AboutHistory {
  constructor(document, window) {
    this.document = document;
    this.window = window;
    this.isActive;

    this.renderAboutHistory();
  }

  setIsActive(isActive) {
    this.isActive = isActive;
  }

  renderAboutHistory() {
    const setActivity = (classOfElement, scrollPercentage, percentage) => {
      if (scrollPercentage > percentage) {
        this.document.querySelector(classOfElement).classList.add("active");
      } else {
        this.document.querySelector(classOfElement).classList.remove("active");
      }
    };

    let scrollPercentageHistory = 0;

    var path = document.querySelector(".history-cls1");
    var pathLength = path.getTotalLength();
    path.style.strokeDasharray = pathLength + " " + pathLength;
    path.style.strokeDashoffset = pathLength;

    path.getBoundingClientRect();

    const aboutHistory = this.document.querySelector(".about-history");

    this.window.addEventListener("scroll", () => {
      if (this.isActive) {
        const clientHeight = this.document.documentElement.clientHeight;

        const aboutHistoryTop = aboutHistory.getBoundingClientRect().top;
        const aboutHistoryHeight = aboutHistory.offsetHeight;

        scrollPercentageHistory =
          (aboutHistoryTop * -1) / (aboutHistoryHeight - clientHeight / 2);

        if (scrollPercentageHistory <= 1.1) {
          var drawlength = pathLength * scrollPercentageHistory;
          path.style.strokeDashoffset = pathLength - drawlength;

          setActivity(".his-1", scrollPercentageHistory, 0.12);
          setActivity(".his-2", scrollPercentageHistory, 0.18);
          setActivity(".his-3", scrollPercentageHistory, 0.25);
          setActivity(".his-4", scrollPercentageHistory, 0.3);
          setActivity(".his-5", scrollPercentageHistory, 0.36);
          setActivity(".his-6", scrollPercentageHistory, 0.41);
          setActivity(".his-7", scrollPercentageHistory, 0.49);
          setActivity(".his-8", scrollPercentageHistory, 0.54);
          setActivity(".his-9", scrollPercentageHistory, 0.6);
          setActivity(".his-10", scrollPercentageHistory, 0.66);
          setActivity(".his-11", scrollPercentageHistory, 0.72);
          setActivity(".his-12", scrollPercentageHistory, 0.79);
          setActivity(".his-13", scrollPercentageHistory, 0.85);
          setActivity(".his-14", scrollPercentageHistory, 0.92);
        }
      }
    });
  }
}
