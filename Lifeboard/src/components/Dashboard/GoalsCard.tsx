import React, { useState } from 'react';

const GoalsCard = () => {
    const [goals, setGoals] = useState<string[]>([]);
    const [newGoal, setNewGoal] = useState<string>('');

    const handleAddGoal = () => {
        if (newGoal.trim()) {
            setGoals([...goals, newGoal]);
            setNewGoal('');
        }
    };

    const handleRemoveGoal = (index: number) => {
        const updatedGoals = goals.filter((_, i) => i !== index);
        setGoals(updatedGoals);
    };

    return (
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Metas</h2>
            <div className="mb-4">
                <input
                    type="text"
                    value={newGoal}
                    onChange={(e) => setNewGoal(e.target.value)}
                    placeholder="Adicionar nova meta"
                    className="border border-gray-300 rounded-md p-2 w-full"
                />
                <button
                    onClick={handleAddGoal}
                    className="bg-blue-500 text-white rounded-md p-2 mt-2"
                >
                    Adicionar
                </button>
            </div>
            <ul className="list-disc pl-5">
                {goals.map((goal, index) => (
                    <li key={index} className="flex justify-between items-center">
                        <span>{goal}</span>
                        <button
                            onClick={() => handleRemoveGoal(index)}
                            className="text-red-500"
                        >
                            Remover
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GoalsCard;