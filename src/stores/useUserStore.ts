import {create} from 'zustand';

export type UserData = {
  name: string;
  email: string;
  number: string;
};

type Store = {
  user: UserData;
  setUser: (userData: Partial<UserData>) => void;
};

const useUserStore = create<Store>((set) => ({
  user: {
    name: '',
    email: '',
    number: '',
  },
  setUser: (userData) => set((state) => ({ user: { ...state.user, ...userData } })),
}));

export default useUserStore;