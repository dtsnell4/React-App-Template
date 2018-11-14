'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBuildings = getBuildings;
var MockData = require('../lib/mockData.json');
// const config = require('../../config.json');
// const apiBaseUrl = config.api.AppCentral[process.env.NODE_ENV];

function getBuildings(keyword, activeOnly) {
  return new Promise(function (resolve) {
    resolve(MockData.buildings.filter(function (f) {
      return (typeof activeOnly === 'undefined' || f.active === activeOnly) && (keyword === '' || !keyword || f.Description.toLowerCase().includes(keyword.toLowerCase()) || f.Name.toLowerCase().includes(keyword.toLowerCase()));
    }));
  });
}