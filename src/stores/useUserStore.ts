// useUserStore.ts
import { create } from 'zustand';
import { persist , createJSONStorage } from 'zustand/middleware';

export type UserData = {
  id: number; 
  name: string;
  email: string;
  number: string;
};

type Store = {
  users: UserData[];
  addUser: (userData: UserData) => void;
  deleteUser: (userId: number) => void;
};

export const useUserStore = create(
  persist<Store>(
    (set) => ({
      users: [],
      addUser: (userData : UserData) => {
        set((state) => ({ users: [...state.users, userData] }));
      },
      deleteUser: (userId : number) => {
        set((state) => ({
          users: state.users.filter((user : UserData) => user.id !== userId),
        }));
      },
    }),
    {
      name: 'user-store', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    },
  ),
)

export default useUserStore;
