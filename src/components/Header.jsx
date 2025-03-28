import React from "react";
import { NavBar } from "./NavBar";
import { UtilsBar } from "./UtilsBar";
import { AbsBar } from "./AbsBar";

export const Header = () => {
  return (
    <header className="container-fluid p-0 position-sticky top-0 z-3">
      <AbsBar />
      <UtilsBar />
      <NavBar />
    </header>
  );
};
