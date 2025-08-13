import { useState } from "react";

interface DifficultySelectProps {
  onDifficultyChange: (value: number) => void;
}

export default function DifficultySelect({ onDifficultyChange }: DifficultySelectProps) {
  
  const [selectedDifficulty, setDifficulty] = useState<number | "">("");

  const difficulties = [
    { displayName: "Easy", priceModifier: 0.85 },
    { displayName: "Medium", priceModifier: 1.00 },
    { displayName: "Hard", priceModifier: 1.08 },
    { displayName: "Impoppable", priceModifier: 1.20 }
  ];

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const priceModifier = parseFloat(event.target.value);
    setDifficulty(priceModifier);
    onDifficultyChange(priceModifier);
  }

  return (
    <select value = {selectedDifficulty} onChange = {handleChange}>
      <option value="" hidden>
        Select a Difficulty 
      </option> 
      {difficulties.map((difficulty) => (
        <option key={difficulty.displayName} value={difficulty.priceModifier}>
          {difficulty.displayName}
        </option>
      ))}
    </select>
  )
} 
