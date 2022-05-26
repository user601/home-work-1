import React from "react";

function FormAuth() {
  let email = "";
  let password = "";
  function formChange(event) {
    if (event.target.name === "email") {
      return (email = event.target.value);
    } else if (event.target.name === "password") {
      return (password = event.target.value);
    }
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (!email.trim() || !password.trim()) {
      alert("Enter your auth data!");
    } else {
      console.log({ email, password });
      email = "";
      password = "";
      event.target.reset();
    }
  }
  return (
    <div>
      <form className="form__wrapper" onSubmit={handleSubmit}>
        <input
          onChange={formChange}
          type="text"
          name="email"
          placeholder="E-mail"
        />
        <input
          onChange={formChange}
          type="password"
          name="password"
          placeholder="Пароль"
        />
        <button className="form__btn" type="submit">
          Войти
        </button>
      </form>
    </div>
  );
}

export default FormAuth;
