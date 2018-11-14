'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBookings = getBookings;
exports.getSlots = getSlots;
exports.checkIn = checkIn;
exports.checkOut = checkOut;
exports.saveBooking = saveBooking;
exports.deleteBooking = deleteBooking;

var _lib = require('../lib');

var config = require('../../config.json');
var apiBaseUrl = config.api.Bookings[process.env.NODE_ENV];

function getBookings(token, instanceId, bookingId, campusId, buildingId, roomId, roomCap, fromDate, toDate) {
  return fetch(apiBaseUrl + '/instances/' + instanceId + '/booking' + (0, _lib.getQueryString)({
    type: 'Room',
    bookingId: bookingId,
    campusId: campusId,
    buildingId: buildingId,
    roomId: roomId,
    roomCap: roomCap,
    fromDate: fromDate,
    toDate: toDate
  }), {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token.access_token
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

function getSlots(token, instanceId, campusId, buildingId, roomId, fromDate, toDate) {
  return fetch(apiBaseUrl + '/instances/' + instanceId + '/booking/slots' + (0, _lib.getQueryString)({
    type: 'room',
    campusId: campusId,
    buildingId: buildingId,
    roomId: roomId,
    fromDate: fromDate,
    toDate: toDate
  }), {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token.access_token
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

function checkIn(token, instanceId, id) {
  return fetch(apiBaseUrl + '/instances/' + instanceId + '/booking/checkIn' + (0, _lib.getQueryString)({ id: id }), {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token.access_token
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

function checkOut(token, instanceId, id) {
  return fetch(apiBaseUrl + '/instances/' + instanceId + '/booking/checkOut' + (0, _lib.getQueryString)({ id: id }), {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token.access_token
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

function saveBooking(token, instanceId, booking) {
  return fetch(apiBaseUrl + '/instances/' + instanceId + '/booking' + (booking.id ? '/reschedule' : '') + (0, _lib.getQueryString)({ bookingType: 'Room' }), {
    method: booking.id ? 'put' : 'post',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token.access_token
    },
    body: JSON.stringify(booking)
  }).then(function (data) {
    if (data.ok) {
      return data.json();
    }
    return data.json().then(function (err) {
      throw err;
    });
  });
}

function deleteBooking(token, instanceId, id) {
  return fetch(apiBaseUrl + '/instances/' + instanceId + '/booking' + (0, _lib.getQueryString)({ id: id }), {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token.access_token
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