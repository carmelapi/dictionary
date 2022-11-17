import React from "react";

export function SearchWords(props) {
  const onChangeHandler = (event) => {
    props.filterSortedListWords(event.target.value);
  };

  return (
    <div>
      <input type="search" onChange={onChangeHandler}></input>
    </div>
  );
}
