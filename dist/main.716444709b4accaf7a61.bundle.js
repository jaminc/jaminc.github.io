!function(e){function t(t){for(var n,r,o=t[0],a=t[1],s=0,u=[];s<o.length;s++)r=o[s],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&u.push(i[r][0]),i[r]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(c&&c(t);u.length;)u.shift()()}var n={},r={1:0},i={1:0};function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(e){var t=[];r[e]?t.push(r[e]):0!==r[e]&&{0:1}[e]&&t.push(r[e]=new Promise((function(t,n){for(var i=e+".css",a=o.p+i,s=document.getElementsByTagName("link"),u=0;u<s.length;u++){var c=(d=s[u]).getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(c===i||c===a))return t()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){var d;if((c=(d=l[u]).getAttribute("data-href"))===i||c===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var i=t&&t.target&&t.target.src||a,o=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=i,delete r[e],f.parentNode.removeChild(f),n(o)},f.href=a,document.getElementsByTagName("head")[0].appendChild(f)})).then((function(){r[e]=0})));var n=i[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,r){n=i[e]=[t,r]}));t.push(n[2]=a);var s,u=document.createElement("script");u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.src=function(e){return o.p+""+({0:"BackToTopButton",2:"vendors~BackToTopButton"}[e]||e)+".716444709b4accaf7a61.bundle.js"}(e);var c=new Error;s=function(t){u.onerror=u.onload=null,clearTimeout(l);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",c.name="ChunkLoadError",c.type=r,c.request=o,n[1](c)}i[e]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:u})}),12e4);u.onerror=u.onload=s,document.head.appendChild(u)}return Promise.all(t)},o.m=e,o.c=n,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="dist/",o.oe=function(e){throw console.error(e),e};var a=window.webpackJsonp=window.webpackJsonp||[],s=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var c=s;o(o.s=1)}([function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r,i=function(){return window.innerWidth<640},o=[];window.addEventListener("resize",(function(){!r&&i()&&o.forEach((function(e){return e()})),r=i()}));var a=function(){var e=document.createElement("div");e.style.visibility="hidden",e.style.width="100px",e.style.msOverflowStyle="scrollbar",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth,n=document.createElement("div");n.style.width="100%",e.appendChild(n);var r=n.offsetWidth;return e.parentNode.removeChild(e),t-r||0};function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),Object.assign(this,t),this.bindUIElements()}var t,n,a;return t=e,(n=[{key:"bindUIElements",value:function(){this.sidebarContainer=document.getElementById("sidebar-container"),this.sidebarButton=document.getElementById("sidebar-trigger-button"),this.sectionLinksContainer=document.getElementById("section-links"),this.sectionLinks=Array.from(document.getElementsByClassName("section-link"))}},{key:"start",value:function(){var e,t=this;return this.sidebarContainer.addEventListener("click",(function(e){return e.stopPropagation()})),this.sidebarButton.addEventListener("click",this.onClickSidebarButton.bind(this)),this.sidebarContainer.addEventListener("touchend",(function(e){return e.stopPropagation()})),document.addEventListener("keyup",this.onKeyup.bind(this)),document.addEventListener("keydown",this.onKeydown.bind(this)),document.body.addEventListener("click",(function(){return t.closeSidebar()})),document.body.addEventListener("touchend",(function(){return t.closeSidebar()})),this.sectionLinksContainer.addEventListener("click",this.onClickSectionLink.bind(this)),this.setSectionLinksFocusable(!!this.isOpen()),e=function(){return t.closeSidebar()},void 0===r&&(r=i()),"function"==typeof e&&o.push(e),this.model.subscribeToSidebarOpenState(this.onChangeSideBarOpenState.bind(this)),this}},{key:"setSectionLinksFocusable",value:function(e){var t=e?1:-1;this.sectionLinks.forEach((function(e){return Object.assign(e,{tabIndex:t})}))}},{key:"closeSidebar",value:function(){i()&&this.isOpen()&&(this.toggleSidebar(),this.sidebarButton.focus())}},{key:"toggleSidebar",value:function(){this.model.updateSidebarOpenState(!this.isOpen())}},{key:"onChangeSideBarOpenState",value:function(e){this.setSectionLinksFocusable(e),e?(document.body.classList.add("show"),this.sectionLinks[0].focus()):document.body.classList.remove("show"),document.body.style.paddingRight=e?"".concat(this.model.getState().scrollbarWidth,"px"):""}},{key:"isOpen",value:function(){return this.model.getState().isSidebarOpen}},{key:"onClickSidebarButton",value:function(e){e.stopPropagation(),this.toggleSidebar()}},{key:"onClickSectionLink",value:function(e){e.preventDefault();var t=e.target.dataset.target;window.location.hash=t,this.closeSidebar()}},{key:"onKeyup",value:function(e){"Escape"===e.key&&this.closeSidebar()}},{key:"onKeydown",value:function(e){if(i()&&this.isOpen()){var t=e.key,n=e.shiftKey;this.focusableSideBarElements=this.focusableSideBarElements||this.sidebarContainer.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');var r=this.focusableSideBarElements[0],o=this.focusableSideBarElements[this.focusableSideBarElements.length-1];"Tab"===t&&(n&&document.activeElement===r?(e.preventDefault(),o.focus()):n||document.activeElement!==o||(e.preventDefault(),r.focus()))}}}])&&s(t.prototype,n),a&&s(t,a),e}();function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),Object.assign(this,t),this.bindUIElements()}var t,n,r;return t=e,(n=[{key:"start",value:function(){this.model.subscribeToSidebarOpenState(this.onChangeSideBarOpenState.bind(this))}},{key:"bindUIElements",value:function(){this.pageHeaderTitle=document.querySelector(".header-title")}},{key:"onChangeSideBarOpenState",value:function(e){this.pageHeaderTitle.style.paddingRight=e?"".concat(this.model.getState().scrollbarWidth,"px"):""}}])&&c(t.prototype,n),r&&c(t,r),e}();function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var b=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.attributes=t,this.sidebarOpenStateCallbacks=[]}var t,n,r;return t=e,(n=[{key:"getState",value:function(){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(n,!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},this.attributes)}},{key:"updateSidebarOpenState",value:function(e){var t=this.getState().isSidebarOpen;e!==t&&(this.attributes.isSidebarOpen=e,this.sidebarOpenStateCallbacks.forEach((function(t){return t(e)})))}},{key:"subscribeToSidebarOpenState",value:function(e){"function"==typeof e&&this.sidebarOpenStateCallbacks.push(e)}}])&&h(t.prototype,n),r&&h(t,r),e}();function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var v=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,r,i;return t=e,(r=[{key:"start",value:function(){this.model=new b({scrollbarWidth:a()}),this.sidebar=new u({model:this.model}),this.sidebar.start(),this.pageHeader=new l({model:this.model}),this.pageHeader.start(),this.startBTTButtonOnScroll(this.model)}},{key:"startBTTButtonOnScroll",value:function(e){var t=this;window.addEventListener("scroll",(function r(){window.removeEventListener("scroll",r),Promise.all([n.e(2),n.e(0)]).then(n.bind(null,24)).then((function(n){var r=n.default;t.backToTopButton=new r({model:e}),t.backToTopButton.start()}))}))}}])&&p(t.prototype,r),i&&p(t,i),e}();n(0);document.addEventListener("DOMContentLoaded",(function(){(new v).start()}))}]);
//# sourceMappingURL=main.716444709b4accaf7a61.bundle.js.map