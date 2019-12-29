export const resolveOnScroll = () => new Promise((resolve) => {
  const onScroll = () => {
    window.removeEventListener('scroll', onScroll);

    resolve();
  };

  window.addEventListener('scroll', onScroll);
});

// export const resolveOnWindowWidth: Function = (windowWidthConditional: Function) => new Promise((resolve) => {
export const resolveOnWindowWidth: (callback: Function) => any = (windowWidthConditional) => new Promise((resolve) => {
  if (windowWidthConditional()) {
    resolve();
    return;
  }

  const onResize = () => {
    if (windowWidthConditional()) {
      window.removeEventListener('resize', onResize);
      resolve();
    }
  };

  window.addEventListener('resize', onResize);
});
