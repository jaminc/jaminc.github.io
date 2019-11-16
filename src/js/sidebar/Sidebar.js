class Sidebar {
  constructor() {
    this.sidebarContainer = document.getElementById('sidebar-container');
    this.sidebarButton = document.getElementById('sidebar-trigger-button');
    this.sectionLinksContainer = document.getElementById('section-links');
    this.sectionLinks = Array.from(document.getElementsByClassName('section-link'));
  }

  start() {
    this.sidebarContainer.addEventListener('click', e => e.stopPropagation());
    this.sidebarButton.addEventListener('click', e => e.stopPropagation());
    // Fix for ios
    this.sidebarContainer.addEventListener('touchend', e => e.stopPropagation());
    this.sidebarButton.addEventListener('click', () => this.toggleSidebar());

    document.addEventListener('keyup', event => {
       if (event.key === "Escape") {
         this.closeSidebar();
      }
    });
    document.body.addEventListener('click', () => this.closeSidebar());
    // Fix for ios
    document.body.addEventListener('touchend', () => this.closeSidebar());

    this.sectionLinksContainer.addEventListener('click', event => {
      event.preventDefault();
      const { target } = event.target.dataset;

      // if(history.pushState) {
      //   history.pushState(null, null, `#${ target }`);
      // }
      // else {
      location.hash = target;

      this.closeSidebar();
      // }
    })
  }

  closeSidebar() {
    if (this.sidebarContainer.className.includes('show')) {
      this.toggleSidebar();
    };

    this.sidebarButton.focus()
  }

  toggleSidebar() {
    const isOpening = this.sidebarContainer.classList.toggle('show')
    const tabIndex = isOpening ? 1 : -1;

    this.sectionLinks.forEach(link => link.tabIndex = tabIndex)
  }
};

export default Sidebar;