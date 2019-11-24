function getProperty(source, attributes, defaultValue) {
  if (!source || typeof source !== 'object') {
    return defaultValue;
  }

  const target = source[attributes[0]];

  if (attributes.length === 1) {
    return typeof target !== 'undefined' ? target : defaultValue;
  }

  return getProperty(target, attributes.slice(1), defaultValue);
}

function get(source, path, defaultValue) {
  if (typeof path !== 'string') {
    return defaultValue;
  }

  return getProperty(source, path.split('.'), defaultValue);
}

export default get;
