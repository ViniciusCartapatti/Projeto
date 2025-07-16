import React from 'react';
import { useStore } from '../store';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import FinanceCard from '../components/Dashboard/FinanceCard';

const Financas = () => {
    const { finances } = useStore(state => state);

    return (
        <div className="flex flex-col h-screen bg-gray-100 dark:bg-gray-900">
            <Navbar />
            <div className="flex flex-1">
                <Sidebar />
                <main className="flex-1 p-4">
                    <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Finanças</h1>
                    <FinanceCard finances={finances} />
                </main>
            </div>
        </div>
    );
};

export default Financas;