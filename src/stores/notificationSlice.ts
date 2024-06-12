import { StateCreator } from "zustand";
import { FavoritesSliceType } from "./favoritesSlice";

type Notification = {
  text: string;
  error: boolean;
  show: boolean;
};

export type NotificationSliceType = {
  notification: Notification;
  showNotification: (payload: Pick<Notification, "text" | "error">) => void;
  hideNotification: () => void;
};

export const createNotificationSlice: StateCreator<
  NotificationSliceType & FavoritesSliceType,
  [],
  [],
  NotificationSliceType
> = (set, get) => ({
  notification: {
    text: "notification",
    error: false,
    show: false,
  },
  showNotification: (payload) => {
    set((state) => ({
      ...state,
      notification: {
        text: payload.text,
        error: payload.error,
        show: true,
      },
    }));

    setTimeout(() => {
        get().hideNotification();
    }, 2000)
  },
  hideNotification: () => {
    set((state) => ({
      ...state,
      notification: {
        text: "notification",
        error: false,
        show: false,
      },
    }));
  },
});
