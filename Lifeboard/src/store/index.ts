import create from 'zustand';

interface UserData {
  sleep: number;
  mood: string;
  goals: string[];
  finances: number;
  waterIntake: number;
  workouts: string[];
}

interface Store {
  userData: UserData;
  updateSleep: (sleep: number) => void;
  updateMood: (mood: string) => void;
  updateGoals: (goals: string[]) => void;
  updateFinances: (finances: number) => void;
  updateWaterIntake: (water: number) => void;
  updateWorkouts: (workouts: string[]) => void;
}

export const useStore = create<Store>((set) => ({
  userData: {
    sleep: 0,
    mood: 'neutral',
    goals: [],
    finances: 0,
    waterIntake: 0,
    workouts: [],
  },
  updateSleep: (sleep) => set((state) => ({ userData: { ...state.userData, sleep } })),
  updateMood: (mood) => set((state) => ({ userData: { ...state.userData, mood } })),
  updateGoals: (goals) => set((state) => ({ userData: { ...state.userData, goals } })),
  updateFinances: (finances) => set((state) => ({ userData: { ...state.userData, finances } })),
  updateWaterIntake: (water) => set((state) => ({ userData: { ...state.userData, waterIntake: water } })),
  updateWorkouts: (workouts) => set((state) => ({ userData: { ...state.userData, workouts } })),
}));