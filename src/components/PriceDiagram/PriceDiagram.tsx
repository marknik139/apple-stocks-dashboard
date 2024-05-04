import React, {useEffect, useRef} from "react";
import Chart, { ChartConfiguration } from "chart.js/auto";
import PriceDataItem from "../../interfaces/PriceDataItem";
import buildDiagramConfig from "./diagramConfig";
import {Ranges} from "../../interfaces/Ranges";

interface PriceDiagramProps {
    diagramData: PriceDataItem[];
    selectedRange: Ranges;
}
const PriceDiagram: React.FC<PriceDiagramProps> = ({ diagramData, selectedRange }) => {
    const chartRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const diagramConfig = buildDiagramConfig(diagramData) as ChartConfiguration<'line', number[], string>;
        const chart = new Chart(chartRef.current, diagramConfig);
        return () => {
            chart.destroy();
        };
    }, [diagramData]);

    return (
        <canvas ref={chartRef} />
    );
};

export default PriceDiagram;
