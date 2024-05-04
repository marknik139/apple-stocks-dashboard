import React from 'react';
import classes from './TabNavigation.module.scss';

interface TabNavigationProps {
    onOverviewClick: any;
    onHistoryClick: any;
    selectedTab: any;
}
const TabNavigation: React.FC<TabNavigationProps> = ({onOverviewClick, onHistoryClick, selectedTab}) => {
    return(
        <div className={classes.container}>
            <button
                onClick={onOverviewClick}
                autoFocus={true}
                className={`${selectedTab === 'overview' ? classes.onFocus: {}} ${classes.button}`}
            >
                Overview
            </button>
            <button
                className={`${selectedTab === 'history' ? classes.onFocus: {}} ${classes.button}`}
                onClick={onHistoryClick}
            >
                History
            </button>
        </div>
    );
};
export default TabNavigation;