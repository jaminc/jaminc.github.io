import {
  ESCAPE_KEY,
  TAB_KEY,
} from '../constants';
import { isSmallWidth } from '../util/util';

class Sidebar {
  constructor() {
    this.bindUIElements();
  }

  bindUIElements() {
    this.sidebarContainer = document.getElementById('sidebar-container');
    this.sidebarButton = document.getElementById('sidebar-trigger-button');
    this.sectionLinksContainer = document.getElementById('section-links');
    this.sectionLinks = Array.from(document.getElementsByClassName('section-link'));

    this.isOpen = false;
  }

  start() {
    this.sidebarContainer.addEventListener('click', (e) => e.stopPropagation());
    this.sidebarButton.addEventListener('click', (e) => e.stopPropagation());
    // Fix for ios
    this.sidebarContainer.addEventListener('touchend', (e) => e.stopPropagation());
    this.sidebarButton.addEventListener('touchend', (e) => e.stopPropagation());

    this.sidebarButton.addEventListener('click', () => this.toggleSidebar());

    document.addEventListener('keyup', this.onKeyup.bind(this));
    document.addEventListener('keydown', this.onKeydown.bind(this));

    document.body.addEventListener('click', () => this.closeSidebar());
    // Fix for ios
    document.body.addEventListener('touchend', () => this.closeSidebar());

    this.sectionLinksContainer.addEventListener('click', this.onClickSectionLink.bind(this));

    this.setSectionLinksFocusable(!!this.isOpen);
  }

  setSectionLinksFocusable(enable) {
    const tabIndex = enable ? 1 : -1;

    this.sectionLinks.forEach((link) => Object.assign(link, { tabIndex }));
  }

  closeSidebar() {
    if (!isSmallWidth()) {
      return;
    }

    if (this.isOpen) {
      this.toggleSidebar();
      this.sidebarButton.focus();
    }
  }

  toggleSidebar() {
    this.isOpen = this.sidebarContainer.classList.toggle('show');

    this.setSectionLinksFocusable(!!this.isOpen);

    if (this.isOpen) {
      this.sectionLinks[0].focus();
    }
  }

  onClickSectionLink(event) {
    event.preventDefault();
    const { target } = event.target.dataset;

    window.location.hash = target;

    this.closeSidebar();
  }

  onKeyup(event) {
    if (event.key === ESCAPE_KEY) {
      this.closeSidebar();
    }
  }

  onKeydown(event) {
    if (!isSmallWidth() || !this.isOpen) {
      return;
    }

    const { key, shiftKey } = event;

    this.focusableSideBarElements = this.focusableSideBarElements
      || this.sidebarContainer.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    const firstFocusable = this.focusableSideBarElements[0];
    const lastFocusable = this.focusableSideBarElements[this.focusableSideBarElements.length - 1];

    if (key === TAB_KEY) {
      if (shiftKey && document.activeElement === firstFocusable) {
        event.preventDefault();
        lastFocusable.focus();
      } else if (!shiftKey && document.activeElement === lastFocusable) {
        event.preventDefault();
        firstFocusable.focus();
      }
    }
  }
}

export default Sidebar;
