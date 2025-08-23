import { useState } from "react";
import type { PowerFactors, Paragon } from "../../interfaces";

interface PriceFieldsProps {
    selectedParagon: Paragon | null;
    difficultyMultiplier: number;
}

interface Input {
  key: string;
  displayName: string;
  max: number;
}

export default function PriceFields({ selectedParagon, difficultyMultiplier }: PriceFieldsProps) {
  
    const currentPrice = selectedParagon ? selectedParagon.price * difficultyMultiplier : 0;
    const [factors, setFactors] = useState<PowerFactors>({
        totems: 0,
        pops: 0,
        cashGenerated: 0,
        cashSpent: 0, 
        upgrades: 0,
        coopUpgrades: 0,
        cashSlider: 0
    });

    const priceFactors: Input[] = [
        { key: "totems", displayName: "Geraldo Totems", max: 100 },
        { key: "pops", displayName: "Pops", max: 16_200_000 },
        { key: "cashGenerated", displayName: "Cash Generated", max: 90000 },
        { key: "cashSpent", displayName: "Cash Spent", max: currentPrice * 3},
        { key: "upgrades", displayName: "Upgrades", max: 100 },
        { key: "coopUpgrades", displayName: "Tier 5 Upgrades", max: 9},
        { key: "cashSlider", displayName: "Cash Slider", max: currentPrice * 3.15}
    ];
    
    const handleChange = (factor: Input, value: number) => {
        const clampedValue = Math.min(Math.max(value, 0), factor.max);
        setFactors((prev) => ({
        ...prev,
        [factor.key]: clampedValue,
        }));
    };

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {priceFactors.map((factor) => (
        <div
          key={factor.key}
          style={{
            display: "flex",
            flexDirection: "column",
            minWidth: "150px"
          }}
        >
          <div style={{ marginBottom: "4px", fontWeight: "bold" }}>
            {factor.displayName}
          </div>
          <input
            type="number"
            value={factors[factor.key as keyof PowerFactors]}
            onChange={(e) => handleChange(factor, Number(e.target.value))}
            min={0}
            max={factor.max}
            style={{
              padding: "4px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              marginBottom: "4px"
            }}
          />

          <span style={{ fontSize: "0.9em", color: "#555" }}>
            Max: {factor.max.toLocaleString()}
          </span>
        </div>
      ))}
    </div>
  );
}
