!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="dist/",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";n.r(t);function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.bindUIElements()}var t,n,i;return t=e,(n=[{key:"bindUIElements",value:function(){this.sidebarContainer=document.getElementById("sidebar-container"),this.sidebarButton=document.getElementById("sidebar-trigger-button"),this.sectionLinksContainer=document.getElementById("section-links"),this.sectionLinks=Array.from(document.getElementsByClassName("section-link"))}},{key:"start",value:function(){var e=this;this.sidebarContainer.addEventListener("click",(function(e){return e.stopPropagation()})),this.sidebarButton.addEventListener("click",(function(e){return e.stopPropagation()})),this.sidebarContainer.addEventListener("touchend",(function(e){return e.stopPropagation()})),this.sidebarButton.addEventListener("touchend",(function(e){return e.stopPropagation()})),this.sidebarButton.addEventListener("click",(function(){return e.toggleSidebar()})),document.addEventListener("keyup",(function(t){"Escape"===t.key&&e.closeSidebar()})),document.body.addEventListener("click",(function(){return e.closeSidebar()})),document.body.addEventListener("touchend",(function(){return e.closeSidebar()})),this.sectionLinksContainer.addEventListener("click",(function(t){t.preventDefault();var n=t.target.dataset.target;window.location.hash=n,e.closeSidebar()}))}},{key:"closeSidebar",value:function(){this.sidebarContainer.className.includes("show")&&(this.toggleSidebar(),this.sidebarButton.focus())}},{key:"toggleSidebar",value:function(){var e=this.sidebarContainer.classList.toggle("show")?1:-1;this.sectionLinks.forEach((function(t){return Object.assign(t,{tabIndex:e})}))}}])&&r(t.prototype,n),i&&r(t,i),e}(),o={start:function(){(new i).start(),console.log("IJGOIOIDGOIJDG")}};n(0);document.addEventListener("DOMContentLoaded",(function(){return o.start()}))}]);
//# sourceMappingURL=main.c99a3ed38b6ac8eb88e6.bundle.js.map