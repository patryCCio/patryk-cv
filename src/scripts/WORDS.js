export const WORDS = [
  {
    element: document.querySelector(".home-top-right h1"),
    pl: "Witaj świecie!",
    eng: "Hello world!",
    type: "spans",
  },

  {
    element: document.querySelector("#name"),
    pl: "<span>Nazywam się...</span> Patryk Szczerbiński",
    eng: "<span>I am...</span> Patryk Szczerbiński",
    type: "normal",
  },

  {
    element: document.querySelector("#about-content-h2-1"),
    pl: "Skąd to się wzięło?",
    eng: "Where it comes from?",
    type: "normal",
  },

  {
    element: document.querySelector("#about-content-h2-2"),
    pl: "Więcej o mnie",
    eng: "More about me",
    type: "normal",
  },

  {
    element: document.querySelector("#about-content-h2-3"),
    pl: "Zainteresowania",
    eng: "Interests",
    type: "normal",
  },

  {
    element: document.querySelector("#about-content-1"),
    pl: "Witaj, <span>nazywam się</span> Patryk Szczerbiński! Moje zainteresowanie programowaniem zapoczątkowało się już w okresie technikum. Od tamtej pory kontynuuję swoją edukację na studiach informatycznych, gdzie zdobywam solidne podstawy i rozwijam swoje umiejętności programistyczne. Obecnie jestem studentem III roku informatyki, a oprócz studiów, pragnę poszerzać swoją wiedzę i zdobywać praktyczne doświadczenie jako programista <span>front-end</span> lub <span>full-stack</span>.",
    eng: "Hello, <span>my name is</span> Patryk Szczerbiński! My interest in programming began in my school years and since then it has become my daily routine. Currently I’m a 3rd year Student of Computer Science, but apart from my studies I wish to expand my knowledge and gain practical experience as a front-end or full-stack developer.",
    type: "normal",
  },

  {
    element: document.querySelector("#about-content-2"),
    pl: "Jestem osobą, która przykłada dużą wagę do szczegółów i dbałości o jakość swojego kodu. Wierzę, że to właśnie w trudnych wyzwaniach najbardziej się uczymy, dlatego nie boję się podejmować nowych, wymagających projektów. Fascynuje mnie proces tworzenia interaktywnych interfejsów użytkownika i skutecznego rozwiązywania problemów związanych z programowaniem.",
    eng: "I’m a person who pays great attention to details and the quality of my coding. I believe that the greater the challenge is, the more we can learn by overcoming it. Therefore, I see challenges as opportunities and I’m not afraid of undertaking demanding projects. I find the process of creating interactive user interfaces and successfully solving programming problems very fascinating.",
    type: "normal",
  },

  {
    element: document.querySelector("#about-content-3"),
    pl: "Poza programowaniem, mam również zainteresowania związane z grafiką komputerową, rysowaniem, fotografią i sportem. Uważam, że różnorodność zainteresowań pomaga mi zachować kreatywność i elastyczność w podejściu do projektowania i rozwiązywania problemów.",
    eng: "Besides programming, I’m interested in computer graphics, drawing, photography and sports. In my opinion having a variety of hobbies helps me to remain creative and flexible in my approach to programming and solving problems.",
    type: "normal",
  },

  {
    element: document.querySelector("#about-me-h2"),
    pl: "O mnie",
    eng: "About me",
    type: "normal",
  },

  {
    element: document.querySelector("#knowledge-h2"),
    pl: "Więcej",
    eng: "More",
    type: "normal",
  },

  {
    element: document.querySelector(".his-1 .his-description"),
    pl: "Mój pierwszy kontakt z programowaniem w C++!",
    eng: "My first contact with programming in C++ language!",
  },

  {
    element: document.querySelector(".his-2 .his-description"),
    pl: "Rozpocząłem naukę w Technikum nr 24 w Warszawie o kierunku Grafiki i Poligrafii Cyfrowej.",
    eng: "I started teaching in Technikum nr 24 in Warsaw majoring Graphics and digital printing.",
  },

  {
    element: document.querySelector(".his-3 .his-description"),
    pl: "Mój pierwszy kontakt z HTML, CSS i JavaScript.",
    eng: "My first contact with HTML, CSS and Javascript.",
  },

  {
    element: document.querySelector(".his-4 .his-description"),
    pl: "Zdanie egzaminu na prawo jazdy kat. B!",
    eng: "I passed test for driving license for category B!",
  },

  {
    element: document.querySelector(".his-5 .his-description"),
    pl: "Numeracja dokumentów, rejestrowanie w systemie, sortowanie listów",
    eng: "Numbering of documents, register in system, sorting lists",
  },

  {
    element: document.querySelector(".his-6 .his-description"),
    pl: "Kontakt z klientami, obsługa płatności, metkowanie ubrań",
    eng: "Contact with clients, payment service, labeling clothes",
  },
  {
    element: document.querySelector(".his-7 .his-description"),
    pl: "Inwentaryzajce",
    eng: "Inventories",
  },

  {
    element: document.querySelector(".his-8 .his-description"),
    pl: "Pracownik sklepu, praca w zespole, praca przy kasie",
    eng: "Shop employeer, teamwork, work at cash",
  },

  {
    element: document.querySelector(".his-9 .his-description"),
    pl: "Zdobycie tytułu Grafiki i Poligrafii Cyfrowej!",
    eng: "I got qualifications of Graphics and Digital printing!",
  },

  {
    element: document.querySelector(".his-10 .his-description"),
    pl: "Zdałem maturę i rozpocząłem naukę na Uczelni UTH na kierunku Inżynieria Oprogramowania.",
    eng: "I passed secondary school certificate and I began teach at University UTH on majority Software Engineering.",
  },

  {
    element: document.querySelector(".his-11 .his-description"),
    pl: "Asystent ds. Handlowych",
    eng: "Commercial Assistant",
  },

  {
    element: document.querySelector(".his-12 .his-description"),
    pl: "Magazynier",
    eng: "Storeman",
  },

  {
    element: document.querySelector(".his-13 .his-description"),
    pl: "Udostępnienie strony na wykupionej domenie, przy pomocy MySQL, Express, NodeJS, React.",
    eng: "Deployment website on purchased domain using MySQL, Express, NodeJS, React.",
  },

  {
    element: document.querySelector("#box-1-ul"),
    pl: `
    <li>Poprawne zagnieżdżanie tagów</li>
    <li>Atrybut "title" i "lang"</li>
    <li>Neutralny tag - span</li>
    <li>Atrybut "style"</li>
    <li>ul vs ol</li>
    <li>#etykiety - przeskakiwanie na stronie</li>
    <li>Link email, link telefon i tag address</li>
    <li>Formularze</li>
    <li>Tagi HTML 5</li>
    `,
    eng: `
    <li>Correctly nesting of tags</li>
    <li>Attribute "title" and "lang"</li>
    <li>Neutral tag - span</li>
    <li>Attribute "style"</li>
    <li>ul versus ol</li>
    <li>#labels - jumping on the page</li>
    <li>Link email, link telefon and tag address</li>
    <li>Forms</li>
    <li>Tags HTML 5</li>
    `,
  },

  {
    element: document.querySelector("#box-2-ul"),
    pl: `
    <li>Selektory, pseudoelementy i pseudoklasy</li>
    <li>Jednostki CSS</li>
    <li>Model pudełkowy i box-sizing</li>
    <li>Reset css</li>
    <li>Funkcja calc</li>
    <li>Zmienne w CSS</li>
    <li>Animacja SVG</li>
    <li>@keyframes</li>
    <li>Flexbox</li>
    <li>Selektory (~, >, +)</li>
    <li>Responsywność</li>
    <li>SCSS</li>
    `,
    eng: `
    <li>Selectors, pseudoelements and pseudoclasses</li>
    <li>CSS units</li>
    <li>Model box and box-sizing</li>
    <li>Fixing css</li>
    <li>Calc() function</li>
    <li>Variables in CSS</li>
    <li>SVG animation</li>
    <li>@keyframes</li>
    <li>Flexbox</li>
    <li>Selectors (~, >, +)</li>
    <li>Responsive Web Design</li>
    <li>SCSS</li>
    `,
  },

  {
    element: document.querySelector("#box-3-ul"),
    pl: `
    <li>Typy danych - proste i typ referencyjny (obiekt)</li>
    <li>Literały</li>
    <li>Tablice</li>
    <li>Funkcje na tablicach</li>
    <li>
      Document Object Model (DOM) - pobieranie elementów, modyfikacja,
      zdarzenie i akcje, nasłuchiwanie
    </li>
    <li>Tworzenie obiektu, instancja</li>
    <li>Hermetyzacja, dziedziczenie, abstrakcja</li>
    <li>Klasy, extends i super</li>
    <li>This</li>
    <li>ThreeJS</li>
    <li>AnimeJS</li>
    <li>GSAP</li>
    <li>Podstawy JQuery</li>
    `,
    eng: `
    <li>Data types - basic and reference type (object)</li>
    <li>Literals</li>
    <li>Arrays</li>
    <li>Functions on arrays</li>
    <li>
      Document Object Model (DOM) - getting elements, modification,
      event and actions, listening
    </li>
    <li>Creating object, instance</li>
    <li>Encapsulation, inheritance, abstraction</li>
    <li>Classes, extends and super</li>
    <li>This</li>
    <li>ThreeJS</li>
    <li>AnimeJS</li>
    <li>GSAP</li>
    <li>Basics of JQuery</li>
    `,
  },

  {
    element: document.querySelector("#box-4-ul"),
    pl: `
    <li>Props</li>
    <li>Praca z formularzami</li>
    <li>JSON i metoda fetch lub axios</li>
    <li>Komponenty funkcyjne</li>
    <li>API - teoria</li>
    <li>React Router > v.6</li>
    <li>
      Hooki - useState, useEffect, useContext, createContext, useRef,
      createRef, useEffect, useReducer, useMemo, useCallback,
      useHistory, useLocation
    </li>
    <li>Redux</li>
    <li>Praca z NodeJS</li>
    `,
    eng: `
    <li>Props</li>
    <li>Working with forms</li>
    <li>JSON and fetch method or axios</li>
    <li>Functional components</li>
    <li>API - theory</li>
    <li>React Router > v.6</li>
    <li>
      Hooks - useState, useEffect, useContext, createContext, useRef,
      createRef, useEffect, useReducer, useMemo, useCallback,
      useHistory, useLocation
    </li>
    <li>Redux</li>
    <li>Working with NodeJS</li>
    `,
  },

  {
    element: document.querySelector("#box-5-ul"),
    pl: `
    <li>Biblioteki: jwt, express, cookie-parser, cors, dotenv</li>
    <li>Połączenie z hostingami np. Cloudinary</li>
    <li>Callback</li>
    <li>Format JSON</li>
    <li>Require lub ES6 (import)</li>
    <li>Tworzenie serwera HTTP</li>
    <li>Żądanie do serwera HTTP</li>
    <li>Serwer HTTP - asychroniczność i synchroniczność</li>
    <li>Połączenie z MySQL lub MongoDB</li>
    <li>Tworzenie routingu</li>
    `,
    eng: `
    <li>Libraries: jwt, express, cookie-parser, cors, dotenv</li>
    <li>Connection to hosting for example: Cloudinary</li>
    <li>Callback</li>
    <li>JSON format</li>
    <li>Require or ES6 (import)</li>
    <li>Creating server HTTP</li>
    <li>Request to the server HTTP</li>
    <li>Server HTTP - asychronicity and synchronicity</li>
    <li>Connection with MySQL or MongoDB</li>
    <li>Create routing</li>
    `,
  },

  {
    element: document.querySelector("#box-6-ul"),
    pl: `
    <li>Importowanie danych z excela (.csv)</li>
    <li>Definiowanie tabel i dodawanie wartości</li>
    <li>Wyświetlanie danych</li>
    <li>Aktualizacja i usuwanie danych</li>
    <li>Tabele relacyjne</li>
    <li>Referencja do innych tabel</li>
    <li>Łączenie dwóch tabel (Join)</li>
    `,
    eng: `
    <li>Importing data from excel (.csv)</li>
    <li>Defining tables and adding values</li>
    <li>Data display</li>
    <li>Update and delete data</li>
    <li>Relational tables</li>
    <li>Reference to other tables</li>
    <li>Combining two tables (Join)</li>
    `,
  },
  {
    element: document.querySelector("#box-7-ul"),
    pl: `
    <li>Podstawowe operacje w MongoDB</li>
    <li>Spójniki</li>
    <li>Aktualizacja i usuwanie danych</li>
    <li>Compass Community</li>
    <li>Użycie MongoDB w NodeJS</li>
    `,
    eng: `
    <li>Basic operations in MongoDB</li>
    <li>Coherents</li>
    <li>Update and delete data</li>
    <li>Compass Community</li>
    <li>Using MongoDB in NodeJS</li>
    `,
  },

  {
    element: document.querySelector("#box-8-ul"),
    pl: `
    <li>Aktualnie się uczę!</li>
    <li>W najbliższym czasie: Laravel lub Symphony</li>
    `,
    eng: `
    <li>I'm currently learning!</li>
    <li>In the near future: Laravel or Symphony</li>
    `,
  },

  {
    element: document.querySelector("#box-9-ul"),
    pl: `
    <li>Modelowanie i tryb edycji elementów</li>
    <li>Rzeźbienie elementów</li>
    <li>Tworzenie animacji szkieletu lub nodów</li>
    <li>Tworzenie materiałów i podstawowe łączenia nodów</li>
    <li>Eksport jako glTF lub glb i połączenie modelu z ThreeJS</li>
    `,
    eng: `
    <li>Modeling and element editing mode</li>
    <li>Sculpting the elements</li>
    <li>Create skeletal or node animations</li>
    <li>Creating materials and basic connection of node</li>
    <li>Exporting as glTF or glb and connecting model with ThreeJS</li>
    `,
  },

  {
    element: document.querySelector("#box-10-ul"),
    pl: `
    <li>Prosty retusz zdjęć</li>
    <li>Prasowanie ubrań</li>
    <li>Poprawa jakości skóry (usuwanie znamion itp.)</li>
    <li>Edycja plików RAW</li>
    <li>Obsługa tabletu graficznego</li>
    `,
    eng: `
    <li>Simple photo retouching</li>
    <li>Ironing clothes</li>
    <li>Skin improvement (remove of moles etc.)</li>
    <li>Edition RAW files</li>
    <li>Graphics tablet operation</li>
    `,
  },

  {
    element: document.querySelector("#box-11-ul"),
    pl: `
    <li>Tworzenie ulotek, banerów, reklam i logotypów</li>
    <li>Prawidłowa obsługa narzędzi</li>
    <li>Obsługa tabletu graficznego</li>
    <li>Dodatkowo tworzenie layoutów w Adobe XD lub Figma</li>
    `,
    eng: `
    <li>Create flyers, banners, ads and logotypes</li>
    <li>Correct tool handling</li>
    <li>Graphics tablet operation</li>
    <li>In addition creating layouts in Adobe XD or Figma</li>
    `,
  },

  {
    element: document.querySelector("#contact-h2-left"),
    pl: `Kon`,
    eng: `Con`,
  },

  {
    element: document.querySelector("#contact-h2-right"),
    pl: `takt`,
    eng: `tact`,
  },

  {
    element: document.querySelector("#contact-h3"),
    pl: `Zainteresowany?`,
    eng: `Interested?`,
  },

  {
    element: document.querySelector("#contact-p-1"),
    pl: `Napisz do mnie!`,
    eng: `Write to me!`,
  },

  {
    element: document.querySelector("#contact-p-2"),
    pl: `lub zadzwoń!`,
    eng: `or call!`,
  },
];
