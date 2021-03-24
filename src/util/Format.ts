import moment from 'moment';

export function formatDate(timestamp : string) {
    return moment(timestamp).format('MMM Do YYYY');
}