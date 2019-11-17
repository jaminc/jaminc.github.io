import Sidebar from './sidebar/Sidebar';

function onScroll() {
  window.removeEventListener('scroll', onScroll);

  import(/* webpackChunkName: 'BackToTopButton' */ './backToTopButton/BackToTopButton')
    .then(({ default: BackToTopButton }) => {
      const backToTopButton = new BackToTopButton();

      backToTopButton.start();
    });
}

const PageApp = {
  start() {
    const sidebar = new Sidebar();

    sidebar.start();

    window.addEventListener('scroll', onScroll);
  },
};

export default PageApp;
