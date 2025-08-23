import { 
    AceMonkey, 
    BoomerangMonkey,
    Buccaneer,
    DartMonkey,
    Engineer,
    MonkeySub,
    NinjaMonkey,
    SpikeFactory,
    TackShooter,
    WizardMonkey
 } from "./static/index";
import type { Paragon } from "../../interfaces/paragon";

export const paragons: Record<string, Paragon> = {
  "Dart": DartMonkey,
  "Tack": TackShooter,
  "Boomerang": BoomerangMonkey,
  "Buccaneer": Buccaneer,
  "Sub": MonkeySub,
  "Ace": AceMonkey,
  "Ninja": NinjaMonkey,
  "Wizard": WizardMonkey,
  "Engineer": Engineer,
  "Spike": SpikeFactory
};
