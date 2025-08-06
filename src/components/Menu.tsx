import { NavLink } from "react-router-dom";
const Menu = () => {
  return (
    <>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        <li>
          <button
            style={{
              background: "none",
              border: "none",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            <NavLink to={"/faq"}> FAQ</NavLink>
          </button>
        </li>
        <li>
          <button
            style={{
              background: "none",
              border: "none",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            <NavLink to={"/clientsreview"}> Clients reviews</NavLink>
          </button>
        </li>
        <li>
          <button
            style={{
              background: "none",
              border: "none",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            <NavLink to={"/contact"}> Contact</NavLink>
          </button>
        </li>
      </ul>
    </>
  );
};

export default Menu;
