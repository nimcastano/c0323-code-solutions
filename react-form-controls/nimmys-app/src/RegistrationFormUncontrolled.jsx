export default function RegistrationFormUncontrolled() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);

    form.reset();
  };

  return (
    <form id="form" onSubmit={handleSubmit}>
      <label>
        Username
        <input type="text" name="username"></input>
      </label>
      <label>
        Password
        <input type="text" name="password"></input>
      </label>
      <label>
        <button type="submit">Sign Up</button>
      </label>
    </form>
  );
}
