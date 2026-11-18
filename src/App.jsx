import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import StudentList from "./pages/StudentList.jsx";
import Favourites from "./pages/Favourites.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<StudentList />} />
          <Route path="/favourites" element={<Favourites />} />
          {/* Unknown URLs go home instead of rendering a blank page */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </>
  );
}
