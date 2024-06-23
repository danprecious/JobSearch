import { SessionProvider } from "next-auth/react";
import { Children } from "react";

export default function Provider({ children }) {
  return <SessionProvider>{children}</SessionProvider>;
}
