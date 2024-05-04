import moment from "moment/moment";

export function currentDate() {
    return moment().subtract(1, 'years').format('MM/DD/YYYY');
}

export function dateWeekAgo() {
    return moment().subtract(1, 'weeks').subtract(1, 'years').format('MM/DD/YYYY');
}

export function currentTime() {
    return moment().format('HH:mm');
}

export function timeHourAgo() {
    return moment().subtract(1, 'hours').format('HH:mm');
}

export function time5MinutesAgo() {
    return moment().subtract(5, 'minutes').format('HH:mm');
}

export function time1MinuteAgo() {
    return moment().subtract(1, 'minutes').format('HH:mm');
}