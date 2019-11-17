import Sidebar from './sidebar/Sidebar';
import PageHeader from './pageHeader/PageHeader';
import Model from './state/Model';
import {
  getScrollbarWidth,
} from './util/util';

class Application {
  start() {
    this.model = new Model({
      scrollbarWidth: getScrollbarWidth(),
    });

    this.sidebar = new Sidebar({ model: this.model });
    this.sidebar.start();

    this.pageHeader = new PageHeader({ model: this.model });
    this.pageHeader.start();

    this.startBTTButtonOnScroll(this.model);

    console.log('spodkf');
  }

  startBTTButtonOnScroll(model) {
    const onScroll = () => {
      window.removeEventListener('scroll', onScroll);

      import(/* webpackChunkName: 'BackToTopButton' */ './backToTopButton/BackToTopButton')
        .then(({ default: BackToTopButton }) => {
          this.backToTopButton = new BackToTopButton({ model });

          this.backToTopButton.start();
        });
    };

    window.addEventListener('scroll', onScroll);
  }
}

export default Application;
