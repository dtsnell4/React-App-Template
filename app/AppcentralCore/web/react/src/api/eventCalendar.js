import { getQueryString } from '../lib';
const config = require('../../config.json');
const apiBaseUrl = config.api.EventCalendar[process.env.NODE_ENV];

export function getCalendars(token, instanceId) {
  return fetch(`${apiBaseUrl}/instances/${instanceId}/Calendars`, {
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

export function getCalendar(token, id, instanceId) {
  return fetch(`${apiBaseUrl}/instances/${instanceId}/Calendars/${id}`, {
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

export function saveCalendar(token, instanceId, calendar, newRecord) {
  return fetch(
    `${apiBaseUrl}/instances/${instanceId}/Calendars${newRecord ? '' : `/${calendar.Id}`}`,
    {
      method: newRecord ? 'post' : 'put',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token.access_token}`,
      },
      body: JSON.stringify(calendar),
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

export function removeCalendar(token, instanceId, calendarId) {
  return fetch(
    `${apiBaseUrl}/instances/${instanceId}/Calendars/${calendarId}`,
    {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token.access_token}`,
      },
    }
  ).then((data) => {
    if (data.ok) {
      return data.text();
    }
    return data.json()
      .then((err) => {
        throw err;
      });
  });
}

export function getCategories(token, calendarId, instanceId) {
  return fetch(
    `${apiBaseUrl}/instances/${instanceId}/Categories${getQueryString({
      calendarId,
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

export function getCategory(token, id, instanceId) {
  return fetch(`${apiBaseUrl}/instances/${instanceId}/Categories/${id}`, {
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


export function saveCategory(token, instanceId, category, newRecord) {
  return fetch(
    `${apiBaseUrl}/instances/${instanceId}/Categories${newRecord ? '' : `/${category.Id}`}`,
    {
      method: newRecord ? 'post' : 'put',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token.access_token}`,
      },
      body: JSON.stringify(category),
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


export function getEvents(token, end, start, isApproved, page, pageSize, calendar, keyword, instanceId) {
  return fetch(
    `${apiBaseUrl}/instances/${instanceId}/Events${getQueryString({
      calendar,
      end,
      isApproved,
      page,
      pageSize,
      start,
      keyword,
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

export function saveEvent(token, instanceId, event, newRecord) {
  return fetch(
    `${apiBaseUrl}/instances/${instanceId}/Events${newRecord ? '' : `/${event.eventId}`}`,
    {
      method: newRecord ? 'post' : 'put',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token.access_token}`,
      },
      body: JSON.stringify(event),
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

export function getEvent(token, instanceId, eventId) {
  return fetch(
    `${apiBaseUrl}/instances/${instanceId}/Events/${eventId}`,
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

export function removeEvent(token, instanceId, eventId) {
  return fetch(
    `${apiBaseUrl}/instances/${instanceId}/Events/${eventId}`,
    {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token.access_token}`,
      },
    }
  ).then((data) => {
    if (data.ok) {
      return data.text();
    }
    return data.json()
      .then((err) => {
        throw err;
      });
  });
}
