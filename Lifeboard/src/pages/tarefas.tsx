import React from 'react';
import { Sidebar } from '../components/Sidebar';
import { Navbar } from '../components/Navbar';

const Tarefas = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1">
                <Navbar />
                <main className="p-4">
                    <h1 className="text-2xl font-bold">Minhas Tarefas</h1>
                    {/* Aqui você pode adicionar componentes ou lógica para exibir e gerenciar tarefas */}
                </main>
            </div>
        </div>
    );
};

export default Tarefas;