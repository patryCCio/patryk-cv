import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

import anime from "animejs";

export class About {
  constructor(document, window) {
    this.document = document;
    this.window = window;
    this.isActive;
    this.animations = [];
    this.render();
  }

  setIsActive(isActive, state) {
    this.isActive = isActive;
    if (state === "play") {
      this.animations.forEach((el) => el.play());
    } else {
      this.animations.forEach((el) => el.pause());
    }
  }

  render() {
    const laptopUrl = new URL("../layouts/mylaptop2.gltf", import.meta.url);

    const aboutSVG = this.document.querySelectorAll(".about-svg-path");

    const sizeAboutSVG = aboutSVG[0].getTotalLength();

    aboutSVG.forEach((el) => {
      el.style.strokeDasharray = el.getTotalLength();
    });

    anime({
      targets: aboutSVG,
      strokeDashoffset: function (el, i) {
        if (i % 2 == 0) {
          return [0, sizeAboutSVG];
        } else return [sizeAboutSVG, 0];
      },
      duration: 5000,
      easing: "linear",
      direction: "alternate",
      delay: function (el, i) {
        return 300 * (i + 1);
      },
      autoplay: true,
      loop: true,
    });

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });

    const aboutLeft = this.document.querySelector(".about-left");
    renderer.setSize(aboutLeft.clientWidth, aboutLeft.clientHeight);

    aboutLeft.appendChild(renderer.domElement);

    const scene = new THREE.Scene();

    const light = new THREE.PointLight(0xffffff, 5);
    light.position.set(30, 30, 0);
    light.lookAt(0, 0, 0);
    scene.add(light);

    const camera = new THREE.PerspectiveCamera(
      75,
      aboutLeft.clientWidth / aboutLeft.clientHeight,
      0.1,
      1000
    );

    camera.lookAt(-1.5, -1.3, -1.5);

    camera.position.set(25, 25, 25);

    const assetLoader = new GLTFLoader();
    let model;
    assetLoader.load(
      laptopUrl.href,
      function (gltf) {
        model = gltf.scene;
        scene.add(model);
      },
      undefined,
      function (error) {
        console.error(error);
      }
    );
    let initAnimate = 0;
    let isFinished = false;

    const partsLeft = {
      h2: 0,
      x: -10,
      y: 30,
      z: 40,
      rotX: 8,
      rotY: 4,
      rotYEnd: 0,
      rotZ: 1.5,

      ab1: 100,
      ab2: 100,
      ab3: 100,
      ab4: 100,
    };

    let scrollPercentage = 0;

    const animationScroll = anime({
      targets: partsLeft,
      keyframes: [
        {
          h2: -100,
          duration: 100,
        },
        {
          x: 8,
          y: 8,
          z: -8,
          rotX: 0,
          rotY: -1.36,
          rotZ: 0,
          ab1: 0,
          endDelay: 100,
        },
        {
          x: -30,
          y: -10,
          z: 20,
          rotY: 0,
          ab1: -100,
          ab2: 0,
          endDelay: 100,
        },
        {
          x: -20,
          y: 0,
          z: -10,
          rotY: -0.7,
          ab2: -100,
          ab3: 0,
          endDelay: 100,
        },
        {
          ab3: -100,
          endDelay: 100,
          rotY: -3,
          z: 10,
        },
      ],
      elasticity: 300,
      easing: "linear",
      autoplay: false,
    });

    const about = this.document.querySelector(".about");

    const initScroll = () => {
      if (this.isActive) {
        const clientHeight = this.document.documentElement.clientHeight;

        const aboutTop = about.getBoundingClientRect().top;
        const aboutHeight = about.offsetHeight;

        scrollPercentage = (aboutTop * -1) / (aboutHeight - clientHeight);

        if (scrollPercentage <= 1.1) {
          animationScroll.seek(scrollPercentage * animationScroll.duration);

          if (model !== undefined) {
            model.position.x = partsLeft.x;
            model.position.y = partsLeft.y;
            model.position.z = partsLeft.z;

            model.rotation.x = partsLeft.rotX;
            model.rotation.y = partsLeft.rotY;
            model.rotation.z = partsLeft.rotZ;
          }

          this.document.querySelector(
            "#about-me-h2"
          ).style.transform = `translateX(${partsLeft.h2}vw)`;

          this.document.querySelector("#about-content-div-1").style.transform =
            "translate(-50%, " + partsLeft.ab1 + "vh)";

          this.document.querySelector("#about-content-div-2").style.transform =
            "translate(-50%, " + partsLeft.ab2 + "vh)";

          this.document.querySelector("#about-content-div-3").style.transform =
            "translate(-50%, " + partsLeft.ab3 + "vh)";
        }
      }
    };

    this.window.addEventListener("scroll", initScroll);
    initScroll();

    function animate(that) {
      if (that.isActive) {
        if (model !== undefined) {
          if (initAnimate === 0) {
            model.scale.x = 7.5;
            model.scale.y = 7.5;
            model.scale.z = 7.5;

            model.position.x = partsLeft.x;
            model.position.y = partsLeft.y;
            model.position.z = partsLeft.z;

            let buttonsEdges;
            let buttonsFront;
            let img1;
            let img2;

            model.children[1].children.forEach((el) => {
              if (el.name === "Keyboard") {
                buttonsEdges = el.children[0];
                buttonsFront = el.children[1];
              }
              if (el.name === "img1") {
                img1 = el;
              }

              if (el.name === "img2") {
                img2 = el;
              }
            });

            const colors = {
              r: 0,
              g: 0.5,
              b: 0,
            };

            const alphas = {
              alphaImg1: 1,
              alphaImg2: 0,
            };

            that.animations.push(
              anime({
                targets: alphas,
                round: 10,
                alphaImg1: [
                  {
                    delay: 6000,
                    value: 0,
                    duration: 1000,
                  },
                  {
                    delay: 6000,
                    value: 1,
                    duration: 1000,
                  },
                ],
                alphaImg2: [
                  {
                    delay: 6000,
                    value: 1,
                    duration: 1000,
                  },
                  {
                    delay: 6000,
                    value: 0,
                    duration: 1000,
                  },
                ],
                loop: true,
                update: function () {
                  img1.material.opacity = alphas.alphaImg1;
                  img2.material.opacity = alphas.alphaImg2;
                },
              })
            );

            buttonsFront.material.emissiveIntensity = 1;

            that.animations.push(
              anime({
                targets: colors,
                r: [{ value: 0 }, { value: 0.5 }, { value: 0 }],
                g: [{ value: 0 }, { value: 0 }, { value: 0.5 }],
                b: [{ value: 0.5 }, { value: 0 }, { value: 0 }],
                easing: "linear",
                duration: 20000,
                delay: 0,
                loop: true,
                update: function () {
                  buttonsEdges.material.color.r = colors.r;
                  buttonsEdges.material.color.g = colors.g;
                  buttonsEdges.material.color.b = colors.b;
                  buttonsEdges.material.emissive.r = colors.r;
                  buttonsEdges.material.emissive.g = colors.g;
                  buttonsEdges.material.emissive.b = colors.b;

                  buttonsFront.material.color.r = colors.r + 0.2;
                  buttonsFront.material.color.g = colors.g + 0.2;
                  buttonsFront.material.color.b = colors.b + 0.2;
                },
              })
            );
          }

          // if (isFinished) {
          //   let rotY = Number(model.rotation.y);
          //   rotY += 0.001;

          //   partsLeft.rotYEnd = rotY;
          //   model.rotation.y = rotY;
          // }
          initAnimate++;
        }
        renderer.render(scene, camera);
      }
    }

    renderer.setAnimationLoop(() => animate(this));

    this.window.addEventListener("resize", function () {
      camera.aspect = aboutLeft.clientWidth / aboutLeft.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(aboutLeft.clientWidth, aboutLeft.clientHeight);
    });
  }
}
