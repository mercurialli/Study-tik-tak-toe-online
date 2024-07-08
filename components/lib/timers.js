import { useEffect, useState } from "react";
export function useNow(interval, enabled) {
  const [now, setNow] = useState();
  useEffect(() => {
    if (!enabled) {
      setNow(undefined);
    }
    const int = setInterval(() => {
      setNow(Date.now());
    }, interval);
    return () => {
      clearInterval(int);
    };
  }, [interval, enabled]);
  return now;
}
