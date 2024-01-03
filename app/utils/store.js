import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useNetworkStore = create((set) => ({
	network: null,
	changeNetwork: () => set({ network: 1 }),

	showPopup: false,
	toggleShowPopup: () => set((state) => ({ showPopup: !state.showPopup })),
	closeShowPopup: () => set((state) => ({ showPopup: false })),
}));

export const useAccountStore = create((set) => ({
	showPopup: false,
	toggleShowPopup: () => set((state) => ({ showPopup: !state.showPopup })),
	closeShowPopup: () => set((state) => ({ showPopup: false })),
}));

export const useBalanceStore = create((set) => ({
	balance: 0,
	isvisible: true,
	toggleIsVisible: () =>
		set((state) => ({
			isvisible: !state.isvisible,
		})),
	// showBalance: () => set({ isvisible: true }),
}));
