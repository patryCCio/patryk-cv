(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const Gc=[{element:document.querySelector(".home-top-right h1"),pl:"Witaj świecie!",eng:"Hello world!",type:"spans"},{element:document.querySelector("#name"),pl:"<span>Nazywam się...</span> Patryk Szczerbiński",eng:"<span>I am...</span> Patryk Szczerbiński",type:"normal"},{element:document.querySelector("#about-content-h2-1"),pl:"Skąd to się wzięło?",eng:"Where it comes from?",type:"normal"},{element:document.querySelector("#about-content-h2-2"),pl:"Więcej o mnie",eng:"More about me",type:"normal"},{element:document.querySelector("#about-content-h2-3"),pl:"Zainteresowania",eng:"Interests",type:"normal"},{element:document.querySelector("#about-content-1"),pl:"Witaj, <span>nazywam się</span> Patryk Szczerbiński! Moje zainteresowanie programowaniem zapoczątkowało się już w okresie technikum. Od tamtej pory kontynuuję swoją edukację na studiach informatycznych, gdzie zdobywam solidne podstawy i rozwijam swoje umiejętności programistyczne. Obecnie jestem studentem III roku informatyki, a oprócz studiów, pragnę poszerzać swoją wiedzę i zdobywać praktyczne doświadczenie jako programista <span>front-end</span> lub <span>full-stack</span>.",eng:"Hello, <span>my name is</span> Patryk Szczerbiński! My interest in programming began in my school years and since then it has become my daily routine. Currently I’m a 3rd year Student of Computer Science, but apart from my studies I wish to expand my knowledge and gain practical experience as a front-end or full-stack developer.",type:"normal"},{element:document.querySelector("#about-content-2"),pl:"Jestem osobą, która przykłada dużą wagę do szczegółów i dbałości o jakość swojego kodu. Wierzę, że to właśnie w trudnych wyzwaniach najbardziej się uczymy, dlatego nie boję się podejmować nowych, wymagających projektów. Fascynuje mnie proces tworzenia interaktywnych interfejsów użytkownika i skutecznego rozwiązywania problemów związanych z programowaniem.",eng:"I’m a person who pays great attention to details and the quality of my coding. I believe that the greater the challenge is, the more we can learn by overcoming it. Therefore, I see challenges as opportunities and I’m not afraid of undertaking demanding projects. I find the process of creating interactive user interfaces and successfully solving programming problems very fascinating.",type:"normal"},{element:document.querySelector("#about-content-3"),pl:"Poza programowaniem, mam również zainteresowania związane z grafiką komputerową, rysowaniem, fotografią i sportem. Uważam, że różnorodność zainteresowań pomaga mi zachować kreatywność i elastyczność w podejściu do projektowania i rozwiązywania problemów.",eng:"Besides programming, I’m interested in computer graphics, drawing, photography and sports. In my opinion having a variety of hobbies helps me to remain creative and flexible in my approach to programming and solving problems.",type:"normal"},{element:document.querySelector("#about-me-h2"),pl:"O mnie",eng:"About me",type:"normal"},{element:document.querySelector("#knowledge-h2"),pl:"Więcej",eng:"More",type:"normal"},{element:document.querySelector(".his-1 .his-description"),pl:"Mój pierwszy kontakt z programowaniem w C++!",eng:"My first contact with programming in C++ language!"},{element:document.querySelector(".his-2 .his-description"),pl:"Rozpocząłem naukę w Technikum nr 24 w Warszawie o kierunku Grafiki i Poligrafii Cyfrowej.",eng:"I started teaching in Technikum nr 24 in Warsaw majoring Graphics and digital printing."},{element:document.querySelector(".his-3 .his-description"),pl:"Mój pierwszy kontakt z HTML, CSS i JavaScript.",eng:"My first contact with HTML, CSS and Javascript."},{element:document.querySelector(".his-4 .his-description"),pl:"Zdanie egzaminu na prawo jazdy kat. B!",eng:"I passed test for driving license for category B!"},{element:document.querySelector(".his-5 .his-description"),pl:"Numeracja dokumentów, rejestrowanie w systemie, sortowanie listów",eng:"Numbering of documents, register in system, sorting lists"},{element:document.querySelector(".his-6 .his-description"),pl:"Kontakt z klientami, obsługa płatności, metkowanie ubrań",eng:"Contact with clients, payment service, labeling clothes"},{element:document.querySelector(".his-7 .his-description"),pl:"Inwentaryzajce",eng:"Inventories"},{element:document.querySelector(".his-8 .his-description"),pl:"Pracownik sklepu, praca w zespole, praca przy kasie",eng:"Shop employeer, teamwork, work at cash"},{element:document.querySelector(".his-9 .his-description"),pl:"Zdobycie tytułu Grafiki i Poligrafii Cyfrowej!",eng:"I got qualifications of Graphics and Digital printing!"},{element:document.querySelector(".his-10 .his-description"),pl:"Zdałem maturę i rozpocząłem naukę na Uczelni UTH na kierunku Inżynieria Oprogramowania.",eng:"I passed secondary school certificate and I began teach at University UTH on majority Software Engineering."},{element:document.querySelector(".his-11 .his-description"),pl:"Asystent ds. Handlowych",eng:"Commercial Assistant"},{element:document.querySelector(".his-12 .his-description"),pl:"Magazynier",eng:"Storeman"},{element:document.querySelector(".his-13 .his-description"),pl:"Udostępnienie strony na wykupionej domenie, przy pomocy MySQL, Express, NodeJS, React.",eng:"Deployment website on purchased domain using MySQL, Express, NodeJS, React."},{element:document.querySelector("#box-1-ul"),pl:`
    <li>Poprawne zagnieżdżanie tagów</li>
    <li>Atrybut "title" i "lang"</li>
    <li>Neutralny tag - span</li>
    <li>Atrybut "style"</li>
    <li>ul vs ol</li>
    <li>#etykiety - przeskakiwanie na stronie</li>
    <li>Link email, link telefon i tag address</li>
    <li>Formularze</li>
    <li>Tagi HTML 5</li>
    `,eng:`
    <li>Correctly nesting of tags</li>
    <li>Attribute "title" and "lang"</li>
    <li>Neutral tag - span</li>
    <li>Attribute "style"</li>
    <li>ul versus ol</li>
    <li>#labels - jumping on the page</li>
    <li>Link email, link telefon and tag address</li>
    <li>Forms</li>
    <li>Tags HTML 5</li>
    `},{element:document.querySelector("#box-2-ul"),pl:`
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
    `,eng:`
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
    `},{element:document.querySelector("#box-3-ul"),pl:`
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
    `,eng:`
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
    `},{element:document.querySelector("#box-4-ul"),pl:`
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
    `,eng:`
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
    `},{element:document.querySelector("#box-5-ul"),pl:`
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
    `,eng:`
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
    `},{element:document.querySelector("#box-6-ul"),pl:`
    <li>Importowanie danych z excela (.csv)</li>
    <li>Definiowanie tabel i dodawanie wartości</li>
    <li>Wyświetlanie danych</li>
    <li>Aktualizacja i usuwanie danych</li>
    <li>Tabele relacyjne</li>
    <li>Referencja do innych tabel</li>
    <li>Łączenie dwóch tabel (Join)</li>
    `,eng:`
    <li>Importing data from excel (.csv)</li>
    <li>Defining tables and adding values</li>
    <li>Data display</li>
    <li>Update and delete data</li>
    <li>Relational tables</li>
    <li>Reference to other tables</li>
    <li>Combining two tables (Join)</li>
    `},{element:document.querySelector("#box-7-ul"),pl:`
    <li>Podstawowe operacje w MongoDB</li>
    <li>Spójniki</li>
    <li>Aktualizacja i usuwanie danych</li>
    <li>Compass Community</li>
    <li>Użycie MongoDB w NodeJS</li>
    `,eng:`
    <li>Basic operations in MongoDB</li>
    <li>Coherents</li>
    <li>Update and delete data</li>
    <li>Compass Community</li>
    <li>Using MongoDB in NodeJS</li>
    `},{element:document.querySelector("#box-8-ul"),pl:`
    <li>Aktualnie się uczę!</li>
    <li>W najbliższym czasie: Laravel lub Symphony</li>
    `,eng:`
    <li>I'm currently learning!</li>
    <li>In the near future: Laravel or Symphony</li>
    `},{element:document.querySelector("#box-9-ul"),pl:`
    <li>Modelowanie i tryb edycji elementów</li>
    <li>Rzeźbienie elementów</li>
    <li>Tworzenie animacji szkieletu lub nodów</li>
    <li>Tworzenie materiałów i podstawowe łączenia nodów</li>
    <li>Eksport jako glTF lub glb i połączenie modelu z ThreeJS</li>
    `,eng:`
    <li>Modeling and element editing mode</li>
    <li>Sculpting the elements</li>
    <li>Create skeletal or node animations</li>
    <li>Creating materials and basic connection of node</li>
    <li>Exporting as glTF or glb and connecting model with ThreeJS</li>
    `},{element:document.querySelector("#box-10-ul"),pl:`
    <li>Prosty retusz zdjęć</li>
    <li>Prasowanie ubrań</li>
    <li>Poprawa jakości skóry (usuwanie znamion itp.)</li>
    <li>Edycja plików RAW</li>
    <li>Obsługa tabletu graficznego</li>
    `,eng:`
    <li>Simple photo retouching</li>
    <li>Ironing clothes</li>
    <li>Skin improvement (remove of moles etc.)</li>
    <li>Edition RAW files</li>
    <li>Graphics tablet operation</li>
    `},{element:document.querySelector("#box-11-ul"),pl:`
    <li>Tworzenie ulotek, banerów, reklam i logotypów</li>
    <li>Prawidłowa obsługa narzędzi</li>
    <li>Obsługa tabletu graficznego</li>
    <li>Dodatkowo tworzenie layoutów w Adobe XD lub Figma</li>
    `,eng:`
    <li>Create flyers, banners, ads and logotypes</li>
    <li>Correct tool handling</li>
    <li>Graphics tablet operation</li>
    <li>In addition creating layouts in Adobe XD or Figma</li>
    `},{element:document.querySelector("#contact-h2-left"),pl:"Kon",eng:"Con"},{element:document.querySelector("#contact-h2-right"),pl:"takt",eng:"tact"},{element:document.querySelector("#contact-h3"),pl:"Zainteresowany?",eng:"Interested?"},{element:document.querySelector("#contact-p-1"),pl:"Napisz do mnie!",eng:"Write to me!"},{element:document.querySelector("#contact-p-2"),pl:"lub zadzwoń!",eng:"or call!"}];class Js{static initLanguage(e,t,n){function i(s,o){for(let a=0;a<s.length;a++){const l=document.createElement("span");s[a]===" "?l.innerHTML="&nbsp;":l.innerHTML=s[a],o.element.appendChild(l)}}Gc.forEach((s,o)=>{s.element.innerHTML="",e==="pl"?(s.type==="spans"?i(s.pl,s):s.element.innerHTML=s.pl,t.classList.add("active"),n.classList.remove("active")):(s.type==="spans"?i(s.eng,s):s.element.innerHTML=s.eng,t.classList.remove("active"),n.classList.add("active"))})}}var Pl={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},no={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},Hc=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],Fs={CSS:{},springs:{}};function Yt(r,e,t){return Math.min(Math.max(r,e),t)}function Gi(r,e){return r.indexOf(e)>-1}function Ks(r,e){return r.apply(null,e)}var be={arr:function(r){return Array.isArray(r)},obj:function(r){return Gi(Object.prototype.toString.call(r),"Object")},pth:function(r){return be.obj(r)&&r.hasOwnProperty("totalLength")},svg:function(r){return r instanceof SVGElement},inp:function(r){return r instanceof HTMLInputElement},dom:function(r){return r.nodeType||be.svg(r)},str:function(r){return typeof r=="string"},fnc:function(r){return typeof r=="function"},und:function(r){return typeof r>"u"},nil:function(r){return be.und(r)||r===null},hex:function(r){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(r)},rgb:function(r){return/^rgb/.test(r)},hsl:function(r){return/^hsl/.test(r)},col:function(r){return be.hex(r)||be.rgb(r)||be.hsl(r)},key:function(r){return!Pl.hasOwnProperty(r)&&!no.hasOwnProperty(r)&&r!=="targets"&&r!=="keyframes"}};function Il(r){var e=/\(([^)]+)\)/.exec(r);return e?e[1].split(",").map(function(t){return parseFloat(t)}):[]}function Dl(r,e){var t=Il(r),n=Yt(be.und(t[0])?1:t[0],.1,100),i=Yt(be.und(t[1])?100:t[1],.1,100),s=Yt(be.und(t[2])?10:t[2],.1,100),o=Yt(be.und(t[3])?0:t[3],.1,100),a=Math.sqrt(i/n),l=s/(2*Math.sqrt(i*n)),c=l<1?a*Math.sqrt(1-l*l):0,u=1,h=l<1?(l*a+-o)/c:-o+a;function d(g){var p=e?e*g/1e3:g;return l<1?p=Math.exp(-p*l*a)*(u*Math.cos(c*p)+h*Math.sin(c*p)):p=(u+h*p)*Math.exp(-p*a),g===0||g===1?g:1-p}function m(){var g=Fs.springs[r];if(g)return g;for(var p=1/6,f=0,v=0;;)if(f+=p,d(f)===1){if(v++,v>=16)break}else v=0;var y=f*p*1e3;return Fs.springs[r]=y,y}return e?d:m}function Wc(r){return r===void 0&&(r=10),function(e){return Math.ceil(Yt(e,1e-6,1)*r)*(1/r)}}var qc=function(){var r=11,e=1/(r-1);function t(u,h){return 1-3*h+3*u}function n(u,h){return 3*h-6*u}function i(u){return 3*u}function s(u,h,d){return((t(h,d)*u+n(h,d))*u+i(h))*u}function o(u,h,d){return 3*t(h,d)*u*u+2*n(h,d)*u+i(h)}function a(u,h,d,m,g){var p,f,v=0;do f=h+(d-h)/2,p=s(f,m,g)-u,p>0?d=f:h=f;while(Math.abs(p)>1e-7&&++v<10);return f}function l(u,h,d,m){for(var g=0;g<4;++g){var p=o(h,d,m);if(p===0)return h;var f=s(h,d,m)-u;h-=f/p}return h}function c(u,h,d,m){if(!(0<=u&&u<=1&&0<=d&&d<=1))return;var g=new Float32Array(r);if(u!==h||d!==m)for(var p=0;p<r;++p)g[p]=s(p*e,u,d);function f(v){for(var y=0,_=1,x=r-1;_!==x&&g[_]<=v;++_)y+=e;--_;var w=(v-g[_])/(g[_+1]-g[_]),E=y+w*e,L=o(E,u,d);return L>=.001?l(v,E,u,d):L===0?E:a(v,y,y+e,u,d)}return function(v){return u===h&&d===m||v===0||v===1?v:s(f(v),h,m)}}return c}(),Nl=function(){var r={linear:function(){return function(n){return n}}},e={Sine:function(){return function(n){return 1-Math.cos(n*Math.PI/2)}},Circ:function(){return function(n){return 1-Math.sqrt(1-n*n)}},Back:function(){return function(n){return n*n*(3*n-2)}},Bounce:function(){return function(n){for(var i,s=4;n<((i=Math.pow(2,--s))-1)/11;);return 1/Math.pow(4,3-s)-7.5625*Math.pow((i*3-2)/22-n,2)}},Elastic:function(n,i){n===void 0&&(n=1),i===void 0&&(i=.5);var s=Yt(n,1,10),o=Yt(i,.1,2);return function(a){return a===0||a===1?a:-s*Math.pow(2,10*(a-1))*Math.sin((a-1-o/(Math.PI*2)*Math.asin(1/s))*(Math.PI*2)/o)}}},t=["Quad","Cubic","Quart","Quint","Expo"];return t.forEach(function(n,i){e[n]=function(){return function(s){return Math.pow(s,i+2)}}}),Object.keys(e).forEach(function(n){var i=e[n];r["easeIn"+n]=i,r["easeOut"+n]=function(s,o){return function(a){return 1-i(s,o)(1-a)}},r["easeInOut"+n]=function(s,o){return function(a){return a<.5?i(s,o)(a*2)/2:1-i(s,o)(a*-2+2)/2}},r["easeOutIn"+n]=function(s,o){return function(a){return a<.5?(1-i(s,o)(1-a*2))/2:(i(s,o)(a*2-1)+1)/2}}}),r}();function io(r,e){if(be.fnc(r))return r;var t=r.split("(")[0],n=Nl[t],i=Il(r);switch(t){case"spring":return Dl(r,e);case"cubicBezier":return Ks(qc,i);case"steps":return Ks(Wc,i);default:return Ks(n,i)}}function Fl(r){try{var e=document.querySelectorAll(r);return e}catch{return}}function Bs(r,e){for(var t=r.length,n=arguments.length>=2?arguments[1]:void 0,i=[],s=0;s<t;s++)if(s in r){var o=r[s];e.call(n,o,s,r)&&i.push(o)}return i}function ks(r){return r.reduce(function(e,t){return e.concat(be.arr(t)?ks(t):t)},[])}function ko(r){return be.arr(r)?r:(be.str(r)&&(r=Fl(r)||r),r instanceof NodeList||r instanceof HTMLCollection?[].slice.call(r):[r])}function so(r,e){return r.some(function(t){return t===e})}function ro(r){var e={};for(var t in r)e[t]=r[t];return e}function Or(r,e){var t=ro(r);for(var n in r)t[n]=e.hasOwnProperty(n)?e[n]:r[n];return t}function Us(r,e){var t=ro(r);for(var n in e)t[n]=be.und(r[n])?e[n]:r[n];return t}function Xc(r){var e=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(r);return e?"rgba("+e[1]+",1)":r}function jc(r){var e=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,t=r.replace(e,function(a,l,c,u){return l+l+c+c+u+u}),n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t),i=parseInt(n[1],16),s=parseInt(n[2],16),o=parseInt(n[3],16);return"rgba("+i+","+s+","+o+",1)"}function Zc(r){var e=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(r)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(r),t=parseInt(e[1],10)/360,n=parseInt(e[2],10)/100,i=parseInt(e[3],10)/100,s=e[4]||1;function o(d,m,g){return g<0&&(g+=1),g>1&&(g-=1),g<1/6?d+(m-d)*6*g:g<1/2?m:g<2/3?d+(m-d)*(2/3-g)*6:d}var a,l,c;if(n==0)a=l=c=i;else{var u=i<.5?i*(1+n):i+n-i*n,h=2*i-u;a=o(h,u,t+1/3),l=o(h,u,t),c=o(h,u,t-1/3)}return"rgba("+a*255+","+l*255+","+c*255+","+s+")"}function Yc(r){if(be.rgb(r))return Xc(r);if(be.hex(r))return jc(r);if(be.hsl(r))return Zc(r)}function hn(r){var e=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(r);if(e)return e[1]}function Jc(r){if(Gi(r,"translate")||r==="perspective")return"px";if(Gi(r,"rotate")||Gi(r,"skew"))return"deg"}function zr(r,e){return be.fnc(r)?r(e.target,e.id,e.total):r}function Jt(r,e){return r.getAttribute(e)}function oo(r,e,t){var n=hn(e);if(so([t,"deg","rad","turn"],n))return e;var i=Fs.CSS[e+t];if(!be.und(i))return i;var s=100,o=document.createElement(r.tagName),a=r.parentNode&&r.parentNode!==document?r.parentNode:document.body;a.appendChild(o),o.style.position="absolute",o.style.width=s+t;var l=s/o.offsetWidth;a.removeChild(o);var c=l*parseFloat(e);return Fs.CSS[e+t]=c,c}function Ol(r,e,t){if(e in r.style){var n=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),i=r.style[e]||getComputedStyle(r).getPropertyValue(n)||"0";return t?oo(r,i,t):i}}function ao(r,e){if(be.dom(r)&&!be.inp(r)&&(!be.nil(Jt(r,e))||be.svg(r)&&r[e]))return"attribute";if(be.dom(r)&&so(Hc,e))return"transform";if(be.dom(r)&&e!=="transform"&&Ol(r,e))return"css";if(r[e]!=null)return"object"}function zl(r){if(be.dom(r)){for(var e=r.style.transform||"",t=/(\w+)\(([^)]*)\)/g,n=new Map,i;i=t.exec(e);)n.set(i[1],i[2]);return n}}function Kc(r,e,t,n){var i=Gi(e,"scale")?1:0+Jc(e),s=zl(r).get(e)||i;return t&&(t.transforms.list.set(e,s),t.transforms.last=e),n?oo(r,s,n):s}function lo(r,e,t,n){switch(ao(r,e)){case"transform":return Kc(r,e,n,t);case"css":return Ol(r,e,t);case"attribute":return Jt(r,e);default:return r[e]||0}}function co(r,e){var t=/^(\*=|\+=|-=)/.exec(r);if(!t)return r;var n=hn(r)||0,i=parseFloat(e),s=parseFloat(r.replace(t[0],""));switch(t[0][0]){case"+":return i+s+n;case"-":return i-s+n;case"*":return i*s+n}}function Bl(r,e){if(be.col(r))return Yc(r);if(/\s/g.test(r))return r;var t=hn(r),n=t?r.substr(0,r.length-t.length):r;return e?n+e:n}function uo(r,e){return Math.sqrt(Math.pow(e.x-r.x,2)+Math.pow(e.y-r.y,2))}function $c(r){return Math.PI*2*Jt(r,"r")}function Qc(r){return Jt(r,"width")*2+Jt(r,"height")*2}function eu(r){return uo({x:Jt(r,"x1"),y:Jt(r,"y1")},{x:Jt(r,"x2"),y:Jt(r,"y2")})}function kl(r){for(var e=r.points,t=0,n,i=0;i<e.numberOfItems;i++){var s=e.getItem(i);i>0&&(t+=uo(n,s)),n=s}return t}function tu(r){var e=r.points;return kl(r)+uo(e.getItem(e.numberOfItems-1),e.getItem(0))}function Ul(r){if(r.getTotalLength)return r.getTotalLength();switch(r.tagName.toLowerCase()){case"circle":return $c(r);case"rect":return Qc(r);case"line":return eu(r);case"polyline":return kl(r);case"polygon":return tu(r)}}function nu(r){var e=Ul(r);return r.setAttribute("stroke-dasharray",e),e}function iu(r){for(var e=r.parentNode;be.svg(e)&&be.svg(e.parentNode);)e=e.parentNode;return e}function Vl(r,e){var t=e||{},n=t.el||iu(r),i=n.getBoundingClientRect(),s=Jt(n,"viewBox"),o=i.width,a=i.height,l=t.viewBox||(s?s.split(" "):[0,0,o,a]);return{el:n,viewBox:l,x:l[0]/1,y:l[1]/1,w:o,h:a,vW:l[2],vH:l[3]}}function su(r,e){var t=be.str(r)?Fl(r)[0]:r,n=e||100;return function(i){return{property:i,el:t,svg:Vl(t),totalLength:Ul(t)*(n/100)}}}function ru(r,e,t){function n(u){u===void 0&&(u=0);var h=e+u>=1?e+u:0;return r.el.getPointAtLength(h)}var i=Vl(r.el,r.svg),s=n(),o=n(-1),a=n(1),l=t?1:i.w/i.vW,c=t?1:i.h/i.vH;switch(r.property){case"x":return(s.x-i.x)*l;case"y":return(s.y-i.y)*c;case"angle":return Math.atan2(a.y-o.y,a.x-o.x)*180/Math.PI}}function Uo(r,e){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,n=Bl(be.pth(r)?r.totalLength:r,e)+"";return{original:n,numbers:n.match(t)?n.match(t).map(Number):[0],strings:be.str(r)||e?n.split(t):[]}}function ho(r){var e=r?ks(be.arr(r)?r.map(ko):ko(r)):[];return Bs(e,function(t,n,i){return i.indexOf(t)===n})}function Gl(r){var e=ho(r);return e.map(function(t,n){return{target:t,id:n,total:e.length,transforms:{list:zl(t)}}})}function ou(r,e){var t=ro(e);if(/^spring/.test(t.easing)&&(t.duration=Dl(t.easing)),be.arr(r)){var n=r.length,i=n===2&&!be.obj(r[0]);i?r={value:r}:be.fnc(e.duration)||(t.duration=e.duration/n)}var s=be.arr(r)?r:[r];return s.map(function(o,a){var l=be.obj(o)&&!be.pth(o)?o:{value:o};return be.und(l.delay)&&(l.delay=a?0:e.delay),be.und(l.endDelay)&&(l.endDelay=a===s.length-1?e.endDelay:0),l}).map(function(o){return Us(o,t)})}function au(r){for(var e=Bs(ks(r.map(function(s){return Object.keys(s)})),function(s){return be.key(s)}).reduce(function(s,o){return s.indexOf(o)<0&&s.push(o),s},[]),t={},n=function(s){var o=e[s];t[o]=r.map(function(a){var l={};for(var c in a)be.key(c)?c==o&&(l.value=a[c]):l[c]=a[c];return l})},i=0;i<e.length;i++)n(i);return t}function lu(r,e){var t=[],n=e.keyframes;n&&(e=Us(au(n),e));for(var i in e)be.key(i)&&t.push({name:i,tweens:ou(e[i],r)});return t}function cu(r,e){var t={};for(var n in r){var i=zr(r[n],e);be.arr(i)&&(i=i.map(function(s){return zr(s,e)}),i.length===1&&(i=i[0])),t[n]=i}return t.duration=parseFloat(t.duration),t.delay=parseFloat(t.delay),t}function uu(r,e){var t;return r.tweens.map(function(n){var i=cu(n,e),s=i.value,o=be.arr(s)?s[1]:s,a=hn(o),l=lo(e.target,r.name,a,e),c=t?t.to.original:l,u=be.arr(s)?s[0]:c,h=hn(u)||hn(l),d=a||h;return be.und(o)&&(o=c),i.from=Uo(u,d),i.to=Uo(co(o,u),d),i.start=t?t.end:0,i.end=i.start+i.delay+i.duration+i.endDelay,i.easing=io(i.easing,i.duration),i.isPath=be.pth(s),i.isPathTargetInsideSVG=i.isPath&&be.svg(e.target),i.isColor=be.col(i.from.original),i.isColor&&(i.round=1),t=i,i})}var Hl={css:function(r,e,t){return r.style[e]=t},attribute:function(r,e,t){return r.setAttribute(e,t)},object:function(r,e,t){return r[e]=t},transform:function(r,e,t,n,i){if(n.list.set(e,t),e===n.last||i){var s="";n.list.forEach(function(o,a){s+=a+"("+o+") "}),r.style.transform=s}}};function Wl(r,e){var t=Gl(r);t.forEach(function(n){for(var i in e){var s=zr(e[i],n),o=n.target,a=hn(s),l=lo(o,i,a,n),c=a||hn(l),u=co(Bl(s,c),l),h=ao(o,i);Hl[h](o,i,u,n.transforms,!0)}})}function hu(r,e){var t=ao(r.target,e.name);if(t){var n=uu(e,r),i=n[n.length-1];return{type:t,property:e.name,animatable:r,tweens:n,duration:i.end,delay:n[0].delay,endDelay:i.endDelay}}}function du(r,e){return Bs(ks(r.map(function(t){return e.map(function(n){return hu(t,n)})})),function(t){return!be.und(t)})}function ql(r,e){var t=r.length,n=function(s){return s.timelineOffset?s.timelineOffset:0},i={};return i.duration=t?Math.max.apply(Math,r.map(function(s){return n(s)+s.duration})):e.duration,i.delay=t?Math.min.apply(Math,r.map(function(s){return n(s)+s.delay})):e.delay,i.endDelay=t?i.duration-Math.max.apply(Math,r.map(function(s){return n(s)+s.duration-s.endDelay})):e.endDelay,i}var Vo=0;function fu(r){var e=Or(Pl,r),t=Or(no,r),n=lu(t,r),i=Gl(r.targets),s=du(i,n),o=ql(s,t),a=Vo;return Vo++,Us(e,{id:a,children:[],animatables:i,animations:s,duration:o.duration,delay:o.delay,endDelay:o.endDelay})}var Gt=[],Xl=function(){var r;function e(){!r&&(!Go()||!xe.suspendWhenDocumentHidden)&&Gt.length>0&&(r=requestAnimationFrame(t))}function t(i){for(var s=Gt.length,o=0;o<s;){var a=Gt[o];a.paused?(Gt.splice(o,1),s--):(a.tick(i),o++)}r=o>0?requestAnimationFrame(t):void 0}function n(){xe.suspendWhenDocumentHidden&&(Go()?r=cancelAnimationFrame(r):(Gt.forEach(function(i){return i._onDocumentVisibility()}),Xl()))}return typeof document<"u"&&document.addEventListener("visibilitychange",n),e}();function Go(){return!!document&&document.hidden}function xe(r){r===void 0&&(r={});var e=0,t=0,n=0,i,s=0,o=null;function a(y){var _=window.Promise&&new Promise(function(x){return o=x});return y.finished=_,_}var l=fu(r);a(l);function c(){var y=l.direction;y!=="alternate"&&(l.direction=y!=="normal"?"normal":"reverse"),l.reversed=!l.reversed,i.forEach(function(_){return _.reversed=l.reversed})}function u(y){return l.reversed?l.duration-y:y}function h(){e=0,t=u(l.currentTime)*(1/xe.speed)}function d(y,_){_&&_.seek(y-_.timelineOffset)}function m(y){if(l.reversePlayback)for(var x=s;x--;)d(y,i[x]);else for(var _=0;_<s;_++)d(y,i[_])}function g(y){for(var _=0,x=l.animations,w=x.length;_<w;){var E=x[_],L=E.animatable,b=E.tweens,T=b.length-1,R=b[T];T&&(R=Bs(b,function(te){return y<te.end})[0]||R);for(var U=Yt(y-R.start-R.delay,0,R.duration)/R.duration,Z=isNaN(U)?1:R.easing(U),N=R.to.strings,I=R.round,k=[],X=R.to.numbers.length,Q=void 0,G=0;G<X;G++){var W=void 0,ee=R.to.numbers[G],de=R.from.numbers[G]||0;R.isPath?W=ru(R.value,Z*ee,R.isPathTargetInsideSVG):W=de+Z*(ee-de),I&&(R.isColor&&G>2||(W=Math.round(W*I)/I)),k.push(W)}var F=N.length;if(!F)Q=k[0];else{Q=N[0];for(var $=0;$<F;$++){N[$];var ne=N[$+1],C=k[$];isNaN(C)||(ne?Q+=C+ne:Q+=C+" ")}}Hl[E.type](L.target,E.property,Q,L.transforms),E.currentValue=Q,_++}}function p(y){l[y]&&!l.passThrough&&l[y](l)}function f(){l.remaining&&l.remaining!==!0&&l.remaining--}function v(y){var _=l.duration,x=l.delay,w=_-l.endDelay,E=u(y);l.progress=Yt(E/_*100,0,100),l.reversePlayback=E<l.currentTime,i&&m(E),!l.began&&l.currentTime>0&&(l.began=!0,p("begin")),!l.loopBegan&&l.currentTime>0&&(l.loopBegan=!0,p("loopBegin")),E<=x&&l.currentTime!==0&&g(0),(E>=w&&l.currentTime!==_||!_)&&g(_),E>x&&E<w?(l.changeBegan||(l.changeBegan=!0,l.changeCompleted=!1,p("changeBegin")),p("change"),g(E)):l.changeBegan&&(l.changeCompleted=!0,l.changeBegan=!1,p("changeComplete")),l.currentTime=Yt(E,0,_),l.began&&p("update"),y>=_&&(t=0,f(),l.remaining?(e=n,p("loopComplete"),l.loopBegan=!1,l.direction==="alternate"&&c()):(l.paused=!0,l.completed||(l.completed=!0,p("loopComplete"),p("complete"),!l.passThrough&&"Promise"in window&&(o(),a(l)))))}return l.reset=function(){var y=l.direction;l.passThrough=!1,l.currentTime=0,l.progress=0,l.paused=!0,l.began=!1,l.loopBegan=!1,l.changeBegan=!1,l.completed=!1,l.changeCompleted=!1,l.reversePlayback=!1,l.reversed=y==="reverse",l.remaining=l.loop,i=l.children,s=i.length;for(var _=s;_--;)l.children[_].reset();(l.reversed&&l.loop!==!0||y==="alternate"&&l.loop===1)&&l.remaining++,g(l.reversed?l.duration:0)},l._onDocumentVisibility=h,l.set=function(y,_){return Wl(y,_),l},l.tick=function(y){n=y,e||(e=n),v((n+(t-e))*xe.speed)},l.seek=function(y){v(u(y))},l.pause=function(){l.paused=!0,h()},l.play=function(){l.paused&&(l.completed&&l.reset(),l.paused=!1,Gt.push(l),h(),Xl())},l.reverse=function(){c(),l.completed=!l.reversed,h()},l.restart=function(){l.reset(),l.play()},l.remove=function(y){var _=ho(y);jl(_,l)},l.reset(),l.autoplay&&l.play(),l}function Ho(r,e){for(var t=e.length;t--;)so(r,e[t].animatable.target)&&e.splice(t,1)}function jl(r,e){var t=e.animations,n=e.children;Ho(r,t);for(var i=n.length;i--;){var s=n[i],o=s.animations;Ho(r,o),!o.length&&!s.children.length&&n.splice(i,1)}!t.length&&!n.length&&e.pause()}function pu(r){for(var e=ho(r),t=Gt.length;t--;){var n=Gt[t];jl(e,n)}}function mu(r,e){e===void 0&&(e={});var t=e.direction||"normal",n=e.easing?io(e.easing):null,i=e.grid,s=e.axis,o=e.from||0,a=o==="first",l=o==="center",c=o==="last",u=be.arr(r),h=parseFloat(u?r[0]:r),d=u?parseFloat(r[1]):0,m=hn(u?r[1]:r)||0,g=e.start||0+(u?h:0),p=[],f=0;return function(v,y,_){if(a&&(o=0),l&&(o=(_-1)/2),c&&(o=_-1),!p.length){for(var x=0;x<_;x++){if(!i)p.push(Math.abs(o-x));else{var w=l?(i[0]-1)/2:o%i[0],E=l?(i[1]-1)/2:Math.floor(o/i[0]),L=x%i[0],b=Math.floor(x/i[0]),T=w-L,R=E-b,U=Math.sqrt(T*T+R*R);s==="x"&&(U=-T),s==="y"&&(U=-R),p.push(U)}f=Math.max.apply(Math,p)}n&&(p=p.map(function(N){return n(N/f)*f})),t==="reverse"&&(p=p.map(function(N){return s?N<0?N*-1:-N:Math.abs(f-N)}))}var Z=u?(d-h)/f:h;return g+Z*(Math.round(p[y]*100)/100)+m}}function gu(r){r===void 0&&(r={});var e=xe(r);return e.duration=0,e.add=function(t,n){var i=Gt.indexOf(e),s=e.children;i>-1&&Gt.splice(i,1);function o(d){d.passThrough=!0}for(var a=0;a<s.length;a++)o(s[a]);var l=Us(t,Or(no,r));l.targets=l.targets||r.targets;var c=e.duration;l.autoplay=!1,l.direction=e.direction,l.timelineOffset=be.und(n)?c:co(n,c),o(e),e.seek(l.timelineOffset);var u=xe(l);o(u),s.push(u);var h=ql(s,r);return e.delay=h.delay,e.endDelay=h.endDelay,e.duration=h.duration,e.seek(0),e.reset(),e.autoplay&&e.play(),e},e}xe.version="3.2.1";xe.speed=1;xe.suspendWhenDocumentHidden=!0;xe.running=Gt;xe.remove=pu;xe.get=lo;xe.set=Wl;xe.convertPx=oo;xe.path=su;xe.setDashoffset=nu;xe.stagger=mu;xe.timeline=gu;xe.easing=io;xe.penner=Nl;xe.random=function(r,e){return Math.floor(Math.random()*(e-r+1))+r};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fo="150",_u=0,Wo=1,vu=2,Zl=1,xu=2,Ui=3,fn=0,Rt=1,cn=2,Mn=0,ui=1,qo=2,Xo=3,jo=4,yu=5,ri=100,bu=101,Su=102,Zo=103,Yo=104,Mu=200,wu=201,Tu=202,Au=203,Yl=204,Jl=205,Eu=206,Cu=207,Lu=208,Ru=209,Pu=210,Iu=0,Du=1,Nu=2,Br=3,Fu=4,Ou=5,zu=6,Bu=7,Kl=0,ku=1,Uu=2,dn=0,Vu=1,Gu=2,Hu=3,Wu=4,qu=5,$l=300,mi=301,gi=302,kr=303,Ur=304,Vs=306,_i=1e3,Nt=1001,Os=1002,ut=1003,Vr=1004,Is=1005,wt=1006,Ql=1007,zn=1008,Bn=1009,Xu=1010,ju=1011,ec=1012,Zu=1013,Dn=1014,bn=1015,ji=1016,Yu=1017,Ju=1018,hi=1020,Ku=1021,Ft=1023,$u=1024,Qu=1025,On=1026,vi=1027,eh=1028,th=1029,nh=1030,ih=1031,sh=1033,$s=33776,Qs=33777,er=33778,tr=33779,Jo=35840,Ko=35841,$o=35842,Qo=35843,rh=36196,ea=37492,ta=37496,na=37808,ia=37809,sa=37810,ra=37811,oa=37812,aa=37813,la=37814,ca=37815,ua=37816,ha=37817,da=37818,fa=37819,pa=37820,ma=37821,nr=36492,oh=36283,ga=36284,_a=36285,va=36286,ah=2200,lh=2201,ch=2202,Zi=2300,xi=2301,ir=2302,oi=2400,ai=2401,zs=2402,po=2500,uh=2501,hh=0,tc=1,Gr=2,kn=3e3,We=3001,dh=3200,fh=3201,nc=0,ph=1,jt="srgb",Yi="srgb-linear",ic="display-p3",sr=7680,mh=519,Hr=35044,xa="300 es",Wr=1035;class Wn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ya=1234567;const Hi=Math.PI/180,Ji=180/Math.PI;function Ot(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(mt[r&255]+mt[r>>8&255]+mt[r>>16&255]+mt[r>>24&255]+"-"+mt[e&255]+mt[e>>8&255]+"-"+mt[e>>16&15|64]+mt[e>>24&255]+"-"+mt[t&63|128]+mt[t>>8&255]+"-"+mt[t>>16&255]+mt[t>>24&255]+mt[n&255]+mt[n>>8&255]+mt[n>>16&255]+mt[n>>24&255]).toLowerCase()}function dt(r,e,t){return Math.max(e,Math.min(t,r))}function mo(r,e){return(r%e+e)%e}function gh(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function _h(r,e,t){return r!==e?(t-r)/(e-r):0}function Wi(r,e,t){return(1-t)*r+t*e}function vh(r,e,t,n){return Wi(r,e,1-Math.exp(-t*n))}function xh(r,e=1){return e-Math.abs(mo(r,e*2)-e)}function yh(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function bh(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Sh(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Mh(r,e){return r+Math.random()*(e-r)}function wh(r){return r*(.5-Math.random())}function Th(r){r!==void 0&&(ya=r);let e=ya+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ah(r){return r*Hi}function Eh(r){return r*Ji}function qr(r){return(r&r-1)===0&&r!==0}function sc(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function rc(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Ch(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),d=o((e-n)/2),m=s((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":r.set(a*u,l*h,l*d,a*c);break;case"YZY":r.set(l*d,a*u,l*h,a*c);break;case"ZXZ":r.set(l*h,l*d,a*u,a*c);break;case"XZX":r.set(a*u,l*g,l*m,a*c);break;case"YXY":r.set(l*m,a*u,l*g,a*c);break;case"ZYZ":r.set(l*g,l*m,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function un(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function je(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Lh={DEG2RAD:Hi,RAD2DEG:Ji,generateUUID:Ot,clamp:dt,euclideanModulo:mo,mapLinear:gh,inverseLerp:_h,lerp:Wi,damp:vh,pingpong:xh,smoothstep:yh,smootherstep:bh,randInt:Sh,randFloat:Mh,randFloatSpread:wh,seededRandom:Th,degToRad:Ah,radToDeg:Eh,isPowerOfTwo:qr,ceilPowerOfTwo:sc,floorPowerOfTwo:rc,setQuaternionFromProperEuler:Ch,normalize:je,denormalize:un};class pe{constructor(e=0,t=0){pe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class St{constructor(){St.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],m=n[5],g=n[8],p=i[0],f=i[3],v=i[6],y=i[1],_=i[4],x=i[7],w=i[2],E=i[5],L=i[8];return s[0]=o*p+a*y+l*w,s[3]=o*f+a*_+l*E,s[6]=o*v+a*x+l*L,s[1]=c*p+u*y+h*w,s[4]=c*f+u*_+h*E,s[7]=c*v+u*x+h*L,s[2]=d*p+m*y+g*w,s[5]=d*f+m*_+g*E,s[8]=d*v+m*x+g*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*s,m=c*s-o*l,g=t*h+n*d+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return e[0]=h*p,e[1]=(i*c-u*n)*p,e[2]=(a*n-i*o)*p,e[3]=d*p,e[4]=(u*t-i*l)*p,e[5]=(i*s-a*t)*p,e[6]=m*p,e[7]=(n*l-c*t)*p,e[8]=(o*t-n*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(rr.makeScale(e,t)),this}rotate(e){return this.premultiply(rr.makeRotation(-e)),this}translate(e,t){return this.premultiply(rr.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const rr=new St;function oc(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ki(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}class Ht{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=s[o+0],m=s[o+1],g=s[o+2],p=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=p;return}if(h!==p||l!==d||c!==m||u!==g){let f=1-a;const v=l*d+c*m+u*g+h*p,y=v>=0?1:-1,_=1-v*v;if(_>Number.EPSILON){const w=Math.sqrt(_),E=Math.atan2(w,v*y);f=Math.sin(f*E)/w,a=Math.sin(a*E)/w}const x=a*y;if(l=l*f+d*x,c=c*f+m*x,u=u*f+g*x,h=h*f+p*x,f===1-a){const w=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=w,c*=w,u*=w,h*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],d=s[o+1],m=s[o+2],g=s[o+3];return e[t]=a*g+u*h+l*m-c*d,e[t+1]=l*g+u*d+c*h-a*m,e[t+2]=c*g+u*m+a*d-l*h,e[t+3]=u*g-a*h-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),d=l(n/2),m=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=d*u*h+c*m*g,this._y=c*m*h-d*u*g,this._z=c*u*g+d*m*h,this._w=c*u*h-d*m*g;break;case"YXZ":this._x=d*u*h+c*m*g,this._y=c*m*h-d*u*g,this._z=c*u*g-d*m*h,this._w=c*u*h+d*m*g;break;case"ZXY":this._x=d*u*h-c*m*g,this._y=c*m*h+d*u*g,this._z=c*u*g+d*m*h,this._w=c*u*h-d*m*g;break;case"ZYX":this._x=d*u*h-c*m*g,this._y=c*m*h+d*u*g,this._z=c*u*g-d*m*h,this._w=c*u*h+d*m*g;break;case"YZX":this._x=d*u*h+c*m*g,this._y=c*m*h+d*u*g,this._z=c*u*g-d*m*h,this._w=c*u*h-d*m*g;break;case"XZY":this._x=d*u*h-c*m*g,this._y=c*m*h-d*u*g,this._z=c*u*g+d*m*h,this._w=c*u*h+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-i)*m}else if(n>a&&n>h){const m=2*Math.sqrt(1+n-a-h);this._w=(u-l)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(s+c)/m}else if(a>h){const m=2*Math.sqrt(1+a-n-h);this._w=(s-c)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-n-a);this._w=(o-i)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ba.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ba.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*i-a*n,u=l*n+a*t-s*i,h=l*i+s*n-o*t,d=-s*t-o*n-a*i;return this.x=c*l+d*-s+u*-a-h*-o,this.y=u*l+d*-o+h*-s-c*-a,this.z=h*l+d*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return or.copy(this).projectOnVector(e),this.sub(or)}reflect(e){return this.sub(or.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const or=new P,ba=new Ht;function di(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ar(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Rh=new St().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Ph=new St().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),Sn=new P;function Ih(r){return r.convertSRGBToLinear(),Sn.set(r.r,r.g,r.b).applyMatrix3(Ph),r.setRGB(Sn.x,Sn.y,Sn.z)}function Dh(r){return Sn.set(r.r,r.g,r.b).applyMatrix3(Rh),r.setRGB(Sn.x,Sn.y,Sn.z).convertLinearToSRGB()}const Nh={[Yi]:r=>r,[jt]:r=>r.convertSRGBToLinear(),[ic]:Ih},Fh={[Yi]:r=>r,[jt]:r=>r.convertLinearToSRGB(),[ic]:Dh},xt={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return Yi},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=Nh[e],i=Fh[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}};let Xn;class ac{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Xn===void 0&&(Xn=Ki("canvas")),Xn.width=e.width,Xn.height=e.height;const n=Xn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Xn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ki("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=di(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(di(t[n]/255)*255):t[n]=di(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class lc{constructor(e=null){this.isSource=!0,this.uuid=Ot(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(lr(i[o].image)):s.push(lr(i[o]))}else s=lr(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function lr(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?ac.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Oh=0;class pt extends Wn{constructor(e=pt.DEFAULT_IMAGE,t=pt.DEFAULT_MAPPING,n=Nt,i=Nt,s=wt,o=zn,a=Ft,l=Bn,c=pt.DEFAULT_ANISOTROPY,u=kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Oh++}),this.uuid=Ot(),this.name="",this.source=new lc(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new St,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$l)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _i:e.x=e.x-Math.floor(e.x);break;case Nt:e.x=e.x<0?0:1;break;case Os:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _i:e.y=e.y-Math.floor(e.y);break;case Nt:e.y=e.y<0?0:1;break;case Os:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}pt.DEFAULT_IMAGE=null;pt.DEFAULT_MAPPING=$l;pt.DEFAULT_ANISOTROPY=1;class Ze{constructor(e=0,t=0,n=0,i=1){Ze.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],m=l[5],g=l[9],p=l[2],f=l[6],v=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-p)<.01&&Math.abs(g-f)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+p)<.1&&Math.abs(g+f)<.1&&Math.abs(c+m+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,x=(m+1)/2,w=(v+1)/2,E=(u+d)/4,L=(h+p)/4,b=(g+f)/4;return _>x&&_>w?_<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(_),i=E/n,s=L/n):x>w?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=E/i,s=b/i):w<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(w),n=L/s,i=b/s),this.set(n,i,s,t),this}let y=Math.sqrt((f-g)*(f-g)+(h-p)*(h-p)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(f-g)/y,this.y=(h-p)/y,this.z=(d-u)/y,this.w=Math.acos((c+m+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Un extends Wn{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ze(0,0,e,t),this.scissorTest=!1,this.viewport=new Ze(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new pt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:wt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new lc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class cc extends pt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ut,this.minFilter=ut,this.wrapR=Nt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zh extends pt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ut,this.minFilter=ut,this.wrapR=Nt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Si{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],d=e[l+2];u<t&&(t=u),h<n&&(n=h),d<i&&(i=d),u>s&&(s=u),h>o&&(o=h),d>a&&(a=d)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),d=e.getZ(l);u<t&&(t=u),h<n&&(n=h),d<i&&(i=d),u>s&&(s=u),h>o&&(o=h),d>a&&(a=d)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=En.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)En.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(En)}else n.boundingBox===null&&n.computeBoundingBox(),cr.copy(n.boundingBox),cr.applyMatrix4(e.matrixWorld),this.union(cr);const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,En),En.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Li),os.subVectors(this.max,Li),jn.subVectors(e.a,Li),Zn.subVectors(e.b,Li),Yn.subVectors(e.c,Li),pn.subVectors(Zn,jn),mn.subVectors(Yn,Zn),Cn.subVectors(jn,Yn);let t=[0,-pn.z,pn.y,0,-mn.z,mn.y,0,-Cn.z,Cn.y,pn.z,0,-pn.x,mn.z,0,-mn.x,Cn.z,0,-Cn.x,-pn.y,pn.x,0,-mn.y,mn.x,0,-Cn.y,Cn.x,0];return!ur(t,jn,Zn,Yn,os)||(t=[1,0,0,0,1,0,0,0,1],!ur(t,jn,Zn,Yn,os))?!1:(as.crossVectors(pn,mn),t=[as.x,as.y,as.z],ur(t,jn,Zn,Yn,os))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,En).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(En).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(tn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const tn=[new P,new P,new P,new P,new P,new P,new P,new P],En=new P,cr=new Si,jn=new P,Zn=new P,Yn=new P,pn=new P,mn=new P,Cn=new P,Li=new P,os=new P,as=new P,Ln=new P;function ur(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Ln.fromArray(r,s);const a=i.x*Math.abs(Ln.x)+i.y*Math.abs(Ln.y)+i.z*Math.abs(Ln.z),l=e.dot(Ln),c=t.dot(Ln),u=n.dot(Ln);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Bh=new Si,Ri=new P,hr=new P;class Mi{constructor(e=new P,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Bh.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ri.subVectors(e,this.center);const t=Ri.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ri,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ri.copy(e.center).add(hr)),this.expandByPoint(Ri.copy(e.center).sub(hr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const nn=new P,dr=new P,ls=new P,gn=new P,fr=new P,cs=new P,pr=new P;class Gs{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,nn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=nn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(nn.copy(this.origin).addScaledVector(this.direction,t),nn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){dr.copy(e).add(t).multiplyScalar(.5),ls.copy(t).sub(e).normalize(),gn.copy(this.origin).sub(dr);const s=e.distanceTo(t)*.5,o=-this.direction.dot(ls),a=gn.dot(this.direction),l=-gn.dot(ls),c=gn.lengthSq(),u=Math.abs(1-o*o);let h,d,m,g;if(u>0)if(h=o*l-a,d=o*a-l,g=s*u,h>=0)if(d>=-g)if(d<=g){const p=1/u;h*=p,d*=p,m=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(dr).addScaledVector(ls,d),m}intersectSphere(e,t){nn.subVectors(e.center,this.origin);const n=nn.dot(this.direction),i=nn.dot(nn)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,nn)!==null}intersectTriangle(e,t,n,i,s){fr.subVectors(t,e),cs.subVectors(n,e),pr.crossVectors(fr,cs);let o=this.direction.dot(pr),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;gn.subVectors(this.origin,e);const l=a*this.direction.dot(cs.crossVectors(gn,cs));if(l<0)return null;const c=a*this.direction.dot(fr.cross(gn));if(c<0||l+c>o)return null;const u=-a*gn.dot(pr);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Oe{constructor(){Oe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,o,a,l,c,u,h,d,m,g,p,f){const v=this.elements;return v[0]=e,v[4]=t,v[8]=n,v[12]=i,v[1]=s,v[5]=o,v[9]=a,v[13]=l,v[2]=c,v[6]=u,v[10]=h,v[14]=d,v[3]=m,v[7]=g,v[11]=p,v[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Oe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Jn.setFromMatrixColumn(e,0).length(),s=1/Jn.setFromMatrixColumn(e,1).length(),o=1/Jn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*u,m=o*h,g=a*u,p=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=m+g*c,t[5]=d-p*c,t[9]=-a*l,t[2]=p-d*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,m=l*h,g=c*u,p=c*h;t[0]=d+p*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=m*a-g,t[6]=p+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,m=l*h,g=c*u,p=c*h;t[0]=d-p*a,t[4]=-o*h,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*u,t[9]=p-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,m=o*h,g=a*u,p=a*h;t[0]=l*u,t[4]=g*c-m,t[8]=d*c+p,t[1]=l*h,t[5]=p*c+d,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,m=o*c,g=a*l,p=a*c;t[0]=l*u,t[4]=p-d*h,t[8]=g*h+m,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*h+g,t[10]=d-p*h}else if(e.order==="XZY"){const d=o*l,m=o*c,g=a*l,p=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+p,t[5]=o*u,t[9]=m*h-g,t[2]=g*h-m,t[6]=a*u,t[10]=p*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(kh,e,Uh)}lookAt(e,t,n){const i=this.elements;return Ct.subVectors(e,t),Ct.lengthSq()===0&&(Ct.z=1),Ct.normalize(),_n.crossVectors(n,Ct),_n.lengthSq()===0&&(Math.abs(n.z)===1?Ct.x+=1e-4:Ct.z+=1e-4,Ct.normalize(),_n.crossVectors(n,Ct)),_n.normalize(),us.crossVectors(Ct,_n),i[0]=_n.x,i[4]=us.x,i[8]=Ct.x,i[1]=_n.y,i[5]=us.y,i[9]=Ct.y,i[2]=_n.z,i[6]=us.z,i[10]=Ct.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],m=n[13],g=n[2],p=n[6],f=n[10],v=n[14],y=n[3],_=n[7],x=n[11],w=n[15],E=i[0],L=i[4],b=i[8],T=i[12],R=i[1],U=i[5],Z=i[9],N=i[13],I=i[2],k=i[6],X=i[10],Q=i[14],G=i[3],W=i[7],ee=i[11],de=i[15];return s[0]=o*E+a*R+l*I+c*G,s[4]=o*L+a*U+l*k+c*W,s[8]=o*b+a*Z+l*X+c*ee,s[12]=o*T+a*N+l*Q+c*de,s[1]=u*E+h*R+d*I+m*G,s[5]=u*L+h*U+d*k+m*W,s[9]=u*b+h*Z+d*X+m*ee,s[13]=u*T+h*N+d*Q+m*de,s[2]=g*E+p*R+f*I+v*G,s[6]=g*L+p*U+f*k+v*W,s[10]=g*b+p*Z+f*X+v*ee,s[14]=g*T+p*N+f*Q+v*de,s[3]=y*E+_*R+x*I+w*G,s[7]=y*L+_*U+x*k+w*W,s[11]=y*b+_*Z+x*X+w*ee,s[15]=y*T+_*N+x*Q+w*de,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],m=e[14],g=e[3],p=e[7],f=e[11],v=e[15];return g*(+s*l*h-i*c*h-s*a*d+n*c*d+i*a*m-n*l*m)+p*(+t*l*m-t*c*d+s*o*d-i*o*m+i*c*u-s*l*u)+f*(+t*c*h-t*a*m-s*o*h+n*o*m+s*a*u-n*c*u)+v*(-i*a*u-t*l*h+t*a*d+i*o*h-n*o*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],m=e[11],g=e[12],p=e[13],f=e[14],v=e[15],y=h*f*c-p*d*c+p*l*m-a*f*m-h*l*v+a*d*v,_=g*d*c-u*f*c-g*l*m+o*f*m+u*l*v-o*d*v,x=u*p*c-g*h*c+g*a*m-o*p*m-u*a*v+o*h*v,w=g*h*l-u*p*l-g*a*d+o*p*d+u*a*f-o*h*f,E=t*y+n*_+i*x+s*w;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/E;return e[0]=y*L,e[1]=(p*d*s-h*f*s-p*i*m+n*f*m+h*i*v-n*d*v)*L,e[2]=(a*f*s-p*l*s+p*i*c-n*f*c-a*i*v+n*l*v)*L,e[3]=(h*l*s-a*d*s-h*i*c+n*d*c+a*i*m-n*l*m)*L,e[4]=_*L,e[5]=(u*f*s-g*d*s+g*i*m-t*f*m-u*i*v+t*d*v)*L,e[6]=(g*l*s-o*f*s-g*i*c+t*f*c+o*i*v-t*l*v)*L,e[7]=(o*d*s-u*l*s+u*i*c-t*d*c-o*i*m+t*l*m)*L,e[8]=x*L,e[9]=(g*h*s-u*p*s-g*n*m+t*p*m+u*n*v-t*h*v)*L,e[10]=(o*p*s-g*a*s+g*n*c-t*p*c-o*n*v+t*a*v)*L,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*m-t*a*m)*L,e[12]=w*L,e[13]=(u*p*i-g*h*i+g*n*d-t*p*d-u*n*f+t*h*f)*L,e[14]=(g*a*i-o*p*i-g*n*l+t*p*l+o*n*f-t*a*f)*L,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*d+t*a*d)*L,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,d=s*c,m=s*u,g=s*h,p=o*u,f=o*h,v=a*h,y=l*c,_=l*u,x=l*h,w=n.x,E=n.y,L=n.z;return i[0]=(1-(p+v))*w,i[1]=(m+x)*w,i[2]=(g-_)*w,i[3]=0,i[4]=(m-x)*E,i[5]=(1-(d+v))*E,i[6]=(f+y)*E,i[7]=0,i[8]=(g+_)*L,i[9]=(f-y)*L,i[10]=(1-(d+p))*L,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Jn.set(i[0],i[1],i[2]).length();const o=Jn.set(i[4],i[5],i[6]).length(),a=Jn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],kt.copy(this);const c=1/s,u=1/o,h=1/a;return kt.elements[0]*=c,kt.elements[1]*=c,kt.elements[2]*=c,kt.elements[4]*=u,kt.elements[5]*=u,kt.elements[6]*=u,kt.elements[8]*=h,kt.elements[9]*=h,kt.elements[10]*=h,t.setFromRotationMatrix(kt),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o){const a=this.elements,l=2*s/(t-e),c=2*s/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i),d=-(o+s)/(o-s),m=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,s,o){const a=this.elements,l=1/(t-e),c=1/(n-i),u=1/(o-s),h=(t+e)*l,d=(n+i)*c,m=(o+s)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Jn=new P,kt=new Oe,kh=new P(0,0,0),Uh=new P(1,1,1),_n=new P,us=new P,Ct=new P,Sa=new Oe,Ma=new Ht;class Hs{constructor(e=0,t=0,n=0,i=Hs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-dt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(dt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-dt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Sa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sa,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ma.setFromEuler(this),this.setFromQuaternion(Ma,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hs.DEFAULT_ORDER="XYZ";class go{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Vh=0;const wa=new P,Kn=new Ht,sn=new Oe,hs=new P,Pi=new P,Gh=new P,Hh=new Ht,Ta=new P(1,0,0),Aa=new P(0,1,0),Ea=new P(0,0,1),Wh={type:"added"},Ca={type:"removed"};class Qe extends Wn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vh++}),this.uuid=Ot(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qe.DEFAULT_UP.clone();const e=new P,t=new Hs,n=new Ht,i=new P(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Oe},normalMatrix:{value:new St}}),this.matrix=new Oe,this.matrixWorld=new Oe,this.matrixAutoUpdate=Qe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new go,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Kn.setFromAxisAngle(e,t),this.quaternion.multiply(Kn),this}rotateOnWorldAxis(e,t){return Kn.setFromAxisAngle(e,t),this.quaternion.premultiply(Kn),this}rotateX(e){return this.rotateOnAxis(Ta,e)}rotateY(e){return this.rotateOnAxis(Aa,e)}rotateZ(e){return this.rotateOnAxis(Ea,e)}translateOnAxis(e,t){return wa.copy(e).applyQuaternion(this.quaternion),this.position.add(wa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ta,e)}translateY(e){return this.translateOnAxis(Aa,e)}translateZ(e){return this.translateOnAxis(Ea,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(sn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?hs.copy(e):hs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Pi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sn.lookAt(Pi,hs,this.up):sn.lookAt(hs,Pi,this.up),this.quaternion.setFromRotationMatrix(sn),i&&(sn.extractRotation(i.matrixWorld),Kn.setFromRotationMatrix(sn),this.quaternion.premultiply(Kn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Wh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ca)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Ca)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),sn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),sn.multiply(e.parent.matrixWorld)),e.applyMatrix4(sn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pi,e,Gh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pi,Hh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Qe.DEFAULT_UP=new P(0,1,0);Qe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ut=new P,rn=new P,mr=new P,on=new P,$n=new P,Qn=new P,La=new P,gr=new P,_r=new P,vr=new P;class ln{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ut.subVectors(e,t),i.cross(Ut);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Ut.subVectors(i,t),rn.subVectors(n,t),mr.subVectors(e,t);const o=Ut.dot(Ut),a=Ut.dot(rn),l=Ut.dot(mr),c=rn.dot(rn),u=rn.dot(mr),h=o*c-a*a;if(h===0)return s.set(-2,-1,-1);const d=1/h,m=(c*l-a*u)*d,g=(o*u-a*l)*d;return s.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,on),on.x>=0&&on.y>=0&&on.x+on.y<=1}static getUV(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,on),l.set(0,0),l.addScaledVector(s,on.x),l.addScaledVector(o,on.y),l.addScaledVector(a,on.z),l}static isFrontFacing(e,t,n,i){return Ut.subVectors(n,t),rn.subVectors(e,t),Ut.cross(rn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ut.subVectors(this.c,this.b),rn.subVectors(this.a,this.b),Ut.cross(rn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ln.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ln.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return ln.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return ln.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ln.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;$n.subVectors(i,n),Qn.subVectors(s,n),gr.subVectors(e,n);const l=$n.dot(gr),c=Qn.dot(gr);if(l<=0&&c<=0)return t.copy(n);_r.subVectors(e,i);const u=$n.dot(_r),h=Qn.dot(_r);if(u>=0&&h<=u)return t.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector($n,o);vr.subVectors(e,s);const m=$n.dot(vr),g=Qn.dot(vr);if(g>=0&&m<=g)return t.copy(s);const p=m*c-l*g;if(p<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Qn,a);const f=u*g-m*h;if(f<=0&&h-u>=0&&m-g>=0)return La.subVectors(s,i),a=(h-u)/(h-u+(m-g)),t.copy(i).addScaledVector(La,a);const v=1/(f+p+d);return o=p*v,a=d*v,t.copy(n).addScaledVector($n,o).addScaledVector(Qn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let qh=0;class Kt extends Wn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qh++}),this.uuid=Ot(),this.name="",this.type="Material",this.blending=ui,this.side=fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Yl,this.blendDst=Jl,this.blendEquation=ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Br,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sr,this.stencilZFail=sr,this.stencilZPass=sr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ui&&(n.blending=this.blending),this.side!==fn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const uc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vt={h:0,s:0,l:0},ds={h:0,s:0,l:0};function xr(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class De{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=xt.workingColorSpace){return this.r=e,this.g=t,this.b=n,xt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=xt.workingColorSpace){if(e=mo(e,1),t=dt(t,0,1),n=dt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=xr(o,s,e+1/3),this.g=xr(o,s,e),this.b=xr(o,s,e-1/3)}return xt.toWorkingColorSpace(this,i),this}setStyle(e,t=jt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,xt.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,xt.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,u,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,xt.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,xt.toWorkingColorSpace(this,t),this;console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=jt){const n=uc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=di(e.r),this.g=di(e.g),this.b=di(e.b),this}copyLinearToSRGB(e){return this.r=ar(e.r),this.g=ar(e.g),this.b=ar(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jt){return xt.fromWorkingColorSpace(gt.copy(this),e),dt(gt.r*255,0,255)<<16^dt(gt.g*255,0,255)<<8^dt(gt.b*255,0,255)<<0}getHexString(e=jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xt.workingColorSpace){xt.fromWorkingColorSpace(gt.copy(this),t);const n=gt.r,i=gt.g,s=gt.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=xt.workingColorSpace){return xt.fromWorkingColorSpace(gt.copy(this),t),e.r=gt.r,e.g=gt.g,e.b=gt.b,e}getStyle(e=jt){xt.fromWorkingColorSpace(gt.copy(this),e);const t=gt.r,n=gt.g,i=gt.b;return e!==jt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${t*255|0},${n*255|0},${i*255|0})`}offsetHSL(e,t,n){return this.getHSL(Vt),Vt.h+=e,Vt.s+=t,Vt.l+=n,this.setHSL(Vt.h,Vt.s,Vt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Vt),e.getHSL(ds);const n=Wi(Vt.h,ds.h,t),i=Wi(Vt.s,ds.s,t),s=Wi(Vt.l,ds.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const gt=new De;De.NAMES=uc;class ht extends Kt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Kl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const it=new P,fs=new pe;class Mt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Hr,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)fs.fromBufferAttribute(this,t),fs.applyMatrix3(e),this.setXY(t,fs.x,fs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)it.fromBufferAttribute(this,t),it.applyMatrix3(e),this.setXYZ(t,it.x,it.y,it.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)it.fromBufferAttribute(this,t),it.applyMatrix4(e),this.setXYZ(t,it.x,it.y,it.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)it.fromBufferAttribute(this,t),it.applyNormalMatrix(e),this.setXYZ(t,it.x,it.y,it.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)it.fromBufferAttribute(this,t),it.transformDirection(e),this.setXYZ(t,it.x,it.y,it.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=un(t,this.array)),t}setX(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=un(t,this.array)),t}setY(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=un(t,this.array)),t}setZ(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=un(t,this.array)),t}setW(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=je(t,this.array),n=je(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=je(t,this.array),n=je(n,this.array),i=je(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=je(t,this.array),n=je(n,this.array),i=je(i,this.array),s=je(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Hr&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class hc extends Mt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class dc extends Mt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class zt extends Mt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Xh=0;const It=new Oe,yr=new Qe,ei=new P,Lt=new Si,Ii=new Si,ct=new P;class Bt extends Wn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xh++}),this.uuid=Ot(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(oc(e)?dc:hc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new St().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return It.makeRotationFromQuaternion(e),this.applyMatrix4(It),this}rotateX(e){return It.makeRotationX(e),this.applyMatrix4(It),this}rotateY(e){return It.makeRotationY(e),this.applyMatrix4(It),this}rotateZ(e){return It.makeRotationZ(e),this.applyMatrix4(It),this}translate(e,t,n){return It.makeTranslation(e,t,n),this.applyMatrix4(It),this}scale(e,t,n){return It.makeScale(e,t,n),this.applyMatrix4(It),this}lookAt(e){return yr.lookAt(e),yr.updateMatrix(),this.applyMatrix4(yr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ei).negate(),this.translate(ei.x,ei.y,ei.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new zt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Si);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Lt.setFromBufferAttribute(s),this.morphTargetsRelative?(ct.addVectors(this.boundingBox.min,Lt.min),this.boundingBox.expandByPoint(ct),ct.addVectors(this.boundingBox.max,Lt.max),this.boundingBox.expandByPoint(ct)):(this.boundingBox.expandByPoint(Lt.min),this.boundingBox.expandByPoint(Lt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(Lt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ii.setFromBufferAttribute(a),this.morphTargetsRelative?(ct.addVectors(Lt.min,Ii.min),Lt.expandByPoint(ct),ct.addVectors(Lt.max,Ii.max),Lt.expandByPoint(ct)):(Lt.expandByPoint(Ii.min),Lt.expandByPoint(Ii.max))}Lt.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)ct.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(ct));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)ct.fromBufferAttribute(a,c),l&&(ei.fromBufferAttribute(e,c),ct.add(ei)),i=Math.max(i,n.distanceToSquared(ct))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let R=0;R<a;R++)c[R]=new P,u[R]=new P;const h=new P,d=new P,m=new P,g=new pe,p=new pe,f=new pe,v=new P,y=new P;function _(R,U,Z){h.fromArray(i,R*3),d.fromArray(i,U*3),m.fromArray(i,Z*3),g.fromArray(o,R*2),p.fromArray(o,U*2),f.fromArray(o,Z*2),d.sub(h),m.sub(h),p.sub(g),f.sub(g);const N=1/(p.x*f.y-f.x*p.y);isFinite(N)&&(v.copy(d).multiplyScalar(f.y).addScaledVector(m,-p.y).multiplyScalar(N),y.copy(m).multiplyScalar(p.x).addScaledVector(d,-f.x).multiplyScalar(N),c[R].add(v),c[U].add(v),c[Z].add(v),u[R].add(y),u[U].add(y),u[Z].add(y))}let x=this.groups;x.length===0&&(x=[{start:0,count:n.length}]);for(let R=0,U=x.length;R<U;++R){const Z=x[R],N=Z.start,I=Z.count;for(let k=N,X=N+I;k<X;k+=3)_(n[k+0],n[k+1],n[k+2])}const w=new P,E=new P,L=new P,b=new P;function T(R){L.fromArray(s,R*3),b.copy(L);const U=c[R];w.copy(U),w.sub(L.multiplyScalar(L.dot(U))).normalize(),E.crossVectors(b,U);const N=E.dot(u[R])<0?-1:1;l[R*4]=w.x,l[R*4+1]=w.y,l[R*4+2]=w.z,l[R*4+3]=N}for(let R=0,U=x.length;R<U;++R){const Z=x[R],N=Z.start,I=Z.count;for(let k=N,X=N+I;k<X;k+=3)T(n[k+0]),T(n[k+1]),T(n[k+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Mt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const i=new P,s=new P,o=new P,a=new P,l=new P,c=new P,u=new P,h=new P;if(e)for(let d=0,m=e.count;d<m;d+=3){const g=e.getX(d+0),p=e.getX(d+1),f=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,p),o.fromBufferAttribute(t,f),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,p),c.fromBufferAttribute(n,f),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ct.fromBufferAttribute(e,t),ct.normalize(),e.setXYZ(t,ct.x,ct.y,ct.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let m=0,g=0;for(let p=0,f=l.length;p<f;p++){a.isInterleavedBufferAttribute?m=l[p]*a.data.stride+a.offset:m=l[p]*u;for(let v=0;v<u;v++)d[g++]=c[m++]}return new Mt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Bt,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],m=e(d,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,m=h.length;d<m;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ra=new Oe,Xt=new Gs,ps=new Mi,Pa=new P,Di=new P,Ni=new P,Fi=new P,br=new P,ms=new P,gs=new pe,_s=new pe,vs=new pe,Sr=new P,xs=new P;class Tt extends Qe{constructor(e=new Bt,t=new ht){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){ms.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(br.fromBufferAttribute(h,e),o?ms.addScaledVector(br,u):ms.addScaledVector(br.sub(t),u))}t.add(ms)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),ps.copy(n.boundingSphere),ps.applyMatrix4(s),Xt.copy(e.ray).recast(e.near),ps.containsPoint(Xt.origin)===!1&&(Xt.intersectSphere(ps,Pa)===null||Xt.origin.distanceToSquared(Pa)>(e.far-e.near)**2))||(Ra.copy(s).invert(),Xt.copy(e.ray).applyMatrix4(Ra),n.boundingBox!==null&&Xt.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv2,h=n.groups,d=n.drawRange;if(a!==null)if(Array.isArray(i))for(let m=0,g=h.length;m<g;m++){const p=h[m],f=i[p.materialIndex],v=Math.max(p.start,d.start),y=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let _=v,x=y;_<x;_+=3){const w=a.getX(_),E=a.getX(_+1),L=a.getX(_+2);o=ys(this,f,e,Xt,c,u,w,E,L),o&&(o.faceIndex=Math.floor(_/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const m=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let p=m,f=g;p<f;p+=3){const v=a.getX(p),y=a.getX(p+1),_=a.getX(p+2);o=ys(this,i,e,Xt,c,u,v,y,_),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(i))for(let m=0,g=h.length;m<g;m++){const p=h[m],f=i[p.materialIndex],v=Math.max(p.start,d.start),y=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let _=v,x=y;_<x;_+=3){const w=_,E=_+1,L=_+2;o=ys(this,f,e,Xt,c,u,w,E,L),o&&(o.faceIndex=Math.floor(_/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const m=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let p=m,f=g;p<f;p+=3){const v=p,y=p+1,_=p+2;o=ys(this,i,e,Xt,c,u,v,y,_),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}}}function jh(r,e,t,n,i,s,o,a){let l;if(e.side===Rt?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===fn,a),l===null)return null;xs.copy(a),xs.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(xs);return c<t.near||c>t.far?null:{distance:c,point:xs.clone(),object:r}}function ys(r,e,t,n,i,s,o,a,l){r.getVertexPosition(o,Di),r.getVertexPosition(a,Ni),r.getVertexPosition(l,Fi);const c=jh(r,e,t,n,Di,Ni,Fi,Sr);if(c){i&&(gs.fromBufferAttribute(i,o),_s.fromBufferAttribute(i,a),vs.fromBufferAttribute(i,l),c.uv=ln.getUV(Sr,Di,Ni,Fi,gs,_s,vs,new pe)),s&&(gs.fromBufferAttribute(s,o),_s.fromBufferAttribute(s,a),vs.fromBufferAttribute(s,l),c.uv2=ln.getUV(Sr,Di,Ni,Fi,gs,_s,vs,new pe));const u={a:o,b:a,c:l,normal:new P,materialIndex:0};ln.getNormal(Di,Ni,Fi,u.normal),c.face=u}return c}class is extends Bt{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,m=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new zt(c,3)),this.setAttribute("normal",new zt(u,3)),this.setAttribute("uv",new zt(h,2));function g(p,f,v,y,_,x,w,E,L,b,T){const R=x/L,U=w/b,Z=x/2,N=w/2,I=E/2,k=L+1,X=b+1;let Q=0,G=0;const W=new P;for(let ee=0;ee<X;ee++){const de=ee*U-N;for(let F=0;F<k;F++){const $=F*R-Z;W[p]=$*y,W[f]=de*_,W[v]=I,c.push(W.x,W.y,W.z),W[p]=0,W[f]=0,W[v]=E>0?1:-1,u.push(W.x,W.y,W.z),h.push(F/L),h.push(1-ee/b),Q+=1}}for(let ee=0;ee<b;ee++)for(let de=0;de<L;de++){const F=d+de+k*ee,$=d+de+k*(ee+1),ne=d+(de+1)+k*(ee+1),C=d+(de+1)+k*ee;l.push(F,$,C),l.push($,ne,C),G+=6}a.addGroup(m,G,T),m+=G,d+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new is(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function yi(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function bt(r){const e={};for(let t=0;t<r.length;t++){const n=yi(r[t]);for(const i in n)e[i]=n[i]}return e}function Zh(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function fc(r){return r.getRenderTarget()===null&&r.outputEncoding===We?jt:Yi}const Yh={clone:yi,merge:bt};var Jh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vn extends Kt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jh,this.fragmentShader=Kh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=yi(e.uniforms),this.uniformsGroups=Zh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class pc extends Qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Oe,this.projectionMatrix=new Oe,this.projectionMatrixInverse=new Oe}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class ft extends pc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ji*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Hi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ji*2*Math.atan(Math.tan(Hi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Hi*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ti=-90,ni=1;class $h extends Qe{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new ft(ti,ni,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new ft(ti,ni,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new ft(ti,ni,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new ft(ti,ni,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new ft(ti,ni,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new ft(ti,ni,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,o,a,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,d=e.xr.enabled;e.toneMapping=dn,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class mc extends pt{constructor(e,t,n,i,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:mi,super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Qh extends Un{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new mc(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:wt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new is(5,5,5),s=new Vn({name:"CubemapFromEquirect",uniforms:yi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Rt,blending:Mn});s.uniforms.tEquirect.value=t;const o=new Tt(i,s),a=t.minFilter;return t.minFilter===zn&&(t.minFilter=wt),new $h(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const Mr=new P,ed=new P,td=new St;class Rn{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Mr.subVectors(n,t).cross(ed.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Mr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||td.getNormalMatrix(e),i=this.coplanarPoint(Mr).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ii=new Mi,bs=new P;class _o{constructor(e=new Rn,t=new Rn,n=new Rn,i=new Rn,s=new Rn,o=new Rn){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],h=n[7],d=n[8],m=n[9],g=n[10],p=n[11],f=n[12],v=n[13],y=n[14],_=n[15];return t[0].setComponents(a-i,h-l,p-d,_-f).normalize(),t[1].setComponents(a+i,h+l,p+d,_+f).normalize(),t[2].setComponents(a+s,h+c,p+m,_+v).normalize(),t[3].setComponents(a-s,h-c,p-m,_-v).normalize(),t[4].setComponents(a-o,h-u,p-g,_-y).normalize(),t[5].setComponents(a+o,h+u,p+g,_+y).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),ii.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(ii)}intersectsSprite(e){return ii.center.set(0,0,0),ii.radius=.7071067811865476,ii.applyMatrix4(e.matrixWorld),this.intersectsSphere(ii)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(bs.x=i.normal.x>0?e.max.x:e.min.x,bs.y=i.normal.y>0?e.max.y:e.min.y,bs.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(bs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function gc(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function nd(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,d=c.usage,m=r.createBuffer();r.bindBuffer(u,m),r.bufferData(u,h,d),c.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){const d=u.array,m=u.updateRange;r.bindBuffer(h,c),m.count===-1?r.bufferSubData(h,0,d):(t?r.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):r.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:o,remove:a,update:l}}class vo extends Bt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,d=t/l,m=[],g=[],p=[],f=[];for(let v=0;v<u;v++){const y=v*d-o;for(let _=0;_<c;_++){const x=_*h-s;g.push(x,-y,0),p.push(0,0,1),f.push(_/a),f.push(1-v/l)}}for(let v=0;v<l;v++)for(let y=0;y<a;y++){const _=y+c*v,x=y+c*(v+1),w=y+1+c*(v+1),E=y+1+c*v;m.push(_,x,E),m.push(x,w,E)}this.setIndex(m),this.setAttribute("position",new zt(g,3)),this.setAttribute("normal",new zt(p,3)),this.setAttribute("uv",new zt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vo(e.width,e.height,e.widthSegments,e.heightSegments)}}var id=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,sd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rd=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,od=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ad=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ld=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cd="vec3 transformed = vec3( position );",ud=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hd=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,dd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,fd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,pd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,md=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_d=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,bd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Sd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Md=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,wd=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Td=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ad=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Ed=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ld="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rd=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Pd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Id=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Dd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Nd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Od=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ud=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Vd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Gd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Xd=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,jd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,$d=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Qd=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ef=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,tf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,nf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,of=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,af=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,uf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,df=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ff=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,mf=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,gf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,_f=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,vf=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,xf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Sf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Mf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,wf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Tf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Af=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ef=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Lf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,If=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Df=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Nf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ff=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Of=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,zf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Bf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,kf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Uf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Vf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Hf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,jf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Zf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Yf=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Jf=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Kf=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,$f=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Qf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,ep=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,tp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const np=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ip=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,sp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,op=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ap=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,lp=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,cp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,up=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,hp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,dp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,pp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gp=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,_p=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,bp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Mp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,wp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ap=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ep=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Pp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ip=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Np=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Fp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ne={alphamap_fragment:id,alphamap_pars_fragment:sd,alphatest_fragment:rd,alphatest_pars_fragment:od,aomap_fragment:ad,aomap_pars_fragment:ld,begin_vertex:cd,beginnormal_vertex:ud,bsdfs:hd,iridescence_fragment:dd,bumpmap_pars_fragment:fd,clipping_planes_fragment:pd,clipping_planes_pars_fragment:md,clipping_planes_pars_vertex:gd,clipping_planes_vertex:_d,color_fragment:vd,color_pars_fragment:xd,color_pars_vertex:yd,color_vertex:bd,common:Sd,cube_uv_reflection_fragment:Md,defaultnormal_vertex:wd,displacementmap_pars_vertex:Td,displacementmap_vertex:Ad,emissivemap_fragment:Ed,emissivemap_pars_fragment:Cd,encodings_fragment:Ld,encodings_pars_fragment:Rd,envmap_fragment:Pd,envmap_common_pars_fragment:Id,envmap_pars_fragment:Dd,envmap_pars_vertex:Nd,envmap_physical_pars_fragment:Xd,envmap_vertex:Fd,fog_vertex:Od,fog_pars_vertex:zd,fog_fragment:Bd,fog_pars_fragment:kd,gradientmap_pars_fragment:Ud,lightmap_fragment:Vd,lightmap_pars_fragment:Gd,lights_lambert_fragment:Hd,lights_lambert_pars_fragment:Wd,lights_pars_begin:qd,lights_toon_fragment:jd,lights_toon_pars_fragment:Zd,lights_phong_fragment:Yd,lights_phong_pars_fragment:Jd,lights_physical_fragment:Kd,lights_physical_pars_fragment:$d,lights_fragment_begin:Qd,lights_fragment_maps:ef,lights_fragment_end:tf,logdepthbuf_fragment:nf,logdepthbuf_pars_fragment:sf,logdepthbuf_pars_vertex:rf,logdepthbuf_vertex:of,map_fragment:af,map_pars_fragment:lf,map_particle_fragment:cf,map_particle_pars_fragment:uf,metalnessmap_fragment:hf,metalnessmap_pars_fragment:df,morphcolor_vertex:ff,morphnormal_vertex:pf,morphtarget_pars_vertex:mf,morphtarget_vertex:gf,normal_fragment_begin:_f,normal_fragment_maps:vf,normal_pars_fragment:xf,normal_pars_vertex:yf,normal_vertex:bf,normalmap_pars_fragment:Sf,clearcoat_normal_fragment_begin:Mf,clearcoat_normal_fragment_maps:wf,clearcoat_pars_fragment:Tf,iridescence_pars_fragment:Af,output_fragment:Ef,packing:Cf,premultiplied_alpha_fragment:Lf,project_vertex:Rf,dithering_fragment:Pf,dithering_pars_fragment:If,roughnessmap_fragment:Df,roughnessmap_pars_fragment:Nf,shadowmap_pars_fragment:Ff,shadowmap_pars_vertex:Of,shadowmap_vertex:zf,shadowmask_pars_fragment:Bf,skinbase_vertex:kf,skinning_pars_vertex:Uf,skinning_vertex:Vf,skinnormal_vertex:Gf,specularmap_fragment:Hf,specularmap_pars_fragment:Wf,tonemapping_fragment:qf,tonemapping_pars_fragment:Xf,transmission_fragment:jf,transmission_pars_fragment:Zf,uv_pars_fragment:Yf,uv_pars_vertex:Jf,uv_vertex:Kf,uv2_pars_fragment:$f,uv2_pars_vertex:Qf,uv2_vertex:ep,worldpos_vertex:tp,background_vert:np,background_frag:ip,backgroundCube_vert:sp,backgroundCube_frag:rp,cube_vert:op,cube_frag:ap,depth_vert:lp,depth_frag:cp,distanceRGBA_vert:up,distanceRGBA_frag:hp,equirect_vert:dp,equirect_frag:fp,linedashed_vert:pp,linedashed_frag:mp,meshbasic_vert:gp,meshbasic_frag:_p,meshlambert_vert:vp,meshlambert_frag:xp,meshmatcap_vert:yp,meshmatcap_frag:bp,meshnormal_vert:Sp,meshnormal_frag:Mp,meshphong_vert:wp,meshphong_frag:Tp,meshphysical_vert:Ap,meshphysical_frag:Ep,meshtoon_vert:Cp,meshtoon_frag:Lp,points_vert:Rp,points_frag:Pp,shadow_vert:Ip,shadow_frag:Dp,sprite_vert:Np,sprite_frag:Fp},ue={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new St},uv2Transform:{value:new St},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new St}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new St}}},Zt={basic:{uniforms:bt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:bt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new De(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:bt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:bt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:bt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new De(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:bt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:bt([ue.points,ue.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:bt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:bt([ue.common,ue.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:bt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:bt([ue.sprite,ue.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new St},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:bt([ue.common,ue.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:bt([ue.lights,ue.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};Zt.physical={uniforms:bt([Zt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new pe(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};const Ss={r:0,b:0,g:0};function Op(r,e,t,n,i,s,o){const a=new De(0);let l=s===!0?0:1,c,u,h=null,d=0,m=null;function g(f,v){let y=!1,_=v.isScene===!0?v.background:null;_&&_.isTexture&&(_=(v.backgroundBlurriness>0?t:e).get(_));const x=r.xr,w=x.getSession&&x.getSession();w&&w.environmentBlendMode==="additive"&&(_=null),_===null?p(a,l):_&&_.isColor&&(p(_,1),y=!0),(r.autoClear||y)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Vs)?(u===void 0&&(u=new Tt(new is(1,1,1),new Vn({name:"BackgroundCubeMaterial",uniforms:yi(Zt.backgroundCube.uniforms),vertexShader:Zt.backgroundCube.vertexShader,fragmentShader:Zt.backgroundCube.fragmentShader,side:Rt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,L,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.toneMapped=_.encoding!==We,(h!==_||d!==_.version||m!==r.toneMapping)&&(u.material.needsUpdate=!0,h=_,d=_.version,m=r.toneMapping),u.layers.enableAll(),f.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Tt(new vo(2,2),new Vn({name:"BackgroundMaterial",uniforms:yi(Zt.background.uniforms),vertexShader:Zt.background.vertexShader,fragmentShader:Zt.background.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=_.encoding!==We,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||d!==_.version||m!==r.toneMapping)&&(c.material.needsUpdate=!0,h=_,d=_.version,m=r.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null))}function p(f,v){f.getRGB(Ss,fc(r)),n.buffers.color.setClear(Ss.r,Ss.g,Ss.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(f,v=1){a.set(f),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(f){l=f,p(a,l)},render:g}}function zp(r,e,t,n){const i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=f(null);let c=l,u=!1;function h(I,k,X,Q,G){let W=!1;if(o){const ee=p(Q,X,k);c!==ee&&(c=ee,m(c.object)),W=v(I,Q,X,G),W&&y(I,Q,X,G)}else{const ee=k.wireframe===!0;(c.geometry!==Q.id||c.program!==X.id||c.wireframe!==ee)&&(c.geometry=Q.id,c.program=X.id,c.wireframe=ee,W=!0)}G!==null&&t.update(G,34963),(W||u)&&(u=!1,b(I,k,X,Q),G!==null&&r.bindBuffer(34963,t.get(G).buffer))}function d(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function m(I){return n.isWebGL2?r.bindVertexArray(I):s.bindVertexArrayOES(I)}function g(I){return n.isWebGL2?r.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function p(I,k,X){const Q=X.wireframe===!0;let G=a[I.id];G===void 0&&(G={},a[I.id]=G);let W=G[k.id];W===void 0&&(W={},G[k.id]=W);let ee=W[Q];return ee===void 0&&(ee=f(d()),W[Q]=ee),ee}function f(I){const k=[],X=[],Q=[];for(let G=0;G<i;G++)k[G]=0,X[G]=0,Q[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:X,attributeDivisors:Q,object:I,attributes:{},index:null}}function v(I,k,X,Q){const G=c.attributes,W=k.attributes;let ee=0;const de=X.getAttributes();for(const F in de)if(de[F].location>=0){const ne=G[F];let C=W[F];if(C===void 0&&(F==="instanceMatrix"&&I.instanceMatrix&&(C=I.instanceMatrix),F==="instanceColor"&&I.instanceColor&&(C=I.instanceColor)),ne===void 0||ne.attribute!==C||C&&ne.data!==C.data)return!0;ee++}return c.attributesNum!==ee||c.index!==Q}function y(I,k,X,Q){const G={},W=k.attributes;let ee=0;const de=X.getAttributes();for(const F in de)if(de[F].location>=0){let ne=W[F];ne===void 0&&(F==="instanceMatrix"&&I.instanceMatrix&&(ne=I.instanceMatrix),F==="instanceColor"&&I.instanceColor&&(ne=I.instanceColor));const C={};C.attribute=ne,ne&&ne.data&&(C.data=ne.data),G[F]=C,ee++}c.attributes=G,c.attributesNum=ee,c.index=Q}function _(){const I=c.newAttributes;for(let k=0,X=I.length;k<X;k++)I[k]=0}function x(I){w(I,0)}function w(I,k){const X=c.newAttributes,Q=c.enabledAttributes,G=c.attributeDivisors;X[I]=1,Q[I]===0&&(r.enableVertexAttribArray(I),Q[I]=1),G[I]!==k&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,k),G[I]=k)}function E(){const I=c.newAttributes,k=c.enabledAttributes;for(let X=0,Q=k.length;X<Q;X++)k[X]!==I[X]&&(r.disableVertexAttribArray(X),k[X]=0)}function L(I,k,X,Q,G,W){n.isWebGL2===!0&&(X===5124||X===5125)?r.vertexAttribIPointer(I,k,X,G,W):r.vertexAttribPointer(I,k,X,Q,G,W)}function b(I,k,X,Q){if(n.isWebGL2===!1&&(I.isInstancedMesh||Q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const G=Q.attributes,W=X.getAttributes(),ee=k.defaultAttributeValues;for(const de in W){const F=W[de];if(F.location>=0){let $=G[de];if($===void 0&&(de==="instanceMatrix"&&I.instanceMatrix&&($=I.instanceMatrix),de==="instanceColor"&&I.instanceColor&&($=I.instanceColor)),$!==void 0){const ne=$.normalized,C=$.itemSize,te=t.get($);if(te===void 0)continue;const K=te.buffer,re=te.type,se=te.bytesPerElement;if($.isInterleavedBufferAttribute){const fe=$.data,Se=fe.stride,Y=$.offset;if(fe.isInstancedInterleavedBuffer){for(let B=0;B<F.locationSize;B++)w(F.location+B,fe.meshPerAttribute);I.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let B=0;B<F.locationSize;B++)x(F.location+B);r.bindBuffer(34962,K);for(let B=0;B<F.locationSize;B++)L(F.location+B,C/F.locationSize,re,ne,Se*se,(Y+C/F.locationSize*B)*se)}else{if($.isInstancedBufferAttribute){for(let fe=0;fe<F.locationSize;fe++)w(F.location+fe,$.meshPerAttribute);I.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let fe=0;fe<F.locationSize;fe++)x(F.location+fe);r.bindBuffer(34962,K);for(let fe=0;fe<F.locationSize;fe++)L(F.location+fe,C/F.locationSize,re,ne,C*se,C/F.locationSize*fe*se)}}else if(ee!==void 0){const ne=ee[de];if(ne!==void 0)switch(ne.length){case 2:r.vertexAttrib2fv(F.location,ne);break;case 3:r.vertexAttrib3fv(F.location,ne);break;case 4:r.vertexAttrib4fv(F.location,ne);break;default:r.vertexAttrib1fv(F.location,ne)}}}}E()}function T(){Z();for(const I in a){const k=a[I];for(const X in k){const Q=k[X];for(const G in Q)g(Q[G].object),delete Q[G];delete k[X]}delete a[I]}}function R(I){if(a[I.id]===void 0)return;const k=a[I.id];for(const X in k){const Q=k[X];for(const G in Q)g(Q[G].object),delete Q[G];delete k[X]}delete a[I.id]}function U(I){for(const k in a){const X=a[k];if(X[I.id]===void 0)continue;const Q=X[I.id];for(const G in Q)g(Q[G].object),delete Q[G];delete X[I.id]}}function Z(){N(),u=!0,c!==l&&(c=l,m(c.object))}function N(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:Z,resetDefaultState:N,dispose:T,releaseStatesOfGeometry:R,releaseStatesOfProgram:U,initAttributes:_,enableAttribute:x,disableUnusedAttributes:E}}function Bp(r,e,t,n){const i=n.isWebGL2;let s;function o(c){s=c}function a(c,u){r.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,h){if(h===0)return;let d,m;if(i)d=r,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](s,c,u,h),t.update(u,s,h)}this.setMode=o,this.render=a,this.renderInstances=l}function kp(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(L){if(L==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";L="mediump"}return L==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=r.getParameter(34930),d=r.getParameter(35660),m=r.getParameter(3379),g=r.getParameter(34076),p=r.getParameter(34921),f=r.getParameter(36347),v=r.getParameter(36348),y=r.getParameter(36349),_=d>0,x=o||e.has("OES_texture_float"),w=_&&x,E=o?r.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:f,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:_,floatFragmentTextures:x,floatVertexTextures:w,maxSamples:E}}function Up(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Rn,a=new St,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||n!==0||i;return i=d,n=h.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,m){const g=h.clippingPlanes,p=h.clipIntersection,f=h.clipShadows,v=r.get(h);if(!i||g===null||g.length===0||s&&!f)s?u(null):c();else{const y=s?0:n,_=y*4;let x=v.clippingState||null;l.value=x,x=u(g,d,_,m);for(let w=0;w!==_;++w)x[w]=t[w];v.clippingState=x,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,m,g){const p=h!==null?h.length:0;let f=null;if(p!==0){if(f=l.value,g!==!0||f===null){const v=m+p*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(f===null||f.length<v)&&(f=new Float32Array(v));for(let _=0,x=m;_!==p;++_,x+=4)o.copy(h[_]).applyMatrix4(y,a),o.normal.toArray(f,x),f[x+3]=o.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,f}}function Vp(r){let e=new WeakMap;function t(o,a){return a===kr?o.mapping=mi:a===Ur&&(o.mapping=gi),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===kr||a===Ur)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Qh(l.height/2);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class xo extends pc{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const li=4,Ia=[.125,.215,.35,.446,.526,.582],In=20,wr=new xo,Da=new De;let Tr=null;const Pn=(1+Math.sqrt(5))/2,si=1/Pn,Na=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,Pn,si),new P(0,Pn,-si),new P(si,0,Pn),new P(-si,0,Pn),new P(Pn,si,0),new P(-Pn,si,0)];class Fa{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Tr=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ba(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=za(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Tr),e.scissorTest=!1,Ms(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===mi||e.mapping===gi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Tr=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:wt,minFilter:wt,generateMipmaps:!1,type:ji,format:Ft,encoding:kn,depthBuffer:!1},i=Oa(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Oa(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Gp(s)),this._blurMaterial=Hp(s,e,t)}return i}_compileMaterial(e){const t=new Tt(this._lodPlanes[0],e);this._renderer.compile(t,wr)}_sceneToCubeUV(e,t,n,i){const a=new ft(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Da),u.toneMapping=dn,u.autoClear=!1;const m=new ht({name:"PMREM.Background",side:Rt,depthWrite:!1,depthTest:!1}),g=new Tt(new is,m);let p=!1;const f=e.background;f?f.isColor&&(m.color.copy(f),e.background=null,p=!0):(m.color.copy(Da),p=!0);for(let v=0;v<6;v++){const y=v%3;y===0?(a.up.set(0,l[v],0),a.lookAt(c[v],0,0)):y===1?(a.up.set(0,0,l[v]),a.lookAt(0,c[v],0)):(a.up.set(0,l[v],0),a.lookAt(0,0,c[v]));const _=this._cubeSize;Ms(i,y*_,v>2?_:0,_,_),u.setRenderTarget(i),p&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===mi||e.mapping===gi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ba()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=za());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Tt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ms(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,wr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Na[(i-1)%Na.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Tt(this._lodPlanes[i],c),d=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*In-1),p=s/g,f=isFinite(s)?1+Math.floor(u*p):In;f>In&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${In}`);const v=[];let y=0;for(let L=0;L<In;++L){const b=L/p,T=Math.exp(-b*b/2);v.push(T),L===0?y+=T:L<f&&(y+=2*T)}for(let L=0;L<v.length;L++)v[L]=v[L]/y;d.envMap.value=e.texture,d.samples.value=f,d.weights.value=v,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-n;const x=this._sizeLods[i],w=3*x*(i>_-li?i-_+li:0),E=4*(this._cubeSize-x);Ms(t,w,E,3*x,2*x),l.setRenderTarget(t),l.render(h,wr)}}function Gp(r){const e=[],t=[],n=[];let i=r;const s=r-li+1+Ia.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-li?l=Ia[o-r+li-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,p=3,f=2,v=1,y=new Float32Array(p*g*m),_=new Float32Array(f*g*m),x=new Float32Array(v*g*m);for(let E=0;E<m;E++){const L=E%3*2/3-1,b=E>2?0:-1,T=[L,b,0,L+2/3,b,0,L+2/3,b+1,0,L,b,0,L+2/3,b+1,0,L,b+1,0];y.set(T,p*g*E),_.set(d,f*g*E);const R=[E,E,E,E,E,E];x.set(R,v*g*E)}const w=new Bt;w.setAttribute("position",new Mt(y,p)),w.setAttribute("uv",new Mt(_,f)),w.setAttribute("faceIndex",new Mt(x,v)),e.push(w),i>li&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Oa(r,e,t){const n=new Un(r,e,t);return n.texture.mapping=Vs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ms(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Hp(r,e,t){const n=new Float32Array(In),i=new P(0,1,0);return new Vn({name:"SphericalGaussianBlur",defines:{n:In,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:yo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function za(){return new Vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function Ba(){return new Vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function yo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Wp(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===kr||l===Ur,u=l===mi||l===gi;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new Fa(r)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new Fa(r));const d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function qp(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Xp(r,e,t,n){const i={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete i[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)e.update(d[g],34962);const m=h.morphAttributes;for(const g in m){const p=m[g];for(let f=0,v=p.length;f<v;f++)e.update(p[f],34962)}}function c(h){const d=[],m=h.index,g=h.attributes.position;let p=0;if(m!==null){const y=m.array;p=m.version;for(let _=0,x=y.length;_<x;_+=3){const w=y[_+0],E=y[_+1],L=y[_+2];d.push(w,E,E,L,L,w)}}else{const y=g.array;p=g.version;for(let _=0,x=y.length/3-1;_<x;_+=3){const w=_+0,E=_+1,L=_+2;d.push(w,E,E,L,L,w)}}const f=new(oc(d)?dc:hc)(d,1);f.version=p;const v=s.get(h);v&&e.remove(v),s.set(h,f)}function u(h){const d=s.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function jp(r,e,t,n){const i=n.isWebGL2;let s;function o(d){s=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function u(d,m){r.drawElements(s,m,a,d*l),t.update(m,s,1)}function h(d,m,g){if(g===0)return;let p,f;if(i)p=r,f="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](s,m,a,d*l,g),t.update(m,s,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h}function Zp(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Yp(r,e){return r[0]-e[0]}function Jp(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Kp(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new Ze,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=g!==void 0?g.length:0;let f=s.get(u);if(f===void 0||f.count!==p){let k=function(){N.dispose(),s.delete(u),u.removeEventListener("dispose",k)};var m=k;f!==void 0&&f.texture.dispose();const _=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,w=u.morphAttributes.color!==void 0,E=u.morphAttributes.position||[],L=u.morphAttributes.normal||[],b=u.morphAttributes.color||[];let T=0;_===!0&&(T=1),x===!0&&(T=2),w===!0&&(T=3);let R=u.attributes.position.count*T,U=1;R>e.maxTextureSize&&(U=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const Z=new Float32Array(R*U*4*p),N=new cc(Z,R,U,p);N.type=bn,N.needsUpdate=!0;const I=T*4;for(let X=0;X<p;X++){const Q=E[X],G=L[X],W=b[X],ee=R*U*4*X;for(let de=0;de<Q.count;de++){const F=de*I;_===!0&&(o.fromBufferAttribute(Q,de),Z[ee+F+0]=o.x,Z[ee+F+1]=o.y,Z[ee+F+2]=o.z,Z[ee+F+3]=0),x===!0&&(o.fromBufferAttribute(G,de),Z[ee+F+4]=o.x,Z[ee+F+5]=o.y,Z[ee+F+6]=o.z,Z[ee+F+7]=0),w===!0&&(o.fromBufferAttribute(W,de),Z[ee+F+8]=o.x,Z[ee+F+9]=o.y,Z[ee+F+10]=o.z,Z[ee+F+11]=W.itemSize===4?o.w:1)}}f={count:p,texture:N,size:new pe(R,U)},s.set(u,f),u.addEventListener("dispose",k)}let v=0;for(let _=0;_<d.length;_++)v+=d[_];const y=u.morphTargetsRelative?1:1-v;h.getUniforms().setValue(r,"morphTargetBaseInfluence",y),h.getUniforms().setValue(r,"morphTargetInfluences",d),h.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}else{const g=d===void 0?0:d.length;let p=n[u.id];if(p===void 0||p.length!==g){p=[];for(let x=0;x<g;x++)p[x]=[x,0];n[u.id]=p}for(let x=0;x<g;x++){const w=p[x];w[0]=x,w[1]=d[x]}p.sort(Jp);for(let x=0;x<8;x++)x<g&&p[x][1]?(a[x][0]=p[x][0],a[x][1]=p[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(Yp);const f=u.morphAttributes.position,v=u.morphAttributes.normal;let y=0;for(let x=0;x<8;x++){const w=a[x],E=w[0],L=w[1];E!==Number.MAX_SAFE_INTEGER&&L?(f&&u.getAttribute("morphTarget"+x)!==f[E]&&u.setAttribute("morphTarget"+x,f[E]),v&&u.getAttribute("morphNormal"+x)!==v[E]&&u.setAttribute("morphNormal"+x,v[E]),i[x]=L,y+=L):(f&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),v&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),i[x]=0)}const _=u.morphTargetsRelative?1:1-y;h.getUniforms().setValue(r,"morphTargetBaseInfluence",_),h.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function $p(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const _c=new pt,vc=new cc,xc=new zh,yc=new mc,ka=[],Ua=[],Va=new Float32Array(16),Ga=new Float32Array(9),Ha=new Float32Array(4);function wi(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=ka[i];if(s===void 0&&(s=new Float32Array(i),ka[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function st(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function rt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Ws(r,e){let t=Ua[e];t===void 0&&(t=new Int32Array(e),Ua[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Qp(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function em(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(st(t,e))return;r.uniform2fv(this.addr,e),rt(t,e)}}function tm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(st(t,e))return;r.uniform3fv(this.addr,e),rt(t,e)}}function nm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(st(t,e))return;r.uniform4fv(this.addr,e),rt(t,e)}}function im(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(st(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),rt(t,e)}else{if(st(t,n))return;Ha.set(n),r.uniformMatrix2fv(this.addr,!1,Ha),rt(t,n)}}function sm(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(st(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),rt(t,e)}else{if(st(t,n))return;Ga.set(n),r.uniformMatrix3fv(this.addr,!1,Ga),rt(t,n)}}function rm(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(st(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),rt(t,e)}else{if(st(t,n))return;Va.set(n),r.uniformMatrix4fv(this.addr,!1,Va),rt(t,n)}}function om(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function am(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(st(t,e))return;r.uniform2iv(this.addr,e),rt(t,e)}}function lm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(st(t,e))return;r.uniform3iv(this.addr,e),rt(t,e)}}function cm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(st(t,e))return;r.uniform4iv(this.addr,e),rt(t,e)}}function um(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function hm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(st(t,e))return;r.uniform2uiv(this.addr,e),rt(t,e)}}function dm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(st(t,e))return;r.uniform3uiv(this.addr,e),rt(t,e)}}function fm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(st(t,e))return;r.uniform4uiv(this.addr,e),rt(t,e)}}function pm(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||_c,i)}function mm(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||xc,i)}function gm(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||yc,i)}function _m(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||vc,i)}function vm(r){switch(r){case 5126:return Qp;case 35664:return em;case 35665:return tm;case 35666:return nm;case 35674:return im;case 35675:return sm;case 35676:return rm;case 5124:case 35670:return om;case 35667:case 35671:return am;case 35668:case 35672:return lm;case 35669:case 35673:return cm;case 5125:return um;case 36294:return hm;case 36295:return dm;case 36296:return fm;case 35678:case 36198:case 36298:case 36306:case 35682:return pm;case 35679:case 36299:case 36307:return mm;case 35680:case 36300:case 36308:case 36293:return gm;case 36289:case 36303:case 36311:case 36292:return _m}}function xm(r,e){r.uniform1fv(this.addr,e)}function ym(r,e){const t=wi(e,this.size,2);r.uniform2fv(this.addr,t)}function bm(r,e){const t=wi(e,this.size,3);r.uniform3fv(this.addr,t)}function Sm(r,e){const t=wi(e,this.size,4);r.uniform4fv(this.addr,t)}function Mm(r,e){const t=wi(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function wm(r,e){const t=wi(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Tm(r,e){const t=wi(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Am(r,e){r.uniform1iv(this.addr,e)}function Em(r,e){r.uniform2iv(this.addr,e)}function Cm(r,e){r.uniform3iv(this.addr,e)}function Lm(r,e){r.uniform4iv(this.addr,e)}function Rm(r,e){r.uniform1uiv(this.addr,e)}function Pm(r,e){r.uniform2uiv(this.addr,e)}function Im(r,e){r.uniform3uiv(this.addr,e)}function Dm(r,e){r.uniform4uiv(this.addr,e)}function Nm(r,e,t){const n=this.cache,i=e.length,s=Ws(t,i);st(n,s)||(r.uniform1iv(this.addr,s),rt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||_c,s[o])}function Fm(r,e,t){const n=this.cache,i=e.length,s=Ws(t,i);st(n,s)||(r.uniform1iv(this.addr,s),rt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||xc,s[o])}function Om(r,e,t){const n=this.cache,i=e.length,s=Ws(t,i);st(n,s)||(r.uniform1iv(this.addr,s),rt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||yc,s[o])}function zm(r,e,t){const n=this.cache,i=e.length,s=Ws(t,i);st(n,s)||(r.uniform1iv(this.addr,s),rt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||vc,s[o])}function Bm(r){switch(r){case 5126:return xm;case 35664:return ym;case 35665:return bm;case 35666:return Sm;case 35674:return Mm;case 35675:return wm;case 35676:return Tm;case 5124:case 35670:return Am;case 35667:case 35671:return Em;case 35668:case 35672:return Cm;case 35669:case 35673:return Lm;case 5125:return Rm;case 36294:return Pm;case 36295:return Im;case 36296:return Dm;case 35678:case 36198:case 36298:case 36306:case 35682:return Nm;case 35679:case 36299:case 36307:return Fm;case 35680:case 36300:case 36308:case 36293:return Om;case 36289:case 36303:case 36311:case 36292:return zm}}class km{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=vm(t.type)}}class Um{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Bm(t.type)}}class Vm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Ar=/(\w+)(\])?(\[|\.)?/g;function Wa(r,e){r.seq.push(e),r.map[e.id]=e}function Gm(r,e,t){const n=r.name,i=n.length;for(Ar.lastIndex=0;;){const s=Ar.exec(n),o=Ar.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Wa(t,c===void 0?new km(a,r,e):new Um(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new Vm(a),Wa(t,h)),t=h}}}class Ds{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);Gm(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function qa(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let Hm=0;function Wm(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function qm(r){switch(r){case kn:return["Linear","( value )"];case We:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function Xa(r,e,t){const n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Wm(r.getShaderSource(e),o)}else return i}function Xm(r,e){const t=qm(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function jm(r,e){let t;switch(e){case Vu:t="Linear";break;case Gu:t="Reinhard";break;case Hu:t="OptimizedCineon";break;case Wu:t="ACESFilmic";break;case qu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Zm(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Vi).join(`
`)}function Ym(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Jm(r,e){const t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Vi(r){return r!==""}function ja(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Za(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Km=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xr(r){return r.replace(Km,$m)}function $m(r,e){const t=Ne[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Xr(t)}const Qm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ya(r){return r.replace(Qm,eg)}function eg(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Ja(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function tg(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Zl?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===xu?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ui&&(e="SHADOWMAP_TYPE_VSM"),e}function ng(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case mi:case gi:e="ENVMAP_TYPE_CUBE";break;case Vs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ig(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case gi:e="ENVMAP_MODE_REFRACTION";break}return e}function sg(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Kl:e="ENVMAP_BLENDING_MULTIPLY";break;case ku:e="ENVMAP_BLENDING_MIX";break;case Uu:e="ENVMAP_BLENDING_ADD";break}return e}function rg(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function og(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=tg(t),c=ng(t),u=ig(t),h=sg(t),d=rg(t),m=t.isWebGL2?"":Zm(t),g=Ym(s),p=i.createProgram();let f,v,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=[g].filter(Vi).join(`
`),f.length>0&&(f+=`
`),v=[m,g].filter(Vi).join(`
`),v.length>0&&(v+=`
`)):(f=[Ja(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vi).join(`
`),v=[m,Ja(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==dn?"#define TONE_MAPPING":"",t.toneMapping!==dn?Ne.tonemapping_pars_fragment:"",t.toneMapping!==dn?jm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ne.encodings_pars_fragment,Xm("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Vi).join(`
`)),o=Xr(o),o=ja(o,t),o=Za(o,t),a=Xr(a),a=ja(a,t),a=Za(a,t),o=Ya(o),a=Ya(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,f=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,v=["#define varying in",t.glslVersion===xa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const _=y+f+o,x=y+v+a,w=qa(i,35633,_),E=qa(i,35632,x);if(i.attachShader(p,w),i.attachShader(p,E),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),r.debug.checkShaderErrors){const T=i.getProgramInfoLog(p).trim(),R=i.getShaderInfoLog(w).trim(),U=i.getShaderInfoLog(E).trim();let Z=!0,N=!0;if(i.getProgramParameter(p,35714)===!1){Z=!1;const I=Xa(i,w,"vertex"),k=Xa(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+T+`
`+I+`
`+k)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(R===""||U==="")&&(N=!1);N&&(this.diagnostics={runnable:Z,programLog:T,vertexShader:{log:R,prefix:f},fragmentShader:{log:U,prefix:v}})}i.deleteShader(w),i.deleteShader(E);let L;this.getUniforms=function(){return L===void 0&&(L=new Ds(i,p)),L};let b;return this.getAttributes=function(){return b===void 0&&(b=Jm(i,p)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=Hm++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=w,this.fragmentShader=E,this}let ag=0;class lg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new cg(e),t.set(e,n)),n}}class cg{constructor(e){this.id=ag++,this.code=e,this.usedTimes=0}}function ug(r,e,t,n,i,s,o){const a=new go,l=new lg,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,d=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(b,T,R,U,Z){const N=U.fog,I=Z.geometry,k=b.isMeshStandardMaterial?U.environment:null,X=(b.isMeshStandardMaterial?t:e).get(b.envMap||k),Q=X&&X.mapping===Vs?X.image.height:null,G=g[b.type];b.precision!==null&&(m=i.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));const W=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,ee=W!==void 0?W.length:0;let de=0;I.morphAttributes.position!==void 0&&(de=1),I.morphAttributes.normal!==void 0&&(de=2),I.morphAttributes.color!==void 0&&(de=3);let F,$,ne,C;if(G){const Se=Zt[G];F=Se.vertexShader,$=Se.fragmentShader}else F=b.vertexShader,$=b.fragmentShader,l.update(b),ne=l.getVertexShaderID(b),C=l.getFragmentShaderID(b);const te=r.getRenderTarget(),K=b.alphaTest>0,re=b.clearcoat>0,se=b.iridescence>0;return{isWebGL2:u,shaderID:G,shaderName:b.type,vertexShader:F,fragmentShader:$,defines:b.defines,customVertexShaderID:ne,customFragmentShaderID:C,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,instancing:Z.isInstancedMesh===!0,instancingColor:Z.isInstancedMesh===!0&&Z.instanceColor!==null,supportsVertexTextures:d,outputEncoding:te===null?r.outputEncoding:te.isXRRenderTarget===!0?te.texture.encoding:kn,map:!!b.map,matcap:!!b.matcap,envMap:!!X,envMapMode:X&&X.mapping,envMapCubeUVHeight:Q,lightMap:!!b.lightMap,aoMap:!!b.aoMap,emissiveMap:!!b.emissiveMap,bumpMap:!!b.bumpMap,normalMap:!!b.normalMap,objectSpaceNormalMap:b.normalMapType===ph,tangentSpaceNormalMap:b.normalMapType===nc,decodeVideoTexture:!!b.map&&b.map.isVideoTexture===!0&&b.map.encoding===We,clearcoat:re,clearcoatMap:re&&!!b.clearcoatMap,clearcoatRoughnessMap:re&&!!b.clearcoatRoughnessMap,clearcoatNormalMap:re&&!!b.clearcoatNormalMap,iridescence:se,iridescenceMap:se&&!!b.iridescenceMap,iridescenceThicknessMap:se&&!!b.iridescenceThicknessMap,displacementMap:!!b.displacementMap,roughnessMap:!!b.roughnessMap,metalnessMap:!!b.metalnessMap,specularMap:!!b.specularMap,specularIntensityMap:!!b.specularIntensityMap,specularColorMap:!!b.specularColorMap,opaque:b.transparent===!1&&b.blending===ui,alphaMap:!!b.alphaMap,alphaTest:K,gradientMap:!!b.gradientMap,sheen:b.sheen>0,sheenColorMap:!!b.sheenColorMap,sheenRoughnessMap:!!b.sheenRoughnessMap,transmission:b.transmission>0,transmissionMap:!!b.transmissionMap,thicknessMap:!!b.thicknessMap,combine:b.combine,vertexTangents:!!b.normalMap&&!!I.attributes.tangent,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUvs:!!b.map||!!b.bumpMap||!!b.normalMap||!!b.specularMap||!!b.alphaMap||!!b.emissiveMap||!!b.roughnessMap||!!b.metalnessMap||!!b.clearcoatMap||!!b.clearcoatRoughnessMap||!!b.clearcoatNormalMap||!!b.iridescenceMap||!!b.iridescenceThicknessMap||!!b.displacementMap||!!b.transmissionMap||!!b.thicknessMap||!!b.specularIntensityMap||!!b.specularColorMap||!!b.sheenColorMap||!!b.sheenRoughnessMap,uvsVertexOnly:!(b.map||b.bumpMap||b.normalMap||b.specularMap||b.alphaMap||b.emissiveMap||b.roughnessMap||b.metalnessMap||b.clearcoatNormalMap||b.iridescenceMap||b.iridescenceThicknessMap||b.transmission>0||b.transmissionMap||b.thicknessMap||b.specularIntensityMap||b.specularColorMap||b.sheen>0||b.sheenColorMap||b.sheenRoughnessMap)&&!!b.displacementMap,fog:!!N,useFog:b.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:!!b.flatShading,sizeAttenuation:b.sizeAttenuation,logarithmicDepthBuffer:h,skinning:Z.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:de,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&R.length>0,shadowMapType:r.shadowMap.type,toneMapping:b.toneMapped?r.toneMapping:dn,useLegacyLights:r.useLegacyLights,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===cn,flipSided:b.side===Rt,useDepthPacking:!!b.depthPacking,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:b.extensions&&b.extensions.derivatives,extensionFragDepth:b.extensions&&b.extensions.fragDepth,extensionDrawBuffers:b.extensions&&b.extensions.drawBuffers,extensionShaderTextureLOD:b.extensions&&b.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:b.customProgramCacheKey()}}function f(b){const T=[];if(b.shaderID?T.push(b.shaderID):(T.push(b.customVertexShaderID),T.push(b.customFragmentShaderID)),b.defines!==void 0)for(const R in b.defines)T.push(R),T.push(b.defines[R]);return b.isRawShaderMaterial===!1&&(v(T,b),y(T,b),T.push(r.outputEncoding)),T.push(b.customProgramCacheKey),T.join()}function v(b,T){b.push(T.precision),b.push(T.outputEncoding),b.push(T.envMapMode),b.push(T.envMapCubeUVHeight),b.push(T.combine),b.push(T.vertexUvs),b.push(T.fogExp2),b.push(T.sizeAttenuation),b.push(T.morphTargetsCount),b.push(T.morphAttributeCount),b.push(T.numDirLights),b.push(T.numPointLights),b.push(T.numSpotLights),b.push(T.numSpotLightMaps),b.push(T.numHemiLights),b.push(T.numRectAreaLights),b.push(T.numDirLightShadows),b.push(T.numPointLightShadows),b.push(T.numSpotLightShadows),b.push(T.numSpotLightShadowsWithMaps),b.push(T.shadowMapType),b.push(T.toneMapping),b.push(T.numClippingPlanes),b.push(T.numClipIntersection),b.push(T.depthPacking)}function y(b,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.map&&a.enable(4),T.matcap&&a.enable(5),T.envMap&&a.enable(6),T.lightMap&&a.enable(7),T.aoMap&&a.enable(8),T.emissiveMap&&a.enable(9),T.bumpMap&&a.enable(10),T.normalMap&&a.enable(11),T.objectSpaceNormalMap&&a.enable(12),T.tangentSpaceNormalMap&&a.enable(13),T.clearcoat&&a.enable(14),T.clearcoatMap&&a.enable(15),T.clearcoatRoughnessMap&&a.enable(16),T.clearcoatNormalMap&&a.enable(17),T.iridescence&&a.enable(18),T.iridescenceMap&&a.enable(19),T.iridescenceThicknessMap&&a.enable(20),T.displacementMap&&a.enable(21),T.specularMap&&a.enable(22),T.roughnessMap&&a.enable(23),T.metalnessMap&&a.enable(24),T.gradientMap&&a.enable(25),T.alphaMap&&a.enable(26),T.alphaTest&&a.enable(27),T.vertexColors&&a.enable(28),T.vertexAlphas&&a.enable(29),T.vertexUvs&&a.enable(30),T.vertexTangents&&a.enable(31),T.uvsVertexOnly&&a.enable(32),b.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.specularIntensityMap&&a.enable(15),T.specularColorMap&&a.enable(16),T.transmission&&a.enable(17),T.transmissionMap&&a.enable(18),T.thicknessMap&&a.enable(19),T.sheen&&a.enable(20),T.sheenColorMap&&a.enable(21),T.sheenRoughnessMap&&a.enable(22),T.decodeVideoTexture&&a.enable(23),T.opaque&&a.enable(24),b.push(a.mask)}function _(b){const T=g[b.type];let R;if(T){const U=Zt[T];R=Yh.clone(U.uniforms)}else R=b.uniforms;return R}function x(b,T){let R;for(let U=0,Z=c.length;U<Z;U++){const N=c[U];if(N.cacheKey===T){R=N,++R.usedTimes;break}}return R===void 0&&(R=new og(r,T,b,s),c.push(R)),R}function w(b){if(--b.usedTimes===0){const T=c.indexOf(b);c[T]=c[c.length-1],c.pop(),b.destroy()}}function E(b){l.remove(b)}function L(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:_,acquireProgram:x,releaseProgram:w,releaseShaderCache:E,programs:c,dispose:L}}function hg(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function dg(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Ka(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function $a(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,d,m,g,p,f){let v=r[e];return v===void 0?(v={id:h.id,object:h,geometry:d,material:m,groupOrder:g,renderOrder:h.renderOrder,z:p,group:f},r[e]=v):(v.id=h.id,v.object=h,v.geometry=d,v.material=m,v.groupOrder=g,v.renderOrder=h.renderOrder,v.z=p,v.group=f),e++,v}function a(h,d,m,g,p,f){const v=o(h,d,m,g,p,f);m.transmission>0?n.push(v):m.transparent===!0?i.push(v):t.push(v)}function l(h,d,m,g,p,f){const v=o(h,d,m,g,p,f);m.transmission>0?n.unshift(v):m.transparent===!0?i.unshift(v):t.unshift(v)}function c(h,d){t.length>1&&t.sort(h||dg),n.length>1&&n.sort(d||Ka),i.length>1&&i.sort(d||Ka)}function u(){for(let h=e,d=r.length;h<d;h++){const m=r[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function fg(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new $a,r.set(n,[o])):i>=s.length?(o=new $a,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function pg(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new De};break;case"SpotLight":t={position:new P,direction:new P,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new De,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new De,groundColor:new De};break;case"RectAreaLight":t={color:new De,position:new P,halfWidth:new P,halfHeight:new P};break}return r[e.id]=t,t}}}function mg(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let gg=0;function _g(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function vg(r,e){const t=new pg,n=mg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new P);const s=new P,o=new Oe,a=new Oe;function l(u,h){let d=0,m=0,g=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let p=0,f=0,v=0,y=0,_=0,x=0,w=0,E=0,L=0,b=0;u.sort(_g);const T=h===!0?Math.PI:1;for(let U=0,Z=u.length;U<Z;U++){const N=u[U],I=N.color,k=N.intensity,X=N.distance,Q=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)d+=I.r*k*T,m+=I.g*k*T,g+=I.b*k*T;else if(N.isLightProbe)for(let G=0;G<9;G++)i.probe[G].addScaledVector(N.sh.coefficients[G],k);else if(N.isDirectionalLight){const G=t.get(N);if(G.color.copy(N.color).multiplyScalar(N.intensity*T),N.castShadow){const W=N.shadow,ee=n.get(N);ee.shadowBias=W.bias,ee.shadowNormalBias=W.normalBias,ee.shadowRadius=W.radius,ee.shadowMapSize=W.mapSize,i.directionalShadow[p]=ee,i.directionalShadowMap[p]=Q,i.directionalShadowMatrix[p]=N.shadow.matrix,x++}i.directional[p]=G,p++}else if(N.isSpotLight){const G=t.get(N);G.position.setFromMatrixPosition(N.matrixWorld),G.color.copy(I).multiplyScalar(k*T),G.distance=X,G.coneCos=Math.cos(N.angle),G.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),G.decay=N.decay,i.spot[v]=G;const W=N.shadow;if(N.map&&(i.spotLightMap[L]=N.map,L++,W.updateMatrices(N),N.castShadow&&b++),i.spotLightMatrix[v]=W.matrix,N.castShadow){const ee=n.get(N);ee.shadowBias=W.bias,ee.shadowNormalBias=W.normalBias,ee.shadowRadius=W.radius,ee.shadowMapSize=W.mapSize,i.spotShadow[v]=ee,i.spotShadowMap[v]=Q,E++}v++}else if(N.isRectAreaLight){const G=t.get(N);G.color.copy(I).multiplyScalar(k),G.halfWidth.set(N.width*.5,0,0),G.halfHeight.set(0,N.height*.5,0),i.rectArea[y]=G,y++}else if(N.isPointLight){const G=t.get(N);if(G.color.copy(N.color).multiplyScalar(N.intensity*T),G.distance=N.distance,G.decay=N.decay,N.castShadow){const W=N.shadow,ee=n.get(N);ee.shadowBias=W.bias,ee.shadowNormalBias=W.normalBias,ee.shadowRadius=W.radius,ee.shadowMapSize=W.mapSize,ee.shadowCameraNear=W.camera.near,ee.shadowCameraFar=W.camera.far,i.pointShadow[f]=ee,i.pointShadowMap[f]=Q,i.pointShadowMatrix[f]=N.shadow.matrix,w++}i.point[f]=G,f++}else if(N.isHemisphereLight){const G=t.get(N);G.skyColor.copy(N.color).multiplyScalar(k*T),G.groundColor.copy(N.groundColor).multiplyScalar(k*T),i.hemi[_]=G,_++}}y>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_FLOAT_1,i.rectAreaLTC2=ue.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_HALF_1,i.rectAreaLTC2=ue.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=m,i.ambient[2]=g;const R=i.hash;(R.directionalLength!==p||R.pointLength!==f||R.spotLength!==v||R.rectAreaLength!==y||R.hemiLength!==_||R.numDirectionalShadows!==x||R.numPointShadows!==w||R.numSpotShadows!==E||R.numSpotMaps!==L)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=y,i.point.length=f,i.hemi.length=_,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=E+L-b,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=b,R.directionalLength=p,R.pointLength=f,R.spotLength=v,R.rectAreaLength=y,R.hemiLength=_,R.numDirectionalShadows=x,R.numPointShadows=w,R.numSpotShadows=E,R.numSpotMaps=L,i.version=gg++)}function c(u,h){let d=0,m=0,g=0,p=0,f=0;const v=h.matrixWorldInverse;for(let y=0,_=u.length;y<_;y++){const x=u[y];if(x.isDirectionalLight){const w=i.directional[d];w.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(v),d++}else if(x.isSpotLight){const w=i.spot[g];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(v),w.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(v),g++}else if(x.isRectAreaLight){const w=i.rectArea[p];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(v),a.identity(),o.copy(x.matrixWorld),o.premultiply(v),a.extractRotation(o),w.halfWidth.set(x.width*.5,0,0),w.halfHeight.set(0,x.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),p++}else if(x.isPointLight){const w=i.point[m];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(v),m++}else if(x.isHemisphereLight){const w=i.hemi[f];w.direction.setFromMatrixPosition(x.matrixWorld),w.direction.transformDirection(v),f++}}}return{setup:l,setupView:c,state:i}}function Qa(r,e){const t=new vg(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function xg(r,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Qa(r,e),t.set(s,[l])):o>=a.length?(l=new Qa(r,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class yg extends Kt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class bg extends Kt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new P,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Sg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Mg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function wg(r,e,t){let n=new _o;const i=new pe,s=new pe,o=new Ze,a=new yg({depthPacking:fh}),l=new bg,c={},u=t.maxTextureSize,h={[fn]:Rt,[Rt]:fn,[cn]:cn},d=new Vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:Sg,fragmentShader:Mg}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new Bt;g.setAttribute("position",new Mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new Tt(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zl,this.render=function(x,w,E){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||x.length===0)return;const L=r.getRenderTarget(),b=r.getActiveCubeFace(),T=r.getActiveMipmapLevel(),R=r.state;R.setBlending(Mn),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);for(let U=0,Z=x.length;U<Z;U++){const N=x[U],I=N.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",N,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;i.copy(I.mapSize);const k=I.getFrameExtents();if(i.multiply(k),s.copy(I.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/k.x),i.x=s.x*k.x,I.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/k.y),i.y=s.y*k.y,I.mapSize.y=s.y)),I.map===null){const Q=this.type!==Ui?{minFilter:ut,magFilter:ut}:{};I.map=new Un(i.x,i.y,Q),I.map.texture.name=N.name+".shadowMap",I.camera.updateProjectionMatrix()}r.setRenderTarget(I.map),r.clear();const X=I.getViewportCount();for(let Q=0;Q<X;Q++){const G=I.getViewport(Q);o.set(s.x*G.x,s.y*G.y,s.x*G.z,s.y*G.w),R.viewport(o),I.updateMatrices(N,Q),n=I.getFrustum(),_(w,E,I.camera,N,this.type)}I.isPointLightShadow!==!0&&this.type===Ui&&v(I,E),I.needsUpdate=!1}f.needsUpdate=!1,r.setRenderTarget(L,b,T)};function v(x,w){const E=e.update(p);d.defines.VSM_SAMPLES!==x.blurSamples&&(d.defines.VSM_SAMPLES=x.blurSamples,m.defines.VSM_SAMPLES=x.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new Un(i.x,i.y)),d.uniforms.shadow_pass.value=x.map.texture,d.uniforms.resolution.value=x.mapSize,d.uniforms.radius.value=x.radius,r.setRenderTarget(x.mapPass),r.clear(),r.renderBufferDirect(w,null,E,d,p,null),m.uniforms.shadow_pass.value=x.mapPass.texture,m.uniforms.resolution.value=x.mapSize,m.uniforms.radius.value=x.radius,r.setRenderTarget(x.map),r.clear(),r.renderBufferDirect(w,null,E,m,p,null)}function y(x,w,E,L,b,T){let R=null;const U=E.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(U!==void 0)R=U;else if(R=E.isPointLight===!0?l:a,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const Z=R.uuid,N=w.uuid;let I=c[Z];I===void 0&&(I={},c[Z]=I);let k=I[N];k===void 0&&(k=R.clone(),I[N]=k),R=k}return R.visible=w.visible,R.wireframe=w.wireframe,T===Ui?R.side=w.shadowSide!==null?w.shadowSide:w.side:R.side=w.shadowSide!==null?w.shadowSide:h[w.side],R.alphaMap=w.alphaMap,R.alphaTest=w.alphaTest,R.map=w.map,R.clipShadows=w.clipShadows,R.clippingPlanes=w.clippingPlanes,R.clipIntersection=w.clipIntersection,R.displacementMap=w.displacementMap,R.displacementScale=w.displacementScale,R.displacementBias=w.displacementBias,R.wireframeLinewidth=w.wireframeLinewidth,R.linewidth=w.linewidth,E.isPointLight===!0&&R.isMeshDistanceMaterial===!0&&(R.referencePosition.setFromMatrixPosition(E.matrixWorld),R.nearDistance=L,R.farDistance=b),R}function _(x,w,E,L,b){if(x.visible===!1)return;if(x.layers.test(w.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&b===Ui)&&(!x.frustumCulled||n.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,x.matrixWorld);const U=e.update(x),Z=x.material;if(Array.isArray(Z)){const N=U.groups;for(let I=0,k=N.length;I<k;I++){const X=N[I],Q=Z[X.materialIndex];if(Q&&Q.visible){const G=y(x,Q,L,E.near,E.far,b);r.renderBufferDirect(E,null,U,G,x,X)}}}else if(Z.visible){const N=y(x,Z,L,E.near,E.far,b);r.renderBufferDirect(E,null,U,N,x,null)}}const R=x.children;for(let U=0,Z=R.length;U<Z;U++)_(R[U],w,E,L,b)}}function Tg(r,e,t){const n=t.isWebGL2;function i(){let D=!1;const q=new Ze;let ie=null;const _e=new Ze(0,0,0,0);return{setMask:function(ve){ie!==ve&&!D&&(r.colorMask(ve,ve,ve,ve),ie=ve)},setLocked:function(ve){D=ve},setClear:function(ve,Je,at,_t,Wt){Wt===!0&&(ve*=_t,Je*=_t,at*=_t),q.set(ve,Je,at,_t),_e.equals(q)===!1&&(r.clearColor(ve,Je,at,_t),_e.copy(q))},reset:function(){D=!1,ie=null,_e.set(-1,0,0,0)}}}function s(){let D=!1,q=null,ie=null,_e=null;return{setTest:function(ve){ve?K(2929):re(2929)},setMask:function(ve){q!==ve&&!D&&(r.depthMask(ve),q=ve)},setFunc:function(ve){if(ie!==ve){switch(ve){case Iu:r.depthFunc(512);break;case Du:r.depthFunc(519);break;case Nu:r.depthFunc(513);break;case Br:r.depthFunc(515);break;case Fu:r.depthFunc(514);break;case Ou:r.depthFunc(518);break;case zu:r.depthFunc(516);break;case Bu:r.depthFunc(517);break;default:r.depthFunc(515)}ie=ve}},setLocked:function(ve){D=ve},setClear:function(ve){_e!==ve&&(r.clearDepth(ve),_e=ve)},reset:function(){D=!1,q=null,ie=null,_e=null}}}function o(){let D=!1,q=null,ie=null,_e=null,ve=null,Je=null,at=null,_t=null,Wt=null;return{setTest:function(et){D||(et?K(2960):re(2960))},setMask:function(et){q!==et&&!D&&(r.stencilMask(et),q=et)},setFunc:function(et,Pt,qt){(ie!==et||_e!==Pt||ve!==qt)&&(r.stencilFunc(et,Pt,qt),ie=et,_e=Pt,ve=qt)},setOp:function(et,Pt,qt){(Je!==et||at!==Pt||_t!==qt)&&(r.stencilOp(et,Pt,qt),Je=et,at=Pt,_t=qt)},setLocked:function(et){D=et},setClear:function(et){Wt!==et&&(r.clearStencil(et),Wt=et)},reset:function(){D=!1,q=null,ie=null,_e=null,ve=null,Je=null,at=null,_t=null,Wt=null}}}const a=new i,l=new s,c=new o,u=new WeakMap,h=new WeakMap;let d={},m={},g=new WeakMap,p=[],f=null,v=!1,y=null,_=null,x=null,w=null,E=null,L=null,b=null,T=!1,R=null,U=null,Z=null,N=null,I=null;const k=r.getParameter(35661);let X=!1,Q=0;const G=r.getParameter(7938);G.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(G)[1]),X=Q>=1):G.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),X=Q>=2);let W=null,ee={};const de=r.getParameter(3088),F=r.getParameter(2978),$=new Ze().fromArray(de),ne=new Ze().fromArray(F);function C(D,q,ie){const _e=new Uint8Array(4),ve=r.createTexture();r.bindTexture(D,ve),r.texParameteri(D,10241,9728),r.texParameteri(D,10240,9728);for(let Je=0;Je<ie;Je++)r.texImage2D(q+Je,0,6408,1,1,0,6408,5121,_e);return ve}const te={};te[3553]=C(3553,3553,1),te[34067]=C(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),K(2929),l.setFunc(Br),ae(!1),Ae(Wo),K(2884),oe(Mn);function K(D){d[D]!==!0&&(r.enable(D),d[D]=!0)}function re(D){d[D]!==!1&&(r.disable(D),d[D]=!1)}function se(D,q){return m[D]!==q?(r.bindFramebuffer(D,q),m[D]=q,n&&(D===36009&&(m[36160]=q),D===36160&&(m[36009]=q)),!0):!1}function fe(D,q){let ie=p,_e=!1;if(D)if(ie=g.get(q),ie===void 0&&(ie=[],g.set(q,ie)),D.isWebGLMultipleRenderTargets){const ve=D.texture;if(ie.length!==ve.length||ie[0]!==36064){for(let Je=0,at=ve.length;Je<at;Je++)ie[Je]=36064+Je;ie.length=ve.length,_e=!0}}else ie[0]!==36064&&(ie[0]=36064,_e=!0);else ie[0]!==1029&&(ie[0]=1029,_e=!0);_e&&(t.isWebGL2?r.drawBuffers(ie):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ie))}function Se(D){return f!==D?(r.useProgram(D),f=D,!0):!1}const Y={[ri]:32774,[bu]:32778,[Su]:32779};if(n)Y[Zo]=32775,Y[Yo]=32776;else{const D=e.get("EXT_blend_minmax");D!==null&&(Y[Zo]=D.MIN_EXT,Y[Yo]=D.MAX_EXT)}const B={[Mu]:0,[wu]:1,[Tu]:768,[Yl]:770,[Pu]:776,[Lu]:774,[Eu]:772,[Au]:769,[Jl]:771,[Ru]:775,[Cu]:773};function oe(D,q,ie,_e,ve,Je,at,_t){if(D===Mn){v===!0&&(re(3042),v=!1);return}if(v===!1&&(K(3042),v=!0),D!==yu){if(D!==y||_t!==T){if((_!==ri||E!==ri)&&(r.blendEquation(32774),_=ri,E=ri),_t)switch(D){case ui:r.blendFuncSeparate(1,771,1,771);break;case qo:r.blendFunc(1,1);break;case Xo:r.blendFuncSeparate(0,769,0,1);break;case jo:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case ui:r.blendFuncSeparate(770,771,1,771);break;case qo:r.blendFunc(770,1);break;case Xo:r.blendFuncSeparate(0,769,0,1);break;case jo:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}x=null,w=null,L=null,b=null,y=D,T=_t}return}ve=ve||q,Je=Je||ie,at=at||_e,(q!==_||ve!==E)&&(r.blendEquationSeparate(Y[q],Y[ve]),_=q,E=ve),(ie!==x||_e!==w||Je!==L||at!==b)&&(r.blendFuncSeparate(B[ie],B[_e],B[Je],B[at]),x=ie,w=_e,L=Je,b=at),y=D,T=!1}function he(D,q){D.side===cn?re(2884):K(2884);let ie=D.side===Rt;q&&(ie=!ie),ae(ie),D.blending===ui&&D.transparent===!1?oe(Mn):oe(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),a.setMask(D.colorWrite);const _e=D.stencilWrite;c.setTest(_e),_e&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Re(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?K(32926):re(32926)}function ae(D){R!==D&&(D?r.frontFace(2304):r.frontFace(2305),R=D)}function Ae(D){D!==_u?(K(2884),D!==U&&(D===Wo?r.cullFace(1029):D===vu?r.cullFace(1028):r.cullFace(1032))):re(2884),U=D}function we(D){D!==Z&&(X&&r.lineWidth(D),Z=D)}function Re(D,q,ie){D?(K(32823),(N!==q||I!==ie)&&(r.polygonOffset(q,ie),N=q,I=ie)):re(32823)}function Ye(D){D?K(3089):re(3089)}function Xe(D){D===void 0&&(D=33984+k-1),W!==D&&(r.activeTexture(D),W=D)}function A(D,q,ie){ie===void 0&&(W===null?ie=33984+k-1:ie=W);let _e=ee[ie];_e===void 0&&(_e={type:void 0,texture:void 0},ee[ie]=_e),(_e.type!==D||_e.texture!==q)&&(W!==ie&&(r.activeTexture(ie),W=ie),r.bindTexture(D,q||te[D]),_e.type=D,_e.texture=q)}function S(){const D=ee[W];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function V(){try{r.compressedTexImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function le(){try{r.compressedTexImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ce(){try{r.texSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function me(){try{r.texSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Me(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ge(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{r.texStorage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ce(){try{r.texStorage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ye(){try{r.texImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pe(){try{r.texImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Le(D){$.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),$.copy(D))}function Te(D){ne.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),ne.copy(D))}function Ge(D,q){let ie=h.get(q);ie===void 0&&(ie=new WeakMap,h.set(q,ie));let _e=ie.get(D);_e===void 0&&(_e=r.getUniformBlockIndex(q,D.name),ie.set(D,_e))}function Ke(D,q){const _e=h.get(q).get(D);u.get(q)!==_e&&(r.uniformBlockBinding(q,_e,D.__bindingPointIndex),u.set(q,_e))}function ot(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},W=null,ee={},m={},g=new WeakMap,p=[],f=null,v=!1,y=null,_=null,x=null,w=null,E=null,L=null,b=null,T=!1,R=null,U=null,Z=null,N=null,I=null,$.set(0,0,r.canvas.width,r.canvas.height),ne.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:K,disable:re,bindFramebuffer:se,drawBuffers:fe,useProgram:Se,setBlending:oe,setMaterial:he,setFlipSided:ae,setCullFace:Ae,setLineWidth:we,setPolygonOffset:Re,setScissorTest:Ye,activeTexture:Xe,bindTexture:A,unbindTexture:S,compressedTexImage2D:V,compressedTexImage3D:le,texImage2D:ye,texImage3D:Pe,updateUBOMapping:Ge,uniformBlockBinding:Ke,texStorage2D:J,texStorage3D:Ce,texSubImage2D:ce,texSubImage3D:me,compressedTexSubImage2D:Me,compressedTexSubImage3D:ge,scissor:Le,viewport:Te,reset:ot}}function Ag(r,e,t,n,i,s,o){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let p;const f=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(A,S){return v?new OffscreenCanvas(A,S):Ki("canvas")}function _(A,S,V,le){let ce=1;if((A.width>le||A.height>le)&&(ce=le/Math.max(A.width,A.height)),ce<1||S===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const me=S?rc:Math.floor,Me=me(ce*A.width),ge=me(ce*A.height);p===void 0&&(p=y(Me,ge));const J=V?y(Me,ge):p;return J.width=Me,J.height=ge,J.getContext("2d").drawImage(A,0,0,Me,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+Me+"x"+ge+")."),J}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function x(A){return qr(A.width)&&qr(A.height)}function w(A){return a?!1:A.wrapS!==Nt||A.wrapT!==Nt||A.minFilter!==ut&&A.minFilter!==wt}function E(A,S){return A.generateMipmaps&&S&&A.minFilter!==ut&&A.minFilter!==wt}function L(A){r.generateMipmap(A)}function b(A,S,V,le,ce=!1){if(a===!1)return S;if(A!==null){if(r[A]!==void 0)return r[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let me=S;return S===6403&&(V===5126&&(me=33326),V===5131&&(me=33325),V===5121&&(me=33321)),S===33319&&(V===5126&&(me=33328),V===5131&&(me=33327),V===5121&&(me=33323)),S===6408&&(V===5126&&(me=34836),V===5131&&(me=34842),V===5121&&(me=le===We&&ce===!1?35907:32856),V===32819&&(me=32854),V===32820&&(me=32855)),(me===33325||me===33326||me===33327||me===33328||me===34842||me===34836)&&e.get("EXT_color_buffer_float"),me}function T(A,S,V){return E(A,V)===!0||A.isFramebufferTexture&&A.minFilter!==ut&&A.minFilter!==wt?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function R(A){return A===ut||A===Vr||A===Is?9728:9729}function U(A){const S=A.target;S.removeEventListener("dispose",U),N(S),S.isVideoTexture&&g.delete(S)}function Z(A){const S=A.target;S.removeEventListener("dispose",Z),k(S)}function N(A){const S=n.get(A);if(S.__webglInit===void 0)return;const V=A.source,le=f.get(V);if(le){const ce=le[S.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&I(A),Object.keys(le).length===0&&f.delete(V)}n.remove(A)}function I(A){const S=n.get(A);r.deleteTexture(S.__webglTexture);const V=A.source,le=f.get(V);delete le[S.__cacheKey],o.memory.textures--}function k(A){const S=A.texture,V=n.get(A),le=n.get(S);if(le.__webglTexture!==void 0&&(r.deleteTexture(le.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++)r.deleteFramebuffer(V.__webglFramebuffer[ce]),V.__webglDepthbuffer&&r.deleteRenderbuffer(V.__webglDepthbuffer[ce]);else{if(r.deleteFramebuffer(V.__webglFramebuffer),V.__webglDepthbuffer&&r.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&r.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let ce=0;ce<V.__webglColorRenderbuffer.length;ce++)V.__webglColorRenderbuffer[ce]&&r.deleteRenderbuffer(V.__webglColorRenderbuffer[ce]);V.__webglDepthRenderbuffer&&r.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let ce=0,me=S.length;ce<me;ce++){const Me=n.get(S[ce]);Me.__webglTexture&&(r.deleteTexture(Me.__webglTexture),o.memory.textures--),n.remove(S[ce])}n.remove(S),n.remove(A)}let X=0;function Q(){X=0}function G(){const A=X;return A>=l&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+l),X+=1,A}function W(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.encoding),S.join()}function ee(A,S){const V=n.get(A);if(A.isVideoTexture&&Ye(A),A.isRenderTargetTexture===!1&&A.version>0&&V.__version!==A.version){const le=A.image;if(le===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{re(V,A,S);return}}t.bindTexture(3553,V.__webglTexture,33984+S)}function de(A,S){const V=n.get(A);if(A.version>0&&V.__version!==A.version){re(V,A,S);return}t.bindTexture(35866,V.__webglTexture,33984+S)}function F(A,S){const V=n.get(A);if(A.version>0&&V.__version!==A.version){re(V,A,S);return}t.bindTexture(32879,V.__webglTexture,33984+S)}function $(A,S){const V=n.get(A);if(A.version>0&&V.__version!==A.version){se(V,A,S);return}t.bindTexture(34067,V.__webglTexture,33984+S)}const ne={[_i]:10497,[Nt]:33071,[Os]:33648},C={[ut]:9728,[Vr]:9984,[Is]:9986,[wt]:9729,[Ql]:9985,[zn]:9987};function te(A,S,V){if(V?(r.texParameteri(A,10242,ne[S.wrapS]),r.texParameteri(A,10243,ne[S.wrapT]),(A===32879||A===35866)&&r.texParameteri(A,32882,ne[S.wrapR]),r.texParameteri(A,10240,C[S.magFilter]),r.texParameteri(A,10241,C[S.minFilter])):(r.texParameteri(A,10242,33071),r.texParameteri(A,10243,33071),(A===32879||A===35866)&&r.texParameteri(A,32882,33071),(S.wrapS!==Nt||S.wrapT!==Nt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(A,10240,R(S.magFilter)),r.texParameteri(A,10241,R(S.minFilter)),S.minFilter!==ut&&S.minFilter!==wt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const le=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===ut||S.minFilter!==Is&&S.minFilter!==zn||S.type===bn&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===ji&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(r.texParameterf(A,le.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function K(A,S){let V=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",U));const le=S.source;let ce=f.get(le);ce===void 0&&(ce={},f.set(le,ce));const me=W(S);if(me!==A.__cacheKey){ce[me]===void 0&&(ce[me]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,V=!0),ce[me].usedTimes++;const Me=ce[A.__cacheKey];Me!==void 0&&(ce[A.__cacheKey].usedTimes--,Me.usedTimes===0&&I(S)),A.__cacheKey=me,A.__webglTexture=ce[me].texture}return V}function re(A,S,V){let le=3553;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(le=35866),S.isData3DTexture&&(le=32879);const ce=K(A,S),me=S.source;t.bindTexture(le,A.__webglTexture,33984+V);const Me=n.get(me);if(me.version!==Me.__version||ce===!0){t.activeTexture(33984+V),r.pixelStorei(37440,S.flipY),r.pixelStorei(37441,S.premultiplyAlpha),r.pixelStorei(3317,S.unpackAlignment),r.pixelStorei(37443,0);const ge=w(S)&&x(S.image)===!1;let J=_(S.image,ge,!1,u);J=Xe(S,J);const Ce=x(J)||a,ye=s.convert(S.format,S.encoding);let Pe=s.convert(S.type),Le=b(S.internalFormat,ye,Pe,S.encoding,S.isVideoTexture);te(le,S,Ce);let Te;const Ge=S.mipmaps,Ke=a&&S.isVideoTexture!==!0,ot=Me.__version===void 0||ce===!0,D=T(S,J,Ce);if(S.isDepthTexture)Le=6402,a?S.type===bn?Le=36012:S.type===Dn?Le=33190:S.type===hi?Le=35056:Le=33189:S.type===bn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===On&&Le===6402&&S.type!==ec&&S.type!==Dn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Dn,Pe=s.convert(S.type)),S.format===vi&&Le===6402&&(Le=34041,S.type!==hi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=hi,Pe=s.convert(S.type))),ot&&(Ke?t.texStorage2D(3553,1,Le,J.width,J.height):t.texImage2D(3553,0,Le,J.width,J.height,0,ye,Pe,null));else if(S.isDataTexture)if(Ge.length>0&&Ce){Ke&&ot&&t.texStorage2D(3553,D,Le,Ge[0].width,Ge[0].height);for(let q=0,ie=Ge.length;q<ie;q++)Te=Ge[q],Ke?t.texSubImage2D(3553,q,0,0,Te.width,Te.height,ye,Pe,Te.data):t.texImage2D(3553,q,Le,Te.width,Te.height,0,ye,Pe,Te.data);S.generateMipmaps=!1}else Ke?(ot&&t.texStorage2D(3553,D,Le,J.width,J.height),t.texSubImage2D(3553,0,0,0,J.width,J.height,ye,Pe,J.data)):t.texImage2D(3553,0,Le,J.width,J.height,0,ye,Pe,J.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ke&&ot&&t.texStorage3D(35866,D,Le,Ge[0].width,Ge[0].height,J.depth);for(let q=0,ie=Ge.length;q<ie;q++)Te=Ge[q],S.format!==Ft?ye!==null?Ke?t.compressedTexSubImage3D(35866,q,0,0,0,Te.width,Te.height,J.depth,ye,Te.data,0,0):t.compressedTexImage3D(35866,q,Le,Te.width,Te.height,J.depth,0,Te.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?t.texSubImage3D(35866,q,0,0,0,Te.width,Te.height,J.depth,ye,Pe,Te.data):t.texImage3D(35866,q,Le,Te.width,Te.height,J.depth,0,ye,Pe,Te.data)}else{Ke&&ot&&t.texStorage2D(3553,D,Le,Ge[0].width,Ge[0].height);for(let q=0,ie=Ge.length;q<ie;q++)Te=Ge[q],S.format!==Ft?ye!==null?Ke?t.compressedTexSubImage2D(3553,q,0,0,Te.width,Te.height,ye,Te.data):t.compressedTexImage2D(3553,q,Le,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?t.texSubImage2D(3553,q,0,0,Te.width,Te.height,ye,Pe,Te.data):t.texImage2D(3553,q,Le,Te.width,Te.height,0,ye,Pe,Te.data)}else if(S.isDataArrayTexture)Ke?(ot&&t.texStorage3D(35866,D,Le,J.width,J.height,J.depth),t.texSubImage3D(35866,0,0,0,0,J.width,J.height,J.depth,ye,Pe,J.data)):t.texImage3D(35866,0,Le,J.width,J.height,J.depth,0,ye,Pe,J.data);else if(S.isData3DTexture)Ke?(ot&&t.texStorage3D(32879,D,Le,J.width,J.height,J.depth),t.texSubImage3D(32879,0,0,0,0,J.width,J.height,J.depth,ye,Pe,J.data)):t.texImage3D(32879,0,Le,J.width,J.height,J.depth,0,ye,Pe,J.data);else if(S.isFramebufferTexture){if(ot)if(Ke)t.texStorage2D(3553,D,Le,J.width,J.height);else{let q=J.width,ie=J.height;for(let _e=0;_e<D;_e++)t.texImage2D(3553,_e,Le,q,ie,0,ye,Pe,null),q>>=1,ie>>=1}}else if(Ge.length>0&&Ce){Ke&&ot&&t.texStorage2D(3553,D,Le,Ge[0].width,Ge[0].height);for(let q=0,ie=Ge.length;q<ie;q++)Te=Ge[q],Ke?t.texSubImage2D(3553,q,0,0,ye,Pe,Te):t.texImage2D(3553,q,Le,ye,Pe,Te);S.generateMipmaps=!1}else Ke?(ot&&t.texStorage2D(3553,D,Le,J.width,J.height),t.texSubImage2D(3553,0,0,0,ye,Pe,J)):t.texImage2D(3553,0,Le,ye,Pe,J);E(S,Ce)&&L(le),Me.__version=me.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function se(A,S,V){if(S.image.length!==6)return;const le=K(A,S),ce=S.source;t.bindTexture(34067,A.__webglTexture,33984+V);const me=n.get(ce);if(ce.version!==me.__version||le===!0){t.activeTexture(33984+V),r.pixelStorei(37440,S.flipY),r.pixelStorei(37441,S.premultiplyAlpha),r.pixelStorei(3317,S.unpackAlignment),r.pixelStorei(37443,0);const Me=S.isCompressedTexture||S.image[0].isCompressedTexture,ge=S.image[0]&&S.image[0].isDataTexture,J=[];for(let q=0;q<6;q++)!Me&&!ge?J[q]=_(S.image[q],!1,!0,c):J[q]=ge?S.image[q].image:S.image[q],J[q]=Xe(S,J[q]);const Ce=J[0],ye=x(Ce)||a,Pe=s.convert(S.format,S.encoding),Le=s.convert(S.type),Te=b(S.internalFormat,Pe,Le,S.encoding),Ge=a&&S.isVideoTexture!==!0,Ke=me.__version===void 0||le===!0;let ot=T(S,Ce,ye);te(34067,S,ye);let D;if(Me){Ge&&Ke&&t.texStorage2D(34067,ot,Te,Ce.width,Ce.height);for(let q=0;q<6;q++){D=J[q].mipmaps;for(let ie=0;ie<D.length;ie++){const _e=D[ie];S.format!==Ft?Pe!==null?Ge?t.compressedTexSubImage2D(34069+q,ie,0,0,_e.width,_e.height,Pe,_e.data):t.compressedTexImage2D(34069+q,ie,Te,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?t.texSubImage2D(34069+q,ie,0,0,_e.width,_e.height,Pe,Le,_e.data):t.texImage2D(34069+q,ie,Te,_e.width,_e.height,0,Pe,Le,_e.data)}}}else{D=S.mipmaps,Ge&&Ke&&(D.length>0&&ot++,t.texStorage2D(34067,ot,Te,J[0].width,J[0].height));for(let q=0;q<6;q++)if(ge){Ge?t.texSubImage2D(34069+q,0,0,0,J[q].width,J[q].height,Pe,Le,J[q].data):t.texImage2D(34069+q,0,Te,J[q].width,J[q].height,0,Pe,Le,J[q].data);for(let ie=0;ie<D.length;ie++){const ve=D[ie].image[q].image;Ge?t.texSubImage2D(34069+q,ie+1,0,0,ve.width,ve.height,Pe,Le,ve.data):t.texImage2D(34069+q,ie+1,Te,ve.width,ve.height,0,Pe,Le,ve.data)}}else{Ge?t.texSubImage2D(34069+q,0,0,0,Pe,Le,J[q]):t.texImage2D(34069+q,0,Te,Pe,Le,J[q]);for(let ie=0;ie<D.length;ie++){const _e=D[ie];Ge?t.texSubImage2D(34069+q,ie+1,0,0,Pe,Le,_e.image[q]):t.texImage2D(34069+q,ie+1,Te,Pe,Le,_e.image[q])}}}E(S,ye)&&L(34067),me.__version=ce.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function fe(A,S,V,le,ce){const me=s.convert(V.format,V.encoding),Me=s.convert(V.type),ge=b(V.internalFormat,me,Me,V.encoding);n.get(S).__hasExternalTextures||(ce===32879||ce===35866?t.texImage3D(ce,0,ge,S.width,S.height,S.depth,0,me,Me,null):t.texImage2D(ce,0,ge,S.width,S.height,0,me,Me,null)),t.bindFramebuffer(36160,A),Re(S)?d.framebufferTexture2DMultisampleEXT(36160,le,ce,n.get(V).__webglTexture,0,we(S)):(ce===3553||ce>=34069&&ce<=34074)&&r.framebufferTexture2D(36160,le,ce,n.get(V).__webglTexture,0),t.bindFramebuffer(36160,null)}function Se(A,S,V){if(r.bindRenderbuffer(36161,A),S.depthBuffer&&!S.stencilBuffer){let le=33189;if(V||Re(S)){const ce=S.depthTexture;ce&&ce.isDepthTexture&&(ce.type===bn?le=36012:ce.type===Dn&&(le=33190));const me=we(S);Re(S)?d.renderbufferStorageMultisampleEXT(36161,me,le,S.width,S.height):r.renderbufferStorageMultisample(36161,me,le,S.width,S.height)}else r.renderbufferStorage(36161,le,S.width,S.height);r.framebufferRenderbuffer(36160,36096,36161,A)}else if(S.depthBuffer&&S.stencilBuffer){const le=we(S);V&&Re(S)===!1?r.renderbufferStorageMultisample(36161,le,35056,S.width,S.height):Re(S)?d.renderbufferStorageMultisampleEXT(36161,le,35056,S.width,S.height):r.renderbufferStorage(36161,34041,S.width,S.height),r.framebufferRenderbuffer(36160,33306,36161,A)}else{const le=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ce=0;ce<le.length;ce++){const me=le[ce],Me=s.convert(me.format,me.encoding),ge=s.convert(me.type),J=b(me.internalFormat,Me,ge,me.encoding),Ce=we(S);V&&Re(S)===!1?r.renderbufferStorageMultisample(36161,Ce,J,S.width,S.height):Re(S)?d.renderbufferStorageMultisampleEXT(36161,Ce,J,S.width,S.height):r.renderbufferStorage(36161,J,S.width,S.height)}}r.bindRenderbuffer(36161,null)}function Y(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),ee(S.depthTexture,0);const le=n.get(S.depthTexture).__webglTexture,ce=we(S);if(S.depthTexture.format===On)Re(S)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,le,0,ce):r.framebufferTexture2D(36160,36096,3553,le,0);else if(S.depthTexture.format===vi)Re(S)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,le,0,ce):r.framebufferTexture2D(36160,33306,3553,le,0);else throw new Error("Unknown depthTexture format")}function B(A){const S=n.get(A),V=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Y(S.__webglFramebuffer,A)}else if(V){S.__webglDepthbuffer=[];for(let le=0;le<6;le++)t.bindFramebuffer(36160,S.__webglFramebuffer[le]),S.__webglDepthbuffer[le]=r.createRenderbuffer(),Se(S.__webglDepthbuffer[le],A,!1)}else t.bindFramebuffer(36160,S.__webglFramebuffer),S.__webglDepthbuffer=r.createRenderbuffer(),Se(S.__webglDepthbuffer,A,!1);t.bindFramebuffer(36160,null)}function oe(A,S,V){const le=n.get(A);S!==void 0&&fe(le.__webglFramebuffer,A,A.texture,36064,3553),V!==void 0&&B(A)}function he(A){const S=A.texture,V=n.get(A),le=n.get(S);A.addEventListener("dispose",Z),A.isWebGLMultipleRenderTargets!==!0&&(le.__webglTexture===void 0&&(le.__webglTexture=r.createTexture()),le.__version=S.version,o.memory.textures++);const ce=A.isWebGLCubeRenderTarget===!0,me=A.isWebGLMultipleRenderTargets===!0,Me=x(A)||a;if(ce){V.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)V.__webglFramebuffer[ge]=r.createFramebuffer()}else{if(V.__webglFramebuffer=r.createFramebuffer(),me)if(i.drawBuffers){const ge=A.texture;for(let J=0,Ce=ge.length;J<Ce;J++){const ye=n.get(ge[J]);ye.__webglTexture===void 0&&(ye.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&Re(A)===!1){const ge=me?S:[S];V.__webglMultisampledFramebuffer=r.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,V.__webglMultisampledFramebuffer);for(let J=0;J<ge.length;J++){const Ce=ge[J];V.__webglColorRenderbuffer[J]=r.createRenderbuffer(),r.bindRenderbuffer(36161,V.__webglColorRenderbuffer[J]);const ye=s.convert(Ce.format,Ce.encoding),Pe=s.convert(Ce.type),Le=b(Ce.internalFormat,ye,Pe,Ce.encoding,A.isXRRenderTarget===!0),Te=we(A);r.renderbufferStorageMultisample(36161,Te,Le,A.width,A.height),r.framebufferRenderbuffer(36160,36064+J,36161,V.__webglColorRenderbuffer[J])}r.bindRenderbuffer(36161,null),A.depthBuffer&&(V.__webglDepthRenderbuffer=r.createRenderbuffer(),Se(V.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(36160,null)}}if(ce){t.bindTexture(34067,le.__webglTexture),te(34067,S,Me);for(let ge=0;ge<6;ge++)fe(V.__webglFramebuffer[ge],A,S,36064,34069+ge);E(S,Me)&&L(34067),t.unbindTexture()}else if(me){const ge=A.texture;for(let J=0,Ce=ge.length;J<Ce;J++){const ye=ge[J],Pe=n.get(ye);t.bindTexture(3553,Pe.__webglTexture),te(3553,ye,Me),fe(V.__webglFramebuffer,A,ye,36064+J,3553),E(ye,Me)&&L(3553)}t.unbindTexture()}else{let ge=3553;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?ge=A.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ge,le.__webglTexture),te(ge,S,Me),fe(V.__webglFramebuffer,A,S,36064,ge),E(S,Me)&&L(ge),t.unbindTexture()}A.depthBuffer&&B(A)}function ae(A){const S=x(A)||a,V=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let le=0,ce=V.length;le<ce;le++){const me=V[le];if(E(me,S)){const Me=A.isWebGLCubeRenderTarget?34067:3553,ge=n.get(me).__webglTexture;t.bindTexture(Me,ge),L(Me),t.unbindTexture()}}}function Ae(A){if(a&&A.samples>0&&Re(A)===!1){const S=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],V=A.width,le=A.height;let ce=16384;const me=[],Me=A.stencilBuffer?33306:36096,ge=n.get(A),J=A.isWebGLMultipleRenderTargets===!0;if(J)for(let Ce=0;Ce<S.length;Ce++)t.bindFramebuffer(36160,ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+Ce,36161,null),t.bindFramebuffer(36160,ge.__webglFramebuffer),r.framebufferTexture2D(36009,36064+Ce,3553,null,0);t.bindFramebuffer(36008,ge.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,ge.__webglFramebuffer);for(let Ce=0;Ce<S.length;Ce++){me.push(36064+Ce),A.depthBuffer&&me.push(Me);const ye=ge.__ignoreDepthValues!==void 0?ge.__ignoreDepthValues:!1;if(ye===!1&&(A.depthBuffer&&(ce|=256),A.stencilBuffer&&(ce|=1024)),J&&r.framebufferRenderbuffer(36008,36064,36161,ge.__webglColorRenderbuffer[Ce]),ye===!0&&(r.invalidateFramebuffer(36008,[Me]),r.invalidateFramebuffer(36009,[Me])),J){const Pe=n.get(S[Ce]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,Pe,0)}r.blitFramebuffer(0,0,V,le,0,0,V,le,ce,9728),m&&r.invalidateFramebuffer(36008,me)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),J)for(let Ce=0;Ce<S.length;Ce++){t.bindFramebuffer(36160,ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+Ce,36161,ge.__webglColorRenderbuffer[Ce]);const ye=n.get(S[Ce]).__webglTexture;t.bindFramebuffer(36160,ge.__webglFramebuffer),r.framebufferTexture2D(36009,36064+Ce,3553,ye,0)}t.bindFramebuffer(36009,ge.__webglMultisampledFramebuffer)}}function we(A){return Math.min(h,A.samples)}function Re(A){const S=n.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ye(A){const S=o.render.frame;g.get(A)!==S&&(g.set(A,S),A.update())}function Xe(A,S){const V=A.encoding,le=A.format,ce=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Wr||V!==kn&&(V===We?a===!1?e.has("EXT_sRGB")===!0&&le===Ft?(A.format=Wr,A.minFilter=wt,A.generateMipmaps=!1):S=ac.sRGBToLinear(S):(le!==Ft||ce!==Bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",V)),S}this.allocateTextureUnit=G,this.resetTextureUnits=Q,this.setTexture2D=ee,this.setTexture2DArray=de,this.setTexture3D=F,this.setTextureCube=$,this.rebindTextures=oe,this.setupRenderTarget=he,this.updateRenderTargetMipmap=ae,this.updateMultisampleRenderTarget=Ae,this.setupDepthRenderbuffer=B,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=Re}function Eg(r,e,t){const n=t.isWebGL2;function i(s,o=null){let a;if(s===Bn)return 5121;if(s===Yu)return 32819;if(s===Ju)return 32820;if(s===Xu)return 5120;if(s===ju)return 5122;if(s===ec)return 5123;if(s===Zu)return 5124;if(s===Dn)return 5125;if(s===bn)return 5126;if(s===ji)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Ku)return 6406;if(s===Ft)return 6408;if(s===$u)return 6409;if(s===Qu)return 6410;if(s===On)return 6402;if(s===vi)return 34041;if(s===Wr)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===eh)return 6403;if(s===th)return 36244;if(s===nh)return 33319;if(s===ih)return 33320;if(s===sh)return 36249;if(s===$s||s===Qs||s===er||s===tr)if(o===We)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===$s)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Qs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===er)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===tr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===$s)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Qs)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===er)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===tr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Jo||s===Ko||s===$o||s===Qo)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Jo)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ko)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===$o)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Qo)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===rh)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===ea||s===ta)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===ea)return o===We?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===ta)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===na||s===ia||s===sa||s===ra||s===oa||s===aa||s===la||s===ca||s===ua||s===ha||s===da||s===fa||s===pa||s===ma)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===na)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ia)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===sa)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ra)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===oa)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===aa)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===la)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ca)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ua)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ha)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===da)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===fa)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===pa)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ma)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===nr)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===nr)return o===We?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===oh||s===ga||s===_a||s===va)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===nr)return a.COMPRESSED_RED_RGTC1_EXT;if(s===ga)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===_a)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===va)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===hi?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class Cg extends ft{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Nn extends Qe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Lg={type:"move"};class Er{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Nn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Nn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Nn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const p of e.hand.values()){const f=t.getJointPose(p,n),v=this._getHandJoint(c,p);f!==null&&(v.matrix.fromArray(f.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.jointRadius=f.radius),v.visible=f!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Lg)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Nn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Rg extends pt{constructor(e,t,n,i,s,o,a,l,c,u){if(u=u!==void 0?u:On,u!==On&&u!==vi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===On&&(n=Dn),n===void 0&&u===vi&&(n=hi),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:ut,this.minFilter=l!==void 0?l:ut,this.flipY=!1,this.generateMipmaps=!1}}class Pg extends Wn{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,m=null,g=null;const p=t.getContextAttributes();let f=null,v=null;const y=[],_=[],x=new Set,w=new Map,E=new ft;E.layers.enable(1),E.viewport=new Ze;const L=new ft;L.layers.enable(2),L.viewport=new Ze;const b=[E,L],T=new Cg;T.layers.enable(1),T.layers.enable(2);let R=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let $=y[F];return $===void 0&&($=new Er,y[F]=$),$.getTargetRaySpace()},this.getControllerGrip=function(F){let $=y[F];return $===void 0&&($=new Er,y[F]=$),$.getGripSpace()},this.getHand=function(F){let $=y[F];return $===void 0&&($=new Er,y[F]=$),$.getHandSpace()};function Z(F){const $=_.indexOf(F.inputSource);if($===-1)return;const ne=y[$];ne!==void 0&&ne.dispatchEvent({type:F.type,data:F.inputSource})}function N(){i.removeEventListener("select",Z),i.removeEventListener("selectstart",Z),i.removeEventListener("selectend",Z),i.removeEventListener("squeeze",Z),i.removeEventListener("squeezestart",Z),i.removeEventListener("squeezeend",Z),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",I);for(let F=0;F<y.length;F++){const $=_[F];$!==null&&(_[F]=null,y[F].disconnect($))}R=null,U=null,e.setRenderTarget(f),m=null,d=null,h=null,i=null,v=null,de.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){s=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){a=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(F){c=F},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(F){if(i=F,i!==null){if(f=e.getRenderTarget(),i.addEventListener("select",Z),i.addEventListener("selectstart",Z),i.addEventListener("selectend",Z),i.addEventListener("squeeze",Z),i.addEventListener("squeezestart",Z),i.addEventListener("squeezeend",Z),i.addEventListener("end",N),i.addEventListener("inputsourceschange",I),p.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const $={antialias:i.renderState.layers===void 0?p.antialias:!0,alpha:p.alpha,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(i,t,$),i.updateRenderState({baseLayer:m}),v=new Un(m.framebufferWidth,m.framebufferHeight,{format:Ft,type:Bn,encoding:e.outputEncoding,stencilBuffer:p.stencil})}else{let $=null,ne=null,C=null;p.depth&&(C=p.stencil?35056:33190,$=p.stencil?vi:On,ne=p.stencil?hi:Dn);const te={colorFormat:32856,depthFormat:C,scaleFactor:s};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(te),i.updateRenderState({layers:[d]}),v=new Un(d.textureWidth,d.textureHeight,{format:Ft,type:Bn,depthTexture:new Rg(d.textureWidth,d.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:p.stencil,encoding:e.outputEncoding,samples:p.antialias?4:0});const K=e.properties.get(v);K.__ignoreDepthValues=d.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),de.setContext(i),de.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function I(F){for(let $=0;$<F.removed.length;$++){const ne=F.removed[$],C=_.indexOf(ne);C>=0&&(_[C]=null,y[C].disconnect(ne))}for(let $=0;$<F.added.length;$++){const ne=F.added[$];let C=_.indexOf(ne);if(C===-1){for(let K=0;K<y.length;K++)if(K>=_.length){_.push(ne),C=K;break}else if(_[K]===null){_[K]=ne,C=K;break}if(C===-1)break}const te=y[C];te&&te.connect(ne)}}const k=new P,X=new P;function Q(F,$,ne){k.setFromMatrixPosition($.matrixWorld),X.setFromMatrixPosition(ne.matrixWorld);const C=k.distanceTo(X),te=$.projectionMatrix.elements,K=ne.projectionMatrix.elements,re=te[14]/(te[10]-1),se=te[14]/(te[10]+1),fe=(te[9]+1)/te[5],Se=(te[9]-1)/te[5],Y=(te[8]-1)/te[0],B=(K[8]+1)/K[0],oe=re*Y,he=re*B,ae=C/(-Y+B),Ae=ae*-Y;$.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(Ae),F.translateZ(ae),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert();const we=re+ae,Re=se+ae,Ye=oe-Ae,Xe=he+(C-Ae),A=fe*se/Re*we,S=Se*se/Re*we;F.projectionMatrix.makePerspective(Ye,Xe,A,S,we,Re)}function G(F,$){$===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices($.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(i===null)return;T.near=L.near=E.near=F.near,T.far=L.far=E.far=F.far,(R!==T.near||U!==T.far)&&(i.updateRenderState({depthNear:T.near,depthFar:T.far}),R=T.near,U=T.far);const $=F.parent,ne=T.cameras;G(T,$);for(let te=0;te<ne.length;te++)G(ne[te],$);T.matrixWorld.decompose(T.position,T.quaternion,T.scale),F.matrix.copy(T.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale);const C=F.children;for(let te=0,K=C.length;te<K;te++)C[te].updateMatrixWorld(!0);ne.length===2?Q(T,E,L):T.projectionMatrix.copy(E.projectionMatrix)},this.getCamera=function(){return T},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(F){l=F,d!==null&&(d.fixedFoveation=F),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=F)},this.getPlanes=function(){return x};let W=null;function ee(F,$){if(u=$.getViewerPose(c||o),g=$,u!==null){const ne=u.views;m!==null&&(e.setRenderTargetFramebuffer(v,m.framebuffer),e.setRenderTarget(v));let C=!1;ne.length!==T.cameras.length&&(T.cameras.length=0,C=!0);for(let te=0;te<ne.length;te++){const K=ne[te];let re=null;if(m!==null)re=m.getViewport(K);else{const fe=h.getViewSubImage(d,K);re=fe.viewport,te===0&&(e.setRenderTargetTextures(v,fe.colorTexture,d.ignoreDepthValues?void 0:fe.depthStencilTexture),e.setRenderTarget(v))}let se=b[te];se===void 0&&(se=new ft,se.layers.enable(te),se.viewport=new Ze,b[te]=se),se.matrix.fromArray(K.transform.matrix),se.projectionMatrix.fromArray(K.projectionMatrix),se.viewport.set(re.x,re.y,re.width,re.height),te===0&&T.matrix.copy(se.matrix),C===!0&&T.cameras.push(se)}}for(let ne=0;ne<y.length;ne++){const C=_[ne],te=y[ne];C!==null&&te!==void 0&&te.update(C,$,c||o)}if(W&&W(F,$),$.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:$.detectedPlanes});let ne=null;for(const C of x)$.detectedPlanes.has(C)||(ne===null&&(ne=[]),ne.push(C));if(ne!==null)for(const C of ne)x.delete(C),w.delete(C),n.dispatchEvent({type:"planeremoved",data:C});for(const C of $.detectedPlanes)if(!x.has(C))x.add(C),w.set(C,$.lastChangedTime),n.dispatchEvent({type:"planeadded",data:C});else{const te=w.get(C);C.lastChangedTime>te&&(w.set(C,C.lastChangedTime),n.dispatchEvent({type:"planechanged",data:C}))}}g=null}const de=new gc;de.setAnimationLoop(ee),this.setAnimationLoop=function(F){W=F},this.dispose=function(){}}}function Ig(r,e){function t(p,f){f.color.getRGB(p.fogColor.value,fc(r)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function n(p,f,v,y,_){f.isMeshBasicMaterial||f.isMeshLambertMaterial?i(p,f):f.isMeshToonMaterial?(i(p,f),u(p,f)):f.isMeshPhongMaterial?(i(p,f),c(p,f)):f.isMeshStandardMaterial?(i(p,f),h(p,f),f.isMeshPhysicalMaterial&&d(p,f,_)):f.isMeshMatcapMaterial?(i(p,f),m(p,f)):f.isMeshDepthMaterial?i(p,f):f.isMeshDistanceMaterial?(i(p,f),g(p,f)):f.isMeshNormalMaterial?i(p,f):f.isLineBasicMaterial?(s(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?a(p,f,v,y):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function i(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.bumpMap&&(p.bumpMap.value=f.bumpMap,p.bumpScale.value=f.bumpScale,f.side===Rt&&(p.bumpScale.value*=-1)),f.displacementMap&&(p.displacementMap.value=f.displacementMap,p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap),f.normalMap&&(p.normalMap.value=f.normalMap,p.normalScale.value.copy(f.normalScale),f.side===Rt&&p.normalScale.value.negate()),f.specularMap&&(p.specularMap.value=f.specularMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const v=e.get(f).envMap;if(v&&(p.envMap.value=v,p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const x=r.useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*x}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity);let y;f.map?y=f.map:f.specularMap?y=f.specularMap:f.displacementMap?y=f.displacementMap:f.normalMap?y=f.normalMap:f.bumpMap?y=f.bumpMap:f.roughnessMap?y=f.roughnessMap:f.metalnessMap?y=f.metalnessMap:f.alphaMap?y=f.alphaMap:f.emissiveMap?y=f.emissiveMap:f.clearcoatMap?y=f.clearcoatMap:f.clearcoatNormalMap?y=f.clearcoatNormalMap:f.clearcoatRoughnessMap?y=f.clearcoatRoughnessMap:f.iridescenceMap?y=f.iridescenceMap:f.iridescenceThicknessMap?y=f.iridescenceThicknessMap:f.specularIntensityMap?y=f.specularIntensityMap:f.specularColorMap?y=f.specularColorMap:f.transmissionMap?y=f.transmissionMap:f.thicknessMap?y=f.thicknessMap:f.sheenColorMap?y=f.sheenColorMap:f.sheenRoughnessMap&&(y=f.sheenRoughnessMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uvTransform.value.copy(y.matrix));let _;f.aoMap?_=f.aoMap:f.lightMap&&(_=f.lightMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uv2Transform.value.copy(_.matrix))}function s(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function a(p,f,v,y){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*v,p.scale.value=y*.5,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let _;f.map?_=f.map:f.alphaMap&&(_=f.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let v;f.map?v=f.map:f.alphaMap&&(v=f.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),p.uvTransform.value.copy(v.matrix))}function c(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function h(p,f){p.roughness.value=f.roughness,p.metalness.value=f.metalness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap),f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function d(p,f,v){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap)),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap),f.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),p.clearcoatNormalMap.value=f.clearcoatNormalMap,f.side===Rt&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap)),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap)}function m(p,f){f.matcap&&(p.matcap.value=f.matcap)}function g(p,f){p.referencePosition.value.copy(f.referencePosition),p.nearDistance.value=f.nearDistance,p.farDistance.value=f.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function Dg(r,e,t,n){let i={},s={},o=[];const a=t.isWebGL2?r.getParameter(35375):0;function l(y,_){const x=_.program;n.uniformBlockBinding(y,x)}function c(y,_){let x=i[y.id];x===void 0&&(g(y),x=u(y),i[y.id]=x,y.addEventListener("dispose",f));const w=_.program;n.updateUBOMapping(y,w);const E=e.render.frame;s[y.id]!==E&&(d(y),s[y.id]=E)}function u(y){const _=h();y.__bindingPointIndex=_;const x=r.createBuffer(),w=y.__size,E=y.usage;return r.bindBuffer(35345,x),r.bufferData(35345,w,E),r.bindBuffer(35345,null),r.bindBufferBase(35345,_,x),x}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const _=i[y.id],x=y.uniforms,w=y.__cache;r.bindBuffer(35345,_);for(let E=0,L=x.length;E<L;E++){const b=x[E];if(m(b,E,w)===!0){const T=b.__offset,R=Array.isArray(b.value)?b.value:[b.value];let U=0;for(let Z=0;Z<R.length;Z++){const N=R[Z],I=p(N);typeof N=="number"?(b.__data[0]=N,r.bufferSubData(35345,T+U,b.__data)):N.isMatrix3?(b.__data[0]=N.elements[0],b.__data[1]=N.elements[1],b.__data[2]=N.elements[2],b.__data[3]=N.elements[0],b.__data[4]=N.elements[3],b.__data[5]=N.elements[4],b.__data[6]=N.elements[5],b.__data[7]=N.elements[0],b.__data[8]=N.elements[6],b.__data[9]=N.elements[7],b.__data[10]=N.elements[8],b.__data[11]=N.elements[0]):(N.toArray(b.__data,U),U+=I.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(35345,T,b.__data)}}r.bindBuffer(35345,null)}function m(y,_,x){const w=y.value;if(x[_]===void 0){if(typeof w=="number")x[_]=w;else{const E=Array.isArray(w)?w:[w],L=[];for(let b=0;b<E.length;b++)L.push(E[b].clone());x[_]=L}return!0}else if(typeof w=="number"){if(x[_]!==w)return x[_]=w,!0}else{const E=Array.isArray(x[_])?x[_]:[x[_]],L=Array.isArray(w)?w:[w];for(let b=0;b<E.length;b++){const T=E[b];if(T.equals(L[b])===!1)return T.copy(L[b]),!0}}return!1}function g(y){const _=y.uniforms;let x=0;const w=16;let E=0;for(let L=0,b=_.length;L<b;L++){const T=_[L],R={boundary:0,storage:0},U=Array.isArray(T.value)?T.value:[T.value];for(let Z=0,N=U.length;Z<N;Z++){const I=U[Z],k=p(I);R.boundary+=k.boundary,R.storage+=k.storage}if(T.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=x,L>0){E=x%w;const Z=w-E;E!==0&&Z-R.boundary<0&&(x+=w-E,T.__offset=x)}x+=R.storage}return E=x%w,E>0&&(x+=w-E),y.__size=x,y.__cache={},this}function p(y){const _={boundary:0,storage:0};return typeof y=="number"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function f(y){const _=y.target;_.removeEventListener("dispose",f);const x=o.indexOf(_.__bindingPointIndex);o.splice(x,1),r.deleteBuffer(i[_.id]),delete i[_.id],delete s[_.id]}function v(){for(const y in i)r.deleteBuffer(i[y]);o=[],i={},s={}}return{bind:l,update:c,dispose:v}}function Ng(){const r=Ki("canvas");return r.style.display="block",r}function ss(r={}){this.isWebGLRenderer=!0;const e=r.canvas!==void 0?r.canvas:Ng(),t=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,o=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,a=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,l=r.powerPreference!==void 0?r.powerPreference:"default",c=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=r.alpha!==void 0?r.alpha:!1;let h=null,d=null;const m=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=kn,this.useLegacyLights=!0,this.toneMapping=dn,this.toneMappingExposure=1;const p=this;let f=!1,v=0,y=0,_=null,x=-1,w=null;const E=new Ze,L=new Ze;let b=null,T=e.width,R=e.height,U=1,Z=null,N=null;const I=new Ze(0,0,T,R),k=new Ze(0,0,T,R);let X=!1;const Q=new _o;let G=!1,W=!1,ee=null;const de=new Oe,F=new P,$={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ne(){return _===null?U:1}let C=t;function te(M,z){for(let H=0;H<M.length;H++){const O=M[H],j=e.getContext(O,z);if(j!==null)return j}return null}try{const M={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${fo}`),e.addEventListener("webglcontextlost",Pe,!1),e.addEventListener("webglcontextrestored",Le,!1),e.addEventListener("webglcontextcreationerror",Te,!1),C===null){const z=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&z.shift(),C=te(z,M),C===null)throw te(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}C.getShaderPrecisionFormat===void 0&&(C.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let K,re,se,fe,Se,Y,B,oe,he,ae,Ae,we,Re,Ye,Xe,A,S,V,le,ce,me,Me,ge,J;function Ce(){K=new qp(C),re=new kp(C,K,r),K.init(re),Me=new Eg(C,K,re),se=new Tg(C,K,re),fe=new Zp,Se=new hg,Y=new Ag(C,K,se,Se,re,Me,fe),B=new Vp(p),oe=new Wp(p),he=new nd(C,re),ge=new zp(C,K,he,re),ae=new Xp(C,he,fe,ge),Ae=new $p(C,ae,he,fe),le=new Kp(C,re,Y),A=new Up(Se),we=new ug(p,B,oe,K,re,ge,A),Re=new Ig(p,Se),Ye=new fg,Xe=new xg(K,re),V=new Op(p,B,oe,se,Ae,u,o),S=new wg(p,Ae,re),J=new Dg(C,fe,re,se),ce=new Bp(C,K,fe,re),me=new jp(C,K,fe,re),fe.programs=we.programs,p.capabilities=re,p.extensions=K,p.properties=Se,p.renderLists=Ye,p.shadowMap=S,p.state=se,p.info=fe}Ce();const ye=new Pg(p,C);this.xr=ye,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const M=K.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=K.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(M){M!==void 0&&(U=M,this.setSize(T,R,!1))},this.getSize=function(M){return M.set(T,R)},this.setSize=function(M,z,H=!0){if(ye.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}T=M,R=z,e.width=Math.floor(M*U),e.height=Math.floor(z*U),H===!0&&(e.style.width=M+"px",e.style.height=z+"px"),this.setViewport(0,0,M,z)},this.getDrawingBufferSize=function(M){return M.set(T*U,R*U).floor()},this.setDrawingBufferSize=function(M,z,H){T=M,R=z,U=H,e.width=Math.floor(M*H),e.height=Math.floor(z*H),this.setViewport(0,0,M,z)},this.getCurrentViewport=function(M){return M.copy(E)},this.getViewport=function(M){return M.copy(I)},this.setViewport=function(M,z,H,O){M.isVector4?I.set(M.x,M.y,M.z,M.w):I.set(M,z,H,O),se.viewport(E.copy(I).multiplyScalar(U).floor())},this.getScissor=function(M){return M.copy(k)},this.setScissor=function(M,z,H,O){M.isVector4?k.set(M.x,M.y,M.z,M.w):k.set(M,z,H,O),se.scissor(L.copy(k).multiplyScalar(U).floor())},this.getScissorTest=function(){return X},this.setScissorTest=function(M){se.setScissorTest(X=M)},this.setOpaqueSort=function(M){Z=M},this.setTransparentSort=function(M){N=M},this.getClearColor=function(M){return M.copy(V.getClearColor())},this.setClearColor=function(){V.setClearColor.apply(V,arguments)},this.getClearAlpha=function(){return V.getClearAlpha()},this.setClearAlpha=function(){V.setClearAlpha.apply(V,arguments)},this.clear=function(M=!0,z=!0,H=!0){let O=0;M&&(O|=16384),z&&(O|=256),H&&(O|=1024),C.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Pe,!1),e.removeEventListener("webglcontextrestored",Le,!1),e.removeEventListener("webglcontextcreationerror",Te,!1),Ye.dispose(),Xe.dispose(),Se.dispose(),B.dispose(),oe.dispose(),Ae.dispose(),ge.dispose(),J.dispose(),we.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",ie),ye.removeEventListener("sessionend",_e),ee&&(ee.dispose(),ee=null),ve.stop()};function Pe(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),f=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),f=!1;const M=fe.autoReset,z=S.enabled,H=S.autoUpdate,O=S.needsUpdate,j=S.type;Ce(),fe.autoReset=M,S.enabled=z,S.autoUpdate=H,S.needsUpdate=O,S.type=j}function Te(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Ge(M){const z=M.target;z.removeEventListener("dispose",Ge),Ke(z)}function Ke(M){ot(M),Se.remove(M)}function ot(M){const z=Se.get(M).programs;z!==void 0&&(z.forEach(function(H){we.releaseProgram(H)}),M.isShaderMaterial&&we.releaseShaderCache(M))}this.renderBufferDirect=function(M,z,H,O,j,Ee){z===null&&(z=$);const Ie=j.isMesh&&j.matrixWorld.determinant()<0,Fe=Bc(M,z,H,O,j);se.setMaterial(O,Ie);let ze=H.index,He=1;O.wireframe===!0&&(ze=ae.getWireframeAttribute(H),He=2);const Be=H.drawRange,ke=H.attributes.position;let tt=Be.start*He,At=(Be.start+Be.count)*He;Ee!==null&&(tt=Math.max(tt,Ee.start*He),At=Math.min(At,(Ee.start+Ee.count)*He)),ze!==null?(tt=Math.max(tt,0),At=Math.min(At,ze.count)):ke!=null&&(tt=Math.max(tt,0),At=Math.min(At,ke.count));const en=At-tt;if(en<0||en===1/0)return;ge.setup(j,O,Fe,H,ze);let wn,nt=ce;if(ze!==null&&(wn=he.get(ze),nt=me,nt.setIndex(wn)),j.isMesh)O.wireframe===!0?(se.setLineWidth(O.wireframeLinewidth*ne()),nt.setMode(1)):nt.setMode(4);else if(j.isLine){let Ue=O.linewidth;Ue===void 0&&(Ue=1),se.setLineWidth(Ue*ne()),j.isLineSegments?nt.setMode(1):j.isLineLoop?nt.setMode(2):nt.setMode(3)}else j.isPoints?nt.setMode(0):j.isSprite&&nt.setMode(4);if(j.isInstancedMesh)nt.renderInstances(tt,en,j.count);else if(H.isInstancedBufferGeometry){const Ue=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Xs=Math.min(H.instanceCount,Ue);nt.renderInstances(tt,en,Xs)}else nt.render(tt,en)},this.compile=function(M,z){function H(O,j,Ee){O.transparent===!0&&O.side===cn&&O.forceSinglePass===!1?(O.side=Rt,O.needsUpdate=!0,Pt(O,j,Ee),O.side=fn,O.needsUpdate=!0,Pt(O,j,Ee),O.side=cn):Pt(O,j,Ee)}d=Xe.get(M),d.init(),g.push(d),M.traverseVisible(function(O){O.isLight&&O.layers.test(z.layers)&&(d.pushLight(O),O.castShadow&&d.pushShadow(O))}),d.setupLights(p.useLegacyLights),M.traverse(function(O){const j=O.material;if(j)if(Array.isArray(j))for(let Ee=0;Ee<j.length;Ee++){const Ie=j[Ee];H(Ie,M,O)}else H(j,M,O)}),g.pop(),d=null};let D=null;function q(M){D&&D(M)}function ie(){ve.stop()}function _e(){ve.start()}const ve=new gc;ve.setAnimationLoop(q),typeof self<"u"&&ve.setContext(self),this.setAnimationLoop=function(M){D=M,ye.setAnimationLoop(M),M===null?ve.stop():ve.start()},ye.addEventListener("sessionstart",ie),ye.addEventListener("sessionend",_e),this.render=function(M,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(f===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(z),z=ye.getCamera()),M.isScene===!0&&M.onBeforeRender(p,M,z,_),d=Xe.get(M,g.length),d.init(),g.push(d),de.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Q.setFromProjectionMatrix(de),W=this.localClippingEnabled,G=A.init(this.clippingPlanes,W),h=Ye.get(M,m.length),h.init(),m.push(h),Je(M,z,0,p.sortObjects),h.finish(),p.sortObjects===!0&&h.sort(Z,N),G===!0&&A.beginShadows();const H=d.state.shadowsArray;if(S.render(H,M,z),G===!0&&A.endShadows(),this.info.autoReset===!0&&this.info.reset(),V.render(h,M),d.setupLights(p.useLegacyLights),z.isArrayCamera){const O=z.cameras;for(let j=0,Ee=O.length;j<Ee;j++){const Ie=O[j];at(h,M,Ie,Ie.viewport)}}else at(h,M,z);_!==null&&(Y.updateMultisampleRenderTarget(_),Y.updateRenderTargetMipmap(_)),M.isScene===!0&&M.onAfterRender(p,M,z),ge.resetDefaultState(),x=-1,w=null,g.pop(),g.length>0?d=g[g.length-1]:d=null,m.pop(),m.length>0?h=m[m.length-1]:h=null};function Je(M,z,H,O){if(M.visible===!1)return;if(M.layers.test(z.layers)){if(M.isGroup)H=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(z);else if(M.isLight)d.pushLight(M),M.castShadow&&d.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Q.intersectsSprite(M)){O&&F.setFromMatrixPosition(M.matrixWorld).applyMatrix4(de);const Ie=Ae.update(M),Fe=M.material;Fe.visible&&h.push(M,Ie,Fe,H,F.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(M.isSkinnedMesh&&M.skeleton.frame!==fe.render.frame&&(M.skeleton.update(),M.skeleton.frame=fe.render.frame),!M.frustumCulled||Q.intersectsObject(M))){O&&F.setFromMatrixPosition(M.matrixWorld).applyMatrix4(de);const Ie=Ae.update(M),Fe=M.material;if(Array.isArray(Fe)){const ze=Ie.groups;for(let He=0,Be=ze.length;He<Be;He++){const ke=ze[He],tt=Fe[ke.materialIndex];tt&&tt.visible&&h.push(M,Ie,tt,H,F.z,ke)}}else Fe.visible&&h.push(M,Ie,Fe,H,F.z,null)}}const Ee=M.children;for(let Ie=0,Fe=Ee.length;Ie<Fe;Ie++)Je(Ee[Ie],z,H,O)}function at(M,z,H,O){const j=M.opaque,Ee=M.transmissive,Ie=M.transparent;d.setupLightsView(H),G===!0&&A.setGlobalState(p.clippingPlanes,H),Ee.length>0&&_t(j,z,H),O&&se.viewport(E.copy(O)),j.length>0&&Wt(j,z,H),Ee.length>0&&Wt(Ee,z,H),Ie.length>0&&Wt(Ie,z,H),se.buffers.depth.setTest(!0),se.buffers.depth.setMask(!0),se.buffers.color.setMask(!0),se.setPolygonOffset(!1)}function _t(M,z,H){const O=re.isWebGL2;ee===null&&(ee=new Un(1024,1024,{generateMipmaps:!0,type:K.has("EXT_color_buffer_half_float")?ji:Bn,minFilter:zn,samples:O&&s===!0?4:0}));const j=p.getRenderTarget();p.setRenderTarget(ee),p.clear();const Ee=p.toneMapping;p.toneMapping=dn,Wt(M,z,H),p.toneMapping=Ee,Y.updateMultisampleRenderTarget(ee),Y.updateRenderTargetMipmap(ee),p.setRenderTarget(j)}function Wt(M,z,H){const O=z.isScene===!0?z.overrideMaterial:null;for(let j=0,Ee=M.length;j<Ee;j++){const Ie=M[j],Fe=Ie.object,ze=Ie.geometry,He=O===null?Ie.material:O,Be=Ie.group;Fe.layers.test(H.layers)&&et(Fe,z,H,ze,He,Be)}}function et(M,z,H,O,j,Ee){M.onBeforeRender(p,z,H,O,j,Ee),M.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),j.onBeforeRender(p,z,H,O,M,Ee),j.transparent===!0&&j.side===cn&&j.forceSinglePass===!1?(j.side=Rt,j.needsUpdate=!0,p.renderBufferDirect(H,z,O,j,M,Ee),j.side=fn,j.needsUpdate=!0,p.renderBufferDirect(H,z,O,j,M,Ee),j.side=cn):p.renderBufferDirect(H,z,O,j,M,Ee),M.onAfterRender(p,z,H,O,j,Ee)}function Pt(M,z,H){z.isScene!==!0&&(z=$);const O=Se.get(M),j=d.state.lights,Ee=d.state.shadowsArray,Ie=j.state.version,Fe=we.getParameters(M,j.state,Ee,z,H),ze=we.getProgramCacheKey(Fe);let He=O.programs;O.environment=M.isMeshStandardMaterial?z.environment:null,O.fog=z.fog,O.envMap=(M.isMeshStandardMaterial?oe:B).get(M.envMap||O.environment),He===void 0&&(M.addEventListener("dispose",Ge),He=new Map,O.programs=He);let Be=He.get(ze);if(Be!==void 0){if(O.currentProgram===Be&&O.lightsStateVersion===Ie)return qt(M,Fe),Be}else Fe.uniforms=we.getUniforms(M),M.onBuild(H,Fe,p),M.onBeforeCompile(Fe,p),Be=we.acquireProgram(Fe,ze),He.set(ze,Be),O.uniforms=Fe.uniforms;const ke=O.uniforms;(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(ke.clippingPlanes=A.uniform),qt(M,Fe),O.needsLights=Uc(M),O.lightsStateVersion=Ie,O.needsLights&&(ke.ambientLightColor.value=j.state.ambient,ke.lightProbe.value=j.state.probe,ke.directionalLights.value=j.state.directional,ke.directionalLightShadows.value=j.state.directionalShadow,ke.spotLights.value=j.state.spot,ke.spotLightShadows.value=j.state.spotShadow,ke.rectAreaLights.value=j.state.rectArea,ke.ltc_1.value=j.state.rectAreaLTC1,ke.ltc_2.value=j.state.rectAreaLTC2,ke.pointLights.value=j.state.point,ke.pointLightShadows.value=j.state.pointShadow,ke.hemisphereLights.value=j.state.hemi,ke.directionalShadowMap.value=j.state.directionalShadowMap,ke.directionalShadowMatrix.value=j.state.directionalShadowMatrix,ke.spotShadowMap.value=j.state.spotShadowMap,ke.spotLightMatrix.value=j.state.spotLightMatrix,ke.spotLightMap.value=j.state.spotLightMap,ke.pointShadowMap.value=j.state.pointShadowMap,ke.pointShadowMatrix.value=j.state.pointShadowMatrix);const tt=Be.getUniforms(),At=Ds.seqWithValue(tt.seq,ke);return O.currentProgram=Be,O.uniformsList=At,Be}function qt(M,z){const H=Se.get(M);H.outputEncoding=z.outputEncoding,H.instancing=z.instancing,H.skinning=z.skinning,H.morphTargets=z.morphTargets,H.morphNormals=z.morphNormals,H.morphColors=z.morphColors,H.morphTargetsCount=z.morphTargetsCount,H.numClippingPlanes=z.numClippingPlanes,H.numIntersection=z.numClipIntersection,H.vertexAlphas=z.vertexAlphas,H.vertexTangents=z.vertexTangents,H.toneMapping=z.toneMapping}function Bc(M,z,H,O,j){z.isScene!==!0&&(z=$),Y.resetTextureUnits();const Ee=z.fog,Ie=O.isMeshStandardMaterial?z.environment:null,Fe=_===null?p.outputEncoding:_.isXRRenderTarget===!0?_.texture.encoding:kn,ze=(O.isMeshStandardMaterial?oe:B).get(O.envMap||Ie),He=O.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Be=!!O.normalMap&&!!H.attributes.tangent,ke=!!H.morphAttributes.position,tt=!!H.morphAttributes.normal,At=!!H.morphAttributes.color,en=O.toneMapped?p.toneMapping:dn,wn=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,nt=wn!==void 0?wn.length:0,Ue=Se.get(O),Xs=d.state.lights;if(G===!0&&(W===!0||M!==w)){const Et=M===w&&O.id===x;A.setState(O,M,Et)}let lt=!1;O.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==Xs.state.version||Ue.outputEncoding!==Fe||j.isInstancedMesh&&Ue.instancing===!1||!j.isInstancedMesh&&Ue.instancing===!0||j.isSkinnedMesh&&Ue.skinning===!1||!j.isSkinnedMesh&&Ue.skinning===!0||Ue.envMap!==ze||O.fog===!0&&Ue.fog!==Ee||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==A.numPlanes||Ue.numIntersection!==A.numIntersection)||Ue.vertexAlphas!==He||Ue.vertexTangents!==Be||Ue.morphTargets!==ke||Ue.morphNormals!==tt||Ue.morphColors!==At||Ue.toneMapping!==en||re.isWebGL2===!0&&Ue.morphTargetsCount!==nt)&&(lt=!0):(lt=!0,Ue.__version=O.version);let Tn=Ue.currentProgram;lt===!0&&(Tn=Pt(O,z,j));let zo=!1,Ci=!1,js=!1;const vt=Tn.getUniforms(),An=Ue.uniforms;if(se.useProgram(Tn.program)&&(zo=!0,Ci=!0,js=!0),O.id!==x&&(x=O.id,Ci=!0),zo||w!==M){if(vt.setValue(C,"projectionMatrix",M.projectionMatrix),re.logarithmicDepthBuffer&&vt.setValue(C,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),w!==M&&(w=M,Ci=!0,js=!0),O.isShaderMaterial||O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshStandardMaterial||O.envMap){const Et=vt.map.cameraPosition;Et!==void 0&&Et.setValue(C,F.setFromMatrixPosition(M.matrixWorld))}(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&vt.setValue(C,"isOrthographic",M.isOrthographicCamera===!0),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial||O.isShadowMaterial||j.isSkinnedMesh)&&vt.setValue(C,"viewMatrix",M.matrixWorldInverse)}if(j.isSkinnedMesh){vt.setOptional(C,j,"bindMatrix"),vt.setOptional(C,j,"bindMatrixInverse");const Et=j.skeleton;Et&&(re.floatVertexTextures?(Et.boneTexture===null&&Et.computeBoneTexture(),vt.setValue(C,"boneTexture",Et.boneTexture,Y),vt.setValue(C,"boneTextureSize",Et.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Zs=H.morphAttributes;if((Zs.position!==void 0||Zs.normal!==void 0||Zs.color!==void 0&&re.isWebGL2===!0)&&le.update(j,H,Tn),(Ci||Ue.receiveShadow!==j.receiveShadow)&&(Ue.receiveShadow=j.receiveShadow,vt.setValue(C,"receiveShadow",j.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(An.envMap.value=ze,An.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),Ci&&(vt.setValue(C,"toneMappingExposure",p.toneMappingExposure),Ue.needsLights&&kc(An,js),Ee&&O.fog===!0&&Re.refreshFogUniforms(An,Ee),Re.refreshMaterialUniforms(An,O,U,R,ee),Ds.upload(C,Ue.uniformsList,An,Y)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Ds.upload(C,Ue.uniformsList,An,Y),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&vt.setValue(C,"center",j.center),vt.setValue(C,"modelViewMatrix",j.modelViewMatrix),vt.setValue(C,"normalMatrix",j.normalMatrix),vt.setValue(C,"modelMatrix",j.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const Et=O.uniformsGroups;for(let Ys=0,Vc=Et.length;Ys<Vc;Ys++)if(re.isWebGL2){const Bo=Et[Ys];J.update(Bo,Tn),J.bind(Bo,Tn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Tn}function kc(M,z){M.ambientLightColor.needsUpdate=z,M.lightProbe.needsUpdate=z,M.directionalLights.needsUpdate=z,M.directionalLightShadows.needsUpdate=z,M.pointLights.needsUpdate=z,M.pointLightShadows.needsUpdate=z,M.spotLights.needsUpdate=z,M.spotLightShadows.needsUpdate=z,M.rectAreaLights.needsUpdate=z,M.hemisphereLights.needsUpdate=z}function Uc(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(M,z,H){Se.get(M.texture).__webglTexture=z,Se.get(M.depthTexture).__webglTexture=H;const O=Se.get(M);O.__hasExternalTextures=!0,O.__hasExternalTextures&&(O.__autoAllocateDepthBuffer=H===void 0,O.__autoAllocateDepthBuffer||K.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,z){const H=Se.get(M);H.__webglFramebuffer=z,H.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(M,z=0,H=0){_=M,v=z,y=H;let O=!0,j=null,Ee=!1,Ie=!1;if(M){const ze=Se.get(M);ze.__useDefaultFramebuffer!==void 0?(se.bindFramebuffer(36160,null),O=!1):ze.__webglFramebuffer===void 0?Y.setupRenderTarget(M):ze.__hasExternalTextures&&Y.rebindTextures(M,Se.get(M.texture).__webglTexture,Se.get(M.depthTexture).__webglTexture);const He=M.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Ie=!0);const Be=Se.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(j=Be[z],Ee=!0):re.isWebGL2&&M.samples>0&&Y.useMultisampledRTT(M)===!1?j=Se.get(M).__webglMultisampledFramebuffer:j=Be,E.copy(M.viewport),L.copy(M.scissor),b=M.scissorTest}else E.copy(I).multiplyScalar(U).floor(),L.copy(k).multiplyScalar(U).floor(),b=X;if(se.bindFramebuffer(36160,j)&&re.drawBuffers&&O&&se.drawBuffers(M,j),se.viewport(E),se.scissor(L),se.setScissorTest(b),Ee){const ze=Se.get(M.texture);C.framebufferTexture2D(36160,36064,34069+z,ze.__webglTexture,H)}else if(Ie){const ze=Se.get(M.texture),He=z||0;C.framebufferTextureLayer(36160,36064,ze.__webglTexture,H||0,He)}x=-1},this.readRenderTargetPixels=function(M,z,H,O,j,Ee,Ie){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=Se.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Ie!==void 0&&(Fe=Fe[Ie]),Fe){se.bindFramebuffer(36160,Fe);try{const ze=M.texture,He=ze.format,Be=ze.type;if(He!==Ft&&Me.convert(He)!==C.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ke=Be===ji&&(K.has("EXT_color_buffer_half_float")||re.isWebGL2&&K.has("EXT_color_buffer_float"));if(Be!==Bn&&Me.convert(Be)!==C.getParameter(35738)&&!(Be===bn&&(re.isWebGL2||K.has("OES_texture_float")||K.has("WEBGL_color_buffer_float")))&&!ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=M.width-O&&H>=0&&H<=M.height-j&&C.readPixels(z,H,O,j,Me.convert(He),Me.convert(Be),Ee)}finally{const ze=_!==null?Se.get(_).__webglFramebuffer:null;se.bindFramebuffer(36160,ze)}}},this.copyFramebufferToTexture=function(M,z,H=0){const O=Math.pow(2,-H),j=Math.floor(z.image.width*O),Ee=Math.floor(z.image.height*O);Y.setTexture2D(z,0),C.copyTexSubImage2D(3553,H,0,0,M.x,M.y,j,Ee),se.unbindTexture()},this.copyTextureToTexture=function(M,z,H,O=0){const j=z.image.width,Ee=z.image.height,Ie=Me.convert(H.format),Fe=Me.convert(H.type);Y.setTexture2D(H,0),C.pixelStorei(37440,H.flipY),C.pixelStorei(37441,H.premultiplyAlpha),C.pixelStorei(3317,H.unpackAlignment),z.isDataTexture?C.texSubImage2D(3553,O,M.x,M.y,j,Ee,Ie,Fe,z.image.data):z.isCompressedTexture?C.compressedTexSubImage2D(3553,O,M.x,M.y,z.mipmaps[0].width,z.mipmaps[0].height,Ie,z.mipmaps[0].data):C.texSubImage2D(3553,O,M.x,M.y,Ie,Fe,z.image),O===0&&H.generateMipmaps&&C.generateMipmap(3553),se.unbindTexture()},this.copyTextureToTexture3D=function(M,z,H,O,j=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ee=M.max.x-M.min.x+1,Ie=M.max.y-M.min.y+1,Fe=M.max.z-M.min.z+1,ze=Me.convert(O.format),He=Me.convert(O.type);let Be;if(O.isData3DTexture)Y.setTexture3D(O,0),Be=32879;else if(O.isDataArrayTexture)Y.setTexture2DArray(O,0),Be=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(37440,O.flipY),C.pixelStorei(37441,O.premultiplyAlpha),C.pixelStorei(3317,O.unpackAlignment);const ke=C.getParameter(3314),tt=C.getParameter(32878),At=C.getParameter(3316),en=C.getParameter(3315),wn=C.getParameter(32877),nt=H.isCompressedTexture?H.mipmaps[0]:H.image;C.pixelStorei(3314,nt.width),C.pixelStorei(32878,nt.height),C.pixelStorei(3316,M.min.x),C.pixelStorei(3315,M.min.y),C.pixelStorei(32877,M.min.z),H.isDataTexture||H.isData3DTexture?C.texSubImage3D(Be,j,z.x,z.y,z.z,Ee,Ie,Fe,ze,He,nt.data):H.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),C.compressedTexSubImage3D(Be,j,z.x,z.y,z.z,Ee,Ie,Fe,ze,nt.data)):C.texSubImage3D(Be,j,z.x,z.y,z.z,Ee,Ie,Fe,ze,He,nt),C.pixelStorei(3314,ke),C.pixelStorei(32878,tt),C.pixelStorei(3316,At),C.pixelStorei(3315,en),C.pixelStorei(32877,wn),j===0&&O.generateMipmaps&&C.generateMipmap(Be),se.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?Y.setTextureCube(M,0):M.isData3DTexture?Y.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Y.setTexture2DArray(M,0):Y.setTexture2D(M,0),se.unbindTexture()},this.resetState=function(){v=0,y=0,_=null,se.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Object.defineProperties(ss.prototype,{physicallyCorrectLights:{get:function(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights},set:function(r){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!r}}});class Fg extends ss{}Fg.prototype.isWebGL1Renderer=!0;class bo extends Qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Og{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Hr,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Ot()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ot()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ot()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const yt=new P;class So{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}setX(e,t){return this.normalized&&(t=je(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=je(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=je(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=je(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=un(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=un(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=un(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=un(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=je(t,this.array),n=je(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=je(t,this.array),n=je(n,this.array),i=je(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=je(t,this.array),n=je(n,this.array),i=je(i,this.array),s=je(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Mt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new So(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const el=new P,tl=new Ze,nl=new Ze,zg=new P,il=new Oe;class Bg extends Tt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Oe,this.bindMatrixInverse=new Oe}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ze,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,i=this.geometry;tl.fromBufferAttribute(i.attributes.skinIndex,e),nl.fromBufferAttribute(i.attributes.skinWeight,e),el.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=nl.getComponent(s);if(o!==0){const a=tl.getComponent(s);il.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(zg.copy(el).applyMatrix4(il),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class bc extends Qe{constructor(){super(),this.isBone=!0,this.type="Bone"}}class kg extends pt{constructor(e=null,t=1,n=1,i,s,o,a,l,c=ut,u=ut,h,d){super(null,o,a,l,c,u,i,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const sl=new Oe,Ug=new Oe;class Mo{constructor(e=[],t=[]){this.uuid=Ot(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Oe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Oe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:Ug;sl.multiplyMatrices(a,t[s]),sl.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Mo(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=sc(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new kg(t,e,e,Ft,bn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new bc),this.bones.push(o),this.boneInverses.push(new Oe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class rl extends Mt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ol=new Oe,al=new Oe,ws=[],Vg=new Oe,Oi=new Tt;class Gg extends Tt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new rl(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1;for(let i=0;i<n;i++)this.setMatrixAt(i,Vg)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Oi.geometry=this.geometry,Oi.material=this.material,Oi.material!==void 0)for(let s=0;s<i;s++){this.getMatrixAt(s,ol),al.multiplyMatrices(n,ol),Oi.matrixWorld=al,Oi.raycast(e,ws);for(let o=0,a=ws.length;o<a;o++){const l=ws[o];l.instanceId=s,l.object=this,t.push(l)}ws.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new rl(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Sc extends Kt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new De(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ll=new P,cl=new P,ul=new Oe,Cr=new Gs,Ts=new Mi;class wo extends Qe{constructor(e=new Bt,t=new Sc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)ll.fromBufferAttribute(t,i-1),cl.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ll.distanceTo(cl);e.setAttribute("lineDistance",new zt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ts.copy(n.boundingSphere),Ts.applyMatrix4(i),Ts.radius+=s,e.ray.intersectsSphere(Ts)===!1)return;ul.copy(i).invert(),Cr.copy(e.ray).applyMatrix4(ul);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new P,u=new P,h=new P,d=new P,m=this.isLineSegments?2:1,g=n.index,f=n.attributes.position;if(g!==null){const v=Math.max(0,o.start),y=Math.min(g.count,o.start+o.count);for(let _=v,x=y-1;_<x;_+=m){const w=g.getX(_),E=g.getX(_+1);if(c.fromBufferAttribute(f,w),u.fromBufferAttribute(f,E),Cr.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const b=e.ray.origin.distanceTo(d);b<e.near||b>e.far||t.push({distance:b,point:h.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const v=Math.max(0,o.start),y=Math.min(f.count,o.start+o.count);for(let _=v,x=y-1;_<x;_+=m){if(c.fromBufferAttribute(f,_),u.fromBufferAttribute(f,_+1),Cr.distanceSqToSegment(c,u,d,h)>l)continue;d.applyMatrix4(this.matrixWorld);const E=e.ray.origin.distanceTo(d);E<e.near||E>e.far||t.push({distance:E,point:h.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const hl=new P,dl=new P;class Hg extends wo{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)hl.fromBufferAttribute(t,i),dl.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+hl.distanceTo(dl);e.setAttribute("lineDistance",new zt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Wg extends wo{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class To extends Kt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const fl=new Oe,jr=new Gs,As=new Mi,Es=new P;class Mc extends Qe{constructor(e=new Bt,t=new To){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),As.copy(n.boundingSphere),As.applyMatrix4(i),As.radius+=s,e.ray.intersectsSphere(As)===!1)return;fl.copy(i).invert(),jr.copy(e.ray).applyMatrix4(fl);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let g=d,p=m;g<p;g++){const f=c.getX(g);Es.fromBufferAttribute(h,f),pl(Es,f,l,i,e,t,this)}}else{const d=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let g=d,p=m;g<p;g++)Es.fromBufferAttribute(h,g),pl(Es,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function pl(r,e,t,n,i,s,o){const a=jr.distanceSqToPoint(r);if(a<t){const l=new P;jr.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class $t{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const u=n[i],d=n[i+1]-u,m=(o-u)/d;return(i+m)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=t||(o.isVector2?new pe:new P);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new P,i=[],s=[],o=[],a=new P,l=new Oe;for(let m=0;m<=e;m++){const g=m/e;i[m]=this.getTangentAt(g,new P)}s[0]=new P,o[0]=new P;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let m=1;m<=e;m++){if(s[m]=s[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(i[m-1],i[m]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(dt(i[m-1].dot(i[m]),-1,1));s[m].applyMatrix4(l.makeRotationAxis(a,g))}o[m].crossVectors(i[m],s[m])}if(t===!0){let m=Math.acos(dt(s[0].dot(s[e]),-1,1));m/=e,i[0].dot(a.crossVectors(s[0],s[e]))>0&&(m=-m);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],m*g)),o[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ao extends $t{constructor(e=0,t=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const n=t||new pe,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,m=c-this.aY;l=d*u-m*h+this.aX,c=d*h+m*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class qg extends Ao{constructor(e,t,n,i,s,o){super(e,t,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Eo(){let r=0,e=0,t=0,n=0;function i(s,o,a,l){r=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let d=(o-s)/c-(a-s)/(c+u)+(a-o)/u,m=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,m*=u,i(o,a,d,m)},calc:function(s){const o=s*s,a=o*s;return r+e*s+t*o+n*a}}}const Cs=new P,Lr=new Eo,Rr=new Eo,Pr=new Eo;class Xg extends $t{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new P){const n=t,i=this.points,s=i.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%s]:(Cs.subVectors(i[0],i[1]).add(i[0]),c=Cs);const h=i[a%s],d=i[(a+1)%s];if(this.closed||a+2<s?u=i[(a+2)%s]:(Cs.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=Cs),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),m),p=Math.pow(h.distanceToSquared(d),m),f=Math.pow(d.distanceToSquared(u),m);p<1e-4&&(p=1),g<1e-4&&(g=p),f<1e-4&&(f=p),Lr.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,g,p,f),Rr.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,g,p,f),Pr.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,g,p,f)}else this.curveType==="catmullrom"&&(Lr.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),Rr.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Pr.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(Lr.calc(l),Rr.calc(l),Pr.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new P().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function ml(r,e,t,n,i){const s=(n-e)*.5,o=(i-t)*.5,a=r*r,l=r*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*r+t}function jg(r,e){const t=1-r;return t*t*e}function Zg(r,e){return 2*(1-r)*r*e}function Yg(r,e){return r*r*e}function qi(r,e,t,n){return jg(r,e)+Zg(r,t)+Yg(r,n)}function Jg(r,e){const t=1-r;return t*t*t*e}function Kg(r,e){const t=1-r;return 3*t*t*r*e}function $g(r,e){return 3*(1-r)*r*r*e}function Qg(r,e){return r*r*r*e}function Xi(r,e,t,n,i){return Jg(r,e)+Kg(r,t)+$g(r,n)+Qg(r,i)}class wc extends $t{constructor(e=new pe,t=new pe,n=new pe,i=new pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new pe){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Xi(e,i.x,s.x,o.x,a.x),Xi(e,i.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class e0 extends $t{constructor(e=new P,t=new P,n=new P,i=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new P){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Xi(e,i.x,s.x,o.x,a.x),Xi(e,i.y,s.y,o.y,a.y),Xi(e,i.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Co extends $t{constructor(e=new pe,t=new pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new pe){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new pe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class t0 extends $t{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Tc extends $t{constructor(e=new pe,t=new pe,n=new pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new pe){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(qi(e,i.x,s.x,o.x),qi(e,i.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class n0 extends $t{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(qi(e,i.x,s.x,o.x),qi(e,i.y,s.y,o.y),qi(e,i.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ac extends $t{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new pe){const n=t,i=this.points,s=(i.length-1)*e,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(ml(a,l.x,c.x,u.x,h.x),ml(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new pe().fromArray(i))}return this}}var Ec=Object.freeze({__proto__:null,ArcCurve:qg,CatmullRomCurve3:Xg,CubicBezierCurve:wc,CubicBezierCurve3:e0,EllipseCurve:Ao,LineCurve:Co,LineCurve3:t0,QuadraticBezierCurve:Tc,QuadraticBezierCurve3:n0,SplineCurve:Ac});class i0 extends $t{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Co(t,e))}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Ec[i.type]().fromJSON(i))}return this}}class Zr extends i0{constructor(e){super(),this.type="Path",this.currentPoint=new pe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Co(this.currentPoint.clone(),new pe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new Tc(this.currentPoint.clone(),new pe(e,t),new pe(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,o){const a=new wc(this.currentPoint.clone(),new pe(e,t),new pe(n,i),new pe(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Ac(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,s,o),this}absarc(e,t,n,i,s,o){return this.absellipse(e,t,n,n,i,s,o),this}ellipse(e,t,n,i,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,s,o,a,l),this}absellipse(e,t,n,i,s,o,a,l){const c=new Ao(e,t,n,i,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ns extends Zr{constructor(e){super(e),this.uuid=Ot(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Zr().fromJSON(i))}return this}}const s0={triangulate:function(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=Cc(r,0,i,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,h,d,m;if(n&&(s=c0(r,e,s,t)),r.length>80*t){a=c=r[0],l=u=r[1];for(let g=t;g<i;g+=t)h=r[g],d=r[g+1],h<a&&(a=h),d<l&&(l=d),h>c&&(c=h),d>u&&(u=d);m=Math.max(c-a,u-l),m=m!==0?32767/m:0}return $i(s,o,t,a,l,m,0),o}};function Cc(r,e,t,n,i){let s,o;if(i===y0(r,e,t,n)>0)for(s=e;s<t;s+=n)o=gl(s,r[s],r[s+1],o);else for(s=t-n;s>=e;s-=n)o=gl(s,r[s],r[s+1],o);return o&&qs(o,o.next)&&(es(o),o=o.next),o}function Gn(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(qs(t,t.next)||$e(t.prev,t,t.next)===0)){if(es(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function $i(r,e,t,n,i,s,o){if(!r)return;!o&&s&&p0(r,n,i,s);let a=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?o0(r,n,i,s):r0(r)){e.push(l.i/t|0),e.push(r.i/t|0),e.push(c.i/t|0),es(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=a0(Gn(r),e,t),$i(r,e,t,n,i,s,2)):o===2&&l0(r,e,t,n,i,s):$i(Gn(r),e,t,n,i,s,1);break}}}function r0(r){const e=r.prev,t=r,n=r.next;if($e(e,t,n)>=0)return!1;const i=e.x,s=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=i<s?i<o?i:o:s<o?s:o,h=a<l?a<c?a:c:l<c?l:c,d=i>s?i>o?i:o:s>o?s:o,m=a>l?a>c?a:c:l>c?l:c;let g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=m&&ci(i,a,s,l,o,c,g.x,g.y)&&$e(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function o0(r,e,t,n){const i=r.prev,s=r,o=r.next;if($e(i,s,o)>=0)return!1;const a=i.x,l=s.x,c=o.x,u=i.y,h=s.y,d=o.y,m=a<l?a<c?a:c:l<c?l:c,g=u<h?u<d?u:d:h<d?h:d,p=a>l?a>c?a:c:l>c?l:c,f=u>h?u>d?u:d:h>d?h:d,v=Yr(m,g,e,t,n),y=Yr(p,f,e,t,n);let _=r.prevZ,x=r.nextZ;for(;_&&_.z>=v&&x&&x.z<=y;){if(_.x>=m&&_.x<=p&&_.y>=g&&_.y<=f&&_!==i&&_!==o&&ci(a,u,l,h,c,d,_.x,_.y)&&$e(_.prev,_,_.next)>=0||(_=_.prevZ,x.x>=m&&x.x<=p&&x.y>=g&&x.y<=f&&x!==i&&x!==o&&ci(a,u,l,h,c,d,x.x,x.y)&&$e(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;_&&_.z>=v;){if(_.x>=m&&_.x<=p&&_.y>=g&&_.y<=f&&_!==i&&_!==o&&ci(a,u,l,h,c,d,_.x,_.y)&&$e(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;x&&x.z<=y;){if(x.x>=m&&x.x<=p&&x.y>=g&&x.y<=f&&x!==i&&x!==o&&ci(a,u,l,h,c,d,x.x,x.y)&&$e(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function a0(r,e,t){let n=r;do{const i=n.prev,s=n.next.next;!qs(i,s)&&Lc(i,n,n.next,s)&&Qi(i,s)&&Qi(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),es(n),es(n.next),n=r=s),n=n.next}while(n!==r);return Gn(n)}function l0(r,e,t,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&_0(o,a)){let l=Rc(o,a);o=Gn(o,o.next),l=Gn(l,l.next),$i(o,e,t,n,i,s,0),$i(l,e,t,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function c0(r,e,t,n){const i=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*n,l=s<o-1?e[s+1]*n:r.length,c=Cc(r,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(g0(c));for(i.sort(u0),s=0;s<i.length;s++)t=h0(i[s],t);return t}function u0(r,e){return r.x-e.x}function h0(r,e){const t=d0(r,e);if(!t)return e;const n=Rc(t,r);return Gn(n,n.next),Gn(t,t.next)}function d0(r,e){let t=e,n=-1/0,i;const s=r.x,o=r.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=s&&d>n&&(n=d,i=t.x<t.next.x?t:t.next,d===s))return i}t=t.next}while(t!==e);if(!i)return null;const a=i,l=i.x,c=i.y;let u=1/0,h;t=i;do s>=t.x&&t.x>=l&&s!==t.x&&ci(o<c?s:n,o,l,c,o<c?n:s,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(s-t.x),Qi(t,r)&&(h<u||h===u&&(t.x>i.x||t.x===i.x&&f0(i,t)))&&(i=t,u=h)),t=t.next;while(t!==a);return i}function f0(r,e){return $e(r.prev,r,e.prev)<0&&$e(e.next,r,r.next)<0}function p0(r,e,t,n){let i=r;do i.z===0&&(i.z=Yr(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,m0(i)}function m0(r){let e,t,n,i,s,o,a,l,c=1;do{for(t=r,r=null,s=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;t=n}s.nextZ=null,c*=2}while(o>1);return r}function Yr(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function g0(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function ci(r,e,t,n,i,s,o,a){return(i-o)*(e-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(i-o)*(n-a)}function _0(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!v0(r,e)&&(Qi(r,e)&&Qi(e,r)&&x0(r,e)&&($e(r.prev,r,e.prev)||$e(r,e.prev,e))||qs(r,e)&&$e(r.prev,r,r.next)>0&&$e(e.prev,e,e.next)>0)}function $e(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function qs(r,e){return r.x===e.x&&r.y===e.y}function Lc(r,e,t,n){const i=Rs($e(r,e,t)),s=Rs($e(r,e,n)),o=Rs($e(t,n,r)),a=Rs($e(t,n,e));return!!(i!==s&&o!==a||i===0&&Ls(r,t,e)||s===0&&Ls(r,n,e)||o===0&&Ls(t,r,n)||a===0&&Ls(t,e,n))}function Ls(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Rs(r){return r>0?1:r<0?-1:0}function v0(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&Lc(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function Qi(r,e){return $e(r.prev,r,r.next)<0?$e(r,e,r.next)>=0&&$e(r,r.prev,e)>=0:$e(r,e,r.prev)<0||$e(r,r.next,e)<0}function x0(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function Rc(r,e){const t=new Jr(r.i,r.x,r.y),n=new Jr(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function gl(r,e,t,n){const i=new Jr(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function es(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Jr(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function y0(r,e,t,n){let i=0;for(let s=e,o=t-n;s<t;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class fi{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return fi.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];_l(e),vl(n,e);let o=e.length;t.forEach(_l);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,vl(n,t[l]);const a=s0.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function _l(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function vl(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class Lo extends Bt{constructor(e=new Ns([new pe(.5,.5),new pe(-.5,.5),new pe(-.5,-.5),new pe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new zt(i,3)),this.setAttribute("uv",new zt(s,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,m=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:m-.1,p=t.bevelOffset!==void 0?t.bevelOffset:0,f=t.bevelSegments!==void 0?t.bevelSegments:3;const v=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:b0;let _,x=!1,w,E,L,b;v&&(_=v.getSpacedPoints(u),x=!0,d=!1,w=v.computeFrenetFrames(u,!1),E=new P,L=new P,b=new P),d||(f=0,m=0,g=0,p=0);const T=a.extractPoints(c);let R=T.shape;const U=T.holes;if(!fi.isClockWise(R)){R=R.reverse();for(let Y=0,B=U.length;Y<B;Y++){const oe=U[Y];fi.isClockWise(oe)&&(U[Y]=oe.reverse())}}const N=fi.triangulateShape(R,U),I=R;for(let Y=0,B=U.length;Y<B;Y++){const oe=U[Y];R=R.concat(oe)}function k(Y,B,oe){return B||console.error("THREE.ExtrudeGeometry: vec does not exist"),Y.clone().addScaledVector(B,oe)}const X=R.length,Q=N.length;function G(Y,B,oe){let he,ae,Ae;const we=Y.x-B.x,Re=Y.y-B.y,Ye=oe.x-Y.x,Xe=oe.y-Y.y,A=we*we+Re*Re,S=we*Xe-Re*Ye;if(Math.abs(S)>Number.EPSILON){const V=Math.sqrt(A),le=Math.sqrt(Ye*Ye+Xe*Xe),ce=B.x-Re/V,me=B.y+we/V,Me=oe.x-Xe/le,ge=oe.y+Ye/le,J=((Me-ce)*Xe-(ge-me)*Ye)/(we*Xe-Re*Ye);he=ce+we*J-Y.x,ae=me+Re*J-Y.y;const Ce=he*he+ae*ae;if(Ce<=2)return new pe(he,ae);Ae=Math.sqrt(Ce/2)}else{let V=!1;we>Number.EPSILON?Ye>Number.EPSILON&&(V=!0):we<-Number.EPSILON?Ye<-Number.EPSILON&&(V=!0):Math.sign(Re)===Math.sign(Xe)&&(V=!0),V?(he=-Re,ae=we,Ae=Math.sqrt(A)):(he=we,ae=Re,Ae=Math.sqrt(A/2))}return new pe(he/Ae,ae/Ae)}const W=[];for(let Y=0,B=I.length,oe=B-1,he=Y+1;Y<B;Y++,oe++,he++)oe===B&&(oe=0),he===B&&(he=0),W[Y]=G(I[Y],I[oe],I[he]);const ee=[];let de,F=W.concat();for(let Y=0,B=U.length;Y<B;Y++){const oe=U[Y];de=[];for(let he=0,ae=oe.length,Ae=ae-1,we=he+1;he<ae;he++,Ae++,we++)Ae===ae&&(Ae=0),we===ae&&(we=0),de[he]=G(oe[he],oe[Ae],oe[we]);ee.push(de),F=F.concat(de)}for(let Y=0;Y<f;Y++){const B=Y/f,oe=m*Math.cos(B*Math.PI/2),he=g*Math.sin(B*Math.PI/2)+p;for(let ae=0,Ae=I.length;ae<Ae;ae++){const we=k(I[ae],W[ae],he);K(we.x,we.y,-oe)}for(let ae=0,Ae=U.length;ae<Ae;ae++){const we=U[ae];de=ee[ae];for(let Re=0,Ye=we.length;Re<Ye;Re++){const Xe=k(we[Re],de[Re],he);K(Xe.x,Xe.y,-oe)}}}const $=g+p;for(let Y=0;Y<X;Y++){const B=d?k(R[Y],F[Y],$):R[Y];x?(L.copy(w.normals[0]).multiplyScalar(B.x),E.copy(w.binormals[0]).multiplyScalar(B.y),b.copy(_[0]).add(L).add(E),K(b.x,b.y,b.z)):K(B.x,B.y,0)}for(let Y=1;Y<=u;Y++)for(let B=0;B<X;B++){const oe=d?k(R[B],F[B],$):R[B];x?(L.copy(w.normals[Y]).multiplyScalar(oe.x),E.copy(w.binormals[Y]).multiplyScalar(oe.y),b.copy(_[Y]).add(L).add(E),K(b.x,b.y,b.z)):K(oe.x,oe.y,h/u*Y)}for(let Y=f-1;Y>=0;Y--){const B=Y/f,oe=m*Math.cos(B*Math.PI/2),he=g*Math.sin(B*Math.PI/2)+p;for(let ae=0,Ae=I.length;ae<Ae;ae++){const we=k(I[ae],W[ae],he);K(we.x,we.y,h+oe)}for(let ae=0,Ae=U.length;ae<Ae;ae++){const we=U[ae];de=ee[ae];for(let Re=0,Ye=we.length;Re<Ye;Re++){const Xe=k(we[Re],de[Re],he);x?K(Xe.x,Xe.y+_[u-1].y,_[u-1].x+oe):K(Xe.x,Xe.y,h+oe)}}}ne(),C();function ne(){const Y=i.length/3;if(d){let B=0,oe=X*B;for(let he=0;he<Q;he++){const ae=N[he];re(ae[2]+oe,ae[1]+oe,ae[0]+oe)}B=u+f*2,oe=X*B;for(let he=0;he<Q;he++){const ae=N[he];re(ae[0]+oe,ae[1]+oe,ae[2]+oe)}}else{for(let B=0;B<Q;B++){const oe=N[B];re(oe[2],oe[1],oe[0])}for(let B=0;B<Q;B++){const oe=N[B];re(oe[0]+X*u,oe[1]+X*u,oe[2]+X*u)}}n.addGroup(Y,i.length/3-Y,0)}function C(){const Y=i.length/3;let B=0;te(I,B),B+=I.length;for(let oe=0,he=U.length;oe<he;oe++){const ae=U[oe];te(ae,B),B+=ae.length}n.addGroup(Y,i.length/3-Y,1)}function te(Y,B){let oe=Y.length;for(;--oe>=0;){const he=oe;let ae=oe-1;ae<0&&(ae=Y.length-1);for(let Ae=0,we=u+f*2;Ae<we;Ae++){const Re=X*Ae,Ye=X*(Ae+1),Xe=B+he+Re,A=B+ae+Re,S=B+ae+Ye,V=B+he+Ye;se(Xe,A,S,V)}}}function K(Y,B,oe){l.push(Y),l.push(B),l.push(oe)}function re(Y,B,oe){fe(Y),fe(B),fe(oe);const he=i.length/3,ae=y.generateTopUV(n,i,he-3,he-2,he-1);Se(ae[0]),Se(ae[1]),Se(ae[2])}function se(Y,B,oe,he){fe(Y),fe(B),fe(he),fe(B),fe(oe),fe(he);const ae=i.length/3,Ae=y.generateSideWallUV(n,i,ae-6,ae-3,ae-2,ae-1);Se(Ae[0]),Se(Ae[1]),Se(Ae[3]),Se(Ae[1]),Se(Ae[2]),Se(Ae[3])}function fe(Y){i.push(l[Y*3+0]),i.push(l[Y*3+1]),i.push(l[Y*3+2])}function Se(Y){s.push(Y.x),s.push(Y.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return S0(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Ec[i.type]().fromJSON(i)),new Lo(n,e.options)}}const b0={generateTopUV:function(r,e,t,n,i){const s=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],u=e[i*3+1];return[new pe(s,o),new pe(a,l),new pe(c,u)]},generateSideWallUV:function(r,e,t,n,i,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[i*3],m=e[i*3+1],g=e[i*3+2],p=e[s*3],f=e[s*3+1],v=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new pe(o,1-l),new pe(c,1-h),new pe(d,1-g),new pe(p,1-v)]:[new pe(a,1-l),new pe(u,1-h),new pe(m,1-g),new pe(f,1-v)]}};function S0(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Ro extends Kt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nc,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class qn extends Ro{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new pe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return dt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new De(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new De(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new De(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function vn(r,e,t){return Pc(r)?new r.constructor(r.subarray(e,t!==void 0?t:r.length)):r.slice(e,t)}function Ps(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Pc(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function M0(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function xl(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i}function Ic(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class rs{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class w0 extends rs{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:oi,endingEnd:oi}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case ai:s=e,a=2*t-n;break;case zs:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ai:o=e,l=2*n-t;break;case zs:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,m=this._weightNext,g=(n-t)/(i-t),p=g*g,f=p*g,v=-d*f+2*d*p-d*g,y=(1+d)*f+(-1.5-2*d)*p+(-.5+d)*g+1,_=(-1-m)*f+(1.5+m)*p+.5*g,x=m*f-m*p;for(let w=0;w!==a;++w)s[w]=v*o[u+w]+y*o[c+w]+_*o[l+w]+x*o[h+w];return s}}class Dc extends rs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==a;++d)s[d]=o[c+d]*h+o[l+d]*u;return s}}class T0 extends rs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Qt{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ps(t,this.TimeBufferType),this.values=Ps(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ps(e.times,Array),values:Ps(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new T0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Dc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new w0(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Zi:t=this.InterpolantFactoryMethodDiscrete;break;case xi:t=this.InterpolantFactoryMethodLinear;break;case ir:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Zi;case this.InterpolantFactoryMethodLinear:return xi;case this.InterpolantFactoryMethodSmooth:return ir}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=vn(n,s,o),this.values=vn(this.values,s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&Pc(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=vn(this.times),t=vn(this.values),n=this.getValueSize(),i=this.getInterpolation()===ir,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const h=a*n,d=h-n,m=h+n;for(let g=0;g!==n;++g){const p=t[h+g];if(p!==t[d+g]||p!==t[m+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,d=o*n;for(let m=0;m!==n;++m)t[d+m]=t[h+m]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=vn(e,0,o),this.values=vn(t,0,o*n)):(this.times=e,this.values=t),this}clone(){const e=vn(this.times,0),t=vn(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Qt.prototype.TimeBufferType=Float32Array;Qt.prototype.ValueBufferType=Float32Array;Qt.prototype.DefaultInterpolation=xi;class Ti extends Qt{}Ti.prototype.ValueTypeName="bool";Ti.prototype.ValueBufferType=Array;Ti.prototype.DefaultInterpolation=Zi;Ti.prototype.InterpolantFactoryMethodLinear=void 0;Ti.prototype.InterpolantFactoryMethodSmooth=void 0;class Nc extends Qt{}Nc.prototype.ValueTypeName="color";class ts extends Qt{}ts.prototype.ValueTypeName="number";class A0 extends rs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Ht.slerpFlat(s,0,o,c-a,o,c,l);return s}}class Hn extends Qt{InterpolantFactoryMethodLinear(e){return new A0(this.times,this.values,this.getValueSize(),e)}}Hn.prototype.ValueTypeName="quaternion";Hn.prototype.DefaultInterpolation=xi;Hn.prototype.InterpolantFactoryMethodSmooth=void 0;class Ai extends Qt{}Ai.prototype.ValueTypeName="string";Ai.prototype.ValueBufferType=Array;Ai.prototype.DefaultInterpolation=Zi;Ai.prototype.InterpolantFactoryMethodLinear=void 0;Ai.prototype.InterpolantFactoryMethodSmooth=void 0;class ns extends Qt{}ns.prototype.ValueTypeName="vector";class Kr{constructor(e,t=-1,n,i=po){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Ot(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(C0(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(Qt.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=M0(l);l=xl(l,1,u),c=xl(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new ts(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,m,g,p){if(m.length!==0){const f=[],v=[];Ic(m,f,v,g),f.length!==0&&p.push(new h(d,f,v))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const m={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let p=0;p<d[g].morphTargets.length;p++)m[d[g].morphTargets[p]]=-1;for(const p in m){const f=[],v=[];for(let y=0;y!==d[g].morphTargets.length;++y){const _=d[g];f.push(_.time),v.push(_.morphTarget===p?1:0)}i.push(new ts(".morphTargetInfluence["+p+"]",f,v))}l=m.length*o}else{const m=".bones["+t[h].name+"]";n(ns,m+".position",d,"pos",i),n(Hn,m+".quaternion",d,"rot",i),n(ns,m+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function E0(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ts;case"vector":case"vector2":case"vector3":case"vector4":return ns;case"color":return Nc;case"quaternion":return Hn;case"bool":case"boolean":return Ti;case"string":return Ai}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function C0(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=E0(r.type);if(r.times===void 0){const t=[],n=[];Ic(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const bi={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class L0{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const m=c[h],g=c[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const R0=new L0;class Ei{constructor(e){this.manager=e!==void 0?e:R0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const an={};class P0 extends Error{constructor(e,t){super(e),this.response=t}}class Po extends Ei{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=bi.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(an[e]!==void 0){an[e].push({onLoad:t,onProgress:n,onError:i});return}an[e]=[],an[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=an[e],h=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),m=d?parseInt(d):0,g=m!==0;let p=0;const f=new ReadableStream({start(v){y();function y(){h.read().then(({done:_,value:x})=>{if(_)v.close();else{p+=x.byteLength;const w=new ProgressEvent("progress",{lengthComputable:g,loaded:p,total:m});for(let E=0,L=u.length;E<L;E++){const b=u[E];b.onProgress&&b.onProgress(w)}v.enqueue(x),y()}})}}});return new Response(f)}else throw new P0(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,m=new TextDecoder(d);return c.arrayBuffer().then(g=>m.decode(g))}}}).then(c=>{bi.add(e,c);const u=an[e];delete an[e];for(let h=0,d=u.length;h<d;h++){const m=u[h];m.onLoad&&m.onLoad(c)}}).catch(c=>{const u=an[e];if(u===void 0)throw this.manager.itemError(e),c;delete an[e];for(let h=0,d=u.length;h<d;h++){const m=u[h];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class I0 extends Ei{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=bi.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Ki("img");function l(){u(),bi.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Fc extends Ei{constructor(e){super(e)}load(e,t,n,i){const s=new pt,o=new I0(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Io extends Qe{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new De(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Ir=new Oe,yl=new P,bl=new P;class Do{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pe(512,512),this.map=null,this.mapPass=null,this.matrix=new Oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _o,this._frameExtents=new pe(1,1),this._viewportCount=1,this._viewports=[new Ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;yl.setFromMatrixPosition(e.matrixWorld),t.position.copy(yl),bl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(bl),t.updateMatrixWorld(),Ir.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ir),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ir)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class D0 extends Do{constructor(){super(new ft(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Ji*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class N0 extends Io{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Qe.DEFAULT_UP),this.updateMatrix(),this.target=new Qe,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new D0}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Sl=new Oe,zi=new P,Dr=new P;class F0 extends Do{constructor(){super(new ft(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new pe(4,2),this._viewportCount=6,this._viewports=[new Ze(2,1,1,1),new Ze(0,1,1,1),new Ze(3,1,1,1),new Ze(1,1,1,1),new Ze(3,0,1,1),new Ze(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),zi.setFromMatrixPosition(e.matrixWorld),n.position.copy(zi),Dr.copy(n.position),Dr.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Dr),n.updateMatrixWorld(),i.makeTranslation(-zi.x,-zi.y,-zi.z),Sl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sl)}}class Fn extends Io{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new F0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class O0 extends Do{constructor(){super(new xo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class z0 extends Io{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Qe.DEFAULT_UP),this.updateMatrix(),this.target=new Qe,this.shadow=new O0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class $r{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class B0 extends Ei{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=bi.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){bi.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){i&&i(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}class k0{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,o;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[s+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,s,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-s,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,o=i;s!==o;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let o=0;o!==s;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){Ht.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const o=this._workIndex*s;Ht.multiplyQuaternionsFlat(e,o,e,t,e,n),Ht.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,s){const o=1-i;for(let a=0;a!==s;++a){const l=t+a;e[l]=e[l]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,s){for(let o=0;o!==s;++o){const a=t+o;e[a]=e[a]+e[n+o]*i}}}const No="\\[\\]\\.:\\/",U0=new RegExp("["+No+"]","g"),Fo="[^"+No+"]",V0="[^"+No.replace("\\.","")+"]",G0=/((?:WC+[\/:])*)/.source.replace("WC",Fo),H0=/(WCOD+)?/.source.replace("WCOD",V0),W0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Fo),q0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Fo),X0=new RegExp("^"+G0+H0+W0+q0+"$"),j0=["material","materials","bones","map"];class Z0{constructor(e,t,n){const i=n||qe.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class qe{constructor(e,t,n){this.path=t,this.parsedPath=n||qe.parseTrackName(t),this.node=qe.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new qe.Composite(e,t,n):new qe(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(U0,"")}static parseTrackName(e){const t=X0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);j0.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=qe.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}qe.Composite=Z0;qe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};qe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};qe.prototype.GetterByBindingType=[qe.prototype._getValue_direct,qe.prototype._getValue_array,qe.prototype._getValue_arrayElement,qe.prototype._getValue_toArray];qe.prototype.SetterByBindingTypeAndVersioning=[[qe.prototype._setValue_direct,qe.prototype._setValue_direct_setNeedsUpdate,qe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[qe.prototype._setValue_array,qe.prototype._setValue_array_setNeedsUpdate,qe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[qe.prototype._setValue_arrayElement,qe.prototype._setValue_arrayElement_setNeedsUpdate,qe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[qe.prototype._setValue_fromArray,qe.prototype._setValue_fromArray_setNeedsUpdate,qe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Y0{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,o=s.length,a=new Array(o),l={endingStart:oi,endingEnd:oi};for(let c=0;c!==o;++c){const u=s[c].createInterpolant(null);a[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=lh,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,s=e._clip.duration,o=s/i,a=i/s;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case uh:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulateAdditive(a);break;case po:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const o=n===ch;if(e===0)return s===-1?i:o&&(s&1)===1?t-i:i;if(n===ah){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,s+=Math.abs(a);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=ai,i.endingEnd=ai):(e?i.endingStart=this.zeroSlopeAtStart?ai:oi:i.endingStart=zs,t?i.endingEnd=this.zeroSlopeAtEnd?ai:oi:i.endingEnd=zs)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=s,l[0]=t,a[1]=s+e,l[1]=n,this}}const J0=new Float32Array(1);class K0 extends Wn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==s;++h){const d=i[h],m=d.name;let g=u[m];if(g!==void 0)++g.referenceCount,o[h]=g;else{if(g=o[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,m));continue}const p=t&&t._propertyBindings[h].binding.parsedPath;g=new k0(qe.create(n,m,p),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,m),o[h]=g}a[h].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,o=this._actionsByClip,a=o[s],l=a.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;const h=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],l.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Dc(new Float32Array(2),new Float32Array(2),1,J0),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let o=typeof e=="string"?Kr.findByName(i,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=po),l!==void 0){const h=l.actionByRoot[s];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const u=new Y0(this,o,t,n);return this._bindAction(u,c),this._addInactiveAction(u,a,s),u}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?Kr.findByName(n,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,s,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const o=s.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const o in s){const a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class $0{constructor(e,t,n=0,i=1/0){this.ray=new Gs(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new go,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Qr(e,this,n,t),n.sort(Ml),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Qr(e[i],this,n,t);return n.sort(Ml),n}}function Ml(r,e){return r.distance-e.distance}function Qr(r,e,t,n){if(r.layers.test(e.layers)&&r.raycast(e,t),n===!0){const i=r.children;for(let s=0,o=i.length;s<o;s++)Qr(i[s],e,t,!0)}}class Q0{constructor(){this.type="ShapePath",this.color=new De,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Zr,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,s,o){return this.currentPath.bezierCurveTo(e,t,n,i,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(v){const y=[];for(let _=0,x=v.length;_<x;_++){const w=v[_],E=new Ns;E.curves=w.curves,y.push(E)}return y}function n(v,y){const _=y.length;let x=!1;for(let w=_-1,E=0;E<_;w=E++){let L=y[w],b=y[E],T=b.x-L.x,R=b.y-L.y;if(Math.abs(R)>Number.EPSILON){if(R<0&&(L=y[E],T=-T,b=y[w],R=-R),v.y<L.y||v.y>b.y)continue;if(v.y===L.y){if(v.x===L.x)return!0}else{const U=R*(v.x-L.x)-T*(v.y-L.y);if(U===0)return!0;if(U<0)continue;x=!x}}else{if(v.y!==L.y)continue;if(b.x<=v.x&&v.x<=L.x||L.x<=v.x&&v.x<=b.x)return!0}}return x}const i=fi.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,l;const c=[];if(s.length===1)return a=s[0],l=new Ns,l.curves=a.curves,c.push(l),c;let u=!i(s[0].getPoints());u=e?!u:u;const h=[],d=[];let m=[],g=0,p;d[g]=void 0,m[g]=[];for(let v=0,y=s.length;v<y;v++)a=s[v],p=a.getPoints(),o=i(p),o=e?!o:o,o?(!u&&d[g]&&g++,d[g]={s:new Ns,p},d[g].s.curves=a.curves,u&&g++,m[g]=[]):m[g].push({h:a,p:p[0]});if(!d[0])return t(s);if(d.length>1){let v=!1,y=0;for(let _=0,x=d.length;_<x;_++)h[_]=[];for(let _=0,x=d.length;_<x;_++){const w=m[_];for(let E=0;E<w.length;E++){const L=w[E];let b=!0;for(let T=0;T<d.length;T++)n(L.p,d[T].p)&&(_!==T&&y++,b?(b=!1,h[T].push(L)):v=!0);b&&h[_].push(L)}}y>0&&v===!1&&(m=h)}let f;for(let v=0,y=d.length;v<y;v++){l=d[v].s,c.push(l),f=m[v];for(let _=0,x=f.length;_<x;_++)l.holes.push(f[_].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fo);function wl(r,e){if(e===hh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Gr||e===tc){let t=r.getIndex();if(t===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===Gr)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class Oo extends Ei{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new s_(t)}),this.register(function(t){return new h_(t)}),this.register(function(t){return new d_(t)}),this.register(function(t){return new f_(t)}),this.register(function(t){return new o_(t)}),this.register(function(t){return new a_(t)}),this.register(function(t){return new l_(t)}),this.register(function(t){return new c_(t)}),this.register(function(t){return new i_(t)}),this.register(function(t){return new u_(t)}),this.register(function(t){return new r_(t)}),this.register(function(t){return new t_(t)}),this.register(function(t){return new p_(t)}),this.register(function(t){return new m_(t)})}load(e,t,n,i){const s=this;let o;this.resourcePath!==""?o=this.resourcePath:this.path!==""?o=this.path:o=$r.extractUrlBase(e),this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Po(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Oc){try{o[Ve.KHR_BINARY_GLTF]=new g_(e)}catch(h){i&&i(h);return}s=JSON.parse(o[Ve.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new L_(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);a[h.name]=h,o[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const h=s.extensionsUsed[u],d=s.extensionsRequired||[];switch(h){case Ve.KHR_MATERIALS_UNLIT:o[h]=new n_;break;case Ve.KHR_DRACO_MESH_COMPRESSION:o[h]=new __(s,this.dracoLoader);break;case Ve.KHR_TEXTURE_TRANSFORM:o[h]=new v_;break;case Ve.KHR_MESH_QUANTIZATION:o[h]=new x_;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function e_(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const Ve={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class t_{constructor(e){this.parser=e,this.name=Ve.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new De(16777215);l.color!==void 0&&u.fromArray(l.color);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new z0(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Fn(u),c.distance=h;break;case"spot":c=new N0(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,yn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class n_{constructor(){this.name=Ve.KHR_MATERIALS_UNLIT}getMaterialType(){return ht}extendParams(e,t,n){const i=[];e.color=new De(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.fromArray(o),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,We))}return Promise.all(i)}}class i_{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class s_{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new pe(a,a)}return Promise.all(s)}}class r_{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class o_{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new De(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];return o.sheenColorFactor!==void 0&&t.sheenColor.fromArray(o.sheenColorFactor),o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,We)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class a_{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class l_{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new De(a[0],a[1],a[2]),Promise.all(s)}}class c_{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class u_{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:qn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new De(a[0],a[1],a[2]),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,We)),Promise.all(s)}}class h_{constructor(e){this.parser=e,this.name=Ve.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class d_{constructor(e){this.parser=e,this.name=Ve.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class f_{constructor(e){this.parser=e,this.name=Ve.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class p_{constructor(e){this.name=Ve.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(m){return m.buffer}):o.ready.then(function(){const m=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(m),u,h,d,i.mode,i.filter),m})})}else return null}}class m_{constructor(e){this.name=Ve.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Dt.TRIANGLES&&c.mode!==Dt.TRIANGLE_STRIP&&c.mode!==Dt.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,m=[];for(const g of h){const p=new Oe,f=new P,v=new Ht,y=new P(1,1,1),_=new Gg(g.geometry,g.material,d);for(let x=0;x<d;x++)l.TRANSLATION&&f.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&v.fromBufferAttribute(l.ROTATION,x),l.SCALE&&y.fromBufferAttribute(l.SCALE,x),_.setMatrixAt(x,p.compose(f,v,y));for(const x in l)x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,l[x]);Qe.prototype.copy.call(_,g),_.frustumCulled=!1,this.parser.assignFinalMaterial(_),m.push(_)}return u.isGroup?(u.clear(),u.add(...m),u):m[0]}))}}const Oc="glTF",Bi=12,Tl={JSON:1313821514,BIN:5130562};class g_{constructor(e){this.name=Ve.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Bi),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Oc)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Bi,s=new DataView(e,Bi);let o=0;for(;o<i;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===Tl.JSON){const c=new Uint8Array(e,Bi+o,a);this.content=n.decode(c)}else if(l===Tl.BIN){const c=Bi+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class __{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ve.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=eo[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=eo[u]||u.toLowerCase();if(o[u]!==void 0){const d=n.accessors[e.attributes[u]],m=pi[d.componentType];c[h]=m.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h){i.decodeDracoFile(u,function(d){for(const m in d.attributes){const g=d.attributes[m],p=l[m];p!==void 0&&(g.normalized=p)}h(d)},a,c)})})}}class v_{constructor(){this.name=Ve.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class x_{constructor(){this.name=Ve.KHR_MESH_QUANTIZATION}}class zc extends rs{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,h=(n-t)/u,d=h*h,m=d*h,g=e*c,p=g-c,f=-2*m+3*d,v=m-d,y=1-f,_=v-d+h;for(let x=0;x!==a;x++){const w=o[p+x+a],E=o[p+x+l]*u,L=o[g+x+a],b=o[g+x]*u;s[x]=y*w+_*E+f*L+v*b}return s}}const y_=new Ht;class b_ extends zc{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return y_.fromArray(s).normalize().toArray(s),s}}const Dt={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},pi={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Al={9728:ut,9729:wt,9984:Vr,9985:Ql,9986:Is,9987:zn},El={33071:Nt,33648:Os,10497:_i},Nr={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},eo={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},xn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},S_={CUBICSPLINE:void 0,LINEAR:xi,STEP:Zi},Fr={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function M_(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Ro({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:fn})),r.DefaultMaterial}function ki(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function yn(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function w_(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):r.attributes.position;o.push(d)}if(i){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):r.attributes.normal;a.push(d)}if(s){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):r.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2];return n&&(r.morphAttributes.position=u),i&&(r.morphAttributes.normal=h),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function T_(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function A_(r){const e=r.extensions&&r.extensions[Ve.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+Cl(e.attributes):t=r.indices+":"+Cl(r.attributes)+":"+r.mode,t}function Cl(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function to(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function E_(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const C_=new Oe;class L_{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new e_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&s<98?this.textureLoader=new Fc(this.options.manager):this.textureLoader=new B0(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Po(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};ki(s,a,i),yn(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ve.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load($r.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Nr[i.type],a=pi[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Mt(c,o,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=Nr[i.type],c=pi[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=i.byteOffset||0,m=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let p,f;if(m&&m!==h){const v=Math.floor(d/m),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+v+":"+i.count;let _=t.cache.get(y);_||(p=new c(a,v*m,i.count*m/u),_=new Og(p,m/u),t.cache.add(y,_)),f=new So(_,l,d%m/u,g)}else a===null?p=new c(i.count*l):p=new c(a,d,i.count*l),f=new Mt(p,l,g);if(i.sparse!==void 0){const v=Nr.SCALAR,y=pi[i.sparse.indices.componentType],_=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,w=new y(o[1],_,i.sparse.count*v),E=new c(o[2],x,i.sparse.count*l);a!==null&&(f=new Mt(f.array.slice(),f.itemSize,f.normalized));for(let L=0,b=w.length;L<b;L++){const T=w[L];if(f.setX(T,E[L*l]),l>=2&&f.setY(T,E[L*l+1]),l>=3&&f.setZ(T,E[L*l+2]),l>=4&&f.setW(T,E[L*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return f})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"";const d=(s.samplers||{})[o.sampler]||{};return u.magFilter=Al[d.magFilter]||wt,u.minFilter=Al[d.minFilter]||zn,u.wrapS=El[d.wrapS]||_i,u.wrapT=El[d.wrapT]||_i,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const d=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(d,m){let g=d;t.isImageBitmapLoader===!0&&(g=function(p){const f=new pt(p);f.needsUpdate=!0,d(f)}),t.load($r.resolveURL(h,s.path),g,void 0,m)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),h.userData.mimeType=o.mimeType||E_(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord!=0&&!(t==="aoMap"&&n.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+n.texCoord+" for texture "+t+" not yet supported."),s.extensions[Ve.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Ve.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[Ve.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return i!==void 0&&(o.encoding=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new To,Kt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Sc,Kt.prototype.copy.call(l,n),l.color.copy(n.color),this.cache.add(a,l)),n=l}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}n.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=n}getMaterialType(){return Ro}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[Ve.KHR_MATERIALS_UNLIT]){const h=i[Ve.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,s,t))}else{const h=s.pbrMetallicRoughness||{};if(a.color=new De(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;a.color.fromArray(d),a.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,We)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=cn);const u=s.alphaMode||Fr.OPAQUE;if(u===Fr.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Fr.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==ht&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new pe(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;a.normalScale.set(h,h)}return s.occlusionTexture!==void 0&&o!==ht&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==ht&&(a.emissive=new De().fromArray(s.emissiveFactor)),s.emissiveTexture!==void 0&&o!==ht&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,We)),Promise.all(c).then(function(){const h=new o(a);return s.name&&(h.name=s.name),yn(h,s),t.associations.set(h,{materials:e}),s.extensions&&ki(i,h,s),h})}createUniqueName(e){const t=qe.sanitizeNodeName(e||"");let n=t;for(let i=1;this.nodeNamesUsed[n];++i)n=t+"_"+i;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[Ve.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Ll(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=A_(c),h=i[u];if(h)o.push(h.promise);else{let d;c.extensions&&c.extensions[Ve.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=Ll(new Bt,c,t),i[u]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?M_(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let m=0,g=u.length;m<g;m++){const p=u[m],f=o[m];let v;const y=c[m];if(f.mode===Dt.TRIANGLES||f.mode===Dt.TRIANGLE_STRIP||f.mode===Dt.TRIANGLE_FAN||f.mode===void 0)v=s.isSkinnedMesh===!0?new Bg(p,y):new Tt(p,y),v.isSkinnedMesh===!0&&v.normalizeSkinWeights(),f.mode===Dt.TRIANGLE_STRIP?v.geometry=wl(v.geometry,tc):f.mode===Dt.TRIANGLE_FAN&&(v.geometry=wl(v.geometry,Gr));else if(f.mode===Dt.LINES)v=new Hg(p,y);else if(f.mode===Dt.LINE_STRIP)v=new wo(p,y);else if(f.mode===Dt.LINE_LOOP)v=new Wg(p,y);else if(f.mode===Dt.POINTS)v=new Mc(p,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+f.mode);Object.keys(v.geometry.morphAttributes).length>0&&T_(v,s),v.name=t.createUniqueName(s.name||"mesh_"+e),yn(v,s),f.extensions&&ki(i,v,f),t.assignFinalMaterial(v),h.push(v)}for(let m=0,g=h.length;m<g;m++)t.associations.set(h[m],{meshes:e,primitives:m});if(h.length===1)return h[0];const d=new Nn;t.associations.set(d,{meshes:e});for(let m=0,g=h.length;m<g;m++)d.add(h[m]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new ft(Lh.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new xo(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),yn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const d=new Oe;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Mo(a,l)})}loadAnimation(e){const n=this.json.animations[e],i=[],s=[],o=[],a=[],l=[];for(let c=0,u=n.channels.length;c<u;c++){const h=n.channels[c],d=n.samplers[h.sampler],m=h.target,g=m.node,p=n.parameters!==void 0?n.parameters[d.input]:d.input,f=n.parameters!==void 0?n.parameters[d.output]:d.output;i.push(this.getDependency("node",g)),s.push(this.getDependency("accessor",p)),o.push(this.getDependency("accessor",f)),a.push(d),l.push(m)}return Promise.all([Promise.all(i),Promise.all(s),Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2],m=c[3],g=c[4],p=[];for(let v=0,y=u.length;v<y;v++){const _=u[v],x=h[v],w=d[v],E=m[v],L=g[v];if(_===void 0)continue;_.updateMatrix();let b;switch(xn[L.path]){case xn.weights:b=ts;break;case xn.rotation:b=Hn;break;case xn.position:case xn.scale:default:b=ns;break}const T=_.name?_.name:_.uuid,R=E.interpolation!==void 0?S_[E.interpolation]:xi,U=[];xn[L.path]===xn.weights?_.traverse(function(N){N.morphTargetInfluences&&U.push(N.name?N.name:N.uuid)}):U.push(T);let Z=w.array;if(w.normalized){const N=to(Z.constructor),I=new Float32Array(Z.length);for(let k=0,X=Z.length;k<X;k++)I[k]=Z[k]*N;Z=I}for(let N=0,I=U.length;N<I;N++){const k=new b(U[N]+"."+xn[L.path],x.array,Z,R);E.interpolation==="CUBICSPLINE"&&(k.createInterpolant=function(Q){const G=this instanceof Hn?b_:zc;return new G(this.times,this.values,this.getValueSize()/3,Q)},k.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),p.push(k)}}const f=n.name?n.name:"animation_"+e;return new Kr(f,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(m){m.isSkinnedMesh&&m.bind(d,C_)});for(let m=0,g=h.length;m<g;m++)u.add(h[m]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new bc:c.length>1?u=new Nn:c.length===1?u=c[0]:u=new Qe,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(s.name&&(u.userData.name=s.name,u.name=o),yn(u,s),s.extensions&&ki(n,u,s),s.matrix!==void 0){const h=new Oe;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new Nn;n.name&&(s.name=i.createUniqueName(n.name)),yn(s,n),n.extensions&&ki(t,s,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)s.add(l[u]);const c=u=>{const h=new Map;for(const[d,m]of i.associations)(d instanceof Kt||d instanceof pt)&&h.set(d,m);return u.traverse(d=>{const m=i.associations.get(d);m!=null&&h.set(d,m)}),h};return i.associations=c(s),s})}}function R_(r,e,t){const n=e.attributes,i=new Si;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new P(l[0],l[1],l[2]),new P(c[0],c[1],c[2])),a.normalized){const u=to(pi[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new P,l=new P;for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],m=d.min,g=d.max;if(m!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(m[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(m[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(m[2]),Math.abs(g[2]))),d.normalized){const p=to(pi[d.componentType]);l.multiplyScalar(p)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new Mi;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function Ll(r,e,t){const n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){r.setAttribute(a,l)})}for(const o in n){const a=eo[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return yn(r,e),R_(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?w_(r,e.targets,t):r})}class P_{constructor(e,t){this.document=e,this.window=t,this.isActive,this.animations=[],this.render()}setIsActive(e,t){this.isActive=e,t==="play"?this.animations.forEach(n=>n.play()):this.animations.forEach(n=>n.pause())}render(){const e=new URL("/patryk-cv/assets/mylaptop2-3c742ff9.gltf",self.location),t=this.document.querySelectorAll(".about-svg-path"),n=t[0].getTotalLength();t.forEach(y=>{y.style.strokeDasharray=y.getTotalLength()}),xe({targets:t,strokeDashoffset:function(y,_){return _%2==0?[0,n]:[n,0]},duration:5e3,easing:"linear",direction:"alternate",delay:function(y,_){return 300*(_+1)},autoplay:!0,loop:!0});const i=new ss({alpha:!0,antialias:!0}),s=this.document.querySelector(".about-left");i.setSize(s.clientWidth,s.clientHeight),s.appendChild(i.domElement);const o=new bo,a=new Fn(16777215,5);a.position.set(30,30,0),a.lookAt(0,0,0),o.add(a);const l=new ft(75,s.clientWidth/s.clientHeight,.1,1e3);l.lookAt(-1.5,-1.3,-1.5),l.position.set(25,25,25);const c=new Oo;let u;c.load(e.href,function(y){u=y.scene,o.add(u)},void 0,function(y){console.error(y)});let h=0;const d={h2:0,x:-10,y:30,z:40,rotX:8,rotY:4,rotYEnd:0,rotZ:1.5,ab1:100,ab2:100,ab3:100,ab4:100};let m=0;const g=xe({targets:d,keyframes:[{h2:-100,duration:100},{x:8,y:8,z:-8,rotX:0,rotY:-1.36,rotZ:0,ab1:0,endDelay:100},{x:-30,y:-10,z:20,rotY:0,ab1:-100,ab2:0,endDelay:100},{x:-20,y:0,z:-10,rotY:-.7,ab2:-100,ab3:0,endDelay:100},{ab3:-100,endDelay:100,rotY:-3,z:10}],elasticity:300,easing:"linear",autoplay:!1}),p=this.document.querySelector(".about"),f=()=>{if(this.isActive){const y=this.document.documentElement.clientHeight,_=p.getBoundingClientRect().top,x=p.offsetHeight;m=_*-1/(x-y),m<=1.1&&(g.seek(m*g.duration),u!==void 0&&(u.position.x=d.x,u.position.y=d.y,u.position.z=d.z,u.rotation.x=d.rotX,u.rotation.y=d.rotY,u.rotation.z=d.rotZ),this.document.querySelector("#about-me-h2").style.transform=`translateX(${d.h2}vw)`,this.document.querySelector("#about-content-div-1").style.transform="translate(-50%, "+d.ab1+"vh)",this.document.querySelector("#about-content-div-2").style.transform="translate(-50%, "+d.ab2+"vh)",this.document.querySelector("#about-content-div-3").style.transform="translate(-50%, "+d.ab3+"vh)")}};this.window.addEventListener("scroll",f),f();function v(y){if(y.isActive){if(u!==void 0){if(h===0){u.scale.x=7.5,u.scale.y=7.5,u.scale.z=7.5,u.position.x=d.x,u.position.y=d.y,u.position.z=d.z;let _,x,w,E;u.children[1].children.forEach(T=>{T.name==="Keyboard"&&(_=T.children[0],x=T.children[1]),T.name==="img1"&&(w=T),T.name==="img2"&&(E=T)});const L={r:0,g:.5,b:0},b={alphaImg1:1,alphaImg2:0};y.animations.push(xe({targets:b,round:10,alphaImg1:[{delay:6e3,value:0,duration:1e3},{delay:6e3,value:1,duration:1e3}],alphaImg2:[{delay:6e3,value:1,duration:1e3},{delay:6e3,value:0,duration:1e3}],loop:!0,update:function(){w.material.opacity=b.alphaImg1,E.material.opacity=b.alphaImg2}})),x.material.emissiveIntensity=1,y.animations.push(xe({targets:L,r:[{value:0},{value:.5},{value:0}],g:[{value:0},{value:0},{value:.5}],b:[{value:.5},{value:0},{value:0}],easing:"linear",duration:2e4,delay:0,loop:!0,update:function(){_.material.color.r=L.r,_.material.color.g=L.g,_.material.color.b=L.b,_.material.emissive.r=L.r,_.material.emissive.g=L.g,_.material.emissive.b=L.b,x.material.color.r=L.r+.2,x.material.color.g=L.g+.2,x.material.color.b=L.b+.2}}))}h++}i.render(o,l)}}i.setAnimationLoop(()=>v(this)),this.window.addEventListener("resize",function(){l.aspect=s.clientWidth/s.clientHeight,l.updateProjectionMatrix(),i.setSize(s.clientWidth,s.clientHeight)})}}class I_{constructor(e,t){this.animations=[],this.window=t,this.avatar=e.querySelector("#avatar"),this.helloWorldSpans=e.querySelectorAll("#hello-world span"),this.name=e.querySelectorAll("#name"),this.nameSurname=e.querySelectorAll("#namesurname"),this.initCount=0,this.homeTopLeft=e.querySelector("#homeTopLeft"),this.homeTopRight=e.querySelector("#homeTopRight"),this.homeBlob1=e.querySelector(".home-blob1"),this.homeBlob2=e.querySelector(".home-blob2"),this.homeBlob3=e.querySelector(".home-blob3"),this.homeBlob4=e.querySelector(".home-blob4"),this.homeBlob5=e.querySelector(".home-blob5"),this.homeBlob6=e.querySelector(".home-blob6"),this.homeBlob7=e.querySelector(".home-blob7"),this.homeBlob8=e.querySelector(".home-blob8"),this.homeBlob9=e.querySelector(".home-blob9"),this.homeBlob10=e.querySelector(".home-blob10"),this.homeBlob11=e.querySelector(".home-blob11"),this.homeBlob12=e.querySelector(".home-blob12"),this.homeBlob13=e.querySelector(".home-blob13"),this.homeBlob14=e.querySelector(".home-blob14"),this.homeBlob15=e.querySelector(".home-blob15"),this.homeBlob16=e.querySelector(".home-blob16"),this.render()}getAnimations(){return this.animations}animationsSet(e){e==="play"?this.animations.forEach(t=>t.play()):this.animations.forEach(t=>t.pause())}setAnimations(e){this.animations=e}initMoveForElements(e){e.animations.push(xe({targets:e.homeTopLeft,duration:5e3,delay:0,easing:"linear",translateX:[{value:20},{value:-20}],translateY:[{value:-20},{value:20}],direction:"alternate",loop:!0})),e.animations.push(xe({targets:e.homeTopRight,duration:5e3,delay:0,easing:"linear",translateX:[{value:20},{value:-20}],translateY:[{value:-20},{value:20}],direction:"alternate",loop:!0}))}getRandomInt(e,t){return Math.random()*(t-e)+e}initWaves(){this.animations.push(xe({targets:this.homeBlob1,d:[{value:"M0 918C-73.6 850 -147.1 781.9 -249.7 768.5C-352.3 755 -483.9 796.1 -539.6 742.7C-595.3 689.3 -575.1 541.3 -627 455.5C-678.9 369.8 -803 346.1 -863.6 280.6C-924.1 215 -921 107.5 -918 0L0 0Z"},{value:"M0 918C-99 912.9 -198 907.8 -283.7 873.1C-369.3 838.4 -441.7 774.1 -518.4 713.6C-595.2 653 -676.3 596.3 -712.7 517.8C-749.1 439.4 -740.8 339.3 -767.5 249.4C-794.2 159.5 -856.1 79.7 -918 0L0 0Z"},{value:"M0 918C-109.6 928 -219.1 938 -283.7 873.1C-348.2 808.2 -367.7 668.4 -442 608.4C-516.3 548.4 -645.3 568.2 -721.6 524.3C-798 480.4 -821.6 372.7 -845.5 274.7C-869.4 176.7 -893.7 88.4 -918 0L0 0Z"}],easing:"linear",duration:1e4,delay:0,delay:0,direction:"alternate",loop:!0})),this.animations.push(xe({targets:this.homeBlob2,d:[{value:"M0 850.5C-79.3 802.9 -158.6 755.3 -233.3 718.2C-308.1 681.1 -378.4 654.5 -449 618C-519.5 581.5 -590.4 535 -654.8 475.7C-719.2 416.4 -777.3 344.3 -808.9 262.8C-840.4 181.4 -845.5 90.7 -850.5 0L0 0Z"},{value:"M0 803.3C-58.2 715.3 -116.4 627.4 -199.8 615C-283.3 602.6 -391.9 665.7 -472.1 649.8C-552.4 634 -604.1 539 -621.5 451.6C-638.9 364.1 -622 284.1 -646.6 210.1C-671.2 136.1 -737.2 68 -803.2 0L0 0Z"},{value:"M0 803.3C-67.1 739.7 -134.1 676.2 -209.3 644.1C-284.4 612 -367.7 611.2 -412 567C-456.3 522.8 -461.6 435.3 -524.5 381.1C-587.5 326.9 -707.9 306.2 -763.9 248.2C-820 190.3 -811.6 95.1 -803.2 0L0 0Z"}],easing:"linear",duration:1e4,delay:0,delay:0,direction:"alternate",loop:!0})),this.animations.push(xe({targets:this.homeBlob3,d:[{value:"M0 688.5C-59.4 639.4 -118.7 590.3 -186.6 574.2C-254.4 558.1 -330.8 575 -402.9 554.6C-475.1 534.2 -542.9 476.6 -557 404.7C-571.1 332.8 -531.3 246.7 -544.2 176.8C-557.2 107 -622.8 53.5 -688.5 0L0 0Z"},{value:"M0 688.5C-74.3 684.8 -148.6 681.2 -212.8 654.8C-276.9 628.4 -331 579.3 -387.1 532.7C-443.1 486.2 -501.2 442.1 -527.9 383.5C-554.6 325 -549.8 252 -571.3 185.6C-592.9 119.3 -640.7 59.7 -688.5 0L0 0Z"},{value:"M0 688.5C-68.8 675.8 -137.6 663.1 -209.5 644.8C-281.4 626.6 -356.3 602.8 -401.2 552.2C-446 501.5 -460.9 424.1 -504.2 366.3C-547.5 308.6 -619.3 270.5 -654.8 212.8C-690.3 155 -689.4 77.5 -688.5 0L0 0Z"}],easing:"linear",duration:1e4,delay:0,delay:0,direction:"alternate",loop:!0})),this.animations.push(xe({targets:this.homeBlob4,d:[{value:"M0 573.8C-64.1 574.4 -128.2 575 -177.3 545.7C-226.4 516.3 -260.4 457 -302.7 416.6C-345 376.3 -395.5 355 -438.4 318.5C-481.3 282 -516.6 230.4 -537.9 174.8C-559.2 119.2 -566.5 59.6 -573.7 0L0 0Z"},{value:"M0 573.8C-44.1 521.7 -88.2 469.7 -148.7 457.7C-209.2 445.7 -286 473.8 -325.9 448.5C-365.7 423.2 -368.5 344.7 -405 294.3C-441.6 243.9 -511.9 221.6 -545.7 177.3C-579.4 133 -576.6 66.5 -573.7 0L0 0Z"},{value:"M0 573.8C-42 514.8 -83.9 455.9 -143.5 441.6C-203.1 427.4 -280.3 457.9 -312.6 430.3C-345 402.7 -332.5 317.1 -372.1 270.4C-411.7 223.7 -503.4 215.9 -545.7 177.3C-587.9 138.7 -580.8 69.4 -573.7 0L0 0Z"}],easing:"linear",duration:1e4,delay:0,delay:0,direction:"alternate",loop:!0})),this.animations.push(xe({targets:this.homeBlob5,d:[{value:"M0 459C-33.6 411.9 -67.1 364.7 -114.8 353.3C-162.5 341.9 -224.2 366.3 -250.1 344.2C-276 322.2 -266 253.7 -297.7 216.3C-329.4 178.9 -402.7 172.7 -436.5 141.8C-470.4 111 -464.7 55.5 -459 0L0 0Z"},{value:"M0 459C-43 434.6 -86 410.3 -127.9 393.7C-169.8 377.2 -210.7 368.6 -255.4 351.5C-300.1 334.5 -348.7 309 -371.3 269.8C-394 230.6 -390.6 177.5 -400.9 130.3C-411.1 83 -435.1 41.5 -459 0L0 0Z"},{value:"M0 459C-39.9 422.7 -79.9 386.4 -119.4 367.6C-159 348.8 -198.1 347.5 -244.8 337C-291.5 326.4 -345.7 306.7 -371.3 269.8C-396.9 232.9 -393.9 179 -403.7 131.2C-413.6 83.4 -436.3 41.7 -459 0L0 0Z"}],easing:"linear",duration:1e4,delay:0,delay:0,direction:"alternate",loop:!0})),this.animations.push(xe({targets:this.homeBlob6,d:[{value:"M0 344.3C-32.3 326 -64.5 307.7 -95.9 295.3C-127.4 282.9 -158 276.4 -191.5 263.6C-225.1 250.9 -261.5 231.8 -278.5 202.3C-295.5 172.9 -292.9 133.1 -300.7 97.7C-308.4 62.2 -326.3 31.1 -344.2 0L0 0Z"},{value:"M0 344.3C-34.4 337.9 -68.8 331.5 -104.8 322.4C-140.7 313.3 -178.1 301.4 -200.6 276.1C-223 250.8 -230.4 212 -252.1 183.2C-273.8 154.3 -309.7 135.3 -327.4 106.4C-345.1 77.5 -344.7 38.7 -344.2 0L0 0Z"},{value:"M0 344.3C-25.2 308.9 -50.4 273.5 -86.1 265C-121.8 256.4 -168.2 274.7 -187.6 258.2C-207 241.6 -199.5 190.3 -223.3 162.2C-247 134.2 -302 129.5 -327.4 106.4C-352.8 83.2 -348.5 41.6 -344.2 0L0 0Z"}],easing:"linear",duration:1e4,delay:0,delay:0,direction:"alternate",loop:!0})),this.animations.push(xe({targets:this.homeBlob7,d:[{value:"M0 229.5C-25.6 229.8 -51.3 230 -70.9 218.3C-90.6 206.5 -104.2 182.8 -121.1 166.7C-138 150.5 -158.2 142 -175.4 127.4C-192.5 112.8 -206.7 92.2 -215.2 69.9C-223.7 47.7 -226.6 23.8 -229.5 0L0 0Z"},{value:"M0 229.5C-21.5 217.3 -43 205.1 -64 196.9C-84.9 188.6 -105.3 184.3 -127.7 175.8C-150.1 167.2 -174.4 154.5 -185.7 134.9C-197 115.3 -195.3 88.8 -200.4 65.1C-205.6 41.5 -217.5 20.7 -229.5 0L0 0Z"},{value:"M0 229.5C-17.6 208.7 -35.3 187.9 -59.5 183.1C-83.7 178.3 -114.4 189.5 -130.3 179.4C-146.3 169.3 -147.4 137.9 -162 117.7C-176.6 97.5 -204.8 88.7 -218.3 70.9C-231.8 53.2 -230.6 26.6 -229.5 0L0 0Z"}],easing:"linear",duration:1e4,delay:0,delay:0,direction:"alternate",loop:!0})),this.animations.push(xe({targets:this.homeBlob8,d:[{value:"M0 114.8C-10 105.7 -20 96.6 -29.9 91.9C-39.7 87.2 -49.5 86.9 -61.2 84.2C-72.9 81.6 -86.4 76.7 -92.8 67.4C-99.2 58.2 -98.5 44.7 -100.9 32.8C-103.4 20.8 -109.1 10.4 -114.7 0L0 0Z"},{value:"M0 114.8C-12.8 114.9 -25.6 115 -35.5 109.1C-45.3 103.3 -52.1 91.4 -60.5 83.3C-69 75.3 -79.1 71 -87.7 63.7C-96.3 56.4 -103.3 46.1 -107.6 35C-111.8 23.8 -113.3 11.9 -114.7 0L0 0Z"},{value:"M0 114.8C-10 105.7 -20 96.6 -29.9 91.9C-39.7 87.2 -49.5 86.9 -61.2 84.2C-72.9 81.6 -86.4 76.7 -92.8 67.4C-99.2 58.2 -98.5 44.7 -100.9 32.8C-103.4 20.8 -109.1 10.4 -114.7 0L0 0Z"}],easing:"linear",duration:1e4,delay:0,delay:0,direction:"alternate",loop:!0})),this.animations.push(xe({targets:this.homeBlob9,d:[{value:"M0 -918C95 -886.9 190 -855.8 261.1 -803.6C332.3 -751.4 379.6 -678.1 464.4 -639.1C549.1 -600.1 671.2 -595.5 742.7 -539.6C814.2 -483.7 835.2 -376.6 856 -278.1C876.7 -179.6 897.4 -89.8 918 0L0 0Z"},{value:"M0 -918C87.4 -872.3 174.9 -826.6 258 -794.1C341.2 -761.7 420.1 -742.6 514.9 -708.7C609.7 -674.8 720.4 -626.3 742.7 -539.6C765 -452.9 698.8 -328.1 713.3 -231.8C727.8 -135.5 822.9 -67.7 918 0L0 0Z"},{value:"M0 -918C109.9 -927.3 219.8 -936.6 283.7 -873.1C347.5 -809.6 365.2 -673.2 447.3 -615.7C529.4 -558.1 675.8 -579.3 720.8 -523.7C765.9 -468.2 709.7 -335.9 725.7 -235.8C741.6 -135.7 829.8 -67.9 918 0L0 0Z"}],easing:"linear",duration:1e4,delay:0,delay:0,direction:"alternate",loop:!0})),this.animations.push(xe({targets:this.homeBlob10,d:[{value:"M0 -803.2C96.2 -811.4 192.4 -819.5 248.2 -763.9C304.1 -708.4 319.6 -589.1 391.4 -538.7C463.2 -488.3 591.3 -506.9 630.7 -458.3C670.2 -409.6 621 -293.9 634.9 -206.3C648.9 -118.7 726.1 -59.4 803.3 0L0 0Z"},{value:"M0 -803.2C73.8 -770.6 147.5 -737.9 234.7 -722.3C321.9 -706.7 422.4 -708.2 472.1 -649.8C521.9 -591.5 520.8 -473.3 540.8 -392.9C560.8 -312.6 601.9 -270.1 649.1 -210.9C696.3 -151.7 749.8 -75.9 803.3 0L0 0Z"},{value:"M0 -803.2C88.8 -802.5 177.6 -801.8 247.1 -760.6C316.7 -719.5 367 -637.9 419.7 -577.6C472.4 -517.4 527.4 -478.4 591.1 -429.5C654.8 -380.5 727.1 -321.5 763.9 -248.2C800.7 -175 802 -87.5 803.3 0L0 0Z"}],easing:"linear",duration:1e4,delay:0,delay:0,direction:"alternate",loop:!0})),this.animations.push(xe({targets:this.homeBlob11,d:[{value:"M0 -688.5C74 -685.1 148.1 -681.7 212.8 -654.8C277.4 -627.9 332.8 -577.5 383.1 -527.3C433.4 -477.1 478.7 -427.1 511.5 -371.6C544.3 -316.2 564.6 -255.2 592 -192.4C619.5 -129.5 654 -64.8 688.5 0L0 0Z"},{value:"M0 -688.5C77.9 -692 155.8 -695.5 212.8 -654.8C269.7 -614.1 305.8 -529.3 341.7 -470.2C377.5 -411.2 413 -378.1 471.5 -342.5C529.9 -307 611.2 -269.1 651.2 -211.6C691.2 -154.1 689.9 -77.1 688.5 0L0 0Z"},{value:"M0 -688.5C62.2 -644.5 124.5 -600.4 187.7 -577.8C251 -555.1 315.2 -553.9 387.1 -532.7C458.9 -511.6 538.4 -470.4 557 -404.7C575.6 -339 533.2 -248.6 545 -177.1C556.7 -105.5 622.6 -52.8 688.5 0L0 0Z"}],easing:"linear",duration:1e4,delay:0,delay:0,direction:"alternate",loop:!0})),this.animations.push(xe({targets:this.homeBlob12,d:[{value:"M0 -573.7C67.7 -579 135.5 -584.3 177.3 -545.7C219.1 -507 235.1 -424.4 278.8 -383.8C322.6 -343.1 394.1 -344.4 429.8 -312.3C465.5 -280.1 465.2 -214.6 483.3 -157C501.3 -99.4 537.5 -49.7 573.8 0L0 0Z"},{value:"M0 -573.7C53.1 -536.5 106.2 -499.3 154.1 -474.3C202 -449.4 244.7 -436.7 306 -421.2C367.3 -405.7 447.2 -387.3 464.2 -337.2C481.1 -287.2 435.1 -205.4 442.8 -143.9C450.6 -82.4 512.2 -41.2 573.8 0L0 0Z"},{value:"M0 -573.7C60 -557.3 120.1 -540.9 166.1 -511.2C212.1 -481.5 244.1 -438.5 300.1 -413.1C356.1 -387.7 436.1 -379.8 464.2 -337.2C492.2 -294.6 468.3 -217.3 477.9 -155.3C487.5 -93.3 530.6 -46.6 573.8 0L0 0Z"}],easing:"linear",duration:1e4,delay:0,delay:0,direction:"alternate",loop:!0})),this.animations.push(xe({targets:this.homeBlob13,d:[{value:"M0 -459C48 -445.9 96.1 -432.7 132.9 -409C169.7 -385.2 195.3 -350.8 240.1 -330.5C284.9 -310.2 348.9 -303.9 371.3 -269.8C393.8 -235.7 374.6 -173.8 382.3 -124.2C390 -74.6 424.5 -37.3 459 0L0 0Z"},{value:"M0 -459C49.3 -457.3 98.6 -455.6 141.8 -436.5C185.1 -417.5 222.4 -381.2 248.6 -342.2C274.8 -303.2 289.9 -261.5 311.5 -226.3C333 -191.1 360.9 -162.3 386.6 -125.6C412.3 -89 435.6 -44.5 459 0L0 0Z"},{value:"M0 -459C52.5 -462.1 105.1 -465.3 141.8 -436.5C178.6 -407.8 199.6 -347.2 223.7 -307.8C247.7 -268.5 274.7 -250.4 313.5 -227.8C352.3 -205.2 402.7 -178.1 428.9 -139.4C455.1 -100.7 457.1 -50.3 459 0L0 0Z"}],easing:"linear",duration:1e4,delay:0,delay:0,direction:"alternate",loop:!0})),this.animations.push(xe({targets:this.homeBlob14,d:[{value:"M0 -344.2C37 -343 73.9 -341.7 106.4 -327.4C138.8 -313.1 166.8 -285.9 186.5 -256.7C206.1 -227.4 217.5 -196.2 233.6 -169.7C249.7 -143.3 270.7 -121.7 290 -94.2C309.2 -66.7 326.7 -33.4 344.3 0L0 0Z"},{value:"M0 -344.2C31.1 -322.2 62.2 -300.2 93.9 -288.9C125.5 -277.6 157.6 -277 193.5 -266.4C229.5 -255.8 269.2 -235.2 278.5 -202.3C287.8 -169.5 266.6 -124.3 272.5 -88.5C278.4 -52.8 311.3 -26.4 344.3 0L0 0Z"},{value:"M0 -344.2C36 -334.4 72 -324.5 99.7 -306.7C127.3 -288.9 146.5 -263.1 180.1 -247.9C213.7 -232.6 261.7 -227.9 278.5 -202.3C295.3 -176.8 281 -130.4 286.7 -93.2C292.5 -56 318.4 -28 344.3 0L0 0Z"}],easing:"linear",duration:1e4,delay:0,delay:0,direction:"alternate",loop:!0})),this.animations.push(xe({targets:this.homeBlob15,d:[{value:"M0 -229.5C27.1 -231.6 54.2 -233.7 70.9 -218.3C87.7 -202.8 94 -169.8 111.5 -153.5C129 -137.2 157.6 -137.8 171.9 -124.9C186.2 -112.1 186.1 -85.9 193.3 -62.8C200.5 -39.8 215 -19.9 229.5 0L0 0Z"},{value:"M0 -229.5C24.6 -228.6 49.3 -227.8 70.9 -218.3C92.6 -208.8 111.2 -190.6 124.3 -171.1C137.4 -151.6 145 -130.8 155.7 -113.1C166.5 -95.5 180.5 -81.1 193.3 -62.8C206.1 -44.5 217.8 -22.2 229.5 0L0 0Z"},{value:"M0 -229.5C21.2 -214.6 42.5 -199.7 61.6 -189.7C80.8 -179.8 97.9 -174.7 122.4 -168.5C146.9 -162.3 178.9 -154.9 185.7 -134.9C192.4 -114.9 174 -82.2 177.1 -57.6C180.2 -33 204.9 -16.5 229.5 0L0 0Z"}],easing:"linear",duration:1e4,delay:0,delay:0,direction:"alternate",loop:!0})),this.animations.push(xe({targets:this.homeBlob16,d:[{value:"M0 -114.7C13 -115.3 26 -115.9 35.5 -109.1C45 -102.4 51 -88.2 56.9 -78.4C62.9 -68.5 68.8 -63 78.6 -57.1C88.3 -51.2 101.9 -44.8 108.5 -35.3C115.2 -25.7 115 -12.8 114.8 0L0 0Z"},{value:"M0 -114.7C13.5 -115.8 27.1 -116.9 35.5 -109.1C43.8 -101.4 47 -84.9 55.8 -76.8C64.5 -68.6 78.8 -68.9 86 -62.5C93.1 -56 93 -42.9 96.7 -31.4C100.3 -19.9 107.5 -9.9 114.8 0L0 0Z"},{value:"M0 -114.7C13.1 -115.5 26.3 -116.3 35.5 -109.1C44.7 -101.9 49.9 -86.8 55.9 -77C61.9 -67.1 68.7 -62.6 78.4 -56.9C88.1 -51.3 100.7 -44.5 107.2 -34.8C113.8 -25.2 114.3 -12.6 114.8 0L0 0Z"}],easing:"linear",duration:1e4,delay:0,delay:0,direction:"alternate",loop:!0}))}initElements(){xe.timeline().add({targets:this.avatar,translateX:[-150,0],opacity:[0,1],duration:1500}).add({targets:this.helloWorldSpans,opacity:[0,1],translateX:[30,0],duration:700,delay:xe.stagger(100)},"-=400").add({targets:this.name,opacity:[0,1],translateX:[30,0],duration:700},"-=400").add({targets:this.nameSurname,opacity:[0,1],translateX:[30,0],duration:700,complete:()=>this.initMoveForElements(this)},"-=400")}initBubbles(){let e;this.window.innerWidth<1024?e=30:e=70;const t=document.querySelector(".home-container-circle");for(let i=0;i<e;i++){const s=document.createElement("div");s.classList.add("circle"),t.appendChild(s)}document.querySelectorAll(".home-container-circle .circle").forEach(i=>{let s;this.window.innerWidth<1024?s=this.getRandomInt(10,20):s=this.getRandomInt(10,40),this.animations.push(xe({targets:i,easing:"linear",width:[{value:s,duration:0,delay:0}],height:[{value:s,duration:0,delay:0}],translateY:[{value:"101vh",duration:0,delay:0},{value:"-10vh",duration:function(){return xe.random(1e4,2e4)},delay:function(){return xe.random(1e3,13e3)}}],translateX:[{value:function(){return xe.random(2,98)+"vw"}}],loop:!0}))})}render(){this.initCount===0&&(this.initBubbles(),this.initWaves(),this.initElements(),this.initCount++)}}class D_{constructor(e,t){this.document=e,this.window=t,this.isActive,this.renderAboutHistory()}setIsActive(e){this.isActive=e}renderAboutHistory(){const e=(o,a,l)=>{a>l?this.document.querySelector(o).classList.add("active"):this.document.querySelector(o).classList.remove("active")};let t=0;var n=document.querySelector(".history-cls1"),i=n.getTotalLength();n.style.strokeDasharray=i+" "+i,n.style.strokeDashoffset=i,n.getBoundingClientRect();const s=this.document.querySelector(".about-history");this.window.addEventListener("scroll",()=>{if(this.isActive){const a=this.document.documentElement.clientHeight,l=s.getBoundingClientRect().top,c=s.offsetHeight;if(t=l*-1/(c-a/2),t<=1.1){var o=i*t;n.style.strokeDashoffset=i-o,e(".his-1",t,.12),e(".his-2",t,.18),e(".his-3",t,.25),e(".his-4",t,.3),e(".his-5",t,.36),e(".his-6",t,.41),e(".his-7",t,.49),e(".his-8",t,.54),e(".his-9",t,.6),e(".his-10",t,.66),e(".his-11",t,.72),e(".his-12",t,.79),e(".his-13",t,.85),e(".his-14",t,.92)}}})}}class N_{constructor(e,t){this.document=e,this.window=t,this.isActive=!1,this.renderKnowledge()}setIsActive(e){this.isActive=e}renderKnowledge(){const e=this.document.querySelector(".box-1"),t=this.document.querySelectorAll(".box-1-el"),n=this.document.querySelector(".box-2"),i=this.document.querySelectorAll(".box-2-el"),s=this.document.querySelector(".box-3"),o=this.document.querySelectorAll(".box-3-el"),a=this.document.querySelector(".box-4"),l=this.document.querySelectorAll(".box-4-el"),c=this.document.querySelector(".box-5"),u=this.document.querySelectorAll(".box-5-el"),h=this.document.querySelector(".box-6"),d=this.document.querySelectorAll(".box-6-el"),m=this.document.querySelector(".box-7"),g=this.document.querySelectorAll(".box-7-el"),p=this.document.querySelector(".box-8"),f=this.document.querySelectorAll(".box-8-el"),v=this.document.querySelector(".box-9"),y=this.document.querySelectorAll(".box-9-el"),_=this.document.querySelector(".box-10"),x=this.document.querySelectorAll(".box-10-el"),w=this.document.querySelector(".box-11"),E=this.document.querySelectorAll(".box-11-el"),L=new bo,b=new URL("/patryk-cv/assets/brain-778de25a.gltf",self.location),T=new ss({alpha:!0}),R=new Bt,U=new To({color:52479}),Z=[];for(let B=0;B<1e4;B++){const oe=(Math.random()-.5)*4e3,he=(Math.random()-.5)*4e3,ae=(Math.random()-.5)*4e3;Z.push(oe,he,ae)}R.setAttribute("position",new zt(Z,3));const N=new Mc(R,U);L.add(N);const I=this.document.querySelector(".knowledge-wrapper");T.setSize(I.offsetWidth,I.offsetHeight),I.appendChild(T.domElement);const k=new Fn(65280,5);k.position.set(-60,-30,0);const X=new Fn(65280,5);X.position.set(60,30,0);const Q=new Fn(16777215,1);Q.position.set(-60,30,0);const G=new Fn(16777215,1);G.position.set(60,-30,0),L.add(k),L.add(X),L.add(Q),L.add(G);const W=new ft(75,I.offsetWidth/I.offsetHeight,.1,1e3);W.lookAt(0,0,0),W.position.set(0,2,7);const ee=new Oo;let de,F;ee.load(b.href,function(B){F=B.scene,L.add(F),de=new K0(F),B.animations.forEach(function(he){de.clipAction(he).play()})},void 0,function(B){console.error(B)});let $=0;const ne={h2X:-100,posX:-15,posY:0,posZ:-10,rotX:0,rotY:0,rotZ:0},C={b1Bg:0,b1X:-300,b1Opacity:0,b2Bg:0,b2X:300,b2Opacity:0,b3Bg:0,b3X:-300,b3Opacity:0,b4Bg:0,b4X:300,b4Opacity:0,b5Bg:0,b5X:-300,b5Opacity:0,b6Bg:0,b6X:300,b6Opacity:0,b7Bg:0,b7X:-300,b7Opacity:0,b8Bg:0,b8X:300,b8Opacity:0,b9Bg:0,b9X:-300,b9Opacity:0,b10Bg:0,b10X:300,b10Opacity:0,b11Bg:0,b11X:-300,b11Opacity:0},te=xe({targets:[ne,C],keyframes:[{h2X:100,duration:2e3},{posX:0,posY:2,posZ:7,duration:600,delay:200},{posX:-5.71,posY:.85,posZ:.28,rotX:0,rotY:-1.71,rotZ:0,duration:600,delay:200},{b1Bg:.5,b1X:0,b1Opacity:1,delay:800,duration:300},{b1Bg:0,b1X:-300,b1Opacity:0,delay:800,duration:300},{posX:3,posY:1,posZ:-1,rotX:-6.28,rotY:0,duration:600,delay:200},{b2Bg:.5,b2X:0,b2Opacity:1,delay:800,duration:300},{b2Bg:0,b2X:300,b2Opacity:0,delay:800,duration:300},{posX:0,posY:1,posZ:5,duration:600,delay:200},{b3Bg:.5,b3X:0,b3Opacity:1,delay:800,duration:300},{b3Bg:0,b3X:-300,b3Opacity:0,delay:800,duration:300},{posX:-4,rotY:-1,duration:300},{posX:-3,posY:3,posZ:-3.5,rotY:-2,duration:300},{b4Bg:.5,b4X:0,b4Opacity:1,delay:800,duration:300},{b4Bg:0,b4X:300,b4Opacity:0,delay:800,duration:300},{posZ:-3,rotY:-5,posX:8,duration:300,delay:200},{posZ:-4.5,posY:-.3,posX:-2,rotY:-3,duration:300},{b5Bg:.5,b5X:0,b5Opacity:1,delay:800,duration:300},{b5Bg:0,b5X:-300,b5Opacity:0,delay:800,duration:300},{posZ:1,posY:-1,posX:1,rotY:-1,duration:300},{b6Bg:.5,b6X:0,b6Opacity:1,delay:800,duration:300},{b6Bg:0,b6X:300,b6Opacity:0,delay:800,duration:300},{delay:200,posY:4,posX:2,posZ:-1,rotY:0,duration:600},{b7Bg:.5,b7X:0,b7Opacity:1,delay:800,duration:300},{b7Bg:0,b7X:-300,b7Opacity:0,delay:800,duration:300},{posX:-.19,posY:4,posZ:3,rotX:-6.28,rotY:-.91,rotZ:0,duration:600},{b8Bg:.5,b8X:0,b8Opacity:1,delay:800,duration:300},{b8Bg:0,b8X:300,b8Opacity:0,delay:800,duration:300},{posX:-3.5,posY:4,posZ:2.19,rotY:-1.57,rotZ:0,duration:600},{b9Bg:.5,b9X:0,b9Opacity:1,delay:800,duration:300},{b9Bg:0,b9X:-300,b9Opacity:0,delay:800,duration:300},{posX:-1,posY:5,posZ:-1,rotY:.5,rotZ:0,duration:600},{b10Bg:.5,b10X:0,b10Opacity:1,delay:800,duration:300},{b10Bg:0,b10X:300,b10Opacity:0,delay:800,duration:300},{posX:3,posY:1.3,posZ:4,rotX:-6.28,rotY:0,rotZ:0,duration:600},{b11Bg:.5,b11X:0,b11Opacity:1,delay:800,duration:300},{b11Bg:0,b11X:-300,b11Opacity:0,delay:800,duration:300},{posX:0,posY:2,posZ:-7,rotY:-3.28,duration:600,delay:200}],elasticity:200,easing:"linear",autoplay:!1});function K(B){if(B.isActive){if(F!==void 0){if($===0){F.rotation.y=-1.57;let oe=[];F.children.forEach(he=>{if(he.name!=="Brain_Part_04")if(he.name[he.name.length-1]==="C"){if(he.type==="Group")he.children.forEach(ae=>{let Ae=ae.material.color;ae.material=new ht({color:Ae})});else{let ae=he.material.color;he.material=new ht({color:ae})}he.lookAt(W.position.x,W.position.y-90,W.position.z)}else he.material=new ht({color:65484}),oe.push(he)}),oe.forEach((he,ae)=>{const Ae={scaleX:.1};xe({targets:Ae,scaleX:[.04,.035],direction:"alternate",easing:"linear",update:function(){he.scale.x=Ae.scaleX},duration:1e3,delay:ae*100,endDelay:0,loop:!0})})}$++,N.rotation.y+=1e-4,N.rotation.x+=1e-4}T.render(L,W)}}let re=!1,se;T.setAnimationLoop(()=>K(this));const fe=this.document.querySelector(".knowledge"),Se=()=>{this.document.querySelector("#knowledge-h2").style.transform=`translateX(${ne.h2X}vw)`,e.style.backgroundColor=`rgba(0,0,0,${C.b1Bg})`,t.forEach(B=>{B.style.transform=`translateX(${Math.round(C.b1X)}px)`,B.style.opacity=C.b1Opacity}),n.style.backgroundColor=`rgba(0,0,0,${C.b2Bg})`,i.forEach(B=>{B.style.transform=`translateX(${Math.round(C.b2X)}px)`,B.style.opacity=C.b2Opacity}),s.style.backgroundColor=`rgba(0,0,0,${C.b3Bg})`,o.forEach(B=>{B.style.transform=`translateX(${Math.round(C.b3X)}px)`,B.style.opacity=C.b3Opacity}),a.style.backgroundColor=`rgba(0,0,0,${C.b4Bg})`,l.forEach(B=>{B.style.transform=`translateX(${Math.round(C.b4X)}px)`,B.style.opacity=C.b4Opacity}),c.style.backgroundColor=`rgba(0,0,0,${C.b5Bg})`,u.forEach(B=>{B.style.transform=`translateX(${Math.round(C.b5X)}px)`,B.style.opacity=C.b5Opacity}),h.style.backgroundColor=`rgba(0,0,0,${C.b6Bg})`,d.forEach(B=>{B.style.transform=`translateX(${Math.round(C.b6X)}px)`,B.style.opacity=C.b6Opacity}),m.style.backgroundColor=`rgba(0,0,0,${C.b7Bg})`,g.forEach(B=>{B.style.transform=`translateX(${Math.round(C.b7X)}px)`,B.style.opacity=C.b7Opacity}),p.style.backgroundColor=`rgba(0,0,0,${C.b8Bg})`,f.forEach(B=>{B.style.transform=`translateX(${Math.round(C.b8X)}px)`,B.style.opacity=C.b8Opacity}),v.style.backgroundColor=`rgba(0,0,0,${C.b9Bg})`,y.forEach(B=>{B.style.transform=`translateX(${Math.round(C.b9X)}px)`,B.style.opacity=C.b9Opacity}),_.style.backgroundColor=`rgba(0,0,0,${C.b10Bg})`,x.forEach(B=>{B.style.transform=`translateX(${Math.round(C.b10X)}px)`,B.style.opacity=C.b10Opacity}),w.style.backgroundColor=`rgba(0,0,0,${C.b11Bg})`,E.forEach(B=>{B.style.transform=`translateX(${Math.round(C.b11X)}px)`,B.style.opacity=C.b11Opacity})},Y=()=>{if(this.isActive){const B=this.document.documentElement.clientHeight,oe=fe.getBoundingClientRect().top,he=fe.offsetHeight;se=(oe*-1/(he-B)).toFixed(6),se<=1.1&&(te.seek(se*te.duration),se>=1?re=!0:re=!1,re||F!==void 0&&(W.position.x=ne.posX,W.position.y=ne.posY,W.position.z=ne.posZ,W.rotation.x=ne.rotX,W.rotation.y=ne.rotY,W.rotation.z=ne.rotZ,F.children.forEach(ae=>{ae.name[ae.name.length-1]==="C"&&ae.lookAt(W.position.x,W.position.y-90,W.position.z)}),Se()))}};this.document.addEventListener("scroll",Y),this.window.addEventListener("resize",function(){W.aspect=I.offsetWidth/I.offsetHeight,W.updateProjectionMatrix(),T.setSize(I.offsetWidth,I.offsetHeight)}),W.position.x=ne.posX,W.position.y=ne.posY,W.position.z=ne.posZ,W.rotation.x=ne.rotX,W.rotation.y=ne.rotY,W.rotation.z=ne.rotZ,Y()}}class Rl extends Lo{constructor(e,t={}){const n=t.font;if(n===void 0)super();else{const i=n.generateShapes(e,t.size);t.depth=t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(i,t)}this.type="TextGeometry"}}class F_ extends Ei{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new Po(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){const l=s.parse(JSON.parse(a));t&&t(l)},n,i)}parse(e){return new O_(e)}}class O_{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const n=[],i=z_(e,t,this.data);for(let s=0,o=i.length;s<o;s++)n.push(...i[s].toShapes());return n}}function z_(r,e,t){const n=Array.from(r),i=e/t.resolution,s=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*i,o=[];let a=0,l=0;for(let c=0;c<n.length;c++){const u=n[c];if(u===`
`)a=0,l-=s;else{const h=B_(u,i,a,l,t);a+=h.offsetX,o.push(h.path)}}return o}function B_(r,e,t,n,i){const s=i.glyphs[r]||i.glyphs["?"];if(!s){console.error('THREE.Font: character "'+r+'" does not exists in font family '+i.familyName+".");return}const o=new Q0;let a,l,c,u,h,d,m,g;if(s.o){const p=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let f=0,v=p.length;f<v;)switch(p[f++]){case"m":a=p[f++]*e+t,l=p[f++]*e+n,o.moveTo(a,l);break;case"l":a=p[f++]*e+t,l=p[f++]*e+n,o.lineTo(a,l);break;case"q":c=p[f++]*e+t,u=p[f++]*e+n,h=p[f++]*e+t,d=p[f++]*e+n,o.quadraticCurveTo(h,d,c,u);break;case"b":c=p[f++]*e+t,u=p[f++]*e+n,h=p[f++]*e+t,d=p[f++]*e+n,m=p[f++]*e+t,g=p[f++]*e+n,o.bezierCurveTo(h,d,m,g,c,u);break}}return{offsetX:s.ha*e,path:o}}class k_{constructor(e,t){this.document=e,this.window=t,this.isActive=!1,this.renderPortfolio()}setIsActive(e){this.isActive=e}renderPortfolio(){(()=>{const t=this.document.querySelector(".cancel"),n=this.document.querySelector(".lightbox-img-wrapper"),i={clients:["https://netifashionlook.pl"]},s=new $0,o=new pe,a=new F_,l=[],c=new URL("/patryk-cv/assets/laptopportfolio-58333d1f.gltf",self.location),u=this.document.querySelector(".portfolio"),h=this.document.querySelector(".portfolio-laptop"),d=new Oo;let m="teach",g=0,p=0,f,v,y,_,x,w=0,E,L,b,T;const R=()=>{m==="teach"?f=32:m==="projects"?f=15:m==="clients"?f=1:m==="drawings"&&(f=19)};function U(C){o.x=C.clientX/h.offsetWidth*2-1,o.y=-(C.clientY/h.offsetHeight)*2+1}const Z=()=>{v.lookAt(0,0,0),this.window.innerWidth>=1024?E={posX:0,posY:5,posZ:10}:E={posX:0,posY:7,posZ:15},v.position.x=E.posX,v.position.y=E.posY,v.position.z=E.posZ},N=()=>{let C=!1,te;_.children.forEach((re,se)=>{re.name==="ACTUAL"&&(C=!0,te=se)});let K="";g<9&&(K+="0"),K+=g+1+"/",f<10?K+="0"+f:K+=f,a.load("layouts/SairaCondensed.json",function(re){const se=new Rl(K,{font:re,size:.1,height:.085});T=new Tt(se,[new ht({color:"#40e755"}),new ht({color:"#40e755"})]),T.geometry.needsUpdate=!0,T.scale.z=.01,T.position.z=-.11,T.position.x=.8,T.position.y=1.9,T.name="ACTUAL",C?_.children[te].geometry=se:_.add(T)})},I=()=>{let C=!1,te,K="",re=0;_.children.forEach((se,fe)=>{se.name==="TOPTEXT"&&(C=!0,te=fe)}),m==="teach"?g>=0&&g<10?(K="CSS",re=.8):g>=10&&g<20?(K="JavaScript",re=.6):g>=20&&(K="React",re=.75):m==="projects"?(K="Projects",re=.6):m==="clients"?(K="Clients",re=.7):m==="drawings"&&(K="Drawings",re=.6),a.load("layouts/SairaCondensed.json",function(se){const fe=new Rl(K,{font:se,size:.15,height:.1});b=new Tt(fe,[new ht({color:"#40e755"}),new ht({color:"#40e755"})]),b.position.needsUpdate=!0,b.scale.z=.01,b.position.z=-.11,b.position.x=re,b.position.y=2.05,b.name="TOPTEXT",C?_.children[te]=b:_.add(b)})},k=()=>{R(),v=new ft(45,h.clientWidth/h.clientHeight,1,100),_=new bo,x=new ss({alpha:!0,antialias:!0}),x.setSize(h.clientWidth,h.clientHeight),Z(),d.load(c.href,function(C){y=C.scene,_.add(y),y.rotation.y=-1.57},void 0,function(C){console.error(C)}),x.setPixelRatio(window.devicePixelRatio),h.appendChild(x.domElement),I()},X=()=>{y.children.forEach(C=>{if(C.name==="img"){const te=C.material;te.needsUpdate=!0;const K=new Fc,re="layouts/portfolio/"+m+"/"+(g+1)+".jpg";K.load(re,function(se){const fe=new ht({map:se});C.material=fe,fe.side=2,p===0&&(p++,C.rotation.z=-C.rotation.z,C.rotation.x=-C.rotation.x)},void 0,function(se){console.error("An error happened.")})}}),N()},Q=()=>{x.render(_,v)},G=()=>{Z(),ee(),v.aspect=h.clientWidth/h.clientHeight,v.updateProjectionMatrix(),x.setSize(h.clientWidth,h.clientHeight),Q()},W=()=>{const C=new Fn(16777215,5);C.position.set(0,20,10),C.lookAt(0,0,0),_.add(C)},ee=()=>{this.window.innerWidth>=1024?L=xe({targets:E,keyframes:[{posX:0,posY:1.3468588082901554,posZ:3.693717616580311,endDelay:2e3}],elasticity:600,easing:"linear",autoplay:!1}):L=xe({targets:E,keyframes:[{posX:0,posY:2.527369083620846,posZ:8.054738167241691,endDelay:2e3}],elasticity:100,easing:"linear",autoplay:!1})},de=()=>{l.forEach(C=>{C.children.forEach(te=>{te.needsUpdate=!0,te.parent.name==="Teach0"&&m==="teach"||te.parent.name==="Projects0"&&m==="projects"||te.parent.name==="Clients0"&&m==="clients"||te.parent.name==="Drawings0"&&m==="drawings"?te.material=new ht({color:"#296fba"}):te.material=new ht({color:"#40e755"})})})};function F(C){if(C.isActive){if(y!==void 0&&w===0){w++;let K,re;_.children.forEach(fe=>{fe.name==="Scene"&&fe.children.forEach(Se=>{Se.name[Se.name.length-1]==="0"&&l.push(Se)})}),y.children[0].children.forEach(fe=>{fe.name==="Keyboard"&&(K=fe.children[0],re=fe.children[1])}),X();const se={r:0,g:.5,b:0};re.material.emissiveIntensity=1,xe({targets:se,r:[{value:0},{value:.5},{value:0}],g:[{value:0},{value:0},{value:.5}],b:[{value:.5},{value:0},{value:0}],easing:"linear",duration:2e4,delay:0,loop:!0,update:function(){K.material.color.r=se.r,K.material.color.g=se.g,K.material.color.b=se.b,K.material.emissive.r=se.r,K.material.emissive.g=se.g,K.material.emissive.b=se.b,re.material.color.r=se.r+.2,re.material.color.g=se.g+.2,re.material.color.b=se.b+.2}}),de()}s.setFromCamera(o,v);const te=s.intersectObjects(l);if(de(),te.length>0)for(let K=0;K<te.length;K++)te[K].object.material.color.set("#296fba");Q()}}let $=0;const ne=()=>{if(this.isActive){const C=this.document.documentElement.clientHeight,te=u.getBoundingClientRect().top,K=u.offsetHeight;$=te*-1/(K-C),$<=1.1&&(L.seek($*L.duration),y!==void 0&&(v.position.x=E.posX,v.position.y=E.posY,v.position.z=E.posZ,v.lookAt(y.position.x,y.position.y+1,y.position.z)),s.setFromCamera(o,v))}};k(),ee(),W(),Q(),x.setAnimationLoop(()=>F(this)),u.addEventListener("click",()=>{if(this.isActive){s.setFromCamera(o,v);const C=s.intersectObjects(l,!0);if(de(),C.length>0){const te=C[0].object.parent.name;if(te==="LeftArrow0"&&(g--,g<0&&(g=f-1),I(),X()),te==="RightArrow0"&&(g++,g===f&&(g=0),I(),X()),te==="Teach0"&&(g=0,m="teach",R(),de(),I(),X()),te==="Projects0"&&(g=0,m="projects",R(),de(),I(),X()),te==="Clients0"&&(g=0,m="clients",R(),de(),I(),X()),te==="Drawings0"&&(g=0,m="drawings",R(),de(),I(),X()),te==="Show0"&&m==="clients"&&window.open(i.clients[g],"_blank"),te==="Show0"&&m==="teach"){let K="./portfolio/teach/kat"+g+"/index.html";this.window.open(K)}if(te==="Show0"&&m==="projects"){let K="./portfolio/projects/kat"+g+"/index.html";this.window.open(K)}te==="Show0"&&m==="drawings"&&(this.document.querySelector(".lightbox").classList.add("active"),n.innerHTML=`<img src="./portfolio/drawings/${g+1}.jpg" />`)}}}),t.addEventListener("click",()=>{this.document.querySelector(".lightbox").classList.remove("active")}),this.window.addEventListener("pointermove",U),this.window.addEventListener("scroll",ne),this.window.addEventListener("resize",G)})()}}class U_{constructor(e,t){this.document=e,this.window=t,this.isActive=!1,this.render()}setIsActive(e){this.isActive=e}render(){const e=this.document.querySelector(".contact"),t=this.document.querySelectorAll("#processor #smaller polyline"),n=this.document.querySelectorAll("#processor #bigger polyline"),i=this.document.querySelectorAll("#processor #smaller circle"),s=this.document.querySelectorAll("#processor #bigger circle"),o=this.document.querySelector("#processor #smaller rect"),a=this.document.querySelector("#processor #bigger rect"),l=this.document.querySelector("#contact-h2-left"),c=this.document.querySelector("#contact-h2-right"),u=this.document.querySelector(".contact-left"),h=this.document.querySelector(".contact-right"),d=this.document.querySelector(".contact-info-left"),m=this.document.querySelector(".contact-info-right");t.forEach(x=>{const w=x.getTotalLength();x.style.strokeDasharray=w,x.style.strokeDashoffset=w}),n.forEach(x=>{const w=x.getTotalLength();x.style.strokeDasharray=w,x.style.strokeDashoffset=w}),i.forEach(x=>{x.style.opacity=0,x.style.strokeDasharray=14,x.style.strokeDashoffset=14}),s.forEach(x=>{x.style.opacity=0,x.style.strokeDasharray=21.5,x.style.strokeDashoffset=21.5}),o.style.strokeDasharray=o.getTotalLength(),o.style.strokeDashoffset=o.getTotalLength(),a.style.strokeDasharray=a.getTotalLength(),a.style.strokeDashoffset=a.getTotalLength();const g=xe.timeline({easing:"linear",duration:2e3,loop:!0});let p=0;g.add({targets:o,strokeDashoffset:0,duration:1e3}).add({targets:t,delay:function(x,w){return w*50},strokeDashoffset:0,duration:1500}).add({targets:i,strokeDashoffset:0,duration:500,opacity:1}).add({targets:o,delay:1e3,strokeDashoffset:o.getTotalLength(),duration:2e3}).add({targets:t,strokeDashoffset:function(x){return-x.getTotalLength()},duration:1500}).add({targets:i,strokeDashoffset:function(x){return-14},opacity:0,duration:500}).add({targets:a,strokeDashoffset:0,duration:1e3},"-=1500").add({targets:n,strokeDashoffset:0,delay:function(x,w){return w*50},duration:1500}).add({targets:s,strokeDashoffset:0,duration:500,opacity:1}).add({targets:a,delay:2e3,strokeDashoffset:a.getTotalLength(),duration:1e3}).add({targets:n,delay:1e3,strokeDashoffset:function(x){return-x.getTotalLength()},duration:1500}).add({targets:s,strokeDashoffset:function(x){return-21},opacity:0,duration:500});const f={first:0,second:0,helper:0},v=xe.timeline({duration:1500,delay:1e3,autoplay:!1});v.add({targets:m,translateX:["100vw",0],opacity:[0,1]}).add({targets:d,translateX:["-100vw",0],opacity:[0,1]}).add({targets:this.document.querySelector("#contact-line"),width:"50%"}).add({targets:this.document.querySelectorAll(".social"),delay:function(x,w){return w*100},translateX:[-30,0],opacity:[0,1]});const y=xe({targets:f,keyframes:[{delay:100,first:-105,second:105}],elasticity:10,easing:"linear",autoplay:!1}),_=()=>{if(this.isActive){const x=this.document.documentElement.clientHeight,w=e.getBoundingClientRect().top,E=e.offsetHeight;p=w*-1/(E-x),y.seek(p*y.duration),this.window.innerWidth>=1024?(l.style.transform=`translate(${f.first}vw, 0)`,u.style.transform=`translate(${f.first}vw, 0)`,c.style.transform=`translate(${f.second}vw, 0)`,h.style.transform=`translate(${f.second}vw, 0)`):(l.style.transform=`translate(0, ${f.first}vh)`,u.style.transform=`translate(0, ${f.first}vh)`,c.style.transform=`translate(0, ${f.second}vh)`,h.style.transform=`translate(0, ${f.second}vh)`),p>.9?(g.play(),v.play()):(g.restart(),g.pause(),v.restart(),v.pause())}};this.window.addEventListener("scroll",_)}}class V_{constructor(e,t){this.window=e,this.document=t,this.home=new I_(t,e),this.about=new P_(t,e),this.aboutHistory=new D_(t,e),this.knowledge=new N_(t,e),this.portfolio=new k_(t,e),this.contact=new U_(t,e),this.actualLanguage="pl",this.lanPL=t.querySelector(".pl"),this.lanENG=t.querySelector(".eng"),this.windowSize=e.innerWidth,this.navbar=t.querySelector("nav"),this.burger=t.querySelector(".burger-wrapper"),this.elements=t.querySelectorAll(".nav-li"),this.sections=t.querySelectorAll(".section"),this.mobile,this.sectionInfo=[],this.initialStatements(),this.renderListeners(),this.initScroll(this)}setWindowSize(e){this.windowSize=e}getWindowSize(){return this.windowSize}setActualLanguage(e){this.actualLanguage=e}getActualLanguage(){return this.actualLanguage}setMobile(){this.getWindowSize()>=1024?this.mobile=!1:this.mobile=!0}static getMobile(){return this.mobile}setSectionInfo(){const e=[];this.sections.forEach(t=>{const n={height:t.clientHeight,top:t.getBoundingClientRect().top,bottom:t.getBoundingClientRect().bottom};e.push(n)}),this.sectionInfo=e}initialStatements(){Js.initLanguage("pl",this.lanPL,this.lanENG),this.setMobile(),this.setSectionInfo(),this.navbar=document.querySelector("nav"),this.burger=document.querySelector(".burger-wrapper"),this.burger.addEventListener("click",()=>{this.navbar.classList.toggle("active"),this.burger.classList.toggle("active")}),xe({targets:this.elements,translateX:[-300,0],opacity:[0,1],easing:"linear",duration:300,delay:xe.stagger(100)})}initScroll(e){this.setSectionInfo();let t;e.sectionInfo.forEach((n,i)=>{n.bottom>=300&&n.top-300<=0&&(t=i)}),e.elements.forEach((n,i)=>{i===t?n.classList.add("active"):n.classList.remove("active")}),t===0?this.home.animationsSet("play"):this.home.animationsSet("pause"),t===1?this.about.setIsActive(!0,"play"):this.about.setIsActive(!1,"pause"),t===2?this.aboutHistory.setIsActive(!0):this.aboutHistory.setIsActive(!1),t===3?this.knowledge.setIsActive(!0):this.knowledge.setIsActive(!1),t===4?this.portfolio.setIsActive(!0):this.portfolio.setIsActive(!1),t===5?this.contact.setIsActive(!0):this.contact.setIsActive(!1)}initResize(e){e.setSectionInfo(),e.setWindowSize(e.window.innerWidth)}renderListeners(){this.lanPL.addEventListener("click",()=>{this.actualLanguage!=="pl"&&(Js.initLanguage("pl",this.lanPL,this.lanENG),this.setActualLanguage("pl"))}),this.lanENG.addEventListener("click",()=>{this.actualLanguage!=="eng"&&(Js.initLanguage("eng",this.lanPL,this.lanENG),this.setActualLanguage("eng"))}),this.window.addEventListener("scroll",()=>this.initScroll(this)),this.window.addEventListener("resize",()=>this.initResize(this)),this.initScroll(this),this.initResize(this)}}class G_{constructor(e,t){this.window=e,this.document=t,this.listener=new V_(this.window,this.document)}}const H_=()=>{new G_(window,document)};H_();
