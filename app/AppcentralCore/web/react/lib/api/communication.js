'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAnnouncements = getAnnouncements;
exports.getAnnouncement = getAnnouncement;

var _lib = require('../lib');

var config = require('../../config.json');
var apiBaseUrl = config.api.Communication[process.env.NODE_ENV];

function getAnnouncements(token) {
  var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var pageSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
  var sort = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'expires';

  return fetch(apiBaseUrl + '/instances/1/myannouncements' + (0, _lib.getQueryString)({ page: page, pageSize: pageSize, sort: sort }), {
    method: 'get',
    headers: {
      Authorization: 'Bearer ' + token.access_token,
      'Content-Type': 'application/json'
    }
  }).then(function (data) {
    if (data.ok) {
      return data.json();
    }
    return data.json().then(function (err) {
      throw err;
    });
  });
}

function getAnnouncement(token, id) {
  var read = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  return fetch(apiBaseUrl + '/instances/1/announcements/' + id + (0, _lib.getQueryString)({ read: read }), {
    method: 'get',
    headers: {
      Authorization: 'Bearer ' + token.access_token,
      'Content-Type': 'application/json'
    }
  }).then(function (data) {
    if (data.ok) {
      return data.json();
    }
    return data.json().then(function (err) {
      throw err;
    });
  });
}