import { create } from 'zustand';

const useUserStore = create((set) => ({
  // Initial state as an empty object to allow flexible keys
  user: {},
  isSeller : false,

  // Action to set the entire user object (with any keys)
  setUser: (userData) => set({ user: userData }),
  setIsSeller: (Isseller) => set({ Isseller }),

  // Action to update/add individual fields dynamically
  updateUserField: (field, value) => set((state) => ({
    user: {
      ...state.user,
      [field]: value, // Dynamically update/add the field
    },
  })),

  // Action to reset user object (optional, can reset to an empty object or initial values)
  resetUser: () => set({ user: {} }),
}));

export default useUserStore;
