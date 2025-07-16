import { useEffect } from 'react';
import { useStore } from '../store';
import SleepCard from '../components/Dashboard/SleepCard';
import MoodCard from '../components/Dashboard/MoodCard';
import GoalsCard from '../components/Dashboard/GoalsCard';
import FinanceCard from '../components/Dashboard/FinanceCard';
import WaterCard from '../components/Dashboard/WaterCard';
import WorkoutCard from '../components/Dashboard/WorkoutCard';
import Chart from '../components/Dashboard/Chart';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const Dashboard = () => {
  const { fetchData } = useStore();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <Navbar />
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <SleepCard />
          <MoodCard />
          <GoalsCard />
          <FinanceCard />
          <WaterCard />
          <WorkoutCard />
        </div>
        <div className="mt-8">
          <Chart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;