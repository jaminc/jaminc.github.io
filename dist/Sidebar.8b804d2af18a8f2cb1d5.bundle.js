"use strict";(self.webpackChunkjamin_portfolio=self.webpackChunkjamin_portfolio||[]).push([[974],{2707:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});var i=n(3383),s=n(8390);function o(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}const a=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),Object.assign(this,t),this.bindUIElements()}var t,n,a;return t=e,(n=[{key:"bindUIElements",value:function(){this.sidebarContainer=document.getElementById("sidebar-container"),this.sidebarButton=document.getElementById("sidebar-trigger-button"),this.sectionLinksContainer=document.getElementById("section-links"),this.sectionLinks=Array.from(document.getElementsByClassName("section-link"))}},{key:"start",value:function(){var e=this;return this.sidebarContainer.addEventListener("click",(function(e){return e.stopPropagation()})),this.sidebarButton.addEventListener("click",this.onClickSidebarButton.bind(this)),this.sidebarContainer.addEventListener("touchend",(function(e){return e.stopPropagation()})),document.addEventListener("keyup",this.onKeyup.bind(this)),document.addEventListener("keydown",this.onKeydown.bind(this)),document.body.addEventListener("click",(function(){return e.closeSidebar()})),document.body.addEventListener("touchend",(function(){return e.closeSidebar()})),this.sectionLinksContainer.addEventListener("click",this.onClickSectionLink.bind(this)),this.setSectionLinksFocusable(!!this.isOpen()),(0,s.zO)((function(){return e.closeSidebar()})),this.model.subscribeToSidebarOpenState(this.onChangeSideBarOpenState.bind(this)),this}},{key:"setSectionLinksFocusable",value:function(e){var t=e?1:-1;this.sectionLinks.forEach((function(e){return Object.assign(e,{tabIndex:t})}))}},{key:"closeSidebar",value:function(){(0,s.e$)()&&this.isOpen()&&(this.toggleSidebar(),this.sidebarButton.focus())}},{key:"toggleSidebar",value:function(){this.model.updateSidebarOpenState(!this.isOpen())}},{key:"onChangeSideBarOpenState",value:function(e){this.setSectionLinksFocusable(e),e?(document.body.classList.add("show"),this.sectionLinks[0].focus()):document.body.classList.remove("show"),document.body.style.paddingRight=e?"".concat(this.model.requestState(i.nn),"px"):""}},{key:"isOpen",value:function(){return this.model.requestState(i.NE)}},{key:"onClickSidebarButton",value:function(e){e.stopPropagation(),this.toggleSidebar()}},{key:"onClickSectionLink",value:function(e){e.preventDefault();var t=e.target.dataset.target;window.location.hash=t,this.closeSidebar()}},{key:"onKeyup",value:function(e){e.key===i.O_&&this.closeSidebar()}},{key:"onKeydown",value:function(e){if((0,s.e$)()&&this.isOpen()){var t=e.key,n=e.shiftKey;this.focusableSideBarElements=this.focusableSideBarElements||this.sidebarContainer.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');var o=this.focusableSideBarElements[0],a=this.focusableSideBarElements[this.focusableSideBarElements.length-1];t===i._Z&&(n&&document.activeElement===o?(e.preventDefault(),a.focus()):n||document.activeElement!==a||(e.preventDefault(),o.focus()))}}}])&&o(t.prototype,n),a&&o(t,a),Object.defineProperty(t,"prototype",{writable:!1}),e}()}}]);
//# sourceMappingURL=Sidebar.8b804d2af18a8f2cb1d5.bundle.js.map