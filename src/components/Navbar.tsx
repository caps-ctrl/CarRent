import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { motion, easeInOut } from "framer-motion";
import Menu from "./Menu";

const Navbar: React.FC = () => {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <nav
      className="text-white"
      style={{
        display: "flex",
        alignItems: "center",
        height: "60px",
        background: "black",
        color: "",
        padding: "0 24px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
        position: "relative",
        zIndex: 10,
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }} className="">
        <button
          onClick={() => setShowSettings((s) => !s)}
          style={{
            background: "none",
            border: "none",
            color: "#fff",
            fontSize: "1.5rem",
            cursor: "pointer",
            marginRight: "16px",
          }}
          aria-label="Ustawienia"
        >
          <FaBars />
        </button>
        <span style={{ fontWeight: 600, fontSize: "1.2rem" }}>
          <NavLink to={"/"}>CarRent</NavLink>
        </span>
      </div>

      {/* Prawa strona navbara */}
      <div>
        <button
          style={{
            background: "#fff",
            color: "#222",
            border: "none",
            borderRadius: "6px",
            padding: "8px 20px",
            fontWeight: 600,
            fontSize: "1rem",
            cursor: "pointer",
            transition: "background 0.2s, color 0.2s",
          }}
        >
          <NavLink to={"/cars"}>Flota</NavLink>
        </button>
      </div>

      {/* Panel ustawień */}
      {
        <motion.div
          initial={{ x: -250 }}
          animate={showSettings ? { x: 0 } : { x: -250 }}
          transition={{ ease: easeInOut }}
          style={{
            position: "absolute",
            top: "60px",
            left: 0,
            width: "220px",
            background: "#333",
            color: "#fff",
            boxShadow: "2px 0 8px rgba(0,0,0,0.10)",
            padding: "24px 16px",
            zIndex: 20,
            borderTopLeftRadius: "0",
            borderTopRightRadius: "8px",
            borderBottomRightRadius: "8px",
          }}
        >
          <Menu />
        </motion.div>
      }

      <style>
        {`
          @keyframes slideIn {
            from { transform: translateX(-40px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
        `}
      </style>
    </nav>
  );
};

export default Navbar;
