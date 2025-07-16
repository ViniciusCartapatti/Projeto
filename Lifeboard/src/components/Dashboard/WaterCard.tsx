import React, { useState } from 'react';

export const WaterCard = () => {
    const [waterIntake, setWaterIntake] = useState(0);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setWaterIntake(Number(event.target.value));
    };

    return (
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Água Bebida</h2>
            <p className="text-gray-600 dark:text-gray-400">Quantidade de água (em litros):</p>
            <input
                type="number"
                value={waterIntake}
                onChange={handleInputChange}
                className="mt-2 p-2 border border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                placeholder="Digite a quantidade"
            />
            <p className="mt-4 text-gray-800 dark:text-gray-200">Você bebeu: {waterIntake} L</p>
        </div>
    );
};