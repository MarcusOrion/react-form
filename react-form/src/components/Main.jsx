import { useState } from "react";
const initFieldsValues = {
  name: "",
  email: "",
  hasAccepted: false,
};

export default function ReactForm() {
  //gestisci l'iscrizione alla newsletter nascondendo il form e mostrando un messaggio di ringraziamento dopo l'invio
  const [fields, setFields] = useState(initFieldsValues);

  function handleSetFields(e) {
    const { value, name, type, checked } = e.target;

    setFields((target) => ({
      ...target,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    alert("FORM INVIATO! Grazie e alla prossima");

    setFields(initFieldsValues);
  }

  return (
    <section className="container">
      <form
        className="d-flex flex-column align-items-start"
        onSubmit={handleSubmit}
      >
        <div className="mb-3 w-100">
          <label className="form-label" htmlFor="name">
            Name
          </label>

          <input
            id="name"
            type="text"
            name="name"
            className="form-control"
            value={fields.name}
            onChange={handleSetFields}
          />
        </div>

        <div className="mb-3 w-100">
          <label className="form-label" htmlFor="email">
            Email
          </label>

          <input
            id="email"
            type="email"
            name="email"
            className="form-control"
            value={fields.email}
            onChange={handleSetFields}
          />
        </div>

        <div className="form-check mb-3">
          <input
            id="hasAccepted"
            type="checkbox"
            name="hasAccepted"
            className="form-check-input"
            checked={fields.hasAccepted}
            onChange={handleSetFields}
          />

          <label className="form-check-label" htmlFor="hasAccepted">
            Accept
          </label>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </section>
  );
}
