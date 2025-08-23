import { useState } from "react";
import DifficultySelect from "./difficultySelect";
import ParagonSelect from "./paragonSelect";
import PriceFields from "./inputFields";
import type { Paragon } from "../../interfaces";

export function Calculator() {

  const [difficultyMultiplier, setDifficultyMultiplier] = useState(1.0);
  const [selectedParagon, setSelectedParagon] = useState<Paragon | null>(null);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <DifficultySelect onDifficultyChange={setDifficultyMultiplier}/>
      <ParagonSelect onParagonChange={setSelectedParagon}/>
      <PriceFields difficultyMultiplier={difficultyMultiplier} selectedParagon={selectedParagon}/>
      <pre>{JSON.stringify(selectedParagon, null, 2)}</pre>
    </div>
  )
}
