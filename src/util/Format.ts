import moment from 'moment';

export function formatDate(timestamp : string) {
    return moment(parseInt(timestamp, 10)).format('MMM Do YYYY');
}