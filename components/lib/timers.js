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

export function useInterval(interval, enabled, cb) {
  useEffect(() => {
    if (!enabled) {
      return;
    }

    const int = setInterval(() => {
      cb(Date.now());
    }, interval);

    return () => {
      clearInterval(int);
    };
    //useCAllbacks
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [interval, enabled]);
}
