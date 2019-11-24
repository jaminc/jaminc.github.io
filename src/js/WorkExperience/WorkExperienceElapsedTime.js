import get from '../util/get';
import { elapsedTime } from '../util/util';

function updateWorkExperienceElapsedTime() {
  const targetEl = document.querySelector('[data-start-date]');
  const startDate = get(targetEl, 'dataset.startDate', '');
  const elapsed = elapsedTime(...startDate.split('-'));

  if (elapsed) {
    targetEl.textContent += ` (${elapsed})`;
  }
}

export default updateWorkExperienceElapsedTime;
