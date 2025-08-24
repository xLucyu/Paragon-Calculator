import { useState, useRef } from "react";
import { handleClickOutsideOfComponent } from "../helperFunctions/handleClick";
import { paragons } from "../../assets/paragons";
import type { Paragon } from "../../interfaces";

interface ParagonSelectProps {
  onParagonChange: (value: Paragon) => void;
}

export default function ParagonSelect({ onParagonChange }: ParagonSelectProps) {
  
  const [selectedParagon, setParagon] = useState<string>("");
  const [isOpen, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleChange = (index: string) => {
    setParagon(index);
    onParagonChange(paragons[index]);
    setOpen(false);
  }

  handleClickOutsideOfComponent(dropdownRef, () => setOpen(false));

  return (
    <div ref= {dropdownRef} className = "relative w-85">
      <button
        type = "button"
        onClick = {() => setOpen(!isOpen)}
        className = "w-full flex items-center justify-between border rounded-lg px-3 py-2 bg-gray shadow-sm">
        {selectedParagon ? (
          <div className = "flex items-center space-x-2">
            <img 
              src = {paragons[selectedParagon].image}
              alt = {paragons[selectedParagon].name}
              className = "w-6 h-6"
            />
            <span>{paragons[selectedParagon].name}</span>
          </div>
        ) : (
          <span className = "text-white-400">Select a Paragon</span>
        )}
        <span className = "ml-2">▼</span>
      </button>

      {isOpen && (
        <div className = "absolute mt-1 w-full bg-black border rounded-lg shadow-lg z-10 max-h-60 overflow-auto">
          {Object.entries(paragons).map(([index, paragon]) => (
            <div 
              key = {index}
              onClick = {() => handleChange(index)}
              className = "flex items-center space-x-2 px-3 py-2 hover:bg-gray-200 cursor-pointer"
            >
            <img 
              src = {paragon.image}
              alt = {paragon.name}
              className = "w-6 h-6"
            />
            <span>{paragon.name}</span>
            </div>
          ))}
      </div>
      )}
    </div>
  );
}
