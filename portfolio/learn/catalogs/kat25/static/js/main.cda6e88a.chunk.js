(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,a,t){},18:function(e,a,t){},19:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=t(3),c=t.n(r),i=(t(17),t(1)),l=t(4),m=t(5),o=t(7),p=t(6),u=t(8),h=(t(18),function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(t=Object(o.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(s)))).state={username:"",email:"",pass:"",accept:!1,errors:{username:!1,email:!1,pass:!1,accept:!1}},t.messages={username_incorrect:"Nazwa musi by\u0107 d\u0142u\u017csza ni\u017c 10 znak\xf3w i nie mo\u017ce zawiera\u0107 spacji!",email_incorrect:"Brak @ w emailu!",password_incorrect:"Has\u0142o musi mie\u0107 wi\u0119cej ni\u017c 8 znak\xf3w!",accept_incorrect:"Nie potwierdzona zgoda!"},t.handleChange=function(e){var a=e.target.name,n=e.target.type;if("text"===n||"password"===n||"email"===n){var s=e.target.value;t.setState(Object(i.a)({},a,s))}else if("checkbox"===n){var r=e.target.checked;t.setState(Object(i.a)({},a,r))}},t.handleSubmit=function(e){e.preventDefault();var a=t.formValidation();a.correct?t.setState({username:"",email:"",pass:"",accept:!1,errors:{username:!1,email:!1,pass:!1,accept:!1}}):t.setState({errors:{username:!a.username,email:!a.email,pass:!a.password,accept:!a.accept}})},t.formValidation=function(){var e=!1,a=!1,n=!1,s=!1,r=!1;return t.state.username.length>10&&-1===t.state.username.indexOf(" ")&&(e=!0),-1!==t.state.email.indexOf("@")&&(a=!0),t.state.pass.length>=8&&(n=!0),t.state.accept&&(s=!0),e&&a&&n&&s&&(r=!0),{username:e,email:a,password:n,accept:s,correct:r}},t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"app"},s.a.createElement("form",{onSubmit:this.handleSubmit,noValidate:!0},s.a.createElement("label",{htmlFor:"user"},"Twoje imi\u0119:",s.a.createElement("input",{type:"text",id:"user",name:"username",value:this.state.username,onChange:this.handleChange}),this.state.errors.username&&s.a.createElement("span",null,this.messages.username_incorrect)),s.a.createElement("label",{htmlFor:"email"},"Tw\xf3j email:",s.a.createElement("input",{type:"email",id:"email",name:"email",value:this.state.email,onChange:this.handleChange}),this.state.errors.email&&s.a.createElement("span",null,this.messages.email_incorrect)),s.a.createElement("label",{htmlFor:"password"},"Twoje has\u0142o:",s.a.createElement("input",{type:"password",id:"password",name:"pass",value:this.state.pass,onChange:this.handleChange}),this.state.errors.pass&&s.a.createElement("span",null,this.messages.password_incorrect)),s.a.createElement("label",{htmlFor:"accept"},s.a.createElement("input",{type:"checkbox",name:"accept",id:"accept",checked:this.state.accept,onChange:this.handleChange}),"Wyra\u017cam zgod\u0119 wszelak\u0105",this.state.errors.accept&&s.a.createElement("span",null,this.messages.accept_incorrect)),s.a.createElement("button",null,"Zapisz si\u0119")))}}]),a}(n.Component));c.a.render(s.a.createElement(h,null),document.getElementById("root"))},9:function(e,a,t){e.exports=t(19)}},[[9,1,2]]]);
//# sourceMappingURL=main.cda6e88a.chunk.js.map