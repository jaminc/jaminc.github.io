import template from '../../templates/partials/backToTopButton/backToTopButton.hbs';
import '../../scss/backToTopButton/BackToTopButton.scss';

function resetFocus() {
  document.activeElement.blur();
}

function scrollToTop(duration = 400) {
  if (!window.requestAnimationFrame) {
    window.scrollTo(0, 0);
    resetFocus();
    return;
  }

  const cosParameter = window.pageYOffset / 2;
  let scrollCount = 0;
  let oldTimestamp = performance.now();

  function step(newTimestamp) {
    scrollCount += Math.PI / (duration / (newTimestamp - oldTimestamp));
    if (scrollCount >= Math.PI) window.scrollTo(0, 0);
    if (window.pageYOffset === 0) {
      resetFocus();
      return;
    }
    window.scrollTo(0, Math.round(cosParameter + (cosParameter * Math.cos(scrollCount))));
    oldTimestamp = newTimestamp;
    window.requestAnimationFrame(step);
  }

  window.requestAnimationFrame(step);
}

function templateToHTML(templateString) {
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = templateString;
  return tempDiv.firstElementChild;
}

const OFFSET_TO_APPEAR = 300;

export default class BackToTopButton {
  constructor(options = {}) {
    Object.assign(this, options);
    this.offsetToAppear = options.offsetToAppear || OFFSET_TO_APPEAR;
    this.button = templateToHTML(template());
  }

  start() {
    document.body.appendChild(this.button);

    this.updateButtonVisibility();

    window.addEventListener('scroll', () => this.updateButtonVisibility());
    this.button.addEventListener('click', () => scrollToTop());
    this.model.subscribeToSidebarOpenState(this.onChangeSideBarOpenState.bind(this));
  }

  updateButtonVisibility() {
    this.setButtonVisibility(window.pageYOffset > this.offsetToAppear);
  }

  setButtonVisibility(show) {
    if (show) {
      this.button.classList.add('show');
    } else {
      this.button.classList.remove('show');
    }
  }

  onChangeSideBarOpenState(isOpen) {
    if (isOpen) {
      window.setTimeout(() => this.setButtonVisibility(!isOpen));
    } else {
      this.updateButtonVisibility();
    }
  }
}
