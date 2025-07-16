import React, { useState } from 'react';

const SleepCard = () => {
    const [sleepHours, setSleepHours] = useState(0);
    const [sleepQuality, setSleepQuality] = useState('');

    const handleSleepHoursChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSleepHours(Number(e.target.value));
    };

    const handleSleepQualityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSleepQuality(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Aqui você pode adicionar a lógica para salvar os dados de sono
        console.log('Horas de sono:', sleepHours, 'Qualidade do sono:', sleepQuality);
    };

    return (
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Dados de Sono</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Horas de Sono:
                    </label>
                    <input
                        type="number"
                        value={sleepHours}
                        onChange={handleSleepHoursChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                        min="0"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Qualidade do Sono:
                    </label>
                    <select
                        value={sleepQuality}
                        onChange={handleSleepQualityChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                    >
                        <option value="">Selecione</option>
                        <option value="Excelente">Excelente</option>
                        <option value="Boa">Boa</option>
                        <option value="Regular">Regular</option>
                        <option value="Ruim">Ruim</option>
                    </select>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                >
                    Atualizar Dados
                </button>
            </form>
        </div>
    );
};

export default SleepCard;