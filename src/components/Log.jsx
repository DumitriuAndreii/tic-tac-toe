import React from "react";

export const Log = ({ loggedTurns }) => {
  return (
    <ol id="log">
      {loggedTurns.map((turn) => 
        <li key={`${turn.square.row}${turn.square.col}`}>
          {turn.player} selected {turn.square.row},
          {turn.square.col}
        </li>
      )}
    </ol>
  );
};

