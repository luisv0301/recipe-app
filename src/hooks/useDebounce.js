import { useEffect, useState } from "react";

export default function UseDebounce(value, delay) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debounced;
}
