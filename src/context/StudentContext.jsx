import { createContext, useContext, useState } from "react";

export const StudentContext = createContext(null);

export function StudentProvider({ children }) {
  const [favourites, setFavourites] = useState([]);

  // Returns true if added, false if it was already a favourite (no duplicates).
  const addFavourite = (student) => {
    if (favourites.some((s) => s.id === student.id)) return false;
    setFavourites((prev) => [...prev, student]);
    return true;
  };

  const removeFavourite = (id) => {
    setFavourites((prev) => prev.filter((s) => s.id !== id));
  };

  const isFavourite = (id) => favourites.some((s) => s.id === id);

  return (
    <StudentContext.Provider
      value={{ favourites, addFavourite, removeFavourite, isFavourite }}
    >
      {children}
    </StudentContext.Provider>
  );
}

// Custom hook wrapping useContext, with a helpful error if used outside the provider.
export function useStudents() {
  const ctx = useContext(StudentContext);
  if (!ctx) throw new Error("useStudents must be used inside <StudentProvider>");
  return ctx;
}
