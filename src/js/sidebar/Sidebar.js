import {
  ESCAPE_KEY,
  TAB_KEY,
  SIDEBAR_OPEN_STATE,
  SCROLLBAR_WIDTH,
} from '../constants';
import {
  isSmallWidth,
  listenToChangeToSmallWidth,
} from '../util/util';

class Sidebar {
  constructor(options = {}) {
    Object.assign(this, options);
    this.bindUIElements();
  }

  bindUIElements() {
    this.sidebarContainer = document.getElementById('sidebar-container');
    this.sidebarButton = document.getElementById('sidebar-trigger-button');
    this.sectionLinksContainer = document.getElementById('section-links');
    this.sectionLinks = Array.from(document.getElementsByClassName('section-link'));
  }

  start() {
    this.sidebarContainer.addEventListener('click', (e) => e.stopPropagation());
    this.sidebarButton.addEventListener('click', this.onClickSidebarButton.bind(this));
    // Fix for ios
    this.sidebarContainer.addEventListener('touchend', (e) => e.stopPropagation());

    document.addEventListener('keyup', this.onKeyup.bind(this));
    document.addEventListener('keydown', this.onKeydown.bind(this));

    document.body.addEventListener('click', () => this.closeSidebar());
    // Fix for ios
    document.body.addEventListener('touchend', () => this.closeSidebar());

    this.sectionLinksContainer.addEventListener('click', this.onClickSectionLink.bind(this));

    this.setSectionLinksFocusable(!!this.isOpen());

    listenToChangeToSmallWidth(() => this.closeSidebar());
    this.model.subscribeToSidebarOpenState(this.onChangeSideBarOpenState.bind(this));

    return this;
  }

  setSectionLinksFocusable(enable) {
    const tabIndex = enable ? 1 : -1;

    this.sectionLinks.forEach((link) => Object.assign(link, { tabIndex }));
  }

  closeSidebar() {
    if (!isSmallWidth()) {
      return;
    }

    if (this.isOpen()) {
      this.toggleSidebar();
      this.sidebarButton.focus();
    }
  }

  toggleSidebar() {
    this.model.updateSidebarOpenState(!this.isOpen());
  }

  onChangeSideBarOpenState(isOpen) {
    this.setSectionLinksFocusable(isOpen);

    if (isOpen) {
      document.body.classList.add('show');
      this.sectionLinks[0].focus();
    } else {
      document.body.classList.remove('show');
    }

    document.body.style.paddingRight = isOpen
      ? `${this.model.requestState(SCROLLBAR_WIDTH)}px`
      : '';
  }

  isOpen() {
    return this.model.requestState(SIDEBAR_OPEN_STATE);
  }

  onClickSidebarButton(event) {
    event.stopPropagation();

    this.toggleSidebar();
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
    if (!isSmallWidth() || !this.isOpen()) {
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
