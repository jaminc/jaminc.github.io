(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{343:function(t,n,e){var i=e(344);t.exports=(i.default||i).template({compiler:[8,">= 4.3.0"],main:function(t,n,e,i,o){return'<button aria-label="back to top of page button" href="#" class="back-to-top-button">\n    <div class="back-to-top-button-arrow"></div>\n</button>\n'},useData:!0})},360:function(t,n,e){},361:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return c}));var i=e(343),o=e.n(i);e(360);function a(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function r(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(){document.activeElement.blur()}function u(t){var n=document.createElement("div");return n.innerHTML=t,n.firstElementChild}var c=function(){function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a(this,t),Object.assign(this,n),this.offsetToAppear=n.offsetToAppear||300,this.button=u(o()())}var n,e,i;return n=t,(e=[{key:"start",value:function(){var t=this;document.body.appendChild(this.button),this.updateButtonVisibility(),window.addEventListener("scroll",(function(){return t.updateButtonVisibility()})),this.button.addEventListener("click",(function(){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:400;if(!window.requestAnimationFrame)return window.scrollTo(0,0),void s();var n=window.pageYOffset/2,e=0,i=performance.now();function o(a){(e+=Math.PI/(t/(a-i)))>=Math.PI&&window.scrollTo(0,0),0!==window.pageYOffset?(window.scrollTo(0,Math.round(n+n*Math.cos(e))),i=a,window.requestAnimationFrame(o)):s()}window.requestAnimationFrame(o)}()})),this.model.subscribeToSidebarOpenState(this.onChangeSideBarOpenState.bind(this))}},{key:"updateButtonVisibility",value:function(){this.setButtonVisibility(window.pageYOffset>this.offsetToAppear)}},{key:"setButtonVisibility",value:function(t){t?this.button.classList.add("show"):this.button.classList.remove("show")}},{key:"onChangeSideBarOpenState",value:function(t){var n=this;t?window.setTimeout((function(){return n.setButtonVisibility(!t)})):this.updateButtonVisibility()}}])&&r(n.prototype,e),i&&r(n,i),Object.defineProperty(n,"prototype",{writable:!1}),t}()}}]);
//# sourceMappingURL=BackToTopButton.b988bc81dc0d36dbb917.bundle.js.map