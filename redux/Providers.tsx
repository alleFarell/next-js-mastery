"use client";

import { Provider } from "react-redux";
import store from "./Store";

export function Providers({ children }: any) {
  return (
    // <SessionProvider>
    <Provider store={store}>{children}</Provider>
    // </SessionProvider>
  );
}
