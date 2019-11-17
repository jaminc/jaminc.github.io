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
