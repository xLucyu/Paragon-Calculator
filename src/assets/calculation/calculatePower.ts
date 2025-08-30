import type { PowerFactors, Input } from "../../interfaces";
import { paragonLevels } from "../paragons/paragonLevels";

interface ParagonLevel {
    degree: number;
    power: number;
}

export function calculateParagonPower(currentParagonPrice: number, currentPower: number): ParagonLevel {
     
    // instead of this plan is to only update the stat that's currently being touched
  /*
    currentPower += Math.min(200_000, factor.totems * 2_000);
    currentPower += Math.min(90_000, factor.pops / 180 + factor.cashGenerated / 45);
    currentPower += Math.min(60_000, factor.cashSpent * (currentParagonPrice / 20_000));
    currentPower += Math.min(10_000, factor.upgrades * 100);
    currentPower += Math.min(50_000, factor.coopUpgrades * 6_000);
    currentPower += Math.min(60_000, factor.cashSlider * (currentParagonPrice*1.05/20_000));

    return [...paragonLevels].reverse().find(level => level.power <= currentPower) || paragonLevels[0];
    */
}
