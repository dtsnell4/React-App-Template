import moment from 'moment';
import { shortDays, longDays, longMonths } from './commondateVars';
export function getDateString(date) {
  return `${shortDays[date.getDay()]}, ${longMonths[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

export function getHourString(date) {
  return `${date.getHours() > 12 ? date.getHours() - 12 : date.getHours()}:${date.getMinutes()} ${date.getHours() > 12 ? 'PM' : 'AM'}`;
}

export function getShortDateString(date) {
  return `${longDays[date.getDay()]} ${date.getDate()}, ${date.getFullYear()}`;
}

export function formatDate(date) {
  return moment(date).format('MMM D, YYYY');
}
