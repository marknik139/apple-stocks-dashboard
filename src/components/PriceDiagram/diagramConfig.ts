import { ChartConfiguration } from "chart.js/auto";
import PriceDataItem from "../../interfaces/PriceDataItem";
import moment from "moment";
import {Ranges} from "../../interfaces/Ranges";

function calculateLabels(label: Ranges, priceDataItem: PriceDataItem) {
    switch(label) {
        case 'minute':
            return priceDataItem.StartTime
            break;
        case '5minutes':
            return priceDataItem.StartTime
            break;
        case 'hour':
            return priceDataItem.StartTime
            break;
        case 'week':
            return moment(priceDataItem.Date).format('MM:DD:YYYY')
            break;
    }
}

export default function buildDiagramConfig(diagramData: PriceDataItem[]): ChartConfiguration {
    return {
        type: "line",
        data: {
            labels: diagramData.map(dataItem => calculateLabels('week' ,dataItem)),
            datasets: [
                {
                    label: '',
                    data: diagramData.map(d => d.Close),
                    fill: true,
                    borderColor: '#00BFFF',
                    borderWidth: 1,
                    tension: 0.1,
                    pointRadius: 0,
                    backgroundColor: 'rgba(173, 216, 230, 0.3)'
                },
            ],
        },
        options: {
            scales: {
                y: {
                    position: 'right'
                },
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    }
}