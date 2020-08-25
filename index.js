const luxon = require('luxon');

const dates = [
    ["2020-10-08 12:45:56.404100", "yyyy-MM-dd hh:mm:ss.u"],
    ["1993-03-01", "yyyy-MM-dd"]
];

const formattedDate = (date, format) => {
    return luxon.DateTime.fromFormat(date, format, { zone: "utc" }).toLocal().toFormat("dd-MM-yyyy");
};

dates.map(([date, format]) => console.log(`Convert ${date} to ${formattedDate(date, format)}`));