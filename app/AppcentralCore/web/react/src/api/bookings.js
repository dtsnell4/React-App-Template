import { getQueryString } from '../lib';
const config = require('../../config.json');
const apiBaseUrl = config.api.Bookings[process.env.NODE_ENV];

export function getBookings(token, instanceId, bookingId, campusId, buildingId, roomId, roomCap, fromDate, toDate) {
  return fetch(
    `${apiBaseUrl}/instances/${instanceId}/booking${getQueryString({
      type: 'Room',
      bookingId,
      campusId,
      buildingId,
      roomId,
      roomCap,
      fromDate,
      toDate,
    })}`
    , {
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

export function getSlots(token, instanceId, campusId, buildingId, roomId, fromDate, toDate) {
  return fetch(
    `${apiBaseUrl}/instances/${instanceId}/booking/slots${getQueryString({
      type: 'room',
      campusId,
      buildingId,
      roomId,
      fromDate,
      toDate,
    })}`
    , {
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

export function checkIn(token, instanceId, id) {
  return fetch(
    `${apiBaseUrl}/instances/${instanceId}/booking/checkIn${getQueryString({ id })}`,
    {
      method: 'put',
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

export function checkOut(token, instanceId, id) {
  return fetch(
    `${apiBaseUrl}/instances/${instanceId}/booking/checkOut${getQueryString({ id })}`,
    {
      method: 'put',
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

export function saveBooking(token, instanceId, booking) {
  return fetch(
    `${apiBaseUrl}/instances/${instanceId}/booking${booking.id ? '/reschedule' : ''}${getQueryString({ bookingType: 'Room' })}`,
    {
      method: booking.id ? 'put' : 'post',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token.access_token}`,
      },
      body: JSON.stringify(booking),
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

export function deleteBooking(token, instanceId, id) {
  return fetch(
    `${apiBaseUrl}/instances/${instanceId}/booking${getQueryString({ id })}`,
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
