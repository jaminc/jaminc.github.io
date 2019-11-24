import Model from './state/Model';
import {
  getScrollbarWidth,
  isSmallWidth,
} from './util/util';
import {
  resolveOnScroll,
  resolveOnWindowWidth,
} from './util/LazyLoadUtil';
import updateWorkExperienceElapsedTime from './WorkExperience/WorkExperienceElapsedTime';

class Application {
  constructor() {
    this.model = new Model({
      scrollbarWidth: getScrollbarWidth(),
    });
  }

  start() {
    this.loadViews();
    updateWorkExperienceElapsedTime();
  }

  static views() {
    return [
      {
        lazyLoadView: () => import(/* webpackChunkName: 'BackToTopButton' */ './backToTopButton/BackToTopButton'),
        lazyLoadConditional: resolveOnScroll(),
      },
      {
        lazyLoadView: () => import(/* webpackChunkName: 'Sidebar' */ './sidebar/Sidebar'),
        lazyLoadConditional: resolveOnWindowWidth(isSmallWidth),
      },
      {
        lazyLoadView: () => import(/* webpackChunkName: 'PageHeader' */ './pageHeader/PageHeader'),
        lazyLoadConditional: resolveOnWindowWidth(isSmallWidth),
      },
    ];
  }

  loadViews() {
    Application.views().forEach(async (viewObject) => {
      if (viewObject.lazyLoadConditional) {
        await viewObject.lazyLoadConditional;
      }

      const View = await viewObject.lazyLoadView().then(({ default: Constructor }) => Constructor);

      const viewInstance = new View({ model: this.model });
      viewInstance.start();
    });
  }
}

export default Application;
