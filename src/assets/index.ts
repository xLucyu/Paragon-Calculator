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
 } from "./paragons/static/index";


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
