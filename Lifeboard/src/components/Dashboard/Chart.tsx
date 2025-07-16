import React from 'react';
import { Line } from 'react-chartjs-2';
import { ChartOptions } from 'chart.js';
import { getChartOptions } from '../../utils/chartConfig';
import { useStore } from '../../store';

export const Chart: React.FC = () => {
    const { sleepData, moodData, workoutData } = useStore(state => ({
        sleepData: state.sleepData,
        moodData: state.moodData,
        workoutData: state.workoutData,
    }));

    const data = {
        labels: sleepData.map(entry => entry.date),
        datasets: [
            {
                label: 'Sono',
                data: sleepData.map(entry => entry.hours),
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
            },
            {
                label: 'Humor',
                data: moodData.map(entry => entry.level),
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                fill: true,
            },
            {
                label: 'Treino',
                data: workoutData.map(entry => entry.minutes),
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                fill: true,
            },
        ],
    };

    const options: ChartOptions = getChartOptions();

    return (
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Gráficos de Dados Diários</h2>
            <Line data={data} options={options} />
        </div>
    );
};