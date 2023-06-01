import anime from "animejs";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { TextGeometry } from "three/addons/geometries/TextGeometry.js";
import { FontLoader } from "three/addons/loaders/FontLoader.js";

export class Portfolio {
  constructor(document, window) {
    this.document = document;
    this.window = window;
    this.isActive = false;

    this.renderPortfolio();
  }

  setIsActive(isActive) {
    this.isActive = isActive;
  }

  renderPortfolio() {
    const init = () => {
      const cancel = this.document.querySelector(".cancel");
      const lightboxImgWrapper = this.document.querySelector(
        ".lightbox-img-wrapper"
      );

      const array = {
        clients: ["https://netifashionlook.pl"],
      };

      const raycaster = new THREE.Raycaster();
      const pointer = new THREE.Vector2();
      const fontLoader = new FontLoader();

      const raycasterElements = [];

      const laptopUrl = new URL(
        "../layouts/laptopportfolio.gltf",
        import.meta.url
      );
      const portfolio = this.document.querySelector(".portfolio");
      const portfolioLaptop = this.document.querySelector(".portfolio-laptop");
      const assetLoader = new GLTFLoader();

      let actualType = "teach";
      let actualNumber = 0;
      let initLoader = 0;

      let max;

      let camera;
      let model;
      let scene;
      let renderer;
      let initAnimate = 0;

      let information;

      let animationScroll;

      let topText;
      let actualText;

      const setMax = () => {
        if (actualType === "teach") {
          max = 32;
        } else if (actualType === "projects") {
          max = 15;
        } else if (actualType === "clients") {
          max = 1;
        } else if (actualType === "drawings") {
          max = 19;
        }
      };

      function onPointerMove(event) {
        pointer.x = (event.clientX / portfolioLaptop.offsetWidth) * 2 - 1;
        pointer.y = -(event.clientY / portfolioLaptop.offsetHeight) * 2 + 1;
      }

      const setCamera = () => {
        camera.lookAt(0, 0, 0);
        if (this.window.innerWidth >= 1024) {
          information = {
            posX: 0,
            posY: 5,
            posZ: 10,
          };
        } else {
          information = {
            posX: 0,
            posY: 7,
            posZ: 15,
          };
        }

        camera.position.x = information.posX;
        camera.position.y = information.posY;
        camera.position.z = information.posZ;
      };

      const createTextActual = () => {
        let isText = false;
        let arrayNumber;
        scene.children.forEach((el, index) => {
          if (el.name === "ACTUAL") {
            isText = true;
            arrayNumber = index;
          }
        });
        let string = "";

        if (actualNumber < 9) {
          string += "0";
        }

        string += actualNumber + 1 + "/";

        if (max < 10) {
          string += "0" + max;
        } else {
          string += max;
        }

        fontLoader.load("layouts/SairaCondensed.json", function (font) {
          const geometry = new TextGeometry(string, {
            font: font,
            size: 0.1,
            height: 0.085,
          });

          actualText = new THREE.Mesh(geometry, [
            new THREE.MeshBasicMaterial({ color: "#40e755" }),
            new THREE.MeshBasicMaterial({ color: "#40e755" }),
          ]);

          actualText.geometry.needsUpdate = true;

          actualText.scale.z = 0.01;
          actualText.position.z = -0.11;
          actualText.position.x = 0.8;
          actualText.position.y = 1.9;

          actualText.name = "ACTUAL";

          if (!isText) {
            scene.add(actualText);
          } else {
            scene.children[arrayNumber].geometry = geometry;
          }
        });
      };

      const createText = () => {
        let isText = false;
        let arrayNumber;
        let string = "";
        let posX = 0;

        scene.children.forEach((el, index) => {
          if (el.name === "TOPTEXT") {
            isText = true;
            arrayNumber = index;
          }
        });

        if (actualType === "teach") {
          if (actualNumber >= 0 && actualNumber < 10) {
            string = "CSS";
            posX = 0.8;
          } else if (actualNumber >= 10 && actualNumber < 20) {
            string = "JavaScript";
            posX = 0.6;
          } else if (actualNumber >= 20) {
            string = "React";
            posX = 0.75;
          }
        } else if (actualType === "projects") {
          string = "Projects";
          posX = 0.6;
        } else if (actualType === "clients") {
          string = "Clients";
          posX = 0.7;
        } else if (actualType === "drawings") {
          string = "Drawings";
          posX = 0.6;
        }

        fontLoader.load("layouts/SairaCondensed.json", function (font) {
          const geometry = new TextGeometry(string, {
            font: font,
            size: 0.15,
            height: 0.1,
          });

          topText = new THREE.Mesh(geometry, [
            new THREE.MeshBasicMaterial({ color: "#40e755" }),
            new THREE.MeshBasicMaterial({ color: "#40e755" }),
          ]);

          topText.position.needsUpdate = true;

          topText.scale.z = 0.01;
          topText.position.z = -0.11;
          topText.position.x = posX;
          topText.position.y = 2.05;

          topText.name = "TOPTEXT";

          if (!isText) {
            scene.add(topText);
          } else {
            scene.children[arrayNumber] = topText;
          }
        });
      };

      const threeJS = () => {
        setMax();

        camera = new THREE.PerspectiveCamera(
          45,
          portfolioLaptop.clientWidth / portfolioLaptop.clientHeight,
          1,
          100
        );

        scene = new THREE.Scene();
        renderer = new THREE.WebGLRenderer({
          alpha: true,
          antialias: true,
        });

        renderer.setSize(
          portfolioLaptop.clientWidth,
          portfolioLaptop.clientHeight
        );

        setCamera();

        assetLoader.load(
          laptopUrl.href,
          function (gltf) {
            model = gltf.scene;
            scene.add(model);

            model.rotation.y = -1.57;
          },
          undefined,
          function (error) {
            console.error(error);
          }
        );

        renderer.setPixelRatio(window.devicePixelRatio);

        portfolioLaptop.appendChild(renderer.domElement);

        createText();
      };

      const setActualImage = () => {
        model.children.forEach((el) => {
          if (el.name === "img") {
            const material = el.material;
            material.needsUpdate = true;

            const loader = new THREE.TextureLoader();

            const url =
              "layouts/portfolio/" +
              actualType +
              "/" +
              (actualNumber + 1) +
              ".jpg";

            loader.load(
              url,
              function (texture) {
                const newMaterial = new THREE.MeshBasicMaterial({
                  map: texture,
                });

                el.material = newMaterial;

                newMaterial.side = 2;

                if (initLoader === 0) {
                  initLoader++;
                  el.rotation.z = -el.rotation.z;
                  el.rotation.x = -el.rotation.x;
                }
              },

              undefined,

              function (err) {
                console.error("An error happened.");
              }
            );
          }
        });
        createTextActual();
      };

      const render = () => {
        renderer.render(scene, camera);
      };

      const initResize = () => {
        setCamera();
        setAnimationScroll();

        camera.aspect =
          portfolioLaptop.clientWidth / portfolioLaptop.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(
          portfolioLaptop.clientWidth,
          portfolioLaptop.clientHeight
        );

        render();
      };

      const createLight = () => {
        const light = new THREE.PointLight(0xffffff, 5);
        light.position.set(0, 20, 10);
        light.lookAt(0, 0, 0);
        scene.add(light);
      };

      const setAnimationScroll = () => {
        if (this.window.innerWidth >= 1024) {
          animationScroll = anime({
            targets: information,
            keyframes: [
              {
                posX: 0,
                posY: 1.3468588082901554,
                posZ: 3.693717616580311,
                endDelay: 2000,
              },
            ],
            elasticity: 600,
            easing: "linear",
            autoplay: false,
          });
        } else {
          animationScroll = anime({
            targets: information,
            keyframes: [
              {
                posX: 0,
                posY: 2.527369083620846,
                posZ: 8.054738167241691,
                endDelay: 2000,
              },
            ],
            elasticity: 100,
            easing: "linear",
            autoplay: false,
          });
        }
      };

      const setRaycasterElementsColor = () => {
        raycasterElements.forEach((el) => {
          el.children.forEach((el2) => {
            el2.needsUpdate = true;

            if (
              (el2.parent.name === "Teach0" && actualType === "teach") ||
              (el2.parent.name === "Projects0" && actualType === "projects") ||
              (el2.parent.name === "Clients0" && actualType === "clients") ||
              (el2.parent.name === "Drawings0" && actualType === "drawings")
            ) {
              el2.material = new THREE.MeshBasicMaterial({
                color: "#296fba",
              });
            } else {
              el2.material = new THREE.MeshBasicMaterial({
                color: "#40e755",
              });
            }
          });
        });
      };

      function animate(that) {
        if (that.isActive) {
          if (model !== undefined) {
            if (initAnimate === 0) {
              initAnimate++;
              let buttonsEdges;
              let buttonsFront;
              scene.children.forEach((el) => {
                if (el.name === "Scene") {
                  el.children.forEach((el2) => {
                    if (el2.name[el2.name.length - 1] === "0") {
                      raycasterElements.push(el2);
                    }
                  });
                }
              });
              model.children[0].children.forEach((el) => {
                if (el.name === "Keyboard") {
                  buttonsEdges = el.children[0];
                  buttonsFront = el.children[1];
                }
              });

              setActualImage();

              const colors = {
                r: 0,
                g: 0.5,
                b: 0,
              };

              buttonsFront.material.emissiveIntensity = 1;

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
              });

              setRaycasterElementsColor();
            }
          }

          raycaster.setFromCamera(pointer, camera);
          const intersects = raycaster.intersectObjects(raycasterElements);

          setRaycasterElementsColor();

          if (intersects.length > 0) {
            for (let i = 0; i < intersects.length; i++) {
              intersects[i].object.material.color.set("#296fba");
            }
          }

          render();
        }
      }

      let scrollPercentage = 0;

      const initScroll = () => {
        if (this.isActive) {
          const clientHeight = this.document.documentElement.clientHeight;

          const portfolioTop = portfolio.getBoundingClientRect().top;
          const portfolioHeight = portfolio.offsetHeight;

          scrollPercentage =
            (portfolioTop * -1) / (portfolioHeight - clientHeight);

          if (scrollPercentage <= 1.1) {
            animationScroll.seek(scrollPercentage * animationScroll.duration);

            if (model !== undefined) {
              camera.position.x = information.posX;
              camera.position.y = information.posY;
              camera.position.z = information.posZ;

              camera.lookAt(
                model.position.x,
                model.position.y + 1,
                model.position.z
              );
            }

            raycaster.setFromCamera(pointer, camera);
          }
        }
      };

      threeJS();
      setAnimationScroll();
      createLight();
      render();
      renderer.setAnimationLoop(() => animate(this));

      portfolio.addEventListener("click", () => {
        if (this.isActive) {
          raycaster.setFromCamera(pointer, camera);

          const intersects = raycaster.intersectObjects(
            raycasterElements,
            true
          );

          setRaycasterElementsColor();

          if (intersects.length > 0) {
            const name = intersects[0].object.parent.name;

            if (name === "LeftArrow0") {
              actualNumber--;
              if (actualNumber < 0) {
                actualNumber = max - 1;
              }
              createText();
              setActualImage();
            }

            if (name === "RightArrow0") {
              actualNumber++;
              if (actualNumber === max) {
                actualNumber = 0;
              }
              createText();
              setActualImage();
            }

            if (name === "Teach0") {
              actualNumber = 0;
              actualType = "teach";
              setMax();
              setRaycasterElementsColor();
              createText();
              setActualImage();
            }

            if (name === "Projects0") {
              actualNumber = 0;
              actualType = "projects";
              setMax();
              setRaycasterElementsColor();
              createText();
              setActualImage();
            }

            if (name === "Clients0") {
              actualNumber = 0;
              actualType = "clients";
              setMax();
              setRaycasterElementsColor();
              createText();
              setActualImage();
            }

            if (name === "Drawings0") {
              actualNumber = 0;
              actualType = "drawings";
              setMax();
              setRaycasterElementsColor();
              createText();
              setActualImage();
            }

            if (name === "Show0" && actualType === "clients") {
              window.open(array.clients[actualNumber], "_blank");
            }

            if (name === "Show0" && actualType === "teach") {
              let url = "./portfolio/teach/kat" + actualNumber + "/index.html";
              this.window.open(url);
            }

            if (name === "Show0" && actualType === "projects") {
              let url =
                "./portfolio/projects/kat" + actualNumber + "/index.html";
              this.window.open(url);
            }

            if (name === "Show0" && actualType === "drawings") {
              this.document.querySelector(".lightbox").classList.add("active");
              lightboxImgWrapper.innerHTML = `<img src="./portfolio/drawings/${
                actualNumber + 1
              }.jpg" />`;
            }
          }
        }
      });

      cancel.addEventListener("click", () => {
        this.document.querySelector(".lightbox").classList.remove("active");
      });

      this.window.addEventListener("pointermove", onPointerMove);
      this.window.addEventListener("scroll", initScroll);
      this.window.addEventListener("resize", initResize);
    };

    init();
  }
}
