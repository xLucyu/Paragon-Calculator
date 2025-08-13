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
import { Paragon } from "./interface";

export const paragons: Record<string, Paragon> = {
  "Ace": AceMonkey,
  "Boomerang": BoomerangMonkey,
  "Buccaneer": Buccaneer,
  "Dart": DartMonkey,
  "Engineer": Engineer,
  "Sub": MonkeySub,
  "Ninja": NinjaMonkey,
  "Spike": SpikeFactory,
  "Tack": TackShooter,
  "Wizard": WizardMonkey
};
