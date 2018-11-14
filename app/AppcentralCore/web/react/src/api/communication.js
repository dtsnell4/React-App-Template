import { getQueryString } from '../lib';
const config = require('../../config.json');
const apiBaseUrl = config.api.Communication[process.env.NODE_ENV];

export function getAnnouncements(token, page = 1, pageSize = 10, sort = 'expires') {
  return fetch(`${apiBaseUrl}/instances/1/myannouncements${getQueryString({ page, pageSize, sort })}`, {
    method: 'get',
    headers: {
      Authorization: `Bearer ${token.access_token}`,
      'Content-Type': 'application/json',
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

export function getAnnouncement(token, id, read = false) {
  return fetch(`${apiBaseUrl}/instances/1/announcements/${id}${getQueryString({ read })}`, {
    method: 'get',
    headers: {
      Authorization: `Bearer ${token.access_token}`,
      'Content-Type': 'application/json',
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
