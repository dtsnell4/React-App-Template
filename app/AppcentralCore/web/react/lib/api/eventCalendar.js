'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCalendars = getCalendars;
exports.getCalendar = getCalendar;
exports.saveCalendar = saveCalendar;
exports.removeCalendar = removeCalendar;
exports.getCategories = getCategories;
exports.getCategory = getCategory;
exports.saveCategory = saveCategory;
exports.getEvents = getEvents;
exports.saveEvent = saveEvent;
exports.getEvent = getEvent;
exports.removeEvent = removeEvent;

var _lib = require('../lib');

var config = require('../../config.json');
var apiBaseUrl = config.api.EventCalendar[process.env.NODE_ENV];

function getCalendars(token, instanceId) {
  return fetch(apiBaseUrl + '/instances/' + instanceId + '/Calendars', {
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

function getCalendar(token, id, instanceId) {
  return fetch(apiBaseUrl + '/instances/' + instanceId + '/Calendars/' + id, {
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

function saveCalendar(token, instanceId, calendar, newRecord) {
  return fetch(apiBaseUrl + '/instances/' + instanceId + '/Calendars' + (newRecord ? '' : '/' + calendar.Id), {
    method: newRecord ? 'post' : 'put',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token.access_token
    },
    body: JSON.stringify(calendar)
  }).then(function (data) {
    if (data.ok) {
      return data.json();
    }
    return data.json().then(function (err) {
      throw err;
    });
  });
}

function removeCalendar(token, instanceId, calendarId) {
  return fetch(apiBaseUrl + '/instances/' + instanceId + '/Calendars/' + calendarId, {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token.access_token
    }
  }).then(function (data) {
    if (data.ok) {
      return data.text();
    }
    return data.json().then(function (err) {
      throw err;
    });
  });
}

function getCategories(token, calendarId, instanceId) {
  return fetch(apiBaseUrl + '/instances/' + instanceId + '/Categories' + (0, _lib.getQueryString)({
    calendarId: calendarId
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

function getCategory(token, id, instanceId) {
  return fetch(apiBaseUrl + '/instances/' + instanceId + '/Categories/' + id, {
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

function saveCategory(token, instanceId, category, newRecord) {
  return fetch(apiBaseUrl + '/instances/' + instanceId + '/Categories' + (newRecord ? '' : '/' + category.Id), {
    method: newRecord ? 'post' : 'put',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token.access_token
    },
    body: JSON.stringify(category)
  }).then(function (data) {
    if (data.ok) {
      return data.json();
    }
    return data.json().then(function (err) {
      throw err;
    });
  });
}

function getEvents(token, end, start, isApproved, page, pageSize, calendar, keyword, instanceId) {
  return fetch(apiBaseUrl + '/instances/' + instanceId + '/Events' + (0, _lib.getQueryString)({
    calendar: calendar,
    end: end,
    isApproved: isApproved,
    page: page,
    pageSize: pageSize,
    start: start,
    keyword: keyword
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

function saveEvent(token, instanceId, event, newRecord) {
  return fetch(apiBaseUrl + '/instances/' + instanceId + '/Events' + (newRecord ? '' : '/' + event.eventId), {
    method: newRecord ? 'post' : 'put',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token.access_token
    },
    body: JSON.stringify(event)
  }).then(function (data) {
    if (data.ok) {
      return data.json();
    }
    return data.json().then(function (err) {
      throw err;
    });
  });
}

function getEvent(token, instanceId, eventId) {
  return fetch(apiBaseUrl + '/instances/' + instanceId + '/Events/' + eventId, {
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

function removeEvent(token, instanceId, eventId) {
  return fetch(apiBaseUrl + '/instances/' + instanceId + '/Events/' + eventId, {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token.access_token
    }
  }).then(function (data) {
    if (data.ok) {
      return data.text();
    }
    return data.json().then(function (err) {
      throw err;
    });
  });
}