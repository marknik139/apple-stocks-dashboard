import React from 'react';
import PriceDataItem from "../../interfaces/PriceDataItem";
import classes from './HistoryTable.module.scss'

const HistoryTable: React.FC<{diagramData: PriceDataItem[]}> = ({diagramData}) => {

    const calculatePersentage = (openPrice: number, closePrice: number): number => {
        return (((Number(closePrice) / Number(openPrice)) - 1) * 100).toFixed(2) as unknown as number;
    }

    return (
        <table className={classes.table}>
            <thead className={classes.header}>
            <tr className={classes.colName}>
                <th className={classes.colName}>Date</th>
                <th className={classes.colName}>High</th>
                <th className={classes.colName}>Low</th>
                <th className={classes.colName}>Open</th>
                <th className={classes.colName}>Close</th>
                <th className={classes.colName}>% Change</th>
            </tr>
            </thead>
            <tbody>
            {diagramData.map((val, key) => {
                const percent = calculatePersentage(val.Open, val.Close);
                return (
                    <tr key={key}>
                        <td className={classes.row}>{val.StartDate}</td>
                        <td className={classes.row}>{val.High}</td>
                        <td className={classes.row}>{val.Low}</td>
                        <td className={classes.row}>{val.Open}</td>
                        <td className={classes.row}>{val.Close}</td>
                        <td className={percent > 0 ? classes.positive : classes.negative}>{percent} %</td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    );
};

export default HistoryTable;