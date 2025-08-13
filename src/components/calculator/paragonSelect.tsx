import { useState } from "react";
import { paragons } from "../../assets";
import type { Paragon } from "../../assets/paragons/interface";

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
  )
}
