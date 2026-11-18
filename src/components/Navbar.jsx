import { Link, useLocation } from "react-router-dom";
import { useStudents } from "../context/StudentContext.jsx";

export default function Navbar() {
  const { favourites } = useStudents();
  const { pathname } = useLocation();

  return (
    <nav className="navbar">
      <h1 className="brand">Favourite Students</h1>
      <div className="nav-links">
        <Link to="/" className={pathname === "/" ? "active" : ""}>
          Student List
        </Link>
        <Link
          to="/favourites"
          className={pathname === "/favourites" ? "active" : ""}
        >
          Favourites <span className="badge">{favourites.length}</span>
        </Link>
      </div>
    </nav>
  );
}
