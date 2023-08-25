import React from "react";

type AppTitleContextType = {
  title: string;
  updateTitle: (title: string) => void;
  resetTitle: () => void;
};

const AppTitleContext = React.createContext<AppTitleContextType>({
  title: "PRINTMAN DEVICE - 123ABC",
  updateTitle: () => null,
  resetTitle: () => null,
});

type LockContextType = {
  lock: boolean;
  setLock: (lock: boolean) => void;
};

const LockContext = React.createContext<LockContextType>({
  lock: false,
  setLock: () => null,
});

export { AppTitleContext, LockContext };
