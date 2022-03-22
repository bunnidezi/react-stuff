import React, { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({
    username: "",
    language: "VI",
    email: "tuan@gmail.com",
    emailConfirm: "tuan@gmail.com",
    isBot: true,
  });
  const [error, setError] = useState({
    missing: "missing",
    isEmailMatch: true,
  });
  const [loginSucces, setLoginSucces] = useState(false);
  const validateForm = () => {
    setError({
      missing: "missing",
      isEmailMatch: true,
    });
    Object.keys(formData).forEach((field) => {
      if (!formData[field]) {
        setError((error) => {
          return { ...error, missing: error.missing + " " + field };
        });
      }
    });
    if (formData.email !== formData.emailConfirm) {
      setError((error) => {
        return { ...error, isEmailMatch: false };
      });
    }

    if (error.missing === "missing" && error.isEmailMatch === true) {
      setLoginSucces(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();
  };
  const handleLogout = (e) => {
    e.preventDefault();
    setLoginSucces(false);
  };

  const handleChange = (e) => {
    const field = e.target.name;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({ ...formData, [field]: value });
  };

  return (
    <div
      className="App container"
      style={{ border: "1px solid black", padding: "1em" }}
    >
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">User</label>
          <input
            id="username"
            name="username"
            type="text"
            autoComplete="off"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="off"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="emailConfirm">Confirm email</label>
          <input
            id="emailConfirm"
            name="emailConfirm"
            type="email"
            autoComplete="off"
            value={formData.emailConfirm}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="language">Language</label>
          <select
            name="language"
            value={formData.language}
            onChange={handleChange}
          >
            <option value="EN">EN</option>
            <option value="VI">VI</option>
            <option value="DE">DE</option>
          </select>
        </div>
        <div>
          <label htmlFor="isBot">Are you not a bot?</label>
          <input
            id="isBot"
            name="isBot"
            type="checkbox"
            checked={formData.isBot}
            onChange={handleChange}
          />
        </div>
        {loginSucces ? (
          <div>
            <h1>loginSucces</h1>
            <button onClick={handleLogout}>Log out</button>
          </div>
        ) : (
          <button type="submit">Submit</button>
        )}
        <p id="error">{error.missing === "missing" ? "" : error.missing}</p>
        <p id="error">{error.isEmailMatch ? "" : "Email not match"}</p>
      </form>
    </div>
  );
};

export default App;
