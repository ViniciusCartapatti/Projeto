import React, { useState } from 'react';

const MoodCard = () => {
    const [mood, setMood] = useState('😊'); // Estado para armazenar o humor do usuário

    const handleMoodChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setMood(event.target.value); // Atualiza o estado com o novo humor selecionado
    };

    return (
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Humor</h2>
            <select value={mood} onChange={handleMoodChange} className="mt-2 p-2 border rounded">
                <option value="😊">Feliz</option>
                <option value="😐">Neutro</option>
                <option value="😢">Triste</option>
                <option value="😠">Irritado</option>
            </select>
            <p className="mt-4 text-gray-600 dark:text-gray-400">Seu humor atual: {mood}</p>
        </div>
    );
};

export default MoodCard;