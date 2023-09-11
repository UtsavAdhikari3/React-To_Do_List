import { useState, useEffect } from "react";

//Custom Hook for dealing with localstorage
function useLocalStorage(key, initial) {
  const [localValue, setLocalValue] = useState(() => {
    try {
      const stored = window.localStorage.getItem(key);
      return stored ? JSON.parse(stored) : initial;
    } catch (error) {
      console.log(error);
      return initial;
    }
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(localValue));
  }, [localValue]);

  return [localValue, setLocalValue];
}

export default useLocalStorage;
