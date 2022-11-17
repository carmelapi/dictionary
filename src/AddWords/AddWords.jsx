import React from "react";

export function AddWords(props) {
  const [inputSvenska, setInputSvenska] = React.useState("");
  const [inputIta, setInputIta] = React.useState("");

  const onChangeHandlerSvenska = (event) => {
    setInputSvenska(event.target.value);
  };
  const onChangeHandlerIta = (event) => {
    setInputIta(event.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (inputSvenska.length === 0 || inputIta.length === 0) {
      return alert("Non hai scritto nulla");
    }
    props.writeListWords({
      id: Date.now(),
      svenska: inputSvenska,
      ita: inputIta,
    });
    setInputSvenska("");
    setInputIta("");
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        onChange={onChangeHandlerSvenska}
        value={inputSvenska}
      ></input>
      <input type="text" onChange={onChangeHandlerIta} value={inputIta}></input>

      <button type="submit"> Add</button>
    </form>
  );
}
