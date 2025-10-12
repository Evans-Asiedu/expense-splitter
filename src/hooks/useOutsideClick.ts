import { useEffect, useRef } from "react";
import type { RefObject } from "react";

function useOutsideClick<T extends HTMLElement>(
  callback: () => void
): RefObject<T> {
  const ref = useRef<T>(null!);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [callback]);

  return ref;
}

export default useOutsideClick;
