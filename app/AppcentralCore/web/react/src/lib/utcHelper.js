import moment from 'moment';

export function convertToUTC(date) {
  return moment.utc(date).format();
}
export function convertFromUTC(date) {
  return moment(date).local().format();
}
