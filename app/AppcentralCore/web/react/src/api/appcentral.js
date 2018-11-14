import { getQueryString } from '../lib';
const config = require('../../config.json');
const apiBaseUrl = config.api.AppCentral[process.env.NODE_ENV];

export function RefreshToken(token) {
  const params = new URLSearchParams();
  params.append('grant_type', 'refresh_token');
  params.append('refresh_token', token.refresh_token);
  params.append('client_id', 'appcentral');
  return fetch(`${apiBaseUrl}/auth/token`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: params,
  }).then((data) => {
    if (data.ok) {
      return data.json();
    }
    return data.json()
      .then((err) => {
        throw err;
      });
  });
}

export function getApps(token) {
  return fetch(`${apiBaseUrl}/me/instances`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token.access_token}`,
    },
  }).then((data) => {
    if (data.ok) {
      return data.json();
    }
    return data.json()
      .then((err) => {
        throw err;
      });
  });
}

export function getPermissions(token, instanceId = 1) {
  return fetch(`${apiBaseUrl}/me/instances/${instanceId}/roles`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token.access_token}`,
    },
  }).then((data) => {
    if (data.ok) {
      return data.json();
    }
    return data.json()
      .then((err) => {
        throw err;
      });
  });
}

export function UploadFile(token, file, instanceId) {
  const formData = new FormData();
  formData.append('file', file);
  return fetch(`${apiBaseUrl}/instances/${instanceId}/files`, {
    method: 'post',
    headers: {
      Authorization: `Bearer ${token.access_token}`,
    },
    body: formData,
  }).then((data) => {
    if (data.ok) {
      return data.json();
    }
    return data.json()
      .then((err) => {
        throw err;
      });
  });
}

export function RemoveFile(token, fileId, instanceId) {
  return fetch(
    `${apiBaseUrl}/instances/${instanceId}/files/remove/${fileId}`,
    {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token.access_token}`,
      },
    }
  ).then((data) => {
    if (data.ok) {
      return data.json();
    }
    return data.json()
      .then((err) => {
        throw err;
      });
  });
}

export function login(username, password) {
  const params = new URLSearchParams();
  params.append('grant_type', 'password');
  params.append('client_id', 'appcentral');
  params.append('username', username);
  params.append('password', window.encodeURIComponent(password));
  return fetch(`${apiBaseUrl}/auth/token`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: params,
  }).then((data) => {
    if (data.ok) {
      return data.json();
    }
    return data.json()
      .then((err) => {
        throw err;
      });
  });
}

export function getHelpComponent(token, instanceId) {
  return fetch(`${apiBaseUrl}/instances/${instanceId}/help`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token.access_token}`,
    },
  }).then((data) => {
    if (data.ok) {
      return data.json();
    }
    return data.json()
      .then((err) => {
        throw err;
      });
  });
}

export function queryUsers(token, value, banner = false, populationId = 0) {
  return fetch(`${apiBaseUrl}/users${getQueryString({ banner, populationId, value })}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token.access_token}`,
    },
  }).then((data) => {
    if (data.ok) {
      return data.json();
    }
    return data.json()
      .then((err) => {
        throw err;
      });
  });
}
export function impersonateUser(token, userId) {
  return fetch(`${apiBaseUrl}/users/${userId}/token`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token.access_token}`,
    },
  }).then((data) => {
    if (data.ok) {
      return data.json();
    }
    return data.json()
      .then((err) => {
        throw err;
      });
  });
}

export function getCampuses(token, campusId, active, includeId) {
  return fetch(`${apiBaseUrl}/campuses${getQueryString({ campusId, active, includeId })}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token.access_token}`,
    },
  }).then((data) => {
    if (data.ok) {
      return data.json();
    }
    return data.json()
      .then((err) => {
        throw err;
      });
  });
}

export function getBuildings(token, buildingId, active, campusId, includeBooking, includeId) {
  return fetch(
    `${apiBaseUrl}/buildings${getQueryString({
      buildingId,
      active,
      campusId,
      includeBooking,
      includeId,
    })}`,
    {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token.access_token}`,
      },
    }
  ).then((data) => {
    if (data.ok) {
      return data.json();
    }
    return data.json()
      .then((err) => {
        throw err;
      });
  });
}

export function getRooms(token, roomId, active, buildingId, includeBooking, includeId) {
  return fetch(
    `${apiBaseUrl}/rooms${getQueryString({
      roomId,
      active,
      buildingId,
      includeBooking,
      includeId,
    })}`,
    {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token.access_token}`,
      },
    }
  ).then((data) => {
    if (data.ok) {
      return data.json();
    }
    return data.json()
      .then((err) => {
        throw err;
      });
  });
}

export function getAmenities(token, active) {
  return fetch(`${apiBaseUrl}/amenities${getQueryString({ active })}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token.access_token}`,
    },
  }).then((data) => {
    if (data.ok) {
      return data.json();
    }
    return data.json()
      .then((err) => {
        throw err;
      });
  });
}

export function saveBuilding(token, building, campusId, newRecord) {
  return fetch(
    `${apiBaseUrl}/Rooms/${newRecord ? 'addbuilding' : 'update/building'}/${newRecord ? campusId : building.id}`,
    {
      method: newRecord ? 'post' : 'put',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token.access_token}`,
      },
      body: JSON.stringify(building),
    }
  ).then((data) => {
    if (data.ok) {
      return data.json();
    }
    return data.json()
      .then((err) => {
        throw err;
      });
  });
}

export function saveCampus(token, campus, newRecord) {
  return fetch(
    `${apiBaseUrl}/Rooms/${newRecord ? 'addcampus' : 'update/campus'}/${newRecord ? '0' : campus.id}`,
    {
      method: newRecord ? 'post' : 'put',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token.access_token}`,
      },
      body: JSON.stringify(campus),
    }
  ).then((data) => {
    if (data.ok) {
      return data.json();
    }
    return data.json()
      .then((err) => {
        throw err;
      });
  });
}

export function saveRoom(token, room) {
  const newRecord = room.id === null || room.id === undefined;
  return fetch(
    `${apiBaseUrl}/Rooms/${newRecord ? 'addroom' : 'update/room'}/${newRecord ? room.buildingId : room.id}`,
    {
      method: newRecord ? 'post' : 'put',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token.access_token}`,
      },
      body: JSON.stringify(room),
    }
  ).then((data) => {
    if (data.ok) {
      return data.json();
    }
    return data.json()
      .then((err) => {
        throw err;
      });
  });
}

export function saveAmenity(token, attribute, newRecord) {
  return fetch(
    `${apiBaseUrl}/Rooms/${newRecord ? 'add/amenity' : 'update/amenity'}${newRecord ? '' : `/${attribute.id}`}`,
    {
      method: newRecord ? 'post' : 'put',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token.access_token}`,
      },
      body: JSON.stringify(attribute),
    }
  ).then((data) => {
    if (data.ok) {
      return data.json();
    }
    return data.json()
      .then((err) => {
        throw err;
      });
  });
}

export function removeAmenity(token, amenityId) {
  return fetch(
    `${apiBaseUrl}/Rooms/delete/amenity/${amenityId}`,
    {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token.access_token}`,
      },
    }
  ).then((data) => {
    if (data.ok) {
      return data.json();
    }
    return data.json()
      .then((err) => {
        throw err;
      });
  });
}

export function getRoomTypes(token, active) {
  return fetch(
    `${apiBaseUrl}/Rooms/roomtypes${getQueryString({ active })}`,
    {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token.access_token}`,
      },
    }
  ).then((data) => {
    if (data.ok) {
      return data.json();
    }
    return data.json()
      .then((err) => {
        throw err;
      });
  });
}

export function getBookableTypes(token, active = true) {
  return fetch(
    `${apiBaseUrl}/bookabletypes${getQueryString({ active })}`,
    {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token.access_token}`,
      },
    }
  ).then((data) => {
    if (data.ok) {
      return data.json();
    }
    return data.json()
      .then((err) => {
        throw err;
      });
  });
}

export function getAmenityTypes(token) {
  return fetch(
    `${apiBaseUrl}/amenitiestypes`,
    {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token.access_token}`,
      },
    }
  ).then((data) => {
    if (data.ok) {
      return data.json();
    }
    return data.json()
      .then((err) => {
        throw err;
      });
  });
}

export function handleTopNavClick(app, thisSession) {
  const baseUrl = config.api.BaseUrl[process.env.NODE_ENV];
  const loginUrl = config.api.LoginApp1[process.env.NODE_ENV];
  const returnUrl = `${baseUrl}${app.applicationFolder}/${app.slug}`;
  // const url = `${baseUrl}/appcentral/?returnUrl=${returnUrl}&refresh_token=${this.props.session.refresh_token}`;
  const url = `${loginUrl}?token=${thisSession.access_token}&returnUrl=${returnUrl}&refresh_token=${thisSession.refresh_token}`;
  window.location.href = url;
}

export function getNations(token) {
  return fetch(`${apiBaseUrl}/nations`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token.access_token}`,
    },
  }).then((data) => {
    if (data.ok) {
      return data.json();
    }
    return data.json()
      .then((err) => {
        throw err;
      });
  });
}

export function getStates(token) {
  return fetch(`${apiBaseUrl}/states`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token.access_token}`,
    },
  }).then((data) => {
    if (data.ok) {
      return data.json();
    }
    return data.json()
      .then((err) => {
        throw err;
      });
  });
}
