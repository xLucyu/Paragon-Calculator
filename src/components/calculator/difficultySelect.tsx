import { useState, useRef } from "react";
import { handleClickOutsideOfComponent } from "../helperFunctions/handleClick";
import { DifficultyImages } from "../../assets/difficultyImages";

interface DifficultySelectProps {
  onDifficultyChange: (value: number) => void;
}

export default function DifficultySelect({ onDifficultyChange }: DifficultySelectProps) {

  const [selectedDifficulty, setDifficulty] = useState<number | "">("");
  const [isOpen, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const difficulties = [
    { displayName: "Easy", priceModifier: 0.85, image: DifficultyImages.easy },
    { displayName: "Medium", priceModifier: 1.0, image: DifficultyImages.medium },
    { displayName: "Hard", priceModifier: 1.08, image: DifficultyImages.hard },
    { displayName: "Impoppable", priceModifier: 1.2, image: DifficultyImages.impoppable },
  ];

  const handleChange = (priceModifier: number) => {
    setDifficulty(priceModifier);
    onDifficultyChange(priceModifier);
    setOpen(false); 
  };

  handleClickOutsideOfComponent(dropdownRef, () => setOpen(false));

  // Find the currently selected difficulty
  const selected = difficulties.find((d) => d.priceModifier === selectedDifficulty);

  return (
    <div ref={dropdownRef} className="relative w-85">
      <button
        type="button"
        onClick={() => setOpen(!isOpen)}
        className="w-full flex items-center justify-between border rounded-lg px-3 py-2 bg-gray shadow-sm"
      >
        {selected ? (
          <div className="flex items-center space-x-2">
            <img src={selected.image} alt={selected.displayName} className="w-6 h-6" />
            <span>{selected.displayName}</span>
          </div>
        ) : (
          <span className="text-white">Select a Difficulty</span>
        )}
        <span className="ml-2">▼</span>
      </button>

      {isOpen && (
        <div className="absolute mt-1 w-full bg-black border rounded-lg shadow-lg z-10 max-h-60 overflow-auto">
          {difficulties.map((difficulty) => (
            <div
              key={difficulty.displayName}
              onClick={() => handleChange(difficulty.priceModifier)}
              className="flex items-center space-x-2 px-3 py-2 hover:bg-gray-200 cursor-pointer"
            >
              <img src={difficulty.image} alt={difficulty.displayName} className="w-6 h-6" />
              <span>{difficulty.displayName}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

