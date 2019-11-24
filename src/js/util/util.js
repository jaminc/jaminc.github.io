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

export const getScrollbarWidth = () => {
  // Find the difference between the width of a container with a scrollbar to the width
  // of an element inside the container to get the scrollbar width
  const outerEl = document.createElement('div');

  outerEl.style.visibility = 'hidden';
  outerEl.style.width = '100px';
  outerEl.style.msOverflowStyle = 'scrollbar';
  outerEl.style.overflow = 'scroll';

  document.body.appendChild(outerEl);

  const widthNoScrollbar = outerEl.offsetWidth;

  // Add inner el
  const innerEl = document.createElement('div');

  innerEl.style.width = '100%';
  outerEl.appendChild(innerEl);

  const widthWithScrollbar = innerEl.offsetWidth;

  outerEl.parentNode.removeChild(outerEl);

  return widthNoScrollbar - widthWithScrollbar || 0;
};

export const elapsedTime = (startYear, startMonth) => {
  const startYearNumber = parseInt(startYear, 10);
  const startMonthNumber = parseInt(startMonth, 10);
  const currentDate = new Date();

  let months = currentDate.getMonth() + 1 - startMonthNumber;
  let years = currentDate.getFullYear() - startYearNumber;

  if (currentMonth < startMonthNumber) {
    months += 12;
    years -= 1;
  }

  let yearString = years ? `${years} Year` : '';
  let monthString = months ? `${months} Month` : '';

  if (years > 1) {
    yearString += 's';
  }
  if (months > 1) {
    monthString += 's';
  }

  return `${yearString} ${monthString}`.trim();
};
