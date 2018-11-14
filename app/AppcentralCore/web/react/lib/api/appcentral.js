'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RefreshToken = RefreshToken;
exports.getApps = getApps;
exports.getPermissions = getPermissions;
exports.UploadFile = UploadFile;
exports.RemoveFile = RemoveFile;
exports.login = login;
exports.getHelpComponent = getHelpComponent;
exports.queryUsers = queryUsers;
exports.impersonateUser = impersonateUser;
exports.getCampuses = getCampuses;
exports.getBuildings = getBuildings;
exports.getRooms = getRooms;
exports.getAmenities = getAmenities;
exports.saveBuilding = saveBuilding;
exports.saveCampus = saveCampus;
exports.saveRoom = saveRoom;
exports.saveAmenity = saveAmenity;
exports.removeAmenity = removeAmenity;
exports.getRoomTypes = getRoomTypes;
exports.getBookableTypes = getBookableTypes;
exports.getAmenityTypes = getAmenityTypes;
exports.handleTopNavClick = handleTopNavClick;
exports.getNations = getNations;
exports.getStates = getStates;

var _lib = require('../lib');

var config = require('../../config.json');
var apiBaseUrl = config.api.AppCentral[process.env.NODE_ENV];

function RefreshToken(token) {
  var params = new URLSearchParams();
  params.append('grant_type', 'refresh_token');
  params.append('refresh_token', token.refresh_token);
  params.append('client_id', 'appcentral');
  return fetch(apiBaseUrl + '/auth/token', {
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: params
  }).then(function (data) {
    if (data.ok) {
      return data.json();
    }
    return data.json().then(function (err) {
      throw err;
    });
  });
}

function getApps(token) {
  return fetch(apiBaseUrl + '/me/instances', {
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

function getPermissions(token) {
  var instanceId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  return fetch(apiBaseUrl + '/me/instances/' + instanceId + '/roles', {
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

function UploadFile(token, file, instanceId) {
  var formData = new FormData();
  formData.append('file', file);
  return fetch(apiBaseUrl + '/instances/' + instanceId + '/files', {
    method: 'post',
    headers: {
      Authorization: 'Bearer ' + token.access_token
    },
    body: formData
  }).then(function (data) {
    if (data.ok) {
      return data.json();
    }
    return data.json().then(function (err) {
      throw err;
    });
  });
}

function RemoveFile(token, fileId, instanceId) {
  return fetch(apiBaseUrl + '/instances/' + instanceId + '/files/remove/' + fileId, {
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

function login(username, password) {
  var params = new URLSearchParams();
  params.append('grant_type', 'password');
  params.append('client_id', 'appcentral');
  params.append('username', username);
  params.append('password', window.encodeURIComponent(password));
  return fetch(apiBaseUrl + '/auth/token', {
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: params
  }).then(function (data) {
    if (data.ok) {
      return data.json();
    }
    return data.json().then(function (err) {
      throw err;
    });
  });
}

function getHelpComponent(token, instanceId) {
  return fetch(apiBaseUrl + '/instances/' + instanceId + '/help', {
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

function queryUsers(token, value) {
  var banner = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var populationId = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

  return fetch(apiBaseUrl + '/users' + (0, _lib.getQueryString)({ banner: banner, populationId: populationId, value: value }), {
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
function impersonateUser(token, userId) {
  return fetch(apiBaseUrl + '/users/' + userId + '/token', {
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

function getCampuses(token, campusId, active, includeId) {
  return fetch(apiBaseUrl + '/campuses' + (0, _lib.getQueryString)({ campusId: campusId, active: active, includeId: includeId }), {
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

function getBuildings(token, buildingId, active, campusId, includeBooking, includeId) {
  return fetch(apiBaseUrl + '/buildings' + (0, _lib.getQueryString)({
    buildingId: buildingId,
    active: active,
    campusId: campusId,
    includeBooking: includeBooking,
    includeId: includeId
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

function getRooms(token, roomId, active, buildingId, includeBooking, includeId) {
  return fetch(apiBaseUrl + '/rooms' + (0, _lib.getQueryString)({
    roomId: roomId,
    active: active,
    buildingId: buildingId,
    includeBooking: includeBooking,
    includeId: includeId
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

function getAmenities(token, active) {
  return fetch(apiBaseUrl + '/amenities' + (0, _lib.getQueryString)({ active: active }), {
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

function saveBuilding(token, building, campusId, newRecord) {
  return fetch(apiBaseUrl + '/Rooms/' + (newRecord ? 'addbuilding' : 'update/building') + '/' + (newRecord ? campusId : building.id), {
    method: newRecord ? 'post' : 'put',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token.access_token
    },
    body: JSON.stringify(building)
  }).then(function (data) {
    if (data.ok) {
      return data.json();
    }
    return data.json().then(function (err) {
      throw err;
    });
  });
}

function saveCampus(token, campus, newRecord) {
  return fetch(apiBaseUrl + '/Rooms/' + (newRecord ? 'addcampus' : 'update/campus') + '/' + (newRecord ? '0' : campus.id), {
    method: newRecord ? 'post' : 'put',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token.access_token
    },
    body: JSON.stringify(campus)
  }).then(function (data) {
    if (data.ok) {
      return data.json();
    }
    return data.json().then(function (err) {
      throw err;
    });
  });
}

function saveRoom(token, room) {
  var newRecord = room.id === null || room.id === undefined;
  return fetch(apiBaseUrl + '/Rooms/' + (newRecord ? 'addroom' : 'update/room') + '/' + (newRecord ? room.buildingId : room.id), {
    method: newRecord ? 'post' : 'put',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token.access_token
    },
    body: JSON.stringify(room)
  }).then(function (data) {
    if (data.ok) {
      return data.json();
    }
    return data.json().then(function (err) {
      throw err;
    });
  });
}

function saveAmenity(token, attribute, newRecord) {
  return fetch(apiBaseUrl + '/Rooms/' + (newRecord ? 'add/amenity' : 'update/amenity') + (newRecord ? '' : '/' + attribute.id), {
    method: newRecord ? 'post' : 'put',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token.access_token
    },
    body: JSON.stringify(attribute)
  }).then(function (data) {
    if (data.ok) {
      return data.json();
    }
    return data.json().then(function (err) {
      throw err;
    });
  });
}

function removeAmenity(token, amenityId) {
  return fetch(apiBaseUrl + '/Rooms/delete/amenity/' + amenityId, {
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

function getRoomTypes(token, active) {
  return fetch(apiBaseUrl + '/Rooms/roomtypes' + (0, _lib.getQueryString)({ active: active }), {
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

function getBookableTypes(token) {
  var active = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  return fetch(apiBaseUrl + '/bookabletypes' + (0, _lib.getQueryString)({ active: active }), {
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

function getAmenityTypes(token) {
  return fetch(apiBaseUrl + '/amenitiestypes', {
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

function handleTopNavClick(app, thisSession) {
  var baseUrl = config.api.BaseUrl[process.env.NODE_ENV];
  var loginUrl = config.api.LoginApp1[process.env.NODE_ENV];
  var returnUrl = '' + baseUrl + app.applicationFolder + '/' + app.slug;
  // const url = `${baseUrl}/appcentral/?returnUrl=${returnUrl}&refresh_token=${this.props.session.refresh_token}`;
  var url = loginUrl + '?token=' + thisSession.access_token + '&returnUrl=' + returnUrl + '&refresh_token=' + thisSession.refresh_token;
  window.location.href = url;
}

function getNations(token) {
  return fetch(apiBaseUrl + '/nations', {
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

function getStates(token) {
  return fetch(apiBaseUrl + '/states', {
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