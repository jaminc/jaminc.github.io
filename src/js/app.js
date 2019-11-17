import Sidebar from './sidebar/Sidebar';

const PageApp = {
  start() {
    const sidebar = new Sidebar();

    sidebar.start();
  },
};

export default PageApp;
