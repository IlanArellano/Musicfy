import { PropsWithChildren, useState } from "react";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";

export default function MainLayout({ children }: PropsWithChildren) {
  return <PrimeReactProvider>{children}</PrimeReactProvider>;
}
