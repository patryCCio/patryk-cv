import anime from "animejs";
import { Listeners } from "./Listeners";

export class Home {
  constructor(document, window) {
    this.animations = [];
    this.window = window;
    this.avatar = document.querySelector("#avatar");
    this.helloWorldSpans = document.querySelectorAll("#hello-world span");
    this.name = document.querySelectorAll("#name");
    this.nameSurname = document.querySelectorAll("#namesurname");

    this.initCount = 0;

    this.homeTopLeft = document.querySelector("#homeTopLeft");
    this.homeTopRight = document.querySelector("#homeTopRight");

    this.homeBlob1 = document.querySelector(".home-blob1");
    this.homeBlob2 = document.querySelector(".home-blob2");
    this.homeBlob3 = document.querySelector(".home-blob3");
    this.homeBlob4 = document.querySelector(".home-blob4");
    this.homeBlob5 = document.querySelector(".home-blob5");
    this.homeBlob6 = document.querySelector(".home-blob6");
    this.homeBlob7 = document.querySelector(".home-blob7");
    this.homeBlob8 = document.querySelector(".home-blob8");
    this.homeBlob9 = document.querySelector(".home-blob9");
    this.homeBlob10 = document.querySelector(".home-blob10");
    this.homeBlob11 = document.querySelector(".home-blob11");
    this.homeBlob12 = document.querySelector(".home-blob12");
    this.homeBlob13 = document.querySelector(".home-blob13");
    this.homeBlob14 = document.querySelector(".home-blob14");
    this.homeBlob15 = document.querySelector(".home-blob15");
    this.homeBlob16 = document.querySelector(".home-blob16");
    this.render();
  }

  getAnimations() {
    return this.animations;
  }

  animationsSet(state) {
    if (state === "play") {
      this.animations.forEach((el) => el.play());
    } else {
      this.animations.forEach((el) => el.pause());
    }
  }

  setAnimations(animations) {
    this.animations = animations;
  }

  initMoveForElements(that) {
    that.animations.push(
      anime({
        targets: that.homeTopLeft,
        duration: 5000,
        delay: 0,
        easing: "linear",
        translateX: [
          {
            value: 20,
          },
          {
            value: -20,
          },
        ],
        translateY: [
          {
            value: -20,
          },
          {
            value: 20,
          },
        ],
        direction: "alternate",
        loop: true,
      })
    );

    that.animations.push(
      anime({
        targets: that.homeTopRight,
        duration: 5000,
        delay: 0,
        easing: "linear",
        translateX: [
          {
            value: 20,
          },
          {
            value: -20,
          },
        ],
        translateY: [
          {
            value: -20,
          },
          {
            value: 20,
          },
        ],
        direction: "alternate",
        loop: true,
      })
    );
  }

  getRandomInt(min, max) {
    return Math.random() * (max - min) + min;
  }

  initWaves() {
    this.animations.push(
      anime({
        targets: this.homeBlob1,
        d: [
          {
            value:
              "M0 918C-73.6 850 -147.1 781.9 -249.7 768.5C-352.3 755 -483.9 796.1 -539.6 742.7C-595.3 689.3 -575.1 541.3 -627 455.5C-678.9 369.8 -803 346.1 -863.6 280.6C-924.1 215 -921 107.5 -918 0L0 0Z",
          },
          {
            value:
              "M0 918C-99 912.9 -198 907.8 -283.7 873.1C-369.3 838.4 -441.7 774.1 -518.4 713.6C-595.2 653 -676.3 596.3 -712.7 517.8C-749.1 439.4 -740.8 339.3 -767.5 249.4C-794.2 159.5 -856.1 79.7 -918 0L0 0Z",
          },
          {
            value:
              "M0 918C-109.6 928 -219.1 938 -283.7 873.1C-348.2 808.2 -367.7 668.4 -442 608.4C-516.3 548.4 -645.3 568.2 -721.6 524.3C-798 480.4 -821.6 372.7 -845.5 274.7C-869.4 176.7 -893.7 88.4 -918 0L0 0Z",
          },
        ],
        easing: "linear",
        duration: 10000,
        delay: 0,
        delay: 0,
        direction: "alternate",
        loop: true,
      })
    );
    this.animations.push(
      anime({
        targets: this.homeBlob2,
        d: [
          {
            value:
              "M0 850.5C-79.3 802.9 -158.6 755.3 -233.3 718.2C-308.1 681.1 -378.4 654.5 -449 618C-519.5 581.5 -590.4 535 -654.8 475.7C-719.2 416.4 -777.3 344.3 -808.9 262.8C-840.4 181.4 -845.5 90.7 -850.5 0L0 0Z",
          },
          {
            value:
              "M0 803.3C-58.2 715.3 -116.4 627.4 -199.8 615C-283.3 602.6 -391.9 665.7 -472.1 649.8C-552.4 634 -604.1 539 -621.5 451.6C-638.9 364.1 -622 284.1 -646.6 210.1C-671.2 136.1 -737.2 68 -803.2 0L0 0Z",
          },
          {
            value:
              "M0 803.3C-67.1 739.7 -134.1 676.2 -209.3 644.1C-284.4 612 -367.7 611.2 -412 567C-456.3 522.8 -461.6 435.3 -524.5 381.1C-587.5 326.9 -707.9 306.2 -763.9 248.2C-820 190.3 -811.6 95.1 -803.2 0L0 0Z",
          },
        ],
        easing: "linear",
        duration: 10000,
        delay: 0,
        delay: 0,
        direction: "alternate",
        loop: true,
      })
    );
    this.animations.push(
      anime({
        targets: this.homeBlob3,
        d: [
          {
            value:
              "M0 688.5C-59.4 639.4 -118.7 590.3 -186.6 574.2C-254.4 558.1 -330.8 575 -402.9 554.6C-475.1 534.2 -542.9 476.6 -557 404.7C-571.1 332.8 -531.3 246.7 -544.2 176.8C-557.2 107 -622.8 53.5 -688.5 0L0 0Z",
          },
          {
            value:
              "M0 688.5C-74.3 684.8 -148.6 681.2 -212.8 654.8C-276.9 628.4 -331 579.3 -387.1 532.7C-443.1 486.2 -501.2 442.1 -527.9 383.5C-554.6 325 -549.8 252 -571.3 185.6C-592.9 119.3 -640.7 59.7 -688.5 0L0 0Z",
          },
          {
            value:
              "M0 688.5C-68.8 675.8 -137.6 663.1 -209.5 644.8C-281.4 626.6 -356.3 602.8 -401.2 552.2C-446 501.5 -460.9 424.1 -504.2 366.3C-547.5 308.6 -619.3 270.5 -654.8 212.8C-690.3 155 -689.4 77.5 -688.5 0L0 0Z",
          },
        ],
        easing: "linear",
        duration: 10000,
        delay: 0,
        delay: 0,
        direction: "alternate",
        loop: true,
      })
    );
    this.animations.push(
      anime({
        targets: this.homeBlob4,
        d: [
          {
            value:
              "M0 573.8C-64.1 574.4 -128.2 575 -177.3 545.7C-226.4 516.3 -260.4 457 -302.7 416.6C-345 376.3 -395.5 355 -438.4 318.5C-481.3 282 -516.6 230.4 -537.9 174.8C-559.2 119.2 -566.5 59.6 -573.7 0L0 0Z",
          },
          {
            value:
              "M0 573.8C-44.1 521.7 -88.2 469.7 -148.7 457.7C-209.2 445.7 -286 473.8 -325.9 448.5C-365.7 423.2 -368.5 344.7 -405 294.3C-441.6 243.9 -511.9 221.6 -545.7 177.3C-579.4 133 -576.6 66.5 -573.7 0L0 0Z",
          },
          {
            value:
              "M0 573.8C-42 514.8 -83.9 455.9 -143.5 441.6C-203.1 427.4 -280.3 457.9 -312.6 430.3C-345 402.7 -332.5 317.1 -372.1 270.4C-411.7 223.7 -503.4 215.9 -545.7 177.3C-587.9 138.7 -580.8 69.4 -573.7 0L0 0Z",
          },
        ],
        easing: "linear",
        duration: 10000,
        delay: 0,
        delay: 0,
        direction: "alternate",
        loop: true,
      })
    );
    this.animations.push(
      anime({
        targets: this.homeBlob5,
        d: [
          {
            value:
              "M0 459C-33.6 411.9 -67.1 364.7 -114.8 353.3C-162.5 341.9 -224.2 366.3 -250.1 344.2C-276 322.2 -266 253.7 -297.7 216.3C-329.4 178.9 -402.7 172.7 -436.5 141.8C-470.4 111 -464.7 55.5 -459 0L0 0Z",
          },
          {
            value:
              "M0 459C-43 434.6 -86 410.3 -127.9 393.7C-169.8 377.2 -210.7 368.6 -255.4 351.5C-300.1 334.5 -348.7 309 -371.3 269.8C-394 230.6 -390.6 177.5 -400.9 130.3C-411.1 83 -435.1 41.5 -459 0L0 0Z",
          },
          {
            value:
              "M0 459C-39.9 422.7 -79.9 386.4 -119.4 367.6C-159 348.8 -198.1 347.5 -244.8 337C-291.5 326.4 -345.7 306.7 -371.3 269.8C-396.9 232.9 -393.9 179 -403.7 131.2C-413.6 83.4 -436.3 41.7 -459 0L0 0Z",
          },
        ],
        easing: "linear",
        duration: 10000,
        delay: 0,
        delay: 0,
        direction: "alternate",
        loop: true,
      })
    );
    this.animations.push(
      anime({
        targets: this.homeBlob6,
        d: [
          {
            value:
              "M0 344.3C-32.3 326 -64.5 307.7 -95.9 295.3C-127.4 282.9 -158 276.4 -191.5 263.6C-225.1 250.9 -261.5 231.8 -278.5 202.3C-295.5 172.9 -292.9 133.1 -300.7 97.7C-308.4 62.2 -326.3 31.1 -344.2 0L0 0Z",
          },
          {
            value:
              "M0 344.3C-34.4 337.9 -68.8 331.5 -104.8 322.4C-140.7 313.3 -178.1 301.4 -200.6 276.1C-223 250.8 -230.4 212 -252.1 183.2C-273.8 154.3 -309.7 135.3 -327.4 106.4C-345.1 77.5 -344.7 38.7 -344.2 0L0 0Z",
          },
          {
            value:
              "M0 344.3C-25.2 308.9 -50.4 273.5 -86.1 265C-121.8 256.4 -168.2 274.7 -187.6 258.2C-207 241.6 -199.5 190.3 -223.3 162.2C-247 134.2 -302 129.5 -327.4 106.4C-352.8 83.2 -348.5 41.6 -344.2 0L0 0Z",
          },
        ],
        easing: "linear",
        duration: 10000,
        delay: 0,
        delay: 0,
        direction: "alternate",
        loop: true,
      })
    );
    this.animations.push(
      anime({
        targets: this.homeBlob7,
        d: [
          {
            value:
              "M0 229.5C-25.6 229.8 -51.3 230 -70.9 218.3C-90.6 206.5 -104.2 182.8 -121.1 166.7C-138 150.5 -158.2 142 -175.4 127.4C-192.5 112.8 -206.7 92.2 -215.2 69.9C-223.7 47.7 -226.6 23.8 -229.5 0L0 0Z",
          },
          {
            value:
              "M0 229.5C-21.5 217.3 -43 205.1 -64 196.9C-84.9 188.6 -105.3 184.3 -127.7 175.8C-150.1 167.2 -174.4 154.5 -185.7 134.9C-197 115.3 -195.3 88.8 -200.4 65.1C-205.6 41.5 -217.5 20.7 -229.5 0L0 0Z",
          },
          {
            value:
              "M0 229.5C-17.6 208.7 -35.3 187.9 -59.5 183.1C-83.7 178.3 -114.4 189.5 -130.3 179.4C-146.3 169.3 -147.4 137.9 -162 117.7C-176.6 97.5 -204.8 88.7 -218.3 70.9C-231.8 53.2 -230.6 26.6 -229.5 0L0 0Z",
          },
        ],
        easing: "linear",
        duration: 10000,
        delay: 0,
        delay: 0,
        direction: "alternate",
        loop: true,
      })
    );
    this.animations.push(
      anime({
        targets: this.homeBlob8,
        d: [
          {
            value:
              "M0 114.8C-10 105.7 -20 96.6 -29.9 91.9C-39.7 87.2 -49.5 86.9 -61.2 84.2C-72.9 81.6 -86.4 76.7 -92.8 67.4C-99.2 58.2 -98.5 44.7 -100.9 32.8C-103.4 20.8 -109.1 10.4 -114.7 0L0 0Z",
          },
          {
            value:
              "M0 114.8C-12.8 114.9 -25.6 115 -35.5 109.1C-45.3 103.3 -52.1 91.4 -60.5 83.3C-69 75.3 -79.1 71 -87.7 63.7C-96.3 56.4 -103.3 46.1 -107.6 35C-111.8 23.8 -113.3 11.9 -114.7 0L0 0Z",
          },
          {
            value:
              "M0 114.8C-10 105.7 -20 96.6 -29.9 91.9C-39.7 87.2 -49.5 86.9 -61.2 84.2C-72.9 81.6 -86.4 76.7 -92.8 67.4C-99.2 58.2 -98.5 44.7 -100.9 32.8C-103.4 20.8 -109.1 10.4 -114.7 0L0 0Z",
          },
        ],
        easing: "linear",
        duration: 10000,
        delay: 0,
        delay: 0,
        direction: "alternate",
        loop: true,
      })
    );

    //   second blob

    this.animations.push(
      anime({
        targets: this.homeBlob9,
        d: [
          {
            value:
              "M0 -918C95 -886.9 190 -855.8 261.1 -803.6C332.3 -751.4 379.6 -678.1 464.4 -639.1C549.1 -600.1 671.2 -595.5 742.7 -539.6C814.2 -483.7 835.2 -376.6 856 -278.1C876.7 -179.6 897.4 -89.8 918 0L0 0Z",
          },
          {
            value:
              "M0 -918C87.4 -872.3 174.9 -826.6 258 -794.1C341.2 -761.7 420.1 -742.6 514.9 -708.7C609.7 -674.8 720.4 -626.3 742.7 -539.6C765 -452.9 698.8 -328.1 713.3 -231.8C727.8 -135.5 822.9 -67.7 918 0L0 0Z",
          },
          {
            value:
              "M0 -918C109.9 -927.3 219.8 -936.6 283.7 -873.1C347.5 -809.6 365.2 -673.2 447.3 -615.7C529.4 -558.1 675.8 -579.3 720.8 -523.7C765.9 -468.2 709.7 -335.9 725.7 -235.8C741.6 -135.7 829.8 -67.9 918 0L0 0Z",
          },
        ],
        easing: "linear",
        duration: 10000,
        delay: 0,
        delay: 0,
        direction: "alternate",
        loop: true,
      })
    );

    this.animations.push(
      anime({
        targets: this.homeBlob10,
        d: [
          {
            value:
              "M0 -803.2C96.2 -811.4 192.4 -819.5 248.2 -763.9C304.1 -708.4 319.6 -589.1 391.4 -538.7C463.2 -488.3 591.3 -506.9 630.7 -458.3C670.2 -409.6 621 -293.9 634.9 -206.3C648.9 -118.7 726.1 -59.4 803.3 0L0 0Z",
          },
          {
            value:
              "M0 -803.2C73.8 -770.6 147.5 -737.9 234.7 -722.3C321.9 -706.7 422.4 -708.2 472.1 -649.8C521.9 -591.5 520.8 -473.3 540.8 -392.9C560.8 -312.6 601.9 -270.1 649.1 -210.9C696.3 -151.7 749.8 -75.9 803.3 0L0 0Z",
          },
          {
            value:
              "M0 -803.2C88.8 -802.5 177.6 -801.8 247.1 -760.6C316.7 -719.5 367 -637.9 419.7 -577.6C472.4 -517.4 527.4 -478.4 591.1 -429.5C654.8 -380.5 727.1 -321.5 763.9 -248.2C800.7 -175 802 -87.5 803.3 0L0 0Z",
          },
        ],
        easing: "linear",
        duration: 10000,
        delay: 0,
        delay: 0,
        direction: "alternate",
        loop: true,
      })
    );
    this.animations.push(
      anime({
        targets: this.homeBlob11,
        d: [
          {
            value:
              "M0 -688.5C74 -685.1 148.1 -681.7 212.8 -654.8C277.4 -627.9 332.8 -577.5 383.1 -527.3C433.4 -477.1 478.7 -427.1 511.5 -371.6C544.3 -316.2 564.6 -255.2 592 -192.4C619.5 -129.5 654 -64.8 688.5 0L0 0Z",
          },
          {
            value:
              "M0 -688.5C77.9 -692 155.8 -695.5 212.8 -654.8C269.7 -614.1 305.8 -529.3 341.7 -470.2C377.5 -411.2 413 -378.1 471.5 -342.5C529.9 -307 611.2 -269.1 651.2 -211.6C691.2 -154.1 689.9 -77.1 688.5 0L0 0Z",
          },
          {
            value:
              "M0 -688.5C62.2 -644.5 124.5 -600.4 187.7 -577.8C251 -555.1 315.2 -553.9 387.1 -532.7C458.9 -511.6 538.4 -470.4 557 -404.7C575.6 -339 533.2 -248.6 545 -177.1C556.7 -105.5 622.6 -52.8 688.5 0L0 0Z",
          },
        ],
        easing: "linear",
        duration: 10000,
        delay: 0,
        delay: 0,
        direction: "alternate",
        loop: true,
      })
    );
    this.animations.push(
      anime({
        targets: this.homeBlob12,
        d: [
          {
            value:
              "M0 -573.7C67.7 -579 135.5 -584.3 177.3 -545.7C219.1 -507 235.1 -424.4 278.8 -383.8C322.6 -343.1 394.1 -344.4 429.8 -312.3C465.5 -280.1 465.2 -214.6 483.3 -157C501.3 -99.4 537.5 -49.7 573.8 0L0 0Z",
          },
          {
            value:
              "M0 -573.7C53.1 -536.5 106.2 -499.3 154.1 -474.3C202 -449.4 244.7 -436.7 306 -421.2C367.3 -405.7 447.2 -387.3 464.2 -337.2C481.1 -287.2 435.1 -205.4 442.8 -143.9C450.6 -82.4 512.2 -41.2 573.8 0L0 0Z",
          },
          {
            value:
              "M0 -573.7C60 -557.3 120.1 -540.9 166.1 -511.2C212.1 -481.5 244.1 -438.5 300.1 -413.1C356.1 -387.7 436.1 -379.8 464.2 -337.2C492.2 -294.6 468.3 -217.3 477.9 -155.3C487.5 -93.3 530.6 -46.6 573.8 0L0 0Z",
          },
        ],
        easing: "linear",
        duration: 10000,
        delay: 0,
        delay: 0,
        direction: "alternate",
        loop: true,
      })
    );
    this.animations.push(
      anime({
        targets: this.homeBlob13,
        d: [
          {
            value:
              "M0 -459C48 -445.9 96.1 -432.7 132.9 -409C169.7 -385.2 195.3 -350.8 240.1 -330.5C284.9 -310.2 348.9 -303.9 371.3 -269.8C393.8 -235.7 374.6 -173.8 382.3 -124.2C390 -74.6 424.5 -37.3 459 0L0 0Z",
          },
          {
            value:
              "M0 -459C49.3 -457.3 98.6 -455.6 141.8 -436.5C185.1 -417.5 222.4 -381.2 248.6 -342.2C274.8 -303.2 289.9 -261.5 311.5 -226.3C333 -191.1 360.9 -162.3 386.6 -125.6C412.3 -89 435.6 -44.5 459 0L0 0Z",
          },
          {
            value:
              "M0 -459C52.5 -462.1 105.1 -465.3 141.8 -436.5C178.6 -407.8 199.6 -347.2 223.7 -307.8C247.7 -268.5 274.7 -250.4 313.5 -227.8C352.3 -205.2 402.7 -178.1 428.9 -139.4C455.1 -100.7 457.1 -50.3 459 0L0 0Z",
          },
        ],
        easing: "linear",
        duration: 10000,
        delay: 0,
        delay: 0,
        direction: "alternate",
        loop: true,
      })
    );
    this.animations.push(
      anime({
        targets: this.homeBlob14,
        d: [
          {
            value:
              "M0 -344.2C37 -343 73.9 -341.7 106.4 -327.4C138.8 -313.1 166.8 -285.9 186.5 -256.7C206.1 -227.4 217.5 -196.2 233.6 -169.7C249.7 -143.3 270.7 -121.7 290 -94.2C309.2 -66.7 326.7 -33.4 344.3 0L0 0Z",
          },
          {
            value:
              "M0 -344.2C31.1 -322.2 62.2 -300.2 93.9 -288.9C125.5 -277.6 157.6 -277 193.5 -266.4C229.5 -255.8 269.2 -235.2 278.5 -202.3C287.8 -169.5 266.6 -124.3 272.5 -88.5C278.4 -52.8 311.3 -26.4 344.3 0L0 0Z",
          },
          {
            value:
              "M0 -344.2C36 -334.4 72 -324.5 99.7 -306.7C127.3 -288.9 146.5 -263.1 180.1 -247.9C213.7 -232.6 261.7 -227.9 278.5 -202.3C295.3 -176.8 281 -130.4 286.7 -93.2C292.5 -56 318.4 -28 344.3 0L0 0Z",
          },
        ],
        easing: "linear",
        duration: 10000,
        delay: 0,
        delay: 0,
        direction: "alternate",
        loop: true,
      })
    );
    this.animations.push(
      anime({
        targets: this.homeBlob15,
        d: [
          {
            value:
              "M0 -229.5C27.1 -231.6 54.2 -233.7 70.9 -218.3C87.7 -202.8 94 -169.8 111.5 -153.5C129 -137.2 157.6 -137.8 171.9 -124.9C186.2 -112.1 186.1 -85.9 193.3 -62.8C200.5 -39.8 215 -19.9 229.5 0L0 0Z",
          },
          {
            value:
              "M0 -229.5C24.6 -228.6 49.3 -227.8 70.9 -218.3C92.6 -208.8 111.2 -190.6 124.3 -171.1C137.4 -151.6 145 -130.8 155.7 -113.1C166.5 -95.5 180.5 -81.1 193.3 -62.8C206.1 -44.5 217.8 -22.2 229.5 0L0 0Z",
          },
          {
            value:
              "M0 -229.5C21.2 -214.6 42.5 -199.7 61.6 -189.7C80.8 -179.8 97.9 -174.7 122.4 -168.5C146.9 -162.3 178.9 -154.9 185.7 -134.9C192.4 -114.9 174 -82.2 177.1 -57.6C180.2 -33 204.9 -16.5 229.5 0L0 0Z",
          },
        ],
        easing: "linear",
        duration: 10000,
        delay: 0,
        delay: 0,
        direction: "alternate",
        loop: true,
      })
    );
    this.animations.push(
      anime({
        targets: this.homeBlob16,
        d: [
          {
            value:
              "M0 -114.7C13 -115.3 26 -115.9 35.5 -109.1C45 -102.4 51 -88.2 56.9 -78.4C62.9 -68.5 68.8 -63 78.6 -57.1C88.3 -51.2 101.9 -44.8 108.5 -35.3C115.2 -25.7 115 -12.8 114.8 0L0 0Z",
          },
          {
            value:
              "M0 -114.7C13.5 -115.8 27.1 -116.9 35.5 -109.1C43.8 -101.4 47 -84.9 55.8 -76.8C64.5 -68.6 78.8 -68.9 86 -62.5C93.1 -56 93 -42.9 96.7 -31.4C100.3 -19.9 107.5 -9.9 114.8 0L0 0Z",
          },
          {
            value:
              "M0 -114.7C13.1 -115.5 26.3 -116.3 35.5 -109.1C44.7 -101.9 49.9 -86.8 55.9 -77C61.9 -67.1 68.7 -62.6 78.4 -56.9C88.1 -51.3 100.7 -44.5 107.2 -34.8C113.8 -25.2 114.3 -12.6 114.8 0L0 0Z",
          },
        ],
        easing: "linear",
        duration: 10000,
        delay: 0,
        delay: 0,
        direction: "alternate",
        loop: true,
      })
    );
  }

  initElements() {
    const homeTimeline = anime.timeline();

    homeTimeline
      .add({
        targets: this.avatar,
        translateX: [-150, 0],
        opacity: [0, 1],
        duration: 1500,
      })
      .add(
        {
          targets: this.helloWorldSpans,
          opacity: [0, 1],
          translateX: [30, 0],
          duration: 700,
          delay: anime.stagger(100),
        },
        "-=400"
      )
      .add(
        {
          targets: this.name,
          opacity: [0, 1],
          translateX: [30, 0],
          duration: 700,
        },
        "-=400"
      )
      .add(
        {
          targets: this.nameSurname,
          opacity: [0, 1],
          translateX: [30, 0],
          duration: 700,
          complete: () => this.initMoveForElements(this),
        },
        "-=400"
      );
  }

  initBubbles() {
    let howBubbles;

    if (this.window.innerWidth < 1024) {
      howBubbles = 30;
    } else {
      howBubbles = 70;
    }

    const bubblesContainer = document.querySelector(".home-container-circle");

    for (let x = 0; x < howBubbles; x++) {
      const div = document.createElement("div");
      div.classList.add("circle");

      bubblesContainer.appendChild(div);
    }

    const bubbles = document.querySelectorAll(".home-container-circle .circle");

    bubbles.forEach((bubble) => {
      let int;

      if (this.window.innerWidth < 1024) {
        int = this.getRandomInt(10, 20);
      } else {
        int = this.getRandomInt(10, 40);
      }

      this.animations.push(
        anime({
          targets: bubble,
          easing: "linear",

          width: [
            {
              value: int,
              duration: 0,
              delay: 0,
            },
          ],
          height: [
            {
              value: int,
              duration: 0,
              delay: 0,
            },
          ],

          translateY: [
            {
              value: "101vh",
              duration: 0,
              delay: 0,
            },
            {
              value: "-10vh",
              duration: function () {
                return anime.random(10000, 20000);
              },
              delay: function () {
                return anime.random(1000, 13000);
              },
            },
          ],

          translateX: [
            {
              value: function () {
                return anime.random(2, 98) + "vw";
              },
            },
          ],

          loop: true,
        })
      );
    });
  }

  render() {
    if (this.initCount === 0) {
      this.initBubbles();
      this.initWaves();
      this.initElements();
      this.initCount++;
    }
  }
}
