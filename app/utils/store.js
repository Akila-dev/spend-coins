import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useNotificationStore = create((set) => ({
	notifications: false,
	toggleNotifications: () =>
		set((state) => ({
			notifications: !state.notifications,
		})),
	closeNotifications: () => set({ notifications: false }),

	newNotifications: true,
	resetNewNotifications: () => set({ newNotifications: false }),
}));

export const useCoinStore = create((set) => ({
	coin: null,
	changeCoin: () => set({ coin: 1 }),
	resetCoin: () => set({ coin: null }),
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
