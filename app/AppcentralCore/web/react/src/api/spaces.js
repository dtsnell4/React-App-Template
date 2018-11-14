const MockData = require('../lib/mockData.json');
// const config = require('../../config.json');
// const apiBaseUrl = config.api.AppCentral[process.env.NODE_ENV];

export function getBuildings(keyword, activeOnly) {
  return new Promise((resolve) => {
    resolve(MockData.buildings.filter((f) => (typeof (activeOnly) === 'undefined' || f.active === activeOnly) && (keyword === '' || !keyword || f.Description.toLowerCase().includes(keyword.toLowerCase()) || f.Name.toLowerCase().includes(keyword.toLowerCase()))));
  });
}
