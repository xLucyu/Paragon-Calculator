import { useEffect } from "react";

export function handleClickOutsideOfComponent<T extends HTMLElement>(
  ref: React.RefObject<T>,
  onOutsideClick: () => void 
) {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) onOutsideClick();
    }
  document.addEventListener("mousedown", handleClick);
  return () => document.removeEventListener("mousedown", handleClick);
  }, [ref, onOutsideClick]); 
}
