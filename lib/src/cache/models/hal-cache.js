function HalCache({ cache = {} }) {
  let diasCache = cache;

  return {
    getCache,
    get,
    put,
    clear
  };

  function getCache() {
    return diasCache;
  }

  function get({ key }) {
    return diasCache[key];
  }

  function put({ key, value }) {
    diasCache[key] = value;
  }

  function clear() {
    diasCache = {};
  }
}
export default HalCache;
