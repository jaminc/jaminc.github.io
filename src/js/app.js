import Sidebar from "./sidebar/Sidebar";

const PageApp = {
  start() {
    // const mainSectionMap = Array.from(document.getElementsByClassName('main-section'))
    //   .reduce((map, mainSectionEl) => {
    //     map[mainSectionEl.attributes.id.value] = mainSectionEl;
    //     return map;
    //   }, {});

    const sidebar =  new Sidebar();

    console.log('testing');

    sidebar.start();
  }
}

export default PageApp;