import { useEffect } from 'react';
import { useStore } from '../store';
import { Navbar } from '../components/Navbar';
import { Sidebar } from '../components/Sidebar';
import { ThemeToggle } from '../components/ThemeToggle';

const Saude = () => {
  const { healthData, fetchHealthData } = useStore();

  useEffect(() => {
    fetchHealthData();
  }, [fetchHealthData]);

  return (
    <div className="flex flex-col h-screen bg-gray-100 dark:bg-gray-900">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-4">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Saúde</h1>
          {/* Aqui você pode adicionar componentes relacionados à saúde, como gráficos ou cards */}
          <div className="mt-4">
            {/* Exemplo de como você pode exibir dados de saúde */}
            <p className="text-gray-700 dark:text-gray-300">Dados de saúde do usuário:</p>
            <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded">
              {JSON.stringify(healthData, null, 2)}
            </pre>
          </div>
        </main>
      </div>
      <ThemeToggle />
    </div>
  );
};

export default Saude;