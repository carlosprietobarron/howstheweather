const httpLibrary = (() => {
  const get = async (url) => {
    const apiUrl = `https://${url}`;
    const response = await fetch(apiUrl, { mode: 'cors' });
    const resData = await response.json();
    return resData;
  };

  return { get };
})();

export { httpLibrary };