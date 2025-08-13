import { useState } from "react";
import DifficultySelect from "./difficultySelect";
import ParagonSelect from "./paragonSelect";
import type { Paragon } from "../../assets/paragons/interface";

export default function Calculator() {

  const [difficultyMultiplier, setDifficultyMultiplier] = useState(1.0);
  const [selectedParagon, setSelectedParagon] = useState<Paragon | null>(null);

  const newPrice = selectedParagon ? (selectedParagon.price * difficultyMultiplier).toLocaleString() : 0; 

  return (
    <div>
      <DifficultySelect onDifficultyChange={setDifficultyMultiplier}/>
      <ParagonSelect onParagonChange={setSelectedParagon}/>
      <pre>New Price: ${newPrice} </pre>
      <pre>{JSON.stringify(selectedParagon, null, 2)}</pre>
    </div>
  )
}
