import React, { useState } from 'react';

const WorkoutCard = () => {
    const [workoutData, setWorkoutData] = useState({
        type: '',
        duration: '',
        caloriesBurned: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setWorkoutData({
            ...workoutData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você pode adicionar a lógica para salvar os dados de treino
        console.log('Dados de treino atualizados:', workoutData);
    };

    return (
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Dados de Treino</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 dark:text-gray-300" htmlFor="type">
                        Tipo de Exercício
                    </label>
                    <input
                        type="text"
                        name="type"
                        id="type"
                        value={workoutData.type}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 dark:text-gray-300" htmlFor="duration">
                        Duração (minutos)
                    </label>
                    <input
                        type="number"
                        name="duration"
                        id="duration"
                        value={workoutData.duration}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 dark:text-gray-300" htmlFor="caloriesBurned">
                        Calorias Queimadas
                    </label>
                    <input
                        type="number"
                        name="caloriesBurned"
                        id="caloriesBurned"
                        value={workoutData.caloriesBurned}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                        required
                    />
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

export default WorkoutCard;