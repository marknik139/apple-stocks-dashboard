import React, {useEffect, useState} from 'react';
import TimeFilterBar from "../../components/TimeFilterBar/TimeFilterBar";
import PriceDiagram from "../../components/PriceDiagram/PriceDiagram";
import apiClient from "../../api/apiClient";
import {Ranges} from "../../interfaces/Ranges";
import TabNavigation from "../../components/TabNavigation/TabNavigation";
import HistoryTable from "../../components/HistoryTable/HistoryTable";
import PriceDataItem from "../../interfaces/PriceDataItem";
import {Tabs} from "../../interfaces/Tabs";
import {useTheme} from "../../theme/useTheme";
import classes from './MainPage.module.scss'

const MainPage: React.FC = () => {

    const {theme, toggleTheme} = useTheme();

    const [diagramData, setDiagramData] = useState<PriceDataItem[]>([]);
    const [selectedTab, setSelectedTab] = useState<Tabs>('overview');
    const [selectedRange, setSelectedRange] = useState<Ranges>('week');

    useEffect(() => {
        const refreshData = async () => {
            const {data} = await apiClient.getData(selectedRange as Ranges);
            setDiagramData(data || []);
        }
        refreshData();
    }, [selectedRange]);

    const onHistoryClick = () => {
        setSelectedTab('history');
    };
    const onOverviewClick = () => {
        setSelectedTab('overview');
    };

    return (
        <div>
            <button className={classes.button} onClick={toggleTheme}>Toggle theme</button>
            <TabNavigation onOverviewClick={onOverviewClick} onHistoryClick={onHistoryClick} selectedTab={selectedTab}/>
            <TimeFilterBar selectedRange={selectedRange} setSelectedRange={setSelectedRange}/>
            {selectedTab === 'overview' && <PriceDiagram diagramData={diagramData} selectedRange={selectedRange as Ranges}/>}
            {selectedTab === 'history' && <HistoryTable diagramData={diagramData}/>}
        </div>
    );
};

export default MainPage;