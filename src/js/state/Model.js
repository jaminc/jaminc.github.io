class Model {
  constructor(attributes = {}) {
    this.attributes = attributes;

    this.sidebarOpenStateCallbacks = [];
  }

  getState() {
    return {
      ...this.attributes,
    };
  }

  requestState(key) {
    return this.getState()[key];
  }

  updateSidebarOpenState(newState) {
    const prevState = this.getState().isSidebarOpen;

    if (newState !== prevState) {
      this.attributes.isSidebarOpen = newState;

      this.sidebarOpenStateCallbacks.forEach((cb) => cb(newState));
    }
  }

  subscribeToSidebarOpenState(callback) {
    if (typeof callback === 'function') {
      this.sidebarOpenStateCallbacks.push(callback);
    }
  }
}

export default Model;
