import { SCROLLBAR_WIDTH } from '../constants';

class PageHeader {
  constructor(options = {}) {
    Object.assign(this, options);
    this.bindUIElements();
  }

  start() {
    this.model.subscribeToSidebarOpenState(this.onChangeSideBarOpenState.bind(this));
  }

  bindUIElements() {
    this.pageHeaderTitle = document.querySelector('.header-title');
  }

  onChangeSideBarOpenState(isOpen) {
    this.pageHeaderTitle.style.paddingRight = isOpen
      ? `${this.model.requestState(SCROLLBAR_WIDTH)}px`
      : '';
  }
}

export default PageHeader;
