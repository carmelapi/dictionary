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

  const onClick = () => {
    if (inputSvenska.length === 0 || inputIta.length === 0) {
      return alert("scem");
    }
    props.writeListWords({ svenska: inputSvenska, ita: inputIta });
  };

  return (
    <div>
      <span>{inputSvenska}</span>
      <input
        type="text"
        onChange={onChangeHandlerSvenska}
        value={inputSvenska}
      ></input>
      <input type="text" onChange={onChangeHandlerIta} value={inputIta}></input>

      <button onClick={onClick}> Add</button>
    </div>
  );
}
