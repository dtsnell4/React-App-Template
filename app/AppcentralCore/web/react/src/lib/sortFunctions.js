export const sortByTextField = (a, b, field) => {
  const nameA = (a[field] || '').toUpperCase(); // ignore upper and lowercase
  const nameB = (b[field] || '').toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
};

export const sortByNumericField = (a, b, field) => {
  if (a[field] > b[field]) {
    return 1;
  }
  if (a[field] < b[field]) {
    return -1;
  }
  return 0;
};
