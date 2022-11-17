import React from "react";
import { AddWords } from "./AddWords/AddWords";
import "./App.css";
import { List } from "./List/List";
import { SearchWords } from "./SearchWords/SearchWords";

function App() {
  const storage = localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list") || [])
    : [];

  const [listWords, setListWords] = React.useState(storage);
  const [searchTerm, setSearchTerm] = React.useState("");

  const writeListWords = (newWord) => {
    const newList = listWords.concat(newWord);
    setListWords(newList);
    localStorage.setItem("list", JSON.stringify(newList));
  };

  const sortedListWords = listWords.sort((a, b) => {
    if (a.svenska < b.svenska) {
      return -1;
    } else if (a.svenska === b.svenska) {
      return 0;
    } else {
      return 1;
    }
  });

  let filteredlistWords = sortedListWords;

  if (searchTerm !== "") {
    filteredlistWords = sortedListWords.filter((wordObject) => {
      if (wordObject.svenska.includes(searchTerm)) {
        return true;
      } else {
        return false;
      }
    });
  }

  const filterSortedListWords = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  console.log("sortedListWords", sortedListWords, listWords);

  const deleteWord = (idToDelete) => {
    const listWithoutId = listWords.filter((wordObject) => {
      if (wordObject.id === idToDelete) {
        return false;
      } else {
        return true;
      }
    });
    setListWords(listWithoutId);
    localStorage.setItem("list", JSON.stringify(listWithoutId));
  };

  return (
    <div>
      <AddWords writeListWords={writeListWords} />
      <List words={filteredlistWords} deleteWord={deleteWord} />
      <SearchWords filterSortedListWords={filterSortedListWords} />
    </div>
  );
}

export default App;
