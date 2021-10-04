(this.webpackJsonpmylinks=this.webpackJsonpmylinks||[]).push([[0],{38:function(n,e,r){"use strict";r.r(e);var t,o,a=r(1),i=r.n(a),c=r(21),s=r.n(c),d=r(2),l=r(10),b=r(3),u=Object(d.b)(t||(t=Object(b.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'Sora', sans-serif;\n  }\n\n  body {\n    background: ",";\n    font-size: 1rem; /* 16px */\n    color: ",";\n  }\n\n  button {\n    cursor: pointer;\n  }\n\n  a {\n    text-decoration: none;\n  }\n"])),(function(n){return n.theme.colors.background}),(function(n){return n.theme.colors.gray[900]})),j={colors:{background:"#F6F5FC",primary:{main:"#5061FC",light:"#6674F4",dark:"#3346F0",lighter:"#E0E3FF"},danger:{main:"#FC5050",light:"#F97171",dark:"#F63131"},gray:{900:"#262626",200:"#BFBFBF",50:"#f2f2f2"}}},p=d.d.header(o||(o=Object(b.a)(["\n  margin-top: 74px;\n  margin-bottom: 48px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  img {\n    width: 201px;\n  }\n"]))),x=r.p+"static/media/logo.757f1fb0.svg",m=r(0);function g(){return Object(m.jsx)(p,{children:Object(m.jsx)("img",{src:x,alt:"Logo MyLinks"})})}var h,f,O,v,k,y,w=r(4),F=r(9),S=d.d.div(h||(h=Object(b.a)(["\n  margin-top: 32px;\n"]))),C=d.d.div(f||(f=Object(b.a)(["\n  width: 100%;\n\n  input {\n    width: 100%;\n    background: #fff;\n    border: none;\n    border-radius: 25px;\n    height: 50px;\n    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);\n    padding: 0 16px;\n\n    &::placeholder {\n      color: #BCBCBC;\n    }\n  }\n"]))),E=d.d.header(O||(O=Object(b.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 32px;\n\n  strong {\n    font-size: 24px;\n  }\n\n  a {\n    color: ",";\n    font-weight: bold;\n    border: 2px solid ",";\n    padding: 8px 16px;\n    border-radius: 4px;\n\n    transition: all 0.2s ease-in;\n    &:hover {\n      background: ",";\n      color: #fff;\n    }\n  }\n"])),(function(n){return n.theme.colors.primary.main}),(function(n){return n.theme.colors.primary.main}),(function(n){return n.theme.colors.primary.main})),N=d.d.div(v||(v=Object(b.a)(["\n  margin-top: 24px;\n\n  header {\n    margin-bottom: 8px;\n\n    button {\n      background: transparent;\n      border: none;\n      display: flex;\n      align-items: center;\n\n      span {\n        margin-right: 8px;\n        font-weight: bold;\n        color: ",";\n      }\n    }\n  }\n"])),(function(n){return n.theme.colors.primary.main})),B=d.d.a(k||(k=Object(b.a)(["\n  background: #fff;\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);\n  padding: 16px;\n  border-radius: 4px;\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  /* cursor: pointer; */\n\n  transition: all 0.2s ease-in;\n  /* &:hover {\n    background: ",";\n  } */\n\n  & + & {\n    margin-top: 16px;\n  }\n\n  .info {\n    .link-name {\n      display: flex;\n      align-items: center;\n\n      small {\n        background: ",";\n        color: ",";\n        font-weight: bold;\n        text-transform: uppercase;\n        padding: 4px;\n        border-radius: 4px;\n        margin-left: 8px;\n      }\n    }\n\n    span {\n      flex: 1;\n      overflow: hidden;\n      display: block;\n      font-size: 14px;\n      color: ",";\n    }\n  }\n\n  .actions {\n    display: flex;\n    align-items: center;\n\n    button {\n      background: transparent;\n      border: none;\n      margin-left: 8px;\n    }\n  }\n"])),(function(n){return n.theme.colors.gray[50]}),(function(n){return n.theme.colors.primary.lighter}),(function(n){return n.theme.colors.primary.main}),(function(n){return n.theme.colors.gray[200]})),z=r.p+"static/media/arrow.d794d180.svg",L=r.p+"static/media/edit.22e103bf.svg",D=r.p+"static/media/trash.0881777b.svg";function M(){var n=Object(a.useState)([]),e=Object(F.a)(n,2),r=e[0],t=e[1];return Object(a.useEffect)((function(){var n=JSON.parse(localStorage.getItem("@mylinks-db"));n&&t(n)}),[]),Object(m.jsxs)(S,{children:[Object(m.jsx)(C,{children:Object(m.jsx)("input",{type:"text",placeholder:"Pesquisar link"})}),Object(m.jsxs)(E,{children:[Object(m.jsxs)("strong",{children:[r.length,1===r.length?" link":" links"]}),Object(m.jsx)(l.b,{to:"/new",children:"Novo link"})]}),Object(m.jsxs)(N,{children:[Object(m.jsx)("header",{children:Object(m.jsxs)("button",{type:"button",className:"sort-button",children:[Object(m.jsx)("span",{children:"Nome"}),Object(m.jsx)("img",{src:z,alt:"Arrow"})]})}),r.map((function(n){return Object(m.jsxs)(B,{children:[Object(m.jsxs)("div",{className:"info",children:[Object(m.jsxs)("div",{className:"link-name",children:[Object(m.jsx)("strong",{children:n.name}),n.category&&Object(m.jsx)("small",{children:n.category})]}),Object(m.jsx)("span",{children:n.description})]}),Object(m.jsxs)("div",{className:"actions",children:[Object(m.jsx)(l.b,{to:"/edit/".concat(n.id),children:Object(m.jsx)("img",{src:L,alt:"Edit"})}),Object(m.jsx)("button",{type:"button",children:Object(m.jsx)("img",{src:D,alt:"Delete"})})]})]},n.id)}))]})]})}var q=d.d.header(y||(y=Object(b.a)(["\n  margin-bottom: 24px;\n\n  a {\n    display: flex;\n    align-items: center;\n\n    span {\n      color: ",";\n      font-weight: bold;\n    }\n\n    img {\n      margin-right: 8px;\n      transform: rotate(-90deg);\n    }\n  }\n\n  h1 {\n    font-size: 24px;\n  }\n"])),(function(n){return n.theme.colors.primary.main}));function J(n){var e=n.title;return Object(m.jsxs)(q,{children:[Object(m.jsxs)(l.b,{to:"/",children:[Object(m.jsx)("img",{src:z,alt:"Back"}),Object(m.jsx)("span",{children:"Voltar"})]}),Object(m.jsx)("h1",{children:e})]})}var P,I,V=r(26);var A,T,G,H=d.d.form(P||(P=Object(b.a)([""]))),K=d.d.div(I||(I=Object(b.a)(["\n  margin-top: 24px;\n\n  button {\n    width: 100%;\n  }\n"]))),Q=d.d.div(A||(A=Object(b.a)(["\n  & + & {\n    margin-top: 16px;\n  }\n\n  small {\n    color: ",";\n    font-size: 12px;\n    display: block;\n    margin-top: 8px;\n  }\n"])),(function(n){return n.theme.colors.danger.main}));function R(n){var e=n.children,r=n.error;return Object(m.jsxs)(Q,{children:[e,r&&Object(m.jsx)("small",{children:r})]})}R.defaultProps={error:""};var U,W,X,Y,Z=d.d.input(T||(T=Object(b.a)(["\n  width: 100%;\n  border: 2px solid #fff;\n  background: #fff;\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);\n  border-radius: 4px;\n  height: 52px;\n  outline: none;\n  padding: 0 16px;\n  font-size: 16px;\n  appearance: none; /*Desabilita a op\xe7\xe3o do navegador de dispositivos mobile que alteram o visual */\n\n  transition: border-color 0.2s ease-in;\n  &:focus {\n    border-color: ",";\n  }\n\n  ","\n"])),(function(n){return n.theme.colors.primary.main}),(function(n){var e=n.theme;return n.error&&Object(d.c)(G||(G=Object(b.a)(["\n    color: ",";\n    border-color: "," !important;\n  "])),e.colors.danger.main,e.colors.danger.main)})),$=d.d.select(U||(U=Object(b.a)(["\n  width: 100%;\n  border: 2px solid #fff;\n  background: #fff;\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);\n  border-radius: 4px;\n  height: 52px;\n  outline: none;\n  padding: 0 16px;\n  font-size: 16px;\n  appearance: none; /*Desabilita a op\xe7\xe3o do navegador de dispositivos mobile que alteram o visual */\n\n  transition: border-color 0.2s ease-in;\n  &:focus {\n    border-color: ",";\n  }\n"])),(function(n){return n.theme.colors.primary.main})),_=d.d.button(W||(W=Object(b.a)(["\n  height: 52px;\n  border: none;\n  padding: 0 16px;\n  background: ",";\n  color: #fff;\n  font-size: 16px;\n  font-weight: bold;\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);\n  border-radius: 4px;\n\n  transition: background 0.1s ease-in;\n  &:hover {\n    background: ",";\n  }\n\n  &:active {\n    background: ",";\n  }\n\n  &[disabled] {\n    background: #ccc;\n    cursor: not-allowed;\n  }\n\n  ","\n"])),(function(n){return n.theme.colors.primary.main}),(function(n){return n.theme.colors.primary.light}),(function(n){return n.theme.colors.primary.dark}),(function(n){var e=n.theme;return n.danger&&Object(d.c)(X||(X=Object(b.a)(["\n    background: ",";\n\n    &:hover {\n      background: ",";\n    }\n\n    &:active {\n      background: ",";\n    }\n  "])),e.colors.danger.main,e.colors.danger.light,e.colors.danger.dark)}));function nn(n){var e=n.buttonLabel,r=Object(a.useState)(""),t=Object(F.a)(r,2),o=t[0],i=t[1],c=Object(a.useState)(""),s=Object(F.a)(c,2),d=s[0],l=s[1],b=Object(a.useState)(""),u=Object(F.a)(b,2),j=u[0],p=u[1],x=Object(a.useState)(""),g=Object(F.a)(x,2),h=g[0],f=g[1],O=function(){var n=Object(a.useState)([]),e=Object(F.a)(n,2),r=e[0],t=e[1];return{errors:r,setError:function(n){var e=n.field,o=n.message;r.find((function(n){return n.field===e}))||t((function(n){return[].concat(Object(V.a)(n),[{field:e,message:o}])}))},removeError:function(n){t((function(e){return e.filter((function(e){return e.field!==n}))}))},getErrorMessageByFieldName:function(n){var e;return null===(e=r.find((function(e){return e.field===n})))||void 0===e?void 0:e.message}}}(),v=O.setError,k=O.removeError,y=O.getErrorMessageByFieldName,w=o&&d&&j;return Object(m.jsxs)(H,{onSubmit:function(n){n.preventDefault()},noValidate:!0,children:[Object(m.jsx)(R,{error:y("name"),children:Object(m.jsx)(Z,{error:y("name"),value:o,placeholder:"Nome *",onChange:function(n){i(n.target.value),n.target.value?k("name"):v({field:"name",message:"Nome \xe9 obrigat\xf3rio."})}})}),Object(m.jsx)(R,{children:Object(m.jsx)(Z,{value:d,placeholder:"Descri\xe7\xe3o",onChange:function(n){return l(n.target.value)}})}),Object(m.jsx)(R,{error:y("link"),children:Object(m.jsx)(Z,{error:y("link"),value:j,placeholder:"Link *",onChange:function(n){p(n.target.value),n.target.value?k("link"):v({field:"link",message:"Link \xe9 obrigat\xf3rio."})}})}),Object(m.jsx)(R,{children:Object(m.jsxs)($,{value:h,onChange:function(n){return f(n.target.value)},children:[Object(m.jsx)("option",{value:"",children:"Categoria"}),Object(m.jsx)("option",{value:"produtividade",children:"Produtividade"}),Object(m.jsx)("option",{value:"liberar-acessos",children:"Libera\xe7\xe3o de acessos"})]})}),Object(m.jsx)(K,{children:Object(m.jsx)(_,{type:"submit",disabled:!w,children:e})})]})}function en(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(J,{title:"Novo link"}),Object(m.jsx)(nn,{buttonLabel:"Cadastrar"})]})}function rn(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(J,{title:"Editar Time Sheet"}),Object(m.jsx)(nn,{buttonLabel:"Salvar altera\xe7\xf5es"})]})}function tn(){return Object(m.jsxs)(w.c,{children:[Object(m.jsx)(w.a,{path:"/",exact:!0,component:M}),Object(m.jsx)(w.a,{path:"/new",component:en}),Object(m.jsx)(w.a,{path:"/edit/:id",component:rn})]})}var on=d.d.div(Y||(Y=Object(b.a)(["\n  width: 100%;\n  max-width: 500px;\n  margin: 0 auto;\n  padding: 0 16px\n"])));var an=function(){return Object(m.jsx)(l.a,{children:Object(m.jsxs)(d.a,{theme:j,children:[Object(m.jsx)(u,{}),Object(m.jsxs)(on,{children:[Object(m.jsx)(g,{}),Object(m.jsx)(tn,{})]})]})})};s.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(an,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.466af80a.chunk.js.map