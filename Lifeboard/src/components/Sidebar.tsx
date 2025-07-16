import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
    return (
        <div className="bg-gray-800 text-white w-64 h-full p-5">
            <h2 className="text-2xl font-bold mb-5">Lifeboard</h2>
            <ul className="space-y-2">
                <li>
                    <Link href="/dashboard">
                        <a className="hover:bg-gray-700 p-2 rounded">Dashboard</a>
                    </Link>
                </li>
                <li>
                    <Link href="/tarefas">
                        <a className="hover:bg-gray-700 p-2 rounded">Tarefas</a>
                    </Link>
                </li>
                <li>
                    <Link href="/financas">
                        <a className="hover:bg-gray-700 p-2 rounded">Finanças</a>
                    </Link>
                </li>
                <li>
                    <Link href="/saude">
                        <a className="hover:bg-gray-700 p-2 rounded">Saúde</a>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;