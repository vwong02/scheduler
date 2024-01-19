import { useState } from "react";

export default function useVisualMode(initialMode) {
  const [ history, setHistory ] = useState([ initialMode ]);

  const transition = (newMode, isReplace = false) => {
    setHistory((prevHistory) => {
      if (isReplace) {
        return [ ...prevHistory.slice(0, -1), newMode ];
      } else {
        return [ ...prevHistory, newMode ];
      }
    });
  };

  const back = () => {
    history.length > 1 && setHistory(prev => [ ...prev.slice(0, prev.length - 1) ]);
  };

  return {
    mode: history[ history.length - 1 ],
    transition,
    back
  };
};