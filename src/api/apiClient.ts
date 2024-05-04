import axios, {AxiosInstance} from 'axios';
import {Ranges} from '../interfaces/Ranges';
import {currentDate, currentTime, time1MinuteAgo, timeHourAgo, time5MinutesAgo, dateWeekAgo} from "../utils/utils";

class apiClient {
    private instance: AxiosInstance;

    constructor() {
        this.instance = axios.create({
            baseURL: "https://test.fxempire.com",
        });
    }

    // I've found some problems with api, for some reason it doesn't work with current year (2024)
    // and returns an empty array in some cases, when time range is around 1 or 5 minutes
    // As I understood, it takes timerange in this format: MM/DD/YYYY and optional %HH:MM (20 is unicode space symbol)
    // Please write if I'm right or not

    // REAL FUNCTIONS (AS I GOT, IT SHOULD WORKS LIKE THIS)
    // ↓

    // async getDataBy1Minute() {
    //     const endpoint = `/api/v1/en/stocks/chart/candles?Identifier=AAPL.XNAS&IdentifierType=Symbol&AdjustmentMethod=All&IncludeExtended=False&period=1&Precision=Seconds&StartTime=${currentDate()}%20${time1MinuteAgo()}&EndTime=${currentDate()}%20${currentTime()}&_fields=ChartBars.StartDate,ChartBars.High,ChartBars.Low,ChartBars.StartTime,ChartBars.Open,ChartBars.Close,ChartBars.Volume`;
    //     return this.instance.get(endpoint);
    // }

    // async getDataBy5Minutes() {
    //     const endpoint = `/api/v1/en/stocks/chart/candles?Identifier=AAPL.XNAS&IdentifierType=Symbol&AdjustmentMethod=All&IncludeExtended=False&period=1&Precision=Minutes&StartTime=${currentDate()}%20${time5MinutesAgo()}&EndTime=${currentDate()}%20${currentTime()}&_fields=ChartBars.StartDate,ChartBars.High,ChartBars.Low,ChartBars.StartTime,ChartBars.Open,ChartBars.Close,ChartBars.Volume`;
    //     return this.instance.get(endpoint);
    //}

    // async getDataBy1Hour() {
    //     const endpoint = `/api/v1/en/stocks/chart/candles?Identifier=AAPL.XNAS&IdentifierType=Symbol&AdjustmentMethod=All&IncludeExtended=False&period=5&Precision=Minutes&StartTime=${currentDate()}%20${timeHourAgo()}&EndTime=${currentDate()}%20${currentTime()}&_fields=ChartBars.StartDate,ChartBars.High,ChartBars.Low,ChartBars.StartTime,ChartBars.Open,ChartBars.Close,ChartBars.Volume`;
    //     return this.instance.get(endpoint);
    // }

    // async getDataBy1Week() {
    //     const endpoint = `/api/v1/en/stocks/chart/candles?Identifier=AAPL.XNAS&IdentifierType=Symbol&AdjustmentMethod=All&IncludeExtended=False&period=24&Precision=Hours&StartTime=${dateWeekAgo()}&EndTime=${currentDate()}&_fields=ChartBars.StartDate,ChartBars.High,ChartBars.Low,ChartBars.StartTime,ChartBars.Open,ChartBars.Close,ChartBars.Volume`;
    //     return this.instance.get(endpoint);
    // }



    // FAKE FUNCTIONS WITH PREDEFINED DATA
    //↓
    async getDataBy1Minute() {
        const endpoint = `/api/v1/en/stocks/chart/candles?Identifier=AAPL.XNAS&IdentifierType=Symbol&AdjustmentMethod=All&IncludeExtended=False&period=1&Precision=Seconds&StartTime=05/04/2023%2015:50&EndTime=05/04/2023%2015:51&_fields=ChartBars.StartDate,ChartBars.High,ChartBars.Low,ChartBars.StartTime,ChartBars.Open,ChartBars.Close,ChartBars.Volume`;
        return this.instance.get(endpoint);
    }
    async getDataBy5Minutes() {
        const endpoint = `https://test.fxempire.com/api/v1/en/stocks/chart/candles?Identifier=AAPL.XNAS&IdentifierType=Symbol&AdjustmentMethod=All&IncludeExtended=False&period=1&Precision=Minutes&StartTime=05/04/2023%2015:50&EndTime=05/04/2023%2015:59&_fields=ChartBars.StartDate,ChartBars.High,ChartBars.Low,ChartBars.StartTime,ChartBars.Open,ChartBars.Close,ChartBars.Volume`;
        return this.instance.get(endpoint);
    }
    async getDataBy1Hour() {
        const endpoint = `/api/v1/en/stocks/chart/candles?Identifier=AAPL.XNAS&IdentifierType=Symbol&AdjustmentMethod=All&IncludeExtended=False&period=5&Precision=Minutes&StartTime=05/04/2023%2015:50&EndTime=05/04/2023%2016:50&_fields=ChartBars.StartDate,ChartBars.High,ChartBars.Low,ChartBars.StartTime,ChartBars.Open,ChartBars.Close,ChartBars.Volume`;
        return this.instance.get(endpoint);
    }
    async getDataBy1Week() {
        const endpoint = `/api/v1/en/stocks/chart/candles?Identifier=AAPL.XNAS&IdentifierType=Symbol&AdjustmentMethod=All&IncludeExtended=False&period=24&Precision=Hours&StartTime=04/27/2023&EndTime=05/04/2023&_fields=ChartBars.StartDate,ChartBars.High,ChartBars.Low,ChartBars.StartTime,ChartBars.Open,ChartBars.Close,ChartBars.Volume`;
        return this.instance.get(endpoint);
    }


    async getData(range: Ranges) {
        switch (range) {
            case 'minute':
                return this.getDataBy1Minute();
                break;
            case '5minutes':
                return this.getDataBy5Minutes();
                break;
            case 'hour':
                return this.getDataBy1Hour()
                break;
            case 'week':
                return this.getDataBy1Week()
                break;
        }
    }
}

export default new apiClient();