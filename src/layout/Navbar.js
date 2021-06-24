import React from "react";

import "../layout/Navbar.scss";

import NavbarLogo from "../components/NavbarLogo";
import NavbarSearch from "../components/NavbarSearch";

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavbarLogo />
      <NavbarSearch />
    </nav>
  );
}
