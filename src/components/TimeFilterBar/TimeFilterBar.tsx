import classes from './TimeFilterBar.module.scss';
import React, {Dispatch, SetStateAction} from "react";
import {Ranges} from "../../interfaces/Ranges";

interface TimeFilterBarProps {
    selectedRange: Ranges,
    setSelectedRange: Dispatch<SetStateAction<Ranges>>
}
const TimeFilterBar: React.FC<TimeFilterBarProps> = ({selectedRange,setSelectedRange}) => {
    return (
        <div className={classes.container}>
            <button
                className={`${classes.time} ${selectedRange === 'minute' ? classes.focus: ''}`}
                onClick={() => setSelectedRange('minute')}
            >
                1 Minute
            </button>
            <button
                className={`${classes.time} ${selectedRange === '5minutes' ? classes.focus: ''}`}
                onClick={() => setSelectedRange('5minutes')}
            >
                5 Minutes
            </button>
            <button
                className={`${classes.time} ${selectedRange === 'hour' ? classes.focus: ''}`}
                onClick={() => setSelectedRange('hour')}
            >
                1 Hour
            </button>
            <button
                className={`${classes.time} ${selectedRange === 'week' ? classes.focus: ''}`}
                onClick={() => setSelectedRange('week')}
                autoFocus={true}
            >
                1 Week
            </button>
        </div>
    );
};

export default TimeFilterBar;