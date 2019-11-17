export const resolveOnScroll = () => new Promise((resolve) => {
  const onScroll = () => {
    window.removeEventListener('scroll', onScroll);

    resolve();
  };

  window.addEventListener('scroll', onScroll);
});

export const resolveOnWindowWidth = (windowWidthConditional) => new Promise((resolve) => {
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
