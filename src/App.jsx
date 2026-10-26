
import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [student, setStudent] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    setStudent({ name, email, course });
  }

  const styles = {
    page: {
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px",
      background: "linear-gradient(135deg, #dbeafe, #ede9fe)",
      fontFamily: "Arial, sans-serif"
    },
    container: {
      width: "100%",
      maxWidth: "430px",
      padding: "30px",
      backgroundColor: "white",
      borderRadius: "16px",
      boxShadow: "0 8px 30px rgba(0,0,0,0.12)"
    },
    heading: {
      textAlign: "center",
      color: "#4338ca",
      fontSize: "27px",
      marginBottom: "25px"
    },
    label: {
      display: "block",
      marginBottom: "7px",
      color: "#334155",
      fontWeight: "bold"
    },
    input: {
      width: "100%",
      padding: "12px",
      marginBottom: "18px",
      border: "1px solid #cbd5e1",
      borderRadius: "7px",
      fontSize: "15px",
      boxSizing: "border-box"
    },
    button: {
      width: "100%",
      padding: "13px",
      backgroundColor: "#4f46e5",
      color: "white",
      border: "none",
      borderRadius: "7px",
      fontSize: "16px",
      fontWeight: "bold",
      cursor: "pointer"
    },
    details: {
      marginTop: "25px",
      padding: "18px",
      backgroundColor: "#ecfdf5",
      border: "1px solid #a7f3d0",
      borderRadius: "10px",
      overflowWrap: "anywhere"
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.heading}>
          Student Registration Form
        </h1>

        <form onSubmit={handleSubmit}>
          <label style={styles.label}>Student Name</label>
          <input
            style={styles.input}
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label style={styles.label}>Email Address</label>
          <input
            style={styles.input}
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label style={styles.label}>Course</label>
          <input
            style={styles.input}
            type="text"
            placeholder="Enter your course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            required
          />

          <button
            style={styles.button}
            type="submit"
          >
            Submit
          </button>
        </form>

        {student && (
          <div style={styles.details}>
            <h2 style={{ color: "#047857" }}>
              Student Details
            </h2>
            <p><strong>Name:</strong> {student.name}</p>
            <p><strong>Email:</strong> {student.email}</p>
            <p><strong>Course:</strong> {student.course}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
