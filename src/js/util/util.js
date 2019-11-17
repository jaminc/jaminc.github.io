import { MEDIUM_WIDTH_START } from '../constants';

export const isSmallWidth = () => window.innerWidth < MEDIUM_WIDTH_START;


let debounceTimer;
export const debounce = (callback, wait = 300) => () => {
  if (debounceTimer) {
    return;
  }

  debounceTimer = window.setTimeout(() => {
    callback();
    window.clearTimeout(debounceTimer);
    debounceTimer = null;
  }, wait);
};


const changeToSmallCallbacks = [];
let isPrevWidthSmall;

window.addEventListener('resize', () => {
  if (!isPrevWidthSmall && isSmallWidth()) {
    changeToSmallCallbacks.forEach((cb) => cb());
  }

  isPrevWidthSmall = isSmallWidth();
});

export const listenToChangeToSmallWidth = (callback) => {
  if (typeof isPrevWidthSmall === 'undefined') {
    isPrevWidthSmall = isSmallWidth();
  }

  if (typeof callback === 'function') {
    changeToSmallCallbacks.push(callback);
  }
};
