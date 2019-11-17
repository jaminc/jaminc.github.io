import Sidebar from './sidebar/Sidebar';

const PageApp = {
  start() {
    const sidebar = new Sidebar();

    sidebar.start();
    sidebar.bindUIElements();
  },
};

export default PageApp;
