import React, { useState } from 'react';

const FinanceCard = () => {
    const [income, setIncome] = useState(0);
    const [expenses, setExpenses] = useState(0);
    const [savings, setSavings] = useState(0);

    const handleIncomeChange = (e) => {
        setIncome(e.target.value);
    };

    const handleExpensesChange = (e) => {
        setExpenses(e.target.value);
    };

    const handleSavingsChange = (e) => {
        setSavings(e.target.value);
    };

    return (
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Finanças</h2>
            <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300">Renda:</label>
                <input
                    type="number"
                    value={income}
                    onChange={handleIncomeChange}
                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300">Despesas:</label>
                <input
                    type="number"
                    value={expenses}
                    onChange={handleExpensesChange}
                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300">Poupança:</label>
                <input
                    type="number"
                    value={savings}
                    onChange={handleSavingsChange}
                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                />
            </div>
            <button className="bg-blue-500 text-white p-2 rounded">Atualizar Finanças</button>
        </div>
    );
};

export default FinanceCard;