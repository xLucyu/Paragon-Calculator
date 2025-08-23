import type { PowerFactors } from "../../interfaces/powerFactors";
import { paragonLevels } from "../paragons/paragonLevels";

interface ParagonLevel {
    degree: number;
    power: number;
}

export function calculateParagonPower(factors: PowerFactors, currentParagonPrice: number): ParagonLevel {
     
    let currentPower = 0;
    
    // instead of this plan is to only update the stat that's currently being touched

    currentPower += Math.min(200_000, factors.totems * 2_000);
    currentPower += Math.min(90_000, factors.pops / 180 + factors.cashGenerated / 45);
    currentPower += Math.min(60_000, factors.cashSpent * (currentParagonPrice / 20_000));
    currentPower += Math.min(10_000, factors.upgrades * 100);
    currentPower += Math.min(50_000, factors.coopUpgrades * 6_000);
    currentPower += Math.min(60_000, factors.cashSlider * (currentParagonPrice*1.05/20_000));

    return [...paragonLevels].reverse().find(level => level.power <= currentPower) || paragonLevels[0];
}
