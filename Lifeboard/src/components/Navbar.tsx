import React from 'react';
import Link from 'next/link';
import { useAuth } from '../hooks/useAuth';
import ThemeToggle from './ThemeToggle';

const Navbar: React.FC = () => {
    const { user, logout } = useAuth();

    return (
        <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
            <div className="text-lg font-bold">
                <Link href="/">Lifeboard</Link>
            </div>
            <div className="flex items-center space-x-4">
                <Link href="/dashboard">Dashboard</Link>
                <Link href="/tarefas">Tarefas</Link>
                <Link href="/financas">Finanças</Link>
                <Link href="/saude">Saúde</Link>
                {user ? (
                    <>
                        <button onClick={logout} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                            Logout
                        </button>
                    </>
                ) : (
                    <Link href="/login" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Login
                    </Link>
                )}
                <ThemeToggle />
            </div>
        </nav>
    );
};

export default Navbar;