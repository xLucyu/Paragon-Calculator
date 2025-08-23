import { useState } from "react";
import { paragons } from "../../assets/paragons";
import type { Paragon } from "../../interfaces";

interface ParagonSelectProps {
  onParagonChange: (value: Paragon) => void;
}

export default function ParagonSelect({ onParagonChange }: ParagonSelectProps) {
  
  const [ selectedParagon, setParagon ] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const paragon = event.target.value;
    setParagon(paragon);
    onParagonChange(paragons[paragon]);
  }

  return (
    <div className = "flex items-center space-x-2">
      <select value = {selectedParagon} onChange = {handleChange}> 
        <option value="" hidden>
          Select a Paragon 
        </option>
        {Object.entries(paragons).map(([index, paragon]) => (
        <option key={index} value={index}> 
          {paragon.name}
        </option>
        ))} 
      </select>

      {selectedParagon && (
        <img 
          src={paragons[selectedParagon].image}
          alt={paragons[selectedParagon].name}
          className = "w-8 h-8"
        />
      )}
    </div>
  );
}
