import moment from 'moment';

export function formatDate(timestamp) {
    return moment(timestamp).format('MMM Do YYYY');
}