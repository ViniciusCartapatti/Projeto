export interface User {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
}

export interface DailyData {
  sleep: number; // hours
  mood: number; // scale from 1 to 10
  goals: string[];
  finances: {
    income: number;
    expenses: number;
  };
  waterIntake: number; // liters
  workout: {
    duration: number; // minutes
    type: string; // e.g., "Cardio", "Strength"
  };
}

export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
    borderColor: string;
    borderWidth: number;
  }[];
}