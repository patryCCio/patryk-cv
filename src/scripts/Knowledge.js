import anime from "animejs";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

export class Knowledge {
  constructor(document, window) {
    this.document = document;
    this.window = window;
    this.isActive = false;

    this.renderKnowledge();
  }

  setIsActive(isActive) {
    this.isActive = isActive;
  }

  renderKnowledge() {
    const b1Bg = this.document.querySelector(".box-1");
    const b1El = this.document.querySelectorAll(".box-1-el");

    const b2Bg = this.document.querySelector(".box-2");
    const b2El = this.document.querySelectorAll(".box-2-el");

    const b3Bg = this.document.querySelector(".box-3");
    const b3El = this.document.querySelectorAll(".box-3-el");

    const b4Bg = this.document.querySelector(".box-4");
    const b4El = this.document.querySelectorAll(".box-4-el");

    const b5Bg = this.document.querySelector(".box-5");
    const b5El = this.document.querySelectorAll(".box-5-el");

    const b6Bg = this.document.querySelector(".box-6");
    const b6El = this.document.querySelectorAll(".box-6-el");

    const b7Bg = this.document.querySelector(".box-7");
    const b7El = this.document.querySelectorAll(".box-7-el");

    const b8Bg = this.document.querySelector(".box-8");
    const b8El = this.document.querySelectorAll(".box-8-el");

    const b9Bg = this.document.querySelector(".box-9");
    const b9El = this.document.querySelectorAll(".box-9-el");

    const b10Bg = this.document.querySelector(".box-10");
    const b10El = this.document.querySelectorAll(".box-10-el");

    const b11Bg = this.document.querySelector(".box-11");
    const b11El = this.document.querySelectorAll(".box-11-el");

    const scene = new THREE.Scene();
    const laptopUrl = new URL("../layouts/brain.gltf", import.meta.url);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
    });

    const starGeometry = new THREE.BufferGeometry();
    const starMaterial = new THREE.PointsMaterial({
      color: 0x00ccff,
    });

    const starVerticies = [];
    for (let i = 0; i < 10000; i++) {
      const x = (Math.random() - 0.5) * 4000;
      const y = (Math.random() - 0.5) * 4000;
      const z = (Math.random() - 0.5) * 4000;

      starVerticies.push(x, y, z);
    }

    starGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(starVerticies, 3)
    );

    const stars = new THREE.Points(starGeometry, starMaterial);

    scene.add(stars);

    const knowledge = this.document.querySelector(".knowledge-wrapper");
    renderer.setSize(knowledge.offsetWidth, knowledge.offsetHeight);

    knowledge.appendChild(renderer.domElement);

    const light = new THREE.PointLight(0x00ff00, 5);
    light.position.set(-60, -30, 0);

    const light2 = new THREE.PointLight(0x00ff00, 5);
    light2.position.set(60, 30, 0);

    const light3 = new THREE.PointLight(0xffffff, 1);
    light3.position.set(-60, 30, 0);

    const light4 = new THREE.PointLight(0xffffff, 1);
    light4.position.set(60, -30, 0);

    scene.add(light);
    scene.add(light2);
    scene.add(light3);
    scene.add(light4);

    const camera = new THREE.PerspectiveCamera(
      75,
      knowledge.offsetWidth / knowledge.offsetHeight,
      0.1,
      1000
    );

    camera.lookAt(0, 0, 0);

    camera.position.set(0, 2, 7);

    const assetLoader = new GLTFLoader();

    let mixer;
    let model;
    assetLoader.load(
      laptopUrl.href,
      function (gltf) {
        model = gltf.scene;
        scene.add(model);
        mixer = new THREE.AnimationMixer(model);
        const clips = gltf.animations;
        clips.forEach(function (clip) {
          const action = mixer.clipAction(clip);
          action.play();
        });
      },
      undefined,
      function (error) {
        console.error(error);
      }
    );

    let initAnimate = 0;

    const information = {
      h2X: -100,
      posX: -15,
      posY: 0,
      posZ: -10,
      rotX: 0,
      rotY: 0,
      rotZ: 0,
    };

    const boxes = {
      b1Bg: 0,
      b1X: -300,
      b1Opacity: 0,

      b2Bg: 0,
      b2X: 300,
      b2Opacity: 0,

      b3Bg: 0,
      b3X: -300,
      b3Opacity: 0,

      b4Bg: 0,
      b4X: 300,
      b4Opacity: 0,

      b5Bg: 0,
      b5X: -300,
      b5Opacity: 0,

      b6Bg: 0,
      b6X: 300,
      b6Opacity: 0,

      b7Bg: 0,
      b7X: -300,
      b7Opacity: 0,

      b8Bg: 0,
      b8X: 300,
      b8Opacity: 0,

      b9Bg: 0,
      b9X: -300,
      b9Opacity: 0,

      b10Bg: 0,
      b10X: 300,
      b10Opacity: 0,

      b11Bg: 0,
      b11X: -300,
      b11Opacity: 0,
    };

    const knowledgeAnimation = anime({
      targets: [information, boxes],
      keyframes: [
        {
          h2X: 100,
          duration: 2000,
        },
        {
          posX: 0,
          posY: 2,
          posZ: 7,
          duration: 600,
          delay: 200,
        },
        {
          posX: -5.71,
          posY: 0.85,
          posZ: 0.28,
          rotX: 0,
          rotY: -1.71,
          rotZ: 0,
          duration: 600,
          delay: 200,
        },

        {
          b1Bg: 0.5,
          b1X: 0,
          b1Opacity: 1,
          delay: 800,
          duration: 300,
        },

        {
          b1Bg: 0,
          b1X: -300,
          b1Opacity: 0,
          delay: 800,
          duration: 300,
        },

        {
          posX: 3,
          posY: 1,
          posZ: -1,
          rotX: -6.28,
          rotY: 0,
          duration: 600,
          delay: 200,
        },

        {
          b2Bg: 0.5,
          b2X: 0,
          b2Opacity: 1,
          delay: 800,
          duration: 300,
        },

        {
          b2Bg: 0,
          b2X: 300,
          b2Opacity: 0,
          delay: 800,
          duration: 300,
        },

        {
          posX: 0,
          posY: 1,
          posZ: 5,
          duration: 600,
          delay: 200,
        },

        {
          b3Bg: 0.5,
          b3X: 0,
          b3Opacity: 1,
          delay: 800,
          duration: 300,
        },

        {
          b3Bg: 0,
          b3X: -300,
          b3Opacity: 0,
          delay: 800,
          duration: 300,
        },

        {
          posX: -4,
          rotY: -1,
          duration: 300,
        },

        {
          posX: -3,
          posY: 3,
          posZ: -3.5,
          rotY: -2,
          duration: 300,
        },

        {
          b4Bg: 0.5,
          b4X: 0,
          b4Opacity: 1,
          delay: 800,
          duration: 300,
        },

        {
          b4Bg: 0,
          b4X: 300,
          b4Opacity: 0,
          delay: 800,
          duration: 300,
        },

        {
          posZ: -3,
          rotY: -5,
          posX: 8,
          duration: 300,
          delay: 200,
        },

        {
          posZ: -4.5,
          posY: -0.3,
          posX: -2,
          rotY: -3,
          duration: 300,
        },

        {
          b5Bg: 0.5,
          b5X: 0,
          b5Opacity: 1,
          delay: 800,
          duration: 300,
        },

        {
          b5Bg: 0,
          b5X: -300,
          b5Opacity: 0,
          delay: 800,
          duration: 300,
        },

        {
          posZ: 1,
          posY: -1,
          posX: 1,
          rotY: -1,
          duration: 300,
        },

        {
          b6Bg: 0.5,
          b6X: 0,
          b6Opacity: 1,
          delay: 800,
          duration: 300,
        },

        {
          b6Bg: 0,
          b6X: 300,
          b6Opacity: 0,
          delay: 800,
          duration: 300,
        },

        {
          delay: 200,
          posY: 4,
          posX: 2,
          posZ: -1,
          rotY: 0,
          duration: 600,
        },

        {
          b7Bg: 0.5,
          b7X: 0,
          b7Opacity: 1,
          delay: 800,
          duration: 300,
        },

        {
          b7Bg: 0,
          b7X: -300,
          b7Opacity: 0,
          delay: 800,
          duration: 300,
        },

        {
          posX: -0.19,
          posY: 4,
          posZ: 3,
          rotX: -6.28,
          rotY: -0.91,
          rotZ: 0,
          duration: 600,
        },

        {
          b8Bg: 0.5,
          b8X: 0,
          b8Opacity: 1,
          delay: 800,
          duration: 300,
        },

        {
          b8Bg: 0,
          b8X: 300,
          b8Opacity: 0,
          delay: 800,
          duration: 300,
        },

        {
          posX: -3.5,
          posY: 4,
          posZ: 2.19,
          rotY: -1.57,
          rotZ: 0,
          duration: 600,
        },

        {
          b9Bg: 0.5,
          b9X: 0,
          b9Opacity: 1,
          delay: 800,
          duration: 300,
        },

        {
          b9Bg: 0,
          b9X: -300,
          b9Opacity: 0,
          delay: 800,
          duration: 300,
        },

        {
          posX: -1,
          posY: 5,
          posZ: -1,
          rotY: 0.5,
          rotZ: 0,
          duration: 600,
        },

        {
          b10Bg: 0.5,
          b10X: 0,
          b10Opacity: 1,
          delay: 800,
          duration: 300,
        },

        {
          b10Bg: 0,
          b10X: 300,
          b10Opacity: 0,
          delay: 800,
          duration: 300,
        },
        {
          posX: 3,
          posY: 1.3,
          posZ: 4,
          rotX: -6.28,
          rotY: 0,
          rotZ: 0,
          duration: 600,
        },

        {
          b11Bg: 0.5,
          b11X: 0,
          b11Opacity: 1,
          delay: 800,
          duration: 300,
        },

        {
          b11Bg: 0,
          b11X: -300,
          b11Opacity: 0,
          delay: 800,
          duration: 300,
        },

        {
          posX: 0,
          posY: 2,
          posZ: -7,
          rotY: -3.28,
          duration: 600,
          delay: 200,
        },
      ],
      elasticity: 200,
      easing: "linear",
      autoplay: false,
    });

    function animate(that) {
      if (that.isActive) {
        if (model !== undefined) {
          if (initAnimate === 0) {
            model.rotation.y = -1.57;
            let dots = [];
            model.children.forEach((el) => {
              if (el.name !== "Brain_Part_04") {
                if (el.name[el.name.length - 1] === "C") {
                  if (el.type === "Group") {
                    el.children.forEach((logo) => {
                      let color = logo.material.color;
                      logo.material = new THREE.MeshBasicMaterial({
                        color: color,
                      });
                    });
                  } else {
                    let color = el.material.color;
                    el.material = new THREE.MeshBasicMaterial({
                      color: color,
                    });
                  }

                  el.lookAt(
                    camera.position.x,
                    camera.position.y - 90,
                    camera.position.z
                  );
                } else {
                  el.material = new THREE.MeshBasicMaterial({
                    color: 0x00ffcc,
                  });
                  dots.push(el);
                }
              }
            });

            dots.forEach((el, index) => {
              const dotsScale = {
                scaleX: 0.1,
              };
              anime({
                targets: dotsScale,
                scaleX: [0.04, 0.035],
                direction: "alternate",
                easing: "linear",
                update: function () {
                  el.scale.x = dotsScale.scaleX;
                },
                duration: 1000,
                delay: index * 100,
                endDelay: 0,
                loop: true,
              });
            });
          }

          initAnimate++;

          stars.rotation.y += 0.0001;
          stars.rotation.x += 0.0001;
        }

        renderer.render(scene, camera);
      }
    }

    let isFinished = false;
    let scrollPercentage;

    renderer.setAnimationLoop(() => animate(this));

    const knowledgeBox = this.document.querySelector(".knowledge");

    const doAnimate = () => {
      this.document.querySelector(
        "#knowledge-h2"
      ).style.transform = `translateX(${information.h2X}vw)`;

      b1Bg.style.backgroundColor = `rgba(0,0,0,${boxes.b1Bg})`;
      b1El.forEach((el) => {
        el.style.transform = `translateX(${Math.round(boxes.b1X)}px)`;
        el.style.opacity = boxes.b1Opacity;
      });

      b2Bg.style.backgroundColor = `rgba(0,0,0,${boxes.b2Bg})`;
      b2El.forEach((el) => {
        el.style.transform = `translateX(${Math.round(boxes.b2X)}px)`;
        el.style.opacity = boxes.b2Opacity;
      });

      b3Bg.style.backgroundColor = `rgba(0,0,0,${boxes.b3Bg})`;
      b3El.forEach((el) => {
        el.style.transform = `translateX(${Math.round(boxes.b3X)}px)`;
        el.style.opacity = boxes.b3Opacity;
      });

      b4Bg.style.backgroundColor = `rgba(0,0,0,${boxes.b4Bg})`;
      b4El.forEach((el) => {
        el.style.transform = `translateX(${Math.round(boxes.b4X)}px)`;
        el.style.opacity = boxes.b4Opacity;
      });

      b5Bg.style.backgroundColor = `rgba(0,0,0,${boxes.b5Bg})`;
      b5El.forEach((el) => {
        el.style.transform = `translateX(${Math.round(boxes.b5X)}px)`;
        el.style.opacity = boxes.b5Opacity;
      });

      b6Bg.style.backgroundColor = `rgba(0,0,0,${boxes.b6Bg})`;
      b6El.forEach((el) => {
        el.style.transform = `translateX(${Math.round(boxes.b6X)}px)`;
        el.style.opacity = boxes.b6Opacity;
      });

      b7Bg.style.backgroundColor = `rgba(0,0,0,${boxes.b7Bg})`;
      b7El.forEach((el) => {
        el.style.transform = `translateX(${Math.round(boxes.b7X)}px)`;
        el.style.opacity = boxes.b7Opacity;
      });

      b8Bg.style.backgroundColor = `rgba(0,0,0,${boxes.b8Bg})`;
      b8El.forEach((el) => {
        el.style.transform = `translateX(${Math.round(boxes.b8X)}px)`;
        el.style.opacity = boxes.b8Opacity;
      });

      b9Bg.style.backgroundColor = `rgba(0,0,0,${boxes.b9Bg})`;
      b9El.forEach((el) => {
        el.style.transform = `translateX(${Math.round(boxes.b9X)}px)`;
        el.style.opacity = boxes.b9Opacity;
      });

      b10Bg.style.backgroundColor = `rgba(0,0,0,${boxes.b10Bg})`;
      b10El.forEach((el) => {
        el.style.transform = `translateX(${Math.round(boxes.b10X)}px)`;
        el.style.opacity = boxes.b10Opacity;
      });

      b11Bg.style.backgroundColor = `rgba(0,0,0,${boxes.b11Bg})`;
      b11El.forEach((el) => {
        el.style.transform = `translateX(${Math.round(boxes.b11X)}px)`;
        el.style.opacity = boxes.b11Opacity;
      });
    };

    const initScroll = () => {
      if (this.isActive) {
        const clientHeight = this.document.documentElement.clientHeight;

        const knowledgeBoxTop = knowledgeBox.getBoundingClientRect().top;
        const knowledgeBoxHeight = knowledgeBox.offsetHeight;

        scrollPercentage = (
          (knowledgeBoxTop * -1) /
          (knowledgeBoxHeight - clientHeight)
        ).toFixed(6);

        if (scrollPercentage <= 1.1) {
          knowledgeAnimation.seek(
            scrollPercentage * knowledgeAnimation.duration
          );

          if (scrollPercentage >= 1) {
            isFinished = true;
          } else {
            isFinished = false;
          }

          if (!isFinished) {
            if (model !== undefined) {
              camera.position.x = information.posX;
              camera.position.y = information.posY;
              camera.position.z = information.posZ;

              camera.rotation.x = information.rotX;
              camera.rotation.y = information.rotY;
              camera.rotation.z = information.rotZ;

              model.children.forEach((el) => {
                if (el.name[el.name.length - 1] === "C") {
                  el.lookAt(
                    camera.position.x,
                    camera.position.y - 90,
                    camera.position.z
                  );
                }
              });

              doAnimate();
            }
          }
        }
      }
    };

    this.document.addEventListener("scroll", initScroll);

    this.window.addEventListener("resize", function () {
      camera.aspect = knowledge.offsetWidth / knowledge.offsetHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(knowledge.offsetWidth, knowledge.offsetHeight);
    });

    camera.position.x = information.posX;
    camera.position.y = information.posY;
    camera.position.z = information.posZ;

    camera.rotation.x = information.rotX;
    camera.rotation.y = information.rotY;
    camera.rotation.z = information.rotZ;

    initScroll();
  }
}
