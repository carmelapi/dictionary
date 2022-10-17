import React from "react";
import { AddWords } from "./AddWords/AddWords";
import "./App.css";
import { List } from "./List/List";

function App() {
  const storage = localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list") || [])
    : [];

  const [listWords, setListWords] = React.useState(storage);

  const writeListWords = (newWord) => {
    const newList = listWords.concat(newWord);
    setListWords(newList);
    localStorage.setItem("list", JSON.stringify(newList));
  };

  return (
    <div>
      <AddWords writeListWords={writeListWords}></AddWords>
      <List words={listWords}></List>
    </div>
  );
}

export default App;
