import React, { createContext, ReactNode, useContext } from "react";
import { Snackbar } from "@material-ui/core";
import useNotification from "../hooks/notification-hook";

const ctx = createContext({
  snackbar: {},
  notify: (message: any) => {
    alert("notify");
  },
});

type NotificationProviderProps = {
  children: ReactNode;
};

export function NotificationProvider({ children }: NotificationProviderProps) {
  const hookResult = useNotification();
  return (
    <ctx.Provider value={hookResult}>
      {children}
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        autoHideDuration={4000}
        {...hookResult.snackbar}
      />
    </ctx.Provider>
  );
}

export function useNotificationProvider() {
  return useContext(ctx);
}
