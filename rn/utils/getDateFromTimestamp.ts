import moment, { unix } from "moment"

export const getDateFromTimestamp = (date: any) => {
    return moment(unix(date.toString())).format("L");
}