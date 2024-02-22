(()=>{"use strict";var __webpack_modules__={208:(n,e,t)=>{t.d(e,{A:()=>o});var a=t(601),r=t.n(a),u=t(314),i=t.n(u)()(r());i.push([n.id,"*{\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: sans-serif;\n  background: rgb(159, 159, 159);\n}\n.container{\n  border: none;\n  width: 285px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  height: 501px;\n  border-radius: 10px;\n  overflow: hidden;\n  box-shadow: 0px 1px 5px;\n}\n.container input{\n  height: 150px;\n  width: 100%;\n  text-align: right;\n  padding-right: 10px;\n  outline: none;\n  text-decoration: none;\n  font-size: 33px;\n  border: none;\n  background-color: white;\n}\n.isi{\n  display: flex;\n  flex-wrap: wrap;\n  background: rgb(234, 228, 228);\n}\n.isi span{\n  width: 50px;\n  display: grid;\n  height: 50px;\n  place-items: center;\n  background: rgb(199, 188, 188);\n  border-radius: 50%;\n  margin: 10px;\n  transition: 0.5s;\n  cursor: pointer;\n}\n.isi i{\n  background: transparent;\n}\n.isi span:hover{\n  background: rgb(210, 199, 199);\n}",""]);const o=i},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",a=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),a&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),a&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,a,r,u){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(a)for(var o=0;o<this.length;o++){var c=this[o][0];null!=c&&(i[c]=!0)}for(var l=0;l<n.length;l++){var s=[].concat(n[l]);a&&i[s[0]]||(void 0!==u&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=u),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),e.push(s))}},e}},601:n=>{n.exports=function(n){return n[1]}},511:(n,e,t)=>{var a=t(72),r=t.n(a),u=t(825),i=t.n(u),o=t(659),c=t.n(o),l=t(56),s=t.n(l),d=t(540),p=t.n(d),g=t(113),v=t.n(g),f=t(208),_={};_.styleTagTransform=v(),_.setAttributes=s(),_.insert=c().bind(null,"head"),_.domAPI=i(),_.insertStyleElement=p(),r()(f.A,_),f.A&&f.A.locals&&f.A.locals},72:n=>{var e=[];function t(n){for(var t=-1,a=0;a<e.length;a++)if(e[a].identifier===n){t=a;break}return t}function a(n,a){for(var u={},i=[],o=0;o<n.length;o++){var c=n[o],l=a.base?c[0]+a.base:c[0],s=u[l]||0,d="".concat(l," ").concat(s);u[l]=s+1;var p=t(d),g={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(g);else{var v=r(g,a);a.byIndex=o,e.splice(o,0,{identifier:d,updater:v,references:1})}i.push(d)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var u=a(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<u.length;i++){var o=t(u[i]);e[o].references--}for(var c=a(n,r),l=0;l<u.length;l++){var s=t(u[l]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}u=c}}},659:n=>{var e={};n.exports=function(n,t){var a=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,r&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var u=t.sourceMap;u&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(u))))," */")),e.styleTagTransform(a,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},__webpack_module_cache__={};function __webpack_require__(n){var e=__webpack_module_cache__[n];if(void 0!==e)return e.exports;var t=__webpack_module_cache__[n]={id:n,exports:{}};return __webpack_modules__[n](t,t.exports,__webpack_require__),t.exports}__webpack_require__.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return __webpack_require__.d(e,{a:e}),e},__webpack_require__.d=(n,e)=>{for(var t in e)__webpack_require__.o(e,t)&&!__webpack_require__.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},__webpack_require__.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),__webpack_require__.nc=void 0;var __webpack_exports__={};(()=>{var _style_css__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(511);const satu=document.querySelector(".one"),dua=document.querySelector(".two"),tiga=document.querySelector(".three"),empat=document.querySelector(".four"),lima=document.querySelector(".five"),enam=document.querySelector(".six"),tujuh=document.querySelector(".seven"),delapan=document.querySelector(".eight"),sembilan=document.querySelector(".nine"),nol=document.querySelector(".zero"),kali=document.querySelector(".multiple"),bagi=document.querySelector(".divide"),kurang=document.querySelector(".minus"),tambah=document.querySelector(".plus"),samaDengan=document.querySelector(".equal"),duaNol=document.querySelector(".zero-zero"),koma=document.querySelector(".coma"),hapus=document.querySelector(".delet"),input=document.querySelector(".input");let runningTotal=0,ngulang="",timeoutId;satu.addEventListener("click",(function(){ngulang+="1",input.value=ngulang})),dua.addEventListener("click",(function(){ngulang+="2",input.value=ngulang})),tiga.addEventListener("click",(function(){ngulang+="3",input.value=ngulang})),empat.addEventListener("click",(function(){ngulang+="4",input.value=ngulang})),lima.addEventListener("click",(function(){ngulang+="5",input.value=ngulang})),enam.addEventListener("click",(function(){ngulang+="6",input.value=ngulang})),tujuh.addEventListener("click",(function(){ngulang+="7",input.value=ngulang})),delapan.addEventListener("click",(function(){ngulang+="8",input.value=ngulang})),sembilan.addEventListener("click",(function(){ngulang+="9",input.value=ngulang})),nol.addEventListener("click",(function(){ngulang+="0",input.value=ngulang})),tambah.addEventListener("click",(function(){ngulang+="+",input.value=ngulang})),kurang.addEventListener("click",(function(){ngulang+="-",input.value=ngulang})),bagi.addEventListener("click",(function(){ngulang+="/",input.value=ngulang})),kali.addEventListener("click",(function(){ngulang+="*",input.value=ngulang})),koma.addEventListener("click",(function(){ngulang+=".",input.value=ngulang})),duaNol.addEventListener("click",(function(){ngulang+="00",input.value=ngulang})),hapus.addEventListener("click",(function(){input.value=input.value.slice(0,-1),ngulang=input.value})),hapus.addEventListener("mousedown",(function(){timeoutId=setTimeout((function(){input.value="",ngulang=""}),500)})),hapus.addEventListener("mouseup",(function(){clearTimeout(timeoutId)})),samaDengan.addEventListener("click",(function(){const hasil=input.value;try{const hasilAkhir=eval(hasil),roundedResult=parseFloat(hasilAkhir.toFixed(3));input.value=roundedResult,ngulang=""}catch(n){input.value="Invalid expression"}}))})()})();