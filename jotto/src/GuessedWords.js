import React from 'react';
import PropTypes from 'prop-types';

const GuessedWords = (props) => {
  let contents
  if(props.guessedWords.length === 0) {
    contents = (
      <span className="guess-instructions">
        Try to guess the secret word!
      </span>
    )
  } else {
    const guessedWordsRows = props.guessedWords.map((word, index) => (
      <tr className="guessed-word" key={index}>
        <td>{word.guessedWord}</td>
        <td>{word.letterMatchCount}</td>
      </tr>
    ));
    contents = (
      <div className="guessed-words">
        <h2>GuessedWords</h2>
        <table className="table table-sm">
          <thead className="thead-light">
            <tr><th>Guess</th><th>Matching Letters</th></tr>
          </thead>
          <tbody>
            { guessedWordsRows}
          </tbody>
        </table>
      </div>
    )
  }
  return (
    <div className="component-guessed-words">
      { contents }
    </div>
  );
};

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWords: PropTypes.string,
      letterMatchCount: PropTypes.number
    })
  ).isRequired,
};

export default GuessedWords;
