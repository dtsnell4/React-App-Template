function getQueryString(params) {
  const queryString = Object.keys(params)
    .map((k) => {
      if (params[k] !== undefined && params[k] != null) {
        return (`${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`);
      }
      return undefined;
    })
    .filter((k) => k !== undefined)
    .join('&');
  return queryString !== '' ? (`?${queryString}`) : queryString;
}

export default getQueryString;
