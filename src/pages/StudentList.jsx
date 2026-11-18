import { useState } from "react";
import { students } from "../data/students.js";
import { useStudents } from "../context/StudentContext.jsx";

export default function StudentList() {
  const { addFavourite, isFavourite } = useStudents();
  const [message, setMessage] = useState("");

  const handleAdd = (student) => {
    const added = addFavourite(student);
    setMessage(
      added
        ? `${student.name} added to favourites.`
        : `${student.name} is already in favourites.`
    );
  };

  return (
    <section>
      <h2>All Students</h2>
      {message && <p className="toast">{message}</p>}
      <ul className="card-list">
        {students.map((student) => {
          const fav = isFavourite(student.id);
          return (
            <li key={student.id} className="card">
              <div>
                <h3>{student.name}</h3>
                <p>Roll No: {student.rollNo}</p>
              </div>
              <button
                className={fav ? "btn btn-disabled" : "btn btn-primary"}
                onClick={() => handleAdd(student)}
                disabled={fav}
              >
                {fav ? "★ Added" : "☆ Add to Favourite"}
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
