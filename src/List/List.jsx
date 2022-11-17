import React from "react";
import styles from "./List.module.scss";

export function List(props) {
  const words = props.words;

  const onClick = (id) => {
    props.deleteWord(id);
  };

  const wordsComponent = words.map((word, index) => {
    return (
      <tr key={index}>
        <td>
          <button onClick={() => onClick(word.id)}>x</button>
        </td>
        <td className={styles.svenskaword}>{word.svenska}</td>
        <td>{word.ita}</td>
      </tr>
    );
  });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th> Svenska</th>
            <th> Italiano</th>
          </tr>
        </thead>
        <tbody>{wordsComponent}</tbody>
      </table>
    </div>
  );
}
